import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const apiKey = (import.meta.env.NOTION_API_KEY as string | undefined) ?? process.env.NOTION_API_KEY;
  const dbId = (import.meta.env.NOTION_DATABASE_ID as string | undefined) ?? process.env.NOTION_DATABASE_ID;

  if (!apiKey || !dbId) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing env vars' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  const res = await fetch(`https://api.notion.com/v1/databases/${dbId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      properties: {
        Email:    { email: {} },
        Servicio: { select: { options: [
          { name: 'Desarrollo Web',   color: 'blue'   },
          { name: 'Estrategia SEO',   color: 'green'  },
          { name: 'Landing Pages',    color: 'orange' },
          { name: 'Email Marketing',  color: 'yellow' },
          { name: 'Publicidad Pagada',color: 'red'    },
          { name: 'Optimización Web', color: 'purple' },
          { name: 'Diseño UX/UI',     color: 'pink'   },
          { name: 'Otro',             color: 'gray'   },
        ]}},
        Empresa:  { rich_text: {} },
        Estado:   { select: { options: [
          { name: 'Nuevo',           color: 'blue'   },
          { name: 'Contactado',      color: 'yellow' },
          { name: 'En negociación',  color: 'orange' },
          { name: 'Cerrado',         color: 'green'  },
          { name: 'No interesado',   color: 'red'    },
        ]}},
        Fuente:   { select: { options: [
          { name: 'Web Chat',  color: 'purple' },
          { name: 'Formulario',color: 'blue'   },
          { name: 'Referido',  color: 'green'  },
        ]}},
        Fecha:    { date: {} },
      },
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    return new Response(JSON.stringify({ ok: false, error: data }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  const props = Object.keys((data as { properties: Record<string, unknown> }).properties);
  return new Response(JSON.stringify({ ok: true, properties: props }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
