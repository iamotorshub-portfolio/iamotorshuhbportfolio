#!/usr/bin/env python3
"""
Script para extraer información de contacto de URLs de inmobiliarias.
Extrae: emails, WhatsApp, Instagram, web oficial.
"""

import argparse
import csv
import logging
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import Dict, List, Optional, Set
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeout

# Configuración de logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('extract_emails.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

# Configuración
MAX_WORKERS = 3
TIMEOUT = 20
MAX_RETRIES = 2
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

# Regex para emails
EMAIL_REGEX = re.compile(
    r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
    re.IGNORECASE
)

# Patrones para filtrar emails no válidos
INVALID_EMAIL_PATTERNS = [
    r'\.png$', r'\.jpg$', r'\.jpeg$', r'\.gif$', r'\.svg$',
    r'example\.com$', r'test\.com$', r'@sentry', r'@2x'
]


class ContactExtractor:
    """Extractor de información de contacto de sitios web."""

    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({'User-Agent': USER_AGENT})

    def is_valid_email(self, email: str) -> bool:
        """Valida si un email es real y no una URL o archivo."""
        email = email.lower()
        for pattern in INVALID_EMAIL_PATTERNS:
            if re.search(pattern, email):
                return False
        return True

    def extract_emails(self, html: str, base_url: str) -> Set[str]:
        """Extrae emails del HTML usando regex y enlaces mailto:."""
        emails = set()

        # Regex en texto plano
        found_emails = EMAIL_REGEX.findall(html)
        for email in found_emails:
            if self.is_valid_email(email):
                emails.add(email.lower())

        # Enlaces mailto:
        soup = BeautifulSoup(html, 'html.parser')
        for link in soup.find_all('a', href=True):
            href = link['href']
            if href.startswith('mailto:'):
                email = href.replace('mailto:', '').split('?')[0].strip()
                if EMAIL_REGEX.match(email) and self.is_valid_email(email):
                    emails.add(email.lower())

        return emails

    def extract_whatsapp(self, html: str) -> Optional[str]:
        """Extrae el primer enlace de WhatsApp encontrado."""
        soup = BeautifulSoup(html, 'html.parser')

        # Buscar en enlaces
        for link in soup.find_all('a', href=True):
            href = link['href']
            if 'wa.me' in href or 'api.whatsapp.com' in href:
                return href

        # Buscar en texto con regex
        wa_patterns = [
            r'https?://(?:wa\.me|api\.whatsapp\.com)/[0-9]+',
            r'https?://web\.whatsapp\.com/send\?phone=[0-9]+'
        ]
        for pattern in wa_patterns:
            match = re.search(pattern, html)
            if match:
                return match.group(0)

        return None

    def extract_instagram(self, html: str) -> Optional[str]:
        """Extrae el perfil de Instagram oficial."""
        soup = BeautifulSoup(html, 'html.parser')

        # Buscar en enlaces
        for link in soup.find_all('a', href=True):
            href = link['href']
            if 'instagram.com/' in href:
                # Limpiar el URL
                match = re.search(r'instagram\.com/([a-zA-Z0-9._]+)', href)
                if match:
                    username = match.group(1).rstrip('/')
                    return f'https://www.instagram.com/{username}'

        return None

    def is_portal(self, url: str) -> bool:
        """Detecta si la URL es un portal de inmobiliarias."""
        portales = [
            'mercadolibre', 'zonaprop', 'argenprop', 'properati',
            'inmuebles24', 'tokko', 'navent', 'portal', 'clasificados'
        ]
        url_lower = url.lower()
        return any(portal in url_lower for portal in portales)

    def extract_web_oficial(self, html: str, base_url: str) -> Optional[str]:
        """
        Si la URL original es un portal, busca el link externo
        a la web oficial de la inmobiliaria.
        """
        if not self.is_portal(base_url):
            return None

        soup = BeautifulSoup(html, 'html.parser')
        portal_domain = urlparse(base_url).netloc

        # Buscar enlaces externos
        for link in soup.find_all('a', href=True):
            href = link['href']
            full_url = urljoin(base_url, href)
            parsed = urlparse(full_url)

            # Filtrar enlaces que parezcan web oficial
            if (parsed.netloc and
                parsed.netloc != portal_domain and
                not any(x in parsed.netloc for x in ['facebook', 'instagram', 'twitter', 'youtube', 'whatsapp', 'google'])):

                # Buscar indicadores de web oficial
                link_text = link.get_text().lower()
                if any(word in link_text for word in ['web', 'sitio', 'oficial', 'visitar']):
                    return full_url

        return None

    def fetch_with_requests(self, url: str) -> Optional[str]:
        """Intenta obtener el HTML con requests."""
        for attempt in range(MAX_RETRIES + 1):
            try:
                logger.debug(f"Requests attempt {attempt + 1} for {url}")
                response = self.session.get(url, timeout=TIMEOUT, allow_redirects=True)
                response.raise_for_status()
                return response.text
            except Exception as e:
                logger.debug(f"Requests failed for {url}: {e}")
                if attempt < MAX_RETRIES:
                    time.sleep(1)
                continue
        return None

    def fetch_with_playwright(self, url: str) -> Optional[str]:
        """Fallback con Playwright para sitios que requieren JS."""
        try:
            logger.debug(f"Using Playwright for {url}")
            with sync_playwright() as p:
                browser = p.chromium.launch(headless=True)
                context = browser.new_context(
                    user_agent=USER_AGENT,
                    viewport={'width': 1920, 'height': 1080}
                )
                page = context.new_page()
                page.goto(url, timeout=TIMEOUT * 1000, wait_until='domcontentloaded')
                html = page.content()
                browser.close()
                return html
        except PlaywrightTimeout:
            logger.warning(f"Playwright timeout for {url}")
            return None
        except Exception as e:
            logger.warning(f"Playwright failed for {url}: {e}")
            return None

    def process_url(self, url: str) -> Dict[str, any]:
        """Procesa una URL y extrae toda la información."""
        result = {
            'web_oficial': '',
            'emails_detectados': '',
            'email_principal': '',
            'whatsapp_url': '',
            'ig_oficial': '',
            'estado': 'error',
            'error': ''
        }

        if not url or not url.startswith('http'):
            result['error'] = 'URL inválida'
            return result

        try:
            # Intentar con requests primero
            html = self.fetch_with_requests(url)

            # Fallback a Playwright si falla
            if not html:
                html = self.fetch_with_playwright(url)

            if not html:
                result['error'] = 'No se pudo obtener el contenido'
                return result

            # Extraer información
            emails = self.extract_emails(html, url)
            result['emails_detectados'] = ';'.join(sorted(emails))
            result['email_principal'] = sorted(emails)[0] if emails else ''

            result['whatsapp_url'] = self.extract_whatsapp(html) or ''
            result['ig_oficial'] = self.extract_instagram(html) or ''
            result['web_oficial'] = self.extract_web_oficial(html, url) or ''

            result['estado'] = 'ok'
            logger.info(f"✓ Procesado: {url} - Emails: {len(emails)}")

        except Exception as e:
            result['error'] = str(e)
            logger.error(f"✗ Error procesando {url}: {e}")

        return result


