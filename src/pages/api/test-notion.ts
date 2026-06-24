import type { APIRoute } from 'astro';
import { createLeadInNotion } from '../../lib/notion';

export const prerender = false;

export const GET: APIRoute = async () => {
  const apiKey = (import.meta.env.NOTION_API_KEY as string | undefined) ?? process.env.NOTION_API_KEY;
  const dbId = (import.meta.env.NOTION_DATABASE_ID as string | undefined) ?? process.env.NOTION_DATABASE_ID;

  if (!apiKey || !dbId) {
    return new Response(JSON.stringify({
      ok: false,
      NOTION_API_KEY: apiKey ? 'SET' : 'MISSING',
      NOTION_DATABASE_ID: dbId ? 'SET' : 'MISSING',
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const pageId = await createLeadInNotion({
      name: 'Test Lead',
      email: 'test@gixlabs.com',
      service: 'Desarrollo Web',
      company: 'Empresa Test',
    });

    return new Response(JSON.stringify({
      ok: true,
      pageId,
      NOTION_DATABASE_ID: dbId,
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({
      ok: false,
      error: err instanceof Error ? err.message : String(err),
      NOTION_DATABASE_ID: dbId,
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }
};
