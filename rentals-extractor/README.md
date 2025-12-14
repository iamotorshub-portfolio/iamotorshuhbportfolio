# Extractor de Contactos de Inmobiliarias

Script Python para extraer información de contacto (emails, WhatsApp, Instagram) desde URLs de inmobiliarias en un archivo CSV.

## Características

- **Extracción múltiple**: Emails, WhatsApp, Instagram, y web oficial
- **Doble estrategia**: Requests (rápido) con fallback a Playwright (sitios JS)
- **Concurrencia**: Procesa 3 URLs simultáneamente
- **Robusto**: Reintentos automáticos y manejo de errores
- **Logging completo**: Progreso en tiempo real y archivo de log

## Instalación

### 1. Crear entorno virtual

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 2. Instalar dependencias

```bash
pip install -r requirements.txt
```

### 3. Instalar navegadores de Playwright

```bash
playwright install chromium
```

## Uso

### Comando básico

```bash
python extract_emails.py --input inmobiliarias_bb_con_emails.csv --output inmobiliarias_bb_enriquecido.csv
```

### Parámetros

- `--input`: Archivo CSV de entrada (debe contener una columna con URLs)
- `--output`: Archivo CSV de salida enriquecido

## Formato del CSV de entrada

El script detecta automáticamente la columna de URLs buscando nombres como:
- `url`
- `website`
- `web`
- `sitio`
- `link`

## Columnas agregadas al CSV de salida

1. **web_oficial**: URL de la web oficial (si la URL original es un portal)
2. **emails_detectados**: Todos los emails encontrados (separados por `;`)
3. **email_principal**: El primer email encontrado
4. **whatsapp_url**: Enlace de WhatsApp (wa.me o api.whatsapp.com)
5. **ig_oficial**: Perfil de Instagram
6. **estado**: `ok` si se procesó correctamente, `error` si falló
7. **error**: Mensaje de error (si aplica)

## Configuración

Puedes modificar estos parámetros en el código:

```python
MAX_WORKERS = 3      # Concurrencia (URLs procesadas simultáneamente)
TIMEOUT = 20         # Timeout en segundos por request
MAX_RETRIES = 2      # Número de reintentos
```

## Logs

- **Consola**: Progreso en tiempo real
- **Archivo**: `extract_emails.log` con detalles completos

## Ejemplo de salida

```
2024-01-15 10:30:45 - INFO - Leyendo inmobiliarias_bb_con_emails.csv...
2024-01-15 10:30:45 - INFO - Usando columna 'url' para URLs
2024-01-15 10:30:45 - INFO - Total de filas: 50
2024-01-15 10:30:45 - INFO - Procesando con 3 workers...
2024-01-15 10:30:48 - INFO - ✓ Procesado: https://ejemplo.com - Emails: 2
2024-01-15 10:30:48 - INFO - Progreso: 1/50 | OK: 1 | Error: 0
...
============================================================
RESUMEN FINAL
============================================================
Total procesadas: 50
Exitosas (OK): 45
Con error: 5
Tasa de éxito: 90.0%
============================================================
```

## Notas

- El script **no se detiene** si una URL falla; continúa con las demás
- Los emails duplicados se eliminan automáticamente
- Se filtran emails inválidos (imágenes, ejemplos, etc.)
- Funciona con portales como MercadoLibre, ZonaProp, ArgenProp, etc.

## Solución de problemas

### Error de Playwright

Si obtienes errores de Playwright, asegúrate de instalar los navegadores:

```bash
playwright install chromium
```

### Timeout frecuente

Aumenta el `TIMEOUT` en el script si las URLs son muy lentas.

### Sin columna URL

Verifica que tu CSV tenga una columna con nombre similar a: url, website, web, sitio, link.

## Licencia

Uso libre para proyectos personales y comerciales.