def find_url_column(headers: List[str]) -> Optional[str]:
    """Encuentra la columna que contiene URLs."""
    url_candidates = ['url', 'website', 'web', 'sitio', 'link', 'pagina']
    headers_lower = [h.lower() for h in headers]

    for candidate in url_candidates:
        if candidate in headers_lower:
            idx = headers_lower.index(candidate)
            return headers[idx]

    return None


def process_csv(input_file: str, output_file: str):
    """Procesa el CSV de entrada y genera el CSV enriquecido."""

    # Leer CSV
    logger.info(f"Leyendo {input_file}...")
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            rows = list(reader)
            headers = reader.fieldnames
    except Exception as e:
        logger.error(f"Error leyendo CSV: {e}")
        sys.exit(1)

    if not rows:
        logger.error("El CSV está vacío")
        sys.exit(1)

    # Encontrar columna de URL
    url_column = find_url_column(headers)
    if not url_column:
        logger.error(f"No se encontró columna de URL. Columnas disponibles: {headers}")
        sys.exit(1)

    logger.info(f"Usando columna '{url_column}' para URLs")
    logger.info(f"Total de filas: {len(rows)}")

    # Nuevas columnas
    new_columns = ['web_oficial', 'emails_detectados', 'email_principal',
                   'whatsapp_url', 'ig_oficial', 'estado', 'error']

    output_headers = list(headers) + new_columns

    # Procesar con concurrencia
    extractor = ContactExtractor()
    results = []
    stats = {'ok': 0, 'error': 0}

    logger.info(f"Procesando con {MAX_WORKERS} workers...")

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        # Enviar tareas
        future_to_row = {
            executor.submit(extractor.process_url, row[url_column]): row
            for row in rows
        }

        # Procesar resultados
        for i, future in enumerate(as_completed(future_to_row), 1):
            row = future_to_row[future]
            try:
                result = future.result()

                # Agregar resultado a la fila original
                enriched_row = row.copy()
                enriched_row.update(result)
                results.append(enriched_row)

                if result['estado'] == 'ok':
                    stats['ok'] += 1
                else:
                    stats['error'] += 1

                # Progreso
                logger.info(f"Progreso: {i}/{len(rows)} | OK: {stats['ok']} | Error: {stats['error']}")

            except Exception as e:
                logger.error(f"Error en future: {e}")
                enriched_row = row.copy()
                enriched_row.update({
                    'web_oficial': '', 'emails_detectados': '', 'email_principal': '',
                    'whatsapp_url': '', 'ig_oficial': '', 'estado': 'error', 'error': str(e)
                })
                results.append(enriched_row)
                stats['error'] += 1

    # Escribir CSV de salida
    logger.info(f"Escribiendo resultados en {output_file}...")
    try:
        with open(output_file, 'w', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=output_headers)
            writer.writeheader()
            writer.writerows(results)
        logger.info(f"✓ CSV generado exitosamente")
    except Exception as e:
        logger.error(f"Error escribiendo CSV: {e}")
        sys.exit(1)

    # Resumen final
    logger.info("=" * 60)
    logger.info("RESUMEN FINAL")
    logger.info("=" * 60)
    logger.info(f"Total procesadas: {len(rows)}")
    logger.info(f"Exitosas (OK): {stats['ok']}")
    logger.info(f"Con error: {stats['error']}")
    logger.info(f"Tasa de éxito: {stats['ok']/len(rows)*100:.1f}%")
    logger.info("=" * 60)


def main():
    parser = argparse.ArgumentParser(
        description='Extrae información de contacto de URLs de inmobiliarias'
    )
    parser.add_argument(
        '--input',
        required=True,
        help='Archivo CSV de entrada'
    )
    parser.add_argument(
        '--output',
        required=True,
        help='Archivo CSV de salida enriquecido'
    )

    args = parser.parse_args()

    logger.info("Iniciando extracción de contactos...")
    start_time = time.time()

    process_csv(args.input, args.output)

    elapsed = time.time() - start_time
    logger.info(f"Tiempo total: {elapsed:.2f} segundos")


if __name__ == '__main__':
    main()
