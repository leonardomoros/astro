import { Client } from '@notionhq/client';

export interface LeadData {
  name?: string;
  email?: string;
  service?: string;
  company?: string;
  source?: string;
  notes?: string;
}

export async function createLeadInNotion(lead: LeadData): Promise<string | null> {
  const apiKey = (import.meta.env.NOTION_API_KEY as string | undefined) ?? process.env.NOTION_API_KEY;
  const dbId = (import.meta.env.NOTION_DATABASE_ID as string | undefined) ?? process.env.NOTION_DATABASE_ID;

  if (!apiKey || !dbId) {
    console.error('[notion] Missing NOTION_API_KEY or NOTION_DATABASE_ID');
    return null;
  }

  const notion = new Client({ auth: apiKey });

  try {
    const page = await notion.pages.create({
      parent: { database_id: dbId },
      properties: {
        // Title field — must match the actual "Title" column name in your DB
        Nombre: {
          title: [{ text: { content: lead.name ?? 'Sin nombre' } }],
        },
        Email: {
          email: lead.email ?? null,
        },
        Servicio: {
          select: lead.service ? { name: lead.service } : undefined,
        },
        Empresa: {
          rich_text: [{ text: { content: lead.company ?? '' } }],
        },
        Estado: {
          select: { name: 'Nuevo' },
        },
        Fuente: {
          select: { name: lead.source ?? 'Web Chat' },
        },
        Notas: {
          rich_text: [{ text: { content: lead.notes ?? '' } }],
        },
        Fecha: {
          date: { start: new Date().toISOString().split('T')[0] },
        },
      },
    });

    return page.id;
  } catch (err) {
    console.error('[notion] Failed to create lead:', err);
    throw err;
  }
}
