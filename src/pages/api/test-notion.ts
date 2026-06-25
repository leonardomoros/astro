import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const apiKey = (import.meta.env.NOTION_API_KEY as string | undefined) ?? process.env.NOTION_API_KEY;
  const dbId = (import.meta.env.NOTION_DATABASE_ID as string | undefined) ?? process.env.NOTION_DATABASE_ID;

  if (!apiKey || !dbId) {
    return new Response(JSON.stringify({ ok: false, NOTION_API_KEY: apiKey ? 'SET' : 'MISSING', NOTION_DATABASE_ID: dbId ?? 'MISSING' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  // Fetch the actual database to see real property names
  const dbRes = await fetch(`https://api.notion.com/v1/databases/${dbId}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Notion-Version': '2022-06-28',
    },
  });

  const dbData = await dbRes.json() as Record<string, unknown>;

  if (!dbRes.ok) {
    return new Response(JSON.stringify({ ok: false, error: dbData }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  const properties = dbData.properties as Record<string, { type: string }>;
  const propSummary = Object.entries(properties).map(([name, val]) => ({ name, type: val.type }));

  return new Response(JSON.stringify({ ok: true, properties: propSummary, NOTION_DATABASE_ID: dbId }),
    { status: 200, headers: { 'Content-Type': 'application/json' } });
};
