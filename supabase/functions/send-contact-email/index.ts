import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  contactType: "call" | "meeting";
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  preferredTime?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();

    const contactTypeText = data.contactType === "call" 
      ? "Solicitud de Llamada" 
      : "Videollamada Agendada";

    // Email to client (confirmation)
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%);
              padding: 40px;
              text-align: center;
            }
            .logo {
              max-width: 200px;
              height: auto;
            }
            .content {
              padding: 40px;
            }
            .title {
              color: #1e293b;
              font-size: 24px;
              font-weight: bold;
              margin: 0 0 20px 0;
            }
            .text {
              color: #475569;
              font-size: 16px;
              margin: 16px 0;
            }
            .info-box {
              background: #f8fafc;
              border-left: 4px solid #0EA5E9;
              padding: 20px;
              margin: 24px 0;
              border-radius: 8px;
            }
            .info-label {
              color: #64748b;
              font-size: 12px;
              text-transform: uppercase;
              font-weight: 600;
              letter-spacing: 0.5px;
              margin-bottom: 4px;
            }
            .info-value {
              color: #1e293b;
              font-size: 16px;
              font-weight: 500;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%);
              color: #ffffff;
              text-decoration: none;
              padding: 16px 32px;
              border-radius: 8px;
              font-weight: 600;
              margin: 24px 0;
              text-align: center;
            }
            .footer {
              background: #f8fafc;
              padding: 30px 40px;
              text-align: center;
              border-top: 1px solid #e2e8f0;
            }
            .footer-text {
              color: #64748b;
              font-size: 14px;
              margin: 8px 0;
            }
            .social-links {
              margin: 20px 0;
            }
            .social-link {
              display: inline-block;
              margin: 0 8px;
              color: #0EA5E9;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://iamotorshub.com/logo-ia-motorshub.png" alt="IA MotorsHub" class="logo" />
            </div>
            
            <div class="content">
              <h1 class="title">¡Gracias por contactarnos, ${data.name}!</h1>
              
              <p class="text">
                Hemos recibido tu solicitud de <strong>${contactTypeText}</strong> y estamos emocionados de ayudarte a transformar tu negocio con IA.
              </p>

              <div class="info-box">
                <div style="margin-bottom: 16px;">
                  <div class="info-label">Servicio de Interés</div>
                  <div class="info-value">${data.service}</div>
                </div>
                ${data.company ? `
                <div style="margin-bottom: 16px;">
                  <div class="info-label">Empresa</div>
                  <div class="info-value">${data.company}</div>
                </div>
                ` : ''}
                ${data.preferredTime ? `
                <div style="margin-bottom: 16px;">
                  <div class="info-label">Horario Preferido</div>
                  <div class="info-value">${data.preferredTime === 'morning' ? 'Mañana (9-12hs)' : data.preferredTime === 'afternoon' ? 'Tarde (14-18hs)' : 'Noche (18-20hs)'}</div>
                </div>
                ` : ''}
              </div>

              ${data.contactType === "call" ? `
                <p class="text">
                  <strong>Próximos pasos:</strong><br>
                  Te contactaremos por teléfono al <strong>${data.phone}</strong> en las próximas 24 horas.
                </p>
              ` : `
                <p class="text">
                  <strong>Próximos pasos:</strong><br>
                  Revisá tu email para recibir el link de confirmación de tu videollamada de 20 minutos. También podés agendar directamente:
                </p>
                <center>
                  <a href="https://calendly.com/franco-iamotorshub/30min" class="cta-button">
                    Agendar en Calendly
                  </a>
                </center>
              `}

              <p class="text">
                Mientras tanto, te invitamos a explorar más sobre nuestros servicios en nuestro sitio web.
              </p>
            </div>

            <div class="footer">
              <p class="footer-text"><strong>IA MotorsHub</strong></p>
              <p class="footer-text">Transformando negocios con Inteligencia Artificial</p>
              
              <div class="social-links">
                <a href="https://wa.me/5492915206692" class="social-link">WhatsApp</a> •
                <a href="https://instagram.com/iamotorshub" class="social-link">Instagram</a> •
                <a href="https://linkedin.com/company/iamotorshub" class="social-link">LinkedIn</a>
              </div>
              
              <p class="footer-text" style="margin-top: 20px;">
                📧 contacto@iamotorshub.com<br>
                📱 +54 9 291 520-6692<br>
                🌐 www.iamotorshub.com
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email to IA MotorsHub (notification)
    const notificationEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%);
              padding: 30px;
              text-align: center;
              color: white;
            }
            .content {
              padding: 40px;
            }
            .title {
              color: #1e293b;
              font-size: 24px;
              font-weight: bold;
              margin: 0 0 20px 0;
            }
            .info-row {
              display: flex;
              padding: 12px 0;
              border-bottom: 1px solid #e2e8f0;
            }
            .info-label {
              color: #64748b;
              font-weight: 600;
              min-width: 150px;
            }
            .info-value {
              color: #1e293b;
            }
            .message-box {
              background: #f8fafc;
              padding: 20px;
              margin: 24px 0;
              border-radius: 8px;
              border-left: 4px solid #0EA5E9;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🔔 Nueva Consulta</h1>
              <p style="margin: 8px 0 0 0; opacity: 0.9;">${contactTypeText}</p>
            </div>
            
            <div class="content">
              <h2 class="title">Información del Cliente</h2>
              
              <div class="info-row">
                <div class="info-label">Nombre:</div>
                <div class="info-value">${data.name}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              <div class="info-row">
                <div class="info-label">Teléfono:</div>
                <div class="info-value"><a href="https://wa.me/${data.phone.replace(/\D/g, '')}">${data.phone}</a></div>
              </div>
              
              ${data.company ? `
              <div class="info-row">
                <div class="info-label">Empresa:</div>
                <div class="info-value">${data.company}</div>
              </div>
              ` : ''}
              
              <div class="info-row">
                <div class="info-label">Servicio:</div>
                <div class="info-value">${data.service}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">Tipo de Contacto:</div>
                <div class="info-value">${data.contactType === "call" ? "Solicita que lo llamen" : "Agendar videollamada de 20 min"}</div>
              </div>
              
              ${data.preferredTime ? `
              <div class="info-row">
                <div class="info-label">Horario Preferido:</div>
                <div class="info-value">${data.preferredTime === 'morning' ? 'Mañana (9-12hs)' : data.preferredTime === 'afternoon' ? 'Tarde (14-18hs)' : 'Noche (18-20hs)'}</div>
              </div>
              ` : ''}

              ${data.message ? `
              <div class="message-box">
                <strong>Mensaje:</strong><br>
                ${data.message}
              </div>
              ` : ''}
            </div>
          </div>
        </body>
      </html>
    `;

    // Send confirmation email to client
    const clientEmail = await resend.emails.send({
      from: "IA MotorsHub <contacto@iamotorshub.com>",
      to: [data.email],
      subject: `✅ Confirmación: ${contactTypeText} - IA MotorsHub`,
      html: clientEmailHtml,
    });

    // Send notification email to IA MotorsHub
    const notificationEmail = await resend.emails.send({
      from: "IA MotorsHub <contacto@iamotorshub.com>",
      to: ["contacto@iamotorshub.com"],
      subject: `🔔 Nueva Consulta: ${contactTypeText} - ${data.name}`,
      html: notificationEmailHtml,
    });

    console.log("Emails sent successfully:", { clientEmail, notificationEmail });

    return new Response(
      JSON.stringify({ 
        success: true,
        clientEmail,
        notificationEmail 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
