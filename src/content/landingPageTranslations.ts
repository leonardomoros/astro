export type HeroPart = { text: string; gradient?: boolean };

export interface LandingPageTranslations {
  hero: {
    breadcrumb: { homeLabel: string; homeHref: string; servicesLabel: string; servicesHref: string; current: string };
    eyebrow: string;
    h1: HeroPart[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  process: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    steps: { number: string; icon: string; title: string; description: string }[];
  };
  results: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    stats: { value: string; label: string; color: string }[];
  };
  faq: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    items: { question: string; answer: string }[];
  };
}

export const landingPageTranslations: Record<'es' | 'en', LandingPageTranslations> = {
  es: {
    hero: {
      breadcrumb: { homeLabel: 'Inicio', homeHref: '/', servicesLabel: 'Servicios', servicesHref: '/servicios/', current: 'Landing Pages' },
      eyebrow: 'Landing Pages',
      h1: [{ text: 'Páginas que ' }, { text: 'convierten visitas', gradient: true }, { text: ' en clientes.' }],
      subtitle:
        'Diseñamos landing pages estratégicas que capturan la atención, generan confianza y convierten prospectos en clientes desde el primer clic. Sin distracciones, solo resultados.',
      ctaPrimary: 'Crear mi landing page',
      ctaSecondary: 'Ver ejemplos',
    },
    features: {
      eyebrow: 'Qué incluye',
      h2: [{ text: 'Diseñadas para ' }, { text: 'una sola cosa', gradient: true }, { text: ': convertir.' }],
      subtitle:
        'Cada elemento de tu landing page tiene un propósito. Nada es decorativo. Todo está pensado para guiar al visitante hacia la acción que necesitas.',
      items: [
        {
          icon: 'Target',
          title: 'Diseño centrado en conversión',
          description:
            'Estructura visual y jerarquía de información diseñadas con un único objetivo: que el visitante tome acción. Sin menús, sin distracciones, sin salidas.',
        },
        {
          icon: 'FlaskConical',
          title: 'A/B Testing',
          description:
            'Probamos variaciones de titulares, CTAs, imágenes y formularios para identificar qué versión convierte más y optimizar continuamente.',
        },
        {
          icon: 'Zap',
          title: 'Velocidad extrema',
          description:
            'Cada segundo de carga extra reduce la conversión un 7%. Nuestras landing pages cargan en menos de 2 segundos en cualquier dispositivo.',
        },
        {
          icon: 'Plug',
          title: 'Integraciones',
          description:
            'Conectamos tu landing page con tu CRM, herramientas de email marketing, Zapier, WhatsApp Business y cualquier plataforma que uses.',
        },
        {
          icon: 'Mail',
          title: 'Formularios inteligentes',
          description:
            'Captura de leads con validación en tiempo real, campos condicionales, integración directa con tu base de datos y notificaciones automáticas.',
        },
        {
          icon: 'BarChart3',
          title: 'Analytics y seguimiento',
          description:
            'Integración con Google Analytics, Meta Pixel y herramientas de heatmaps para entender exactamente cómo interactúan los usuarios con tu página.',
        },
      ],
    },
    process: {
      eyebrow: 'Nuestro proceso',
      h2: [{ text: 'De cero a ' }, { text: 'conversiones reales', gradient: true }, { text: ' en 7 días.' }],
      subtitle: 'Un proceso ágil y probado para lanzar landing pages que generan resultados desde el primer día.',
      steps: [
        { number: '01', icon: 'Search',   title: 'Investigación',      description: 'Analizamos tu audiencia, competencia y oferta para identificar el mensaje y la propuesta de valor más efectivos.' },
        { number: '02', icon: 'PenTool',  title: 'Copy y diseño',      description: 'Redactamos el copywriting persuasivo y diseñamos la estructura visual optimizada para la conversión.' },
        { number: '03', icon: 'Code2',    title: 'Desarrollo',          description: 'Desarrollamos la landing page con código limpio, optimizada para velocidad y lista para integraciones.' },
        { number: '04', icon: 'Rocket',   title: 'Lanzamiento',         description: 'Publicamos, conectamos el tracking y preparamos el primer ciclo de pruebas A/B para optimizar desde el día uno.' },
      ],
    },
    results: {
      eyebrow: 'Resultados reales',
      h2: [{ text: 'Números que ' }, { text: 'justifican la inversión', gradient: true }, { text: '.' }],
      subtitle: 'Una landing page bien construida es la inversión de marketing con mayor retorno inmediato. Estos son nuestros promedios reales.',
      stats: [
        { value: '+240%', label: 'Tasa de conversión vs. página genérica', color: '#3b82f6' },
        { value: '-60%',  label: 'Reducción en costo por lead',            color: '#06b6d4' },
        { value: '3×',    label: 'Más leads calificados por campaña',      color: '#a855f7' },
        { value: '7 días', label: 'Tiempo promedio hasta el lanzamiento',  color: '#f59e0b' },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      h2: [{ text: 'Todo sobre ' }, { text: 'landing pages', gradient: true }, { text: '.' }],
      subtitle: 'Respondemos las dudas más comunes antes de empezar tu proyecto.',
      items: [
        {
          question: '¿Cuál es la diferencia entre una landing page y un sitio web?',
          answer:
            'Un sitio web tiene múltiples páginas y objetivos. Una landing page tiene una sola página y un único objetivo: convertir. Elimina menús, links externos y cualquier elemento que distraiga al visitante de tomar la acción deseada. Por eso convierte entre 3 y 5 veces más que una página de sitio web normal.',
        },
        {
          question: '¿Cuánto tiempo tarda en tener mi landing page lista?',
          answer:
            'Nuestro proceso estándar va de 5 a 7 días hábiles: 1-2 días de investigación y estrategia, 2-3 días de diseño y copy, y 1-2 días de desarrollo y lanzamiento. Proyectos con integraciones complejas pueden tomar hasta 10 días.',
        },
        {
          question: '¿Incluyen el copywriting o solo el diseño?',
          answer:
            'Incluimos copywriting completo. Redactamos el titular, subtítulos, bullets de beneficios, copy del CTA y cualquier texto de la página. Creemos que diseño y copy son inseparables: uno sin el otro reduce drásticamente la conversión.',
        },
        {
          question: '¿Cómo miden si la landing page está convirtiendo?',
          answer:
            'Integramos Google Analytics 4, Meta Pixel (si aplica) y configuramos eventos de conversión desde el día uno. Adicionalmente instalamos herramientas de heatmaps y grabación de sesiones para entender el comportamiento del usuario y detectar puntos de abandono.',
        },
        {
          question: '¿Pueden integrarla con mi CRM, email o WhatsApp?',
          answer:
            'Sí. Conectamos con HubSpot, ActiveCampaign, Mailchimp, Klaviyo, Salesforce, y prácticamente cualquier herramienta vía Zapier o Make. También podemos enviar leads directamente a WhatsApp Business o a una hoja de cálculo si lo prefieres.',
        },
      ],
    },
  },

  en: {
    hero: {
      breadcrumb: { homeLabel: 'Home', homeHref: '/en/', servicesLabel: 'Services', servicesHref: '/en/services/', current: 'Landing Pages' },
      eyebrow: 'Landing Pages',
      h1: [{ text: 'Pages that ' }, { text: 'turn visitors', gradient: true }, { text: ' into customers.' }],
      subtitle:
        'We design strategic landing pages that capture attention, build trust, and convert prospects into customers from the first click. No distractions, just results.',
      ctaPrimary: 'Build my landing page',
      ctaSecondary: 'See examples',
    },
    features: {
      eyebrow: 'What is included',
      h2: [{ text: 'Built for ' }, { text: 'one thing only', gradient: true }, { text: ': conversions.' }],
      subtitle:
        'Every element on your landing page has a purpose. Nothing is decorative. Everything is designed to guide the visitor toward the action you need.',
      items: [
        {
          icon: 'Target',
          title: 'Conversion-focused design',
          description:
            'Visual structure and information hierarchy designed with one goal: getting the visitor to take action. No menus, no distractions, no exits.',
        },
        {
          icon: 'FlaskConical',
          title: 'A/B Testing',
          description:
            'We test variations of headlines, CTAs, images, and forms to identify which version converts best and continuously optimize.',
        },
        {
          icon: 'Zap',
          title: 'Extreme speed',
          description:
            'Every extra second of loading reduces conversions by 7%. Our landing pages load in under 2 seconds on any device.',
        },
        {
          icon: 'Plug',
          title: 'Integrations',
          description:
            'We connect your landing page with your CRM, email marketing tools, Zapier, WhatsApp Business, and any platform you use.',
        },
        {
          icon: 'Mail',
          title: 'Smart forms',
          description:
            'Lead capture with real-time validation, conditional fields, direct database integration, and automatic notifications.',
        },
        {
          icon: 'BarChart3',
          title: 'Analytics & tracking',
          description:
            'Integration with Google Analytics, Meta Pixel, and heatmap tools to understand exactly how users interact with your page.',
        },
      ],
    },
    process: {
      eyebrow: 'Our process',
      h2: [{ text: 'From zero to ' }, { text: 'real conversions', gradient: true }, { text: ' in 7 days.' }],
      subtitle: 'A fast, proven process to launch landing pages that generate results from day one.',
      steps: [
        { number: '01', icon: 'Search',   title: 'Research',          description: 'We analyze your audience, competition, and offer to identify the most effective message and value proposition.' },
        { number: '02', icon: 'PenTool',  title: 'Copy & design',     description: 'We write persuasive copy and design the visual structure optimized for conversion.' },
        { number: '03', icon: 'Code2',    title: 'Development',        description: 'We build the landing page with clean code, optimized for speed and ready for integrations.' },
        { number: '04', icon: 'Rocket',   title: 'Launch',             description: 'We publish, connect tracking, and set up the first A/B testing cycle to optimize from day one.' },
      ],
    },
    results: {
      eyebrow: 'Real results',
      h2: [{ text: 'Numbers that ' }, { text: 'justify the investment', gradient: true }, { text: '.' }],
      subtitle: 'A well-built landing page is the marketing investment with the highest immediate return. These are our real averages.',
      stats: [
        { value: '+240%', label: 'Conversion rate vs. generic page',   color: '#3b82f6' },
        { value: '-60%',  label: 'Reduction in cost per lead',         color: '#06b6d4' },
        { value: '3×',    label: 'More qualified leads per campaign',  color: '#a855f7' },
        { value: '7 days', label: 'Average time to launch',           color: '#f59e0b' },
      ],
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      h2: [{ text: 'Everything about ' }, { text: 'landing pages', gradient: true }, { text: '.' }],
      subtitle: "We answer the most common questions before starting your project.",
      items: [
        {
          question: "What's the difference between a landing page and a website?",
          answer:
            'A website has multiple pages and goals. A landing page has one page and one goal: convert. It removes menus, external links, and anything that distracts the visitor from taking the desired action. That is why it converts 3 to 5 times more than a standard website page.',
        },
        {
          question: 'How long does it take to have my landing page ready?',
          answer:
            'Our standard process takes 5 to 7 business days: 1-2 days for research and strategy, 2-3 days for design and copy, and 1-2 days for development and launch. Projects with complex integrations may take up to 10 days.',
        },
        {
          question: 'Do you include copywriting or just design?',
          answer:
            'We include full copywriting. We write the headline, subheadlines, benefit bullets, CTA copy, and all page text. We believe design and copy are inseparable: one without the other drastically reduces conversion.',
        },
        {
          question: 'How do you measure whether the landing page is converting?',
          answer:
            'We integrate Google Analytics 4, Meta Pixel (if applicable), and set up conversion events from day one. We also install heatmap and session recording tools to understand user behavior and detect drop-off points.',
        },
        {
          question: 'Can you integrate it with my CRM, email, or WhatsApp?',
          answer:
            'Yes. We connect with HubSpot, ActiveCampaign, Mailchimp, Klaviyo, Salesforce, and virtually any tool via Zapier or Make. We can also send leads directly to WhatsApp Business or a spreadsheet if you prefer.',
        },
      ],
    },
  },
};
