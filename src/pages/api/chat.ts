import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';
import { createLeadInNotion } from '../../lib/notion';

export const prerender = false;


const SYSTEM_PROMPT = `Eres Gixy, el asistente virtual de GixLabs — una agencia digital especializada en ayudar a negocios a crecer en línea.

GixLabs ofrece:
• Desarrollo Web: Sitios modernos y rápidos con React, Next.js, Astro, WordPress, Shopify
• Estrategia SEO: Posicionamiento orgánico en Google para atraer clientes reales
• Landing Pages: Páginas de alta conversión para campañas publicitarias
• Email Marketing: Secuencias automatizadas que nutren y convierten leads
• Publicidad Pagada: Campañas de Google Ads y Meta Ads con ROI medible
• Optimización Web: Mejoras de velocidad y Core Web Vitals
• Diseño UX/UI: Interfaces centradas en el usuario que convierten

TU OBJETIVO:
1. Responder preguntas sobre los servicios de GixLabs de forma amigable y concisa
2. Cuando alguien muestra interés en un servicio o pide más información, responde con entusiasmo y al final incluye el tag [FORM] para mostrar un formulario de contacto.
   Ejemplo: "¡Genial! Puedo conectarte con nuestro equipo para darte más detalles. Completa este formulario y te contactamos en menos de 24 horas: [FORM]"
3. Cuando el usuario envíe sus datos del formulario (aparecerán en formato estructurado), confirma la recepción con un mensaje cálido e incluye al final:
   [LEAD:{"name":"<nombre>","email":"<email>","service":"<servicio>","company":"<empresa>"}]

REGLAS IMPORTANTES:
- Responde SIEMPRE en el mismo idioma que usa el usuario (español o inglés)
- Sé amigable, profesional y conciso (máximo 3-4 oraciones por respuesta)
- Muestra el formulario ([FORM]) cuando el usuario exprese interés, NO preguntes los datos uno por uno
- Si preguntan por precios, menciona que los paquetes comienzan desde $500 y varían según el alcance del proyecto; recomienda siempre la consulta gratuita
- La consulta gratuita está en: https://calendly.com/gixlabprojects/30min
- NUNCA inventes datos del usuario`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const POST: APIRoute = async ({ request }) => {
  // Resolve key at request time so runtime env vars are available
  const apiKey = (import.meta.env.ANTHROPIC_API_KEY as string | undefined)
    ?? process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error('[chat] ANTHROPIC_API_KEY not set');
    return new Response(
      JSON.stringify({ message: 'El chat no está disponible en este momento. Contáctanos en hola@gixlabs.com' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const client = new Anthropic({ apiKey });

  let body: { messages: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const { messages } = body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'No messages provided' }), { status: 400 });
  }

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: messages.map(m => ({ role: m.role, content: m.content })),
    });

    const fullText = response.content[0].type === 'text' ? response.content[0].text : '';

    let messageText = fullText;
    let lead = null;
    let showForm = false;

    // Detect [FORM] tag
    if (messageText.includes('[FORM]')) {
      showForm = true;
      messageText = messageText.replace('[FORM]', '').trim();
    }

    // Extract [LEAD:{...}] tag and push to Notion
    const leadMatch = messageText.match(/\[LEAD:(\{.*?\})\]/s);
    if (leadMatch) {
      try {
        lead = JSON.parse(leadMatch[1]);
        // Fire-and-forget: don't block the response
        createLeadInNotion(lead).catch(e => console.error('[chat] Notion push failed:', e));
      } catch { /* ignore malformed JSON */ }
      messageText = messageText.replace(/\s*\[LEAD:\{.*?\}\]/s, '').trim();
    }

    return new Response(JSON.stringify({ message: messageText, lead, showForm }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[chat] Anthropic error:', msg);
    return new Response(
      JSON.stringify({ message: `Hubo un problema técnico (${msg.slice(0, 80)}). Inténtalo de nuevo.` }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
