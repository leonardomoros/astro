import { Client } from '@notionhq/client';

const notion = new Client({
  auth: (import.meta.env.NOTION_API_KEY as string | undefined) ?? process.env.NOTION_API_KEY,
});

const DB_ID = (import.meta.env.NOTION_DATABASE_ID as string | undefined) ?? process.env.NOTION_DATABASE_ID ?? '';

export interface LeadData {
  name?: string;
  email?: string;
  service?: string;
  company?: string;
  source?: string;
  notes?: string;
}

export async function createLeadInNotion(lead: LeadData): Promise<string | null> {
  if (!DB_ID) {
    console.error('[notion] NOTION_DATABASE_ID not set');
    return null;
  }

  try {
    const page = await notion.pages.create({
      parent: { database_id: DB_ID },
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
