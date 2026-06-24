import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const { nombre, apellido, email, tieneWeb, urlWeb, servicio, presupuesto, mensaje, lang } = body;

  if (!nombre || !email || !servicio || !mensaje) {
    return new Response(JSON.stringify({ error: 'Campos requeridos faltantes' }), { status: 400 });
  }

  const isEs = lang !== 'en';
  const websiteInfo = tieneWeb === 'si'
    ? `Sí — ${urlWeb || 'no especificó URL'}`
    : 'No';

  try {
    await resend.emails.send({
      from:    'Gixlabs Contacto <noreply@gixlabs.com>',
      to:      ['hola@gixlabs.com'],
      replyTo: email,
      subject: `Nuevo contacto: ${servicio} — ${nombre} ${apellido}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#a855f7">Nuevo mensaje de contacto</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px 0;color:#6b7280;width:160px">Nombre</td><td style="padding:8px 0;font-weight:600">${nombre} ${apellido}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Sitio web</td><td style="padding:8px 0">${websiteInfo}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Servicio</td><td style="padding:8px 0;font-weight:600">${servicio}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Presupuesto</td><td style="padding:8px 0">${presupuesto}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px">
            <p style="color:#374151;margin:0;white-space:pre-wrap">${mensaje}</p>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from:    'Gixlabs <hola@gixlabs.com>',
      to:      [email],
      subject: isEs
        ? '¡Recibimos tu mensaje! — Gixlabs'
        : 'We received your message! — Gixlabs',
      html: isEs ? `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#a855f7">¡Hola, ${nombre}!</h2>
          <p>Recibimos tu mensaje y te responderemos en menos de 24 horas con los próximos pasos.</p>
          <p>Mientras tanto, puedes agendar tu sesión estratégica gratuita aquí:</p>
          <a href="https://cal.com/gixlabs" style="display:inline-block;margin:8px 0;padding:12px 24px;background:linear-gradient(to right,#a855f7,#7c3aed);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">
            Agendar llamada →
          </a>
          <p style="color:#6b7280;font-size:14px">El equipo de Gixlabs</p>
        </div>
      ` : `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#a855f7">Hello, ${nombre}!</h2>
          <p>We received your message and will get back to you within 24 hours with next steps.</p>
          <p>In the meantime, you can book your free strategy session here:</p>
          <a href="https://cal.com/gixlabs" style="display:inline-block;margin:8px 0;padding:12px 24px;background:linear-gradient(to right,#a855f7,#7c3aed);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">
            Book a call →
          </a>
          <p style="color:#6b7280;font-size:14px">The Gixlabs team</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), { status: 500 });
  }
};
