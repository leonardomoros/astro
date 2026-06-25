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

  const fecha = new Date().toLocaleDateString('es-MX', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  const body = {
    parent: { database_id: dbId },
    properties: {
      Name: {
        title: [{ text: { content: lead.name ?? 'Sin nombre' } }],
      },
    },
    // Put all other data in the page body as rich text
    children: [
      paragraph(`📧 Email: ${lead.email ?? '—'}`),
      paragraph(`🛠 Servicio: ${lead.service ?? '—'}`),
      paragraph(`🏢 Empresa: ${lead.company ?? '—'}`),
      paragraph(`📍 Fuente: ${lead.source ?? 'Web Chat'}`),
      paragraph(`📅 Fecha: ${fecha}`),
      ...(lead.notes ? [paragraph(`📝 Notas: ${lead.notes}`)] : []),
    ],
  };

  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('[notion] API error:', err);
    throw new Error(err);
  }

  const data = await res.json() as { id: string };
  return data.id;
}

function paragraph(text: string) {
  return {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      rich_text: [{ type: 'text', text: { content: text } }],
    },
  };
}
