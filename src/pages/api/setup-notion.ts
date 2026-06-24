import type { APIRoute } from 'astro';
import { Client } from '@notionhq/client';

export const prerender = false;

const GIXLAB_PAGE_ID = '23ac6074dd038000b806da0d3d20248d';

export const GET: APIRoute = async () => {
  const apiKey = (import.meta.env.NOTION_API_KEY as string | undefined) ?? process.env.NOTION_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ ok: false, error: 'NOTION_API_KEY not set' }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  }

  const notion = new Client({ auth: apiKey });

  try {
    const db = await notion.databases.create({
      parent: { type: 'page_id', page_id: GIXLAB_PAGE_ID },
      title: [{ type: 'text', text: { content: 'CRM - Leads' } }],
      properties: {
        Nombre: { title: {} },
        Email: { email: {} },
        Servicio: {
          select: {
            options: [
              { name: 'Desarrollo Web', color: 'blue' },
              { name: 'Estrategia SEO', color: 'green' },
              { name: 'Landing Pages', color: 'orange' },
              { name: 'Email Marketing', color: 'yellow' },
              { name: 'Publicidad Pagada', color: 'red' },
              { name: 'Optimización Web', color: 'purple' },
              { name: 'Diseño UX/UI', color: 'pink' },
              { name: 'Otro', color: 'gray' },
            ],
          },
        },
        Empresa: { rich_text: {} },
        Estado: {
          select: {
            options: [
              { name: 'Nuevo', color: 'blue' },
              { name: 'Contactado', color: 'yellow' },
              { name: 'En negociación', color: 'orange' },
              { name: 'Cerrado', color: 'green' },
              { name: 'No interesado', color: 'red' },
            ],
          },
        },
        Fuente: {
          select: {
            options: [
              { name: 'Web Chat', color: 'purple' },
              { name: 'Formulario', color: 'blue' },
              { name: 'Referido', color: 'green' },
            ],
          },
        },
        Notas: { rich_text: {} },
        Fecha: { date: {} },
      },
    });

    return new Response(JSON.stringify({
      ok: true,
      database_id: db.id,
      message: `Base de datos creada. Actualiza NOTION_DATABASE_ID en Vercel con: ${db.id}`,
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (err) {
    return new Response(JSON.stringify({
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }
};
