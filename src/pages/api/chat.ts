import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

export const prerender = false;

const client = new Anthropic({
  apiKey: import.meta.env.ANTHROPIC_API_KEY ?? process.env.ANTHROPIC_API_KEY,
});

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
2. Cuando alguien muestra interés en un servicio, cualificarlo como lead de manera natural
3. Recopilar esta información de forma conversacional (no como un formulario):
   - Nombre
   - Email
   - Qué servicio(s) necesita
   - Nombre de su negocio o empresa
4. Una vez que tengas los 4 datos, confirma que el equipo se pondrá en contacto e incluye este bloque EXACTO al FINAL de tu respuesta (sin espacios extra):
   [LEAD:{"name":"<nombre>","email":"<email>","service":"<servicio>","company":"<empresa>"}]

REGLAS IMPORTANTES:
- Responde SIEMPRE en el mismo idioma que usa el usuario (español o inglés)
- Sé amigable, profesional y conciso (máximo 3-4 oraciones por respuesta)
- No seas insistente — deja que la conversación fluya naturalmente
- Si preguntan por precios, menciona que los paquetes comienzan desde $500 y varían según el alcance del proyecto; recomienda siempre la consulta gratuita
- La consulta gratuita está en: https://calendly.com/gixlabprojects/30min
- NUNCA inventes datos del usuario — solo incluye el bloque [LEAD:...] cuando el usuario te haya dado los 4 datos explícitamente`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const POST: APIRoute = async ({ request }) => {
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

    // Extract lead data if present
    const leadMatch = fullText.match(/\[LEAD:(\{.*?\})\]/s);
    let lead = null;
    let messageText = fullText;

    if (leadMatch) {
      try {
        lead = JSON.parse(leadMatch[1]);
      } catch { /* ignore malformed JSON */ }
      messageText = fullText.replace(/\s*\[LEAD:\{.*?\}\]/s, '').trim();
    }

    return new Response(JSON.stringify({ message: messageText, lead }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Anthropic API error:', error);
    return new Response(JSON.stringify({ error: 'Error connecting to AI' }), { status: 500 });
  }
};
