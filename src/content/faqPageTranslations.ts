export interface FaqCategory {
  id: string;
  label: string;
  questions: { question: string; answer: string }[];
}

export interface FaqPageTranslations {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    noResults: string;
  };
  allLabel: string;
  categories: FaqCategory[];
  cta: { title: string; subtitle: string; button: string };
}

export const faqPageTranslations: Record<'es' | 'en', FaqPageTranslations> = {
  es: {
    meta: {
      title: 'Preguntas Frecuentes | Gixlabs',
      description: 'Respuestas a las dudas más comunes sobre nuestros servicios, precios, proceso de trabajo y resultados. ¿No encuentras tu pregunta? Escríbenos.',
    },
    hero: {
      eyebrow: 'Centro de ayuda',
      title: 'Preguntas frecuentes',
      subtitle: 'Todo lo que necesitas saber antes de empezar. Si no encuentras tu respuesta aquí, escríbenos — respondemos el mismo día.',
      searchPlaceholder: 'Buscar preguntas...',
      noResults: 'No encontramos preguntas que coincidan con tu búsqueda.',
    },
    allLabel: 'Todas',
    categories: [
      {
        id: 'general',
        label: 'General',
        questions: [
          {
            question: '¿Qué es Gixlabs?',
            answer: 'Gixlabs es una agencia de ingeniería digital especializada en construir plataformas digitales que transforman la presencia online de las empresas en crecimiento real. Combinamos desarrollo web, SEO, diseño UX/UI, email marketing, publicidad pagada y optimización de rendimiento en un solo equipo con visión de ingeniería.',
          },
          {
            question: '¿En qué países trabajan?',
            answer: 'Trabajamos de forma remota con clientes en Venezuela, Estados Unidos, España y el resto de Latinoamérica. Todos nuestros procesos están diseñados para operar de manera asíncrona y eficiente sin importar la zona horaria.',
          },
          {
            question: '¿Con qué tipo de empresas trabajan?',
            answer: 'Trabajamos con startups en etapa temprana, pymes que buscan escalar su presencia digital y empresas medianas que necesitan modernizar sus plataformas. El tamaño no es lo que nos importa — nos enfocamos en proyectos donde el trabajo de ingeniería digital tiene un impacto claro y medible en el negocio.',
          },
          {
            question: '¿Cómo me contacto con Gixlabs?',
            answer: 'Puedes escribirnos directamente a hello@gixlabs.com o usar el formulario en nuestra página de contacto. Respondemos en menos de 24 horas en días hábiles. Para consultas urgentes, también puedes contactarnos por WhatsApp desde el botón en la página de contacto.',
          },
          {
            question: '¿Tienen oficina física?',
            answer: 'Somos un equipo 100% remoto. No tenemos oficina física, lo que nos permite trabajar con los mejores profesionales sin importar su ubicación y ofrecer precios más competitivos sin los costos de infraestructura de una oficina tradicional.',
          },
        ],
      },
      {
        id: 'servicios',
        label: 'Servicios',
        questions: [
          {
            question: '¿Qué servicios ofrece Gixlabs?',
            answer: 'Ofrecemos siete servicios especializados: Desarrollo Web a medida, Estrategia SEO, Landing Pages de alta conversión, Email Marketing y automatizaciones, Publicidad Pagada (Google Ads y Meta Ads), Optimización Web (Core Web Vitals) y Diseño UX/UI. Puedes contratar cualquier servicio de forma independiente o combinarlos para una estrategia digital integral.',
          },
          {
            question: '¿Puedo contratar solo un servicio o necesito un paquete?',
            answer: 'Puedes contratar cualquier servicio de forma independiente. No tenemos paquetes obligatorios. Si necesitas solo SEO, solo desarrollo web o solo optimización de velocidad, trabajamos así. Dicho esto, cuando los servicios se combinan estratégicamente (por ejemplo, desarrollo + SEO + optimización) los resultados se potencian significativamente.',
          },
          {
            question: '¿Trabajan con startups o solo con empresas establecidas?',
            answer: 'Trabajamos con ambas. Para startups solemos comenzar con un MVP o landing page de validación y construimos desde ahí. Para empresas establecidas nos enfocamos en mejorar lo que ya tienen: optimizar la velocidad, escalar el SEO o lanzar campañas más eficientes. El punto de partida se adapta a tu etapa de negocio.',
          },
          {
            question: '¿Pueden trabajar con mi plataforma actual (WordPress, Shopify, etc.)?',
            answer: 'Sí. Trabajamos con WordPress, Shopify, Webflow, Squarespace, WooCommerce y sitios desarrollados en Astro, Next.js, React y otras tecnologías modernas. Para servicios de SEO y optimización web, trabajamos sobre la plataforma que ya tienes sin necesidad de migrar.',
          },
          {
            question: '¿Hacen mantenimiento y soporte después del lanzamiento?',
            answer: 'Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, monitoreo de rendimiento y soporte técnico. También tienes la opción de recibir las instrucciones para que tu equipo gestione el sitio internamente. Todo depende de tu nivel de autonomía técnica y preferencias.',
          },
        ],
      },
      {
        id: 'precios',
        label: 'Precios',
        questions: [
          {
            question: '¿Cuánto cuesta un proyecto?',
            answer: 'Depende del alcance. Un sitio web a medida puede comenzar desde $2,500 USD; una landing page desde $800 USD; una consultoría de SEO desde $500/mes. Cada proyecto es diferente, así que lo mejor es agendar una llamada de 30 minutos donde evaluamos tu situación y te damos un presupuesto concreto sin compromiso.',
          },
          {
            question: '¿Cuáles son las formas de pago?',
            answer: 'Aceptamos transferencias bancarias (USD), Zelle, PayPal y tarjetas de crédito/débito internacionales. Para proyectos de desarrollo web, trabajamos con un esquema de pagos por etapas: 40% al inicio, 40% en el punto medio y 20% al entregables finales. Los servicios mensuales (SEO, ads, mantenimiento) se facturan al inicio de cada período.',
          },
          {
            question: '¿Trabajan con contratos formales?',
            answer: 'Sí. Cada proyecto comienza con un contrato de servicio que especifica el alcance, los entregables, los plazos y las condiciones de pago. También firmamos acuerdos de confidencialidad (NDA) cuando el cliente lo requiere. Trabajar con contratos protege a ambas partes y define expectativas claras desde el inicio.',
          },
          {
            question: '¿Hay costos adicionales no incluidos en el presupuesto?',
            answer: 'Somos transparentes con los costos. El presupuesto inicial cubre el trabajo de nuestro equipo. Costos de terceros como dominios, hosting, licencias de plugins, cuentas de herramientas (Mailchimp, HubSpot, etc.) o presupuesto publicitario (Google Ads, Meta Ads) corren por cuenta del cliente y siempre se detallan antes de firmar.',
          },
        ],
      },
      {
        id: 'proceso',
        label: 'Proceso',
        questions: [
          {
            question: '¿Cómo es el proceso de inicio de un proyecto?',
            answer: 'El proceso comienza con una llamada de diagnóstico gratuita (30 min) donde entendemos tu negocio y objetivos. Luego preparamos una propuesta con alcance, cronograma y presupuesto. Tras la aprobación y el primer pago, hacemos un kick-off para alinear al equipo y comenzamos la fase de descubrimiento. Todo el proceso de onboarding toma entre 3 y 5 días hábiles.',
          },
          {
            question: '¿Cuánto tiempo tarda un proyecto?',
            answer: 'Depende del tipo de proyecto: una landing page puede estar lista en 7-14 días; un sitio web completo toma 4-8 semanas; un proyecto de SEO o publicidad pagada muestra primeros resultados en 60-90 días. En la propuesta siempre incluimos un cronograma detallado con hitos y fechas de entrega.',
          },
          {
            question: '¿Cómo nos comunicamos durante el proyecto?',
            answer: 'Usamos un canal de Slack o WhatsApp dedicado para comunicación diaria. Hacemos videollamadas de seguimiento cada semana (o cada dos semanas dependiendo del proyecto). Todo el trabajo se gestiona en un tablero de Notion o Linear donde puedes ver el estado de cada tarea en tiempo real.',
          },
          {
            question: '¿Qué necesito proporcionar para iniciar?',
            answer: 'Para comenzar necesitamos: acceso a tus herramientas existentes (Google Analytics, Search Console, CMS, hosting), tu brief de negocio o documento de objetivos, materiales de marca (logo, paleta, tipografías) y las personas de contacto clave del proyecto. Te enviamos una checklist completa en el momento del kick-off.',
          },
        ],
      },
      {
        id: 'resultados',
        label: 'Resultados',
        questions: [
          {
            question: '¿Pueden garantizar resultados?',
            answer: 'Garantizamos calidad en la ejecución y transparencia en el proceso. No garantizamos resultados específicos (posiciones #1 en Google, ROAS exacto) porque dependen de factores externos como la competencia, el mercado y los algoritmos. Lo que sí garantizamos es un trabajo fundamentado en datos, mejores prácticas y experiencia demostrable en cada disciplina.',
          },
          {
            question: '¿En cuánto tiempo veré resultados con SEO?',
            answer: 'El SEO es una inversión a largo plazo. Los primeros movimientos en posicionamiento se ven entre 60 y 90 días. Resultados significativos (tráfico orgánico medible, posiciones en página 1) suelen aparecer entre los 4 y 8 meses. Los resultados son acumulativos y duraderos, a diferencia de la publicidad pagada que para cuando dejas de pagar.',
          },
          {
            question: '¿Cómo miden el éxito de los proyectos?',
            answer: 'Definimos KPIs concretos en el kick-off según el tipo de proyecto: conversiones, tráfico orgánico, score de Lighthouse, tasa de apertura de emails, ROAS, entre otros. Compartimos reportes mensuales con métricas clave y comparativa contra los objetivos definidos. No medimos el éxito en entregables — lo medimos en impacto de negocio.',
          },
          {
            question: '¿Tienen casos de éxito o portfolio que pueda ver?',
            answer: 'Sí. Puedes solicitar nuestro portfolio actualizado durante la llamada de diagnóstico. Tenemos casos documentados en desarrollo web, SEO, landing pages y publicidad pagada. Por confidencialidad, algunos clientes prefieren que no mostremos su nombre públicamente, pero podemos compartir métricas y screenshots de resultados anónimos.',
          },
          {
            question: '¿Qué pasa si no estoy satisfecho con el resultado?',
            answer: 'Nuestro proceso incluye revisiones en cada etapa precisamente para evitar llegar al final con algo que no te convenza. Incluimos rondas de revisión definidas en el contrato para cada entregable. Si tras las revisiones el resultado sigue sin cumplir el alcance acordado, nos comprometemos a corregirlo sin costo adicional hasta que lo logre.',
          },
        ],
      },
    ],
    cta: {
      title: '¿No encontraste tu respuesta?',
      subtitle: 'Escríbenos directamente y te respondemos en menos de 24 horas en días hábiles.',
      button: 'Enviar un mensaje',
    },
  },

  en: {
    meta: {
      title: 'Frequently Asked Questions | Gixlabs',
      description: 'Answers to the most common questions about our services, pricing, work process, and results. Can\'t find your question? Write to us.',
    },
    hero: {
      eyebrow: 'Help center',
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know before getting started. If you can\'t find your answer here, write to us — we reply the same day.',
      searchPlaceholder: 'Search questions...',
      noResults: 'No questions match your search.',
    },
    allLabel: 'All',
    categories: [
      {
        id: 'general',
        label: 'General',
        questions: [
          {
            question: 'What is Gixlabs?',
            answer: 'Gixlabs is a digital engineering agency specialized in building digital platforms that transform companies\' online presence into real growth. We combine web development, SEO, UX/UI design, email marketing, paid advertising, and performance optimization in a single team with an engineering mindset.',
          },
          {
            question: 'Which countries do you work in?',
            answer: 'We work remotely with clients in Venezuela, the United States, Spain, and the rest of Latin America. All our processes are designed to operate asynchronously and efficiently regardless of time zone.',
          },
          {
            question: 'What types of companies do you work with?',
            answer: 'We work with early-stage startups, SMBs looking to scale their digital presence, and mid-sized companies that need to modernize their platforms. Size isn\'t what matters to us — we focus on projects where digital engineering work has a clear, measurable impact on the business.',
          },
          {
            question: 'How do I get in touch with Gixlabs?',
            answer: 'You can write to us directly at hello@gixlabs.com or use the form on our contact page. We respond within 24 hours on business days. For urgent inquiries, you can also reach us via WhatsApp from the button on the contact page.',
          },
          {
            question: 'Do you have a physical office?',
            answer: 'We\'re a 100% remote team. We don\'t have a physical office, which allows us to work with the best professionals regardless of location and offer more competitive pricing without traditional office overhead costs.',
          },
        ],
      },
      {
        id: 'services',
        label: 'Services',
        questions: [
          {
            question: 'What services does Gixlabs offer?',
            answer: 'We offer seven specialized services: Custom Web Development, SEO Strategy, High-Converting Landing Pages, Email Marketing & Automation, Paid Advertising (Google Ads & Meta Ads), Web Optimization (Core Web Vitals), and UX/UI Design. You can hire any service independently or combine them for a comprehensive digital strategy.',
          },
          {
            question: 'Can I hire just one service or do I need a package?',
            answer: 'You can hire any service independently. We don\'t have mandatory bundles. If you only need SEO, only web development, or only speed optimization, we work that way. That said, when services are combined strategically (e.g., development + SEO + optimization), results are significantly amplified.',
          },
          {
            question: 'Do you work with startups or only established companies?',
            answer: 'We work with both. For startups we typically start with an MVP or validation landing page and build from there. For established companies we focus on improving what they already have: optimizing speed, scaling SEO, or launching more efficient campaigns. The starting point adapts to your business stage.',
          },
          {
            question: 'Can you work with my current platform (WordPress, Shopify, etc.)?',
            answer: 'Yes. We work with WordPress, Shopify, Webflow, Squarespace, WooCommerce, and sites built with Astro, Next.js, React, and other modern technologies. For SEO and web optimization services, we work on the platform you already have without needing to migrate.',
          },
          {
            question: 'Do you offer maintenance and support after launch?',
            answer: 'Yes. We offer monthly maintenance plans that include security updates, backups, performance monitoring, and technical support. You also have the option to receive instructions so your team can manage the site internally. It all depends on your level of technical autonomy and preferences.',
          },
        ],
      },
      {
        id: 'pricing',
        label: 'Pricing',
        questions: [
          {
            question: 'How much does a project cost?',
            answer: 'It depends on the scope. A custom website can start from $2,500 USD; a landing page from $800 USD; an SEO consultancy from $500/month. Every project is different, so the best approach is to schedule a free 30-minute call where we assess your situation and give you a concrete quote with no commitment.',
          },
          {
            question: 'What payment methods do you accept?',
            answer: 'We accept bank transfers (USD), Zelle, PayPal, and international credit/debit cards. For web development projects, we work with a milestone payment structure: 40% upfront, 40% at the midpoint, and 20% upon final delivery. Monthly services (SEO, ads, maintenance) are billed at the start of each period.',
          },
          {
            question: 'Do you work with formal contracts?',
            answer: 'Yes. Every project starts with a service agreement specifying scope, deliverables, timelines, and payment terms. We also sign NDAs when the client requires it. Working with contracts protects both parties and sets clear expectations from the start.',
          },
          {
            question: 'Are there additional costs not included in the quote?',
            answer: 'We\'re transparent about costs. The initial quote covers our team\'s work. Third-party costs such as domains, hosting, plugin licenses, tool accounts (Mailchimp, HubSpot, etc.), or advertising budget (Google Ads, Meta Ads) are the client\'s responsibility and are always detailed before signing.',
          },
        ],
      },
      {
        id: 'process',
        label: 'Process',
        questions: [
          {
            question: 'What does the project kickoff process look like?',
            answer: 'The process starts with a free diagnostic call (30 min) where we understand your business and goals. Then we prepare a proposal with scope, timeline, and budget. After approval and the first payment, we hold a kick-off to align the team and begin the discovery phase. The entire onboarding process takes 3 to 5 business days.',
          },
          {
            question: 'How long does a project take?',
            answer: 'It depends on the type of project: a landing page can be ready in 7-14 days; a full website takes 4-8 weeks; an SEO or paid advertising project shows first results in 60-90 days. Proposals always include a detailed schedule with milestones and delivery dates.',
          },
          {
            question: 'How do we communicate during the project?',
            answer: 'We use a dedicated Slack or WhatsApp channel for daily communication. We hold weekly (or bi-weekly) video check-ins depending on the project. All work is managed in a Notion or Linear board where you can see the status of each task in real time.',
          },
          {
            question: 'What do I need to provide to get started?',
            answer: 'To get started we need: access to your existing tools (Google Analytics, Search Console, CMS, hosting), your business brief or goals document, brand assets (logo, color palette, typography), and key project contacts. We\'ll send you a complete checklist at kick-off.',
          },
        ],
      },
      {
        id: 'results',
        label: 'Results',
        questions: [
          {
            question: 'Can you guarantee results?',
            answer: 'We guarantee quality in execution and transparency in process. We don\'t guarantee specific outcomes (Google #1 rankings, exact ROAS) because they depend on external factors like competition, market conditions, and algorithms. What we do guarantee is work grounded in data, best practices, and demonstrable expertise in each discipline.',
          },
          {
            question: 'How long until I see SEO results?',
            answer: 'SEO is a long-term investment. First ranking movements are seen within 60 to 90 days. Significant results (measurable organic traffic, page 1 positions) typically appear between 4 and 8 months. Results are cumulative and lasting, unlike paid advertising which stops when you stop paying.',
          },
          {
            question: 'How do you measure project success?',
            answer: 'We define concrete KPIs at kick-off based on the project type: conversions, organic traffic, Lighthouse score, email open rate, ROAS, and more. We share monthly reports with key metrics and comparisons against defined goals. We don\'t measure success in deliverables — we measure it in business impact.',
          },
          {
            question: 'Do you have case studies or a portfolio I can see?',
            answer: 'Yes. You can request our updated portfolio during the diagnostic call. We have documented cases in web development, SEO, landing pages, and paid advertising. For confidentiality, some clients prefer we don\'t display their name publicly, but we can share metrics and screenshots of anonymized results.',
          },
          {
            question: 'What happens if I\'m not satisfied with the result?',
            answer: 'Our process includes reviews at each stage precisely to avoid arriving at the end with something you\'re not happy with. We include defined revision rounds in the contract for each deliverable. If after revisions the result still doesn\'t meet the agreed scope, we commit to fixing it at no additional cost until it does.',
          },
        ],
      },
    ],
    cta: {
      title: "Didn't find your answer?",
      subtitle: 'Write to us directly and we\'ll get back to you within 24 hours on business days.',
      button: 'Send a message',
    },
  },
};
