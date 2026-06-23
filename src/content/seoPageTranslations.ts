export type HeroPart = { text: string; gradient?: boolean };

export interface SeoPageTranslations {
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

export const seoPageTranslations: Record<'es' | 'en', SeoPageTranslations> = {
  es: {
    hero: {
      breadcrumb: { homeLabel: 'Inicio', homeHref: '/', servicesLabel: 'Servicios', servicesHref: '/servicios/', current: 'Estrategia SEO' },
      eyebrow: 'Estrategia SEO',
      h1: [{ text: 'Aparece en Google ' }, { text: 'cuando te buscan', gradient: true }, { text: '.' }],
      subtitle:
        'Posicionamos tu sitio en los primeros resultados orgánicos con estrategias técnicas, contenido optimizado y construcción de autoridad que generan tráfico real y clientes reales.',
      ctaPrimary: 'Auditoría Gratuita',
      ctaSecondary: 'Ver resultados',
    },
    features: {
      eyebrow: 'Qué incluye',
      h2: [{ text: 'SEO completo, ' }, { text: 'no a medias', gradient: true }, { text: '.' }],
      subtitle:
        'Abordamos el SEO desde todos los ángulos: técnico, contenido y autoridad. Porque posicionar en Google requiere una estrategia integral, no trucos aislados.',
      items: [
        {
          icon: 'Gauge',
          title: 'Auditoría SEO técnica',
          description:
            'Análisis profundo de velocidad, errores de crawling, indexación, Core Web Vitals y estructura técnica de tu sitio para identificar cada freno a tu posicionamiento.',
        },
        {
          icon: 'Target',
          title: 'Investigación de palabras clave',
          description:
            'Identificamos las búsquedas exactas que tu audiencia hace para encontrar negocios como el tuyo, con volumen, intención y dificultad analizados.',
        },
        {
          icon: 'FileText',
          title: 'Optimización On-Page',
          description:
            'Optimizamos metaetiquetas, contenido, estructura de URLs, jerarquía de encabezados y datos estructurados para máxima visibilidad en cada página.',
        },
        {
          icon: 'Link2',
          title: 'Construcción de autoridad',
          description:
            'Estrategia de link building ético que aumenta la autoridad de dominio y la confianza en los motores de búsqueda de forma sostenible y duradera.',
        },
        {
          icon: 'MapPin',
          title: 'SEO Local',
          description:
            'Domina las búsquedas locales y Google Maps. Optimizamos tu perfil de Google Business, citas locales y contenido geo-específico para atraer clientes cercanos.',
        },
        {
          icon: 'BarChart3',
          title: 'Reportes y análisis',
          description:
            'Dashboard mensual con posiciones de palabras clave, tráfico orgánico, conversiones y ROI. Decisiones basadas en datos, no en suposiciones.',
        },
      ],
    },
    process: {
      eyebrow: 'Nuestra metodología',
      h2: [{ text: 'Resultados en Google, ' }, { text: 'paso a paso', gradient: true }, { text: '.' }],
      subtitle: 'Cada campaña SEO sigue un proceso probado. Auditamos, estrategizamos, ejecutamos y mejoramos continuamente para sostener y ampliar tus resultados.',
      steps: [
        { number: '01', icon: 'Search',     title: 'Auditoría completa',        description: 'Diagnóstico técnico y competitivo de tu situación SEO actual: errores, oportunidades y brechas versus tus competidores.' },
        { number: '02', icon: 'Lightbulb',  title: 'Estrategia personalizada',  description: 'Plan de palabras clave y contenido basado en tu industria, mercado objetivo y objetivos de negocio específicos.' },
        { number: '03', icon: 'Wrench',     title: 'Implementación y contenido', description: 'Ejecutamos mejoras técnicas, creamos contenido optimizado y construimos autoridad con link building de calidad.' },
        { number: '04', icon: 'TrendingUp', title: 'Monitoreo y mejora',        description: 'Seguimiento continuo con reportes mensuales, ajuste de la estrategia y expansión a nuevas palabras clave.' },
      ],
    },
    results: {
      eyebrow: 'Resultados reales',
      h2: [{ text: 'Números que ' }, { text: 'hablan por sí solos', gradient: true }, { text: '.' }],
      subtitle: 'Estos son promedios reales de los proyectos que hemos gestionado. El SEO bien ejecutado es la inversión de marketing con mayor retorno a largo plazo.',
      stats: [
        { value: '+340%', label: 'Tráfico orgánico promedio en 6 meses',  color: '#10b981' },
        { value: '90 días', label: 'Para primeras posiciones en Google',   color: '#3b82f6' },
        { value: '+85%',  label: 'Palabras clave en primera página',       color: '#a855f7' },
        { value: '5:1',   label: 'ROI promedio de campaña SEO',            color: '#f59e0b' },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      h2: [{ text: 'Todo lo que quieres ' }, { text: 'saber sobre SEO', gradient: true }, { text: '.' }],
      subtitle: 'Resolvemos las dudas más comunes antes de empezar a trabajar juntos.',
      items: [
        {
          question: '¿Cuánto tiempo tarda en ver resultados de SEO?',
          answer:
            'Los primeros movimientos en posiciones se ven entre 60 y 90 días. Resultados significativos de tráfico ocurren entre los 3 y 6 meses. El SEO es una inversión a largo plazo: una vez que posicionas, el tráfico orgánico llega de forma constante sin pagar por cada clic.',
        },
        {
          question: '¿Qué diferencia hay entre SEO y publicidad en Google (SEM)?',
          answer:
            'La publicidad de pago (Google Ads) es inmediata pero pagas por cada clic y al parar la inversión el tráfico desaparece. El SEO genera tráfico orgánico gratuito y sostenible. La estrategia más poderosa es combinar ambas: Ads para resultados inmediatos, SEO para crecimiento acumulado.',
        },
        {
          question: '¿Hacen SEO local para mi ciudad o zona?',
          answer:
            'Sí. Optimizamos tu perfil de Google Business Profile, gestionamos tus citas en directorios locales y creamos contenido geo-específico. El objetivo es que aparezcas en las búsquedas con "cerca de mí" y en el paquete de mapas de Google.',
        },
        {
          question: '¿Necesito cambiar mi sitio web para hacer SEO?',
          answer:
            'Depende del estado técnico actual. Hacemos una auditoría inicial y aplicamos las mejoras necesarias. En muchos casos no se requiere un rediseño completo, solo optimizaciones técnicas y de contenido. Si tu sitio tiene problemas graves, te lo comunicamos con claridad.',
        },
        {
          question: '¿Cómo reportan el progreso y los resultados?',
          answer:
            'Cada mes recibes un reporte con las posiciones de tus palabras clave objetivo, evolución del tráfico orgánico, páginas de mayor rendimiento y comparativas respecto al mes anterior. También tienes acceso a un dashboard en tiempo real.',
        },
      ],
    },
  },

  en: {
    hero: {
      breadcrumb: { homeLabel: 'Home', homeHref: '/en/', servicesLabel: 'Services', servicesHref: '/en/services/', current: 'SEO Strategy' },
      eyebrow: 'SEO Strategy',
      h1: [{ text: 'Appear on Google ' }, { text: 'when they search for you', gradient: true }, { text: '.' }],
      subtitle:
        'We rank your site at the top of organic results with technical strategies, optimized content, and authority building that drive real traffic and real customers.',
      ctaPrimary: 'Free Audit',
      ctaSecondary: 'See results',
    },
    features: {
      eyebrow: 'What is included',
      h2: [{ text: 'Complete SEO, ' }, { text: 'no shortcuts', gradient: true }, { text: '.' }],
      subtitle:
        'We approach SEO from every angle: technical, content, and authority. Because ranking on Google requires a comprehensive strategy, not isolated tricks.',
      items: [
        {
          icon: 'Gauge',
          title: 'Technical SEO Audit',
          description:
            'Deep analysis of speed, crawling errors, indexing, Core Web Vitals, and technical site structure to identify every obstacle to your rankings.',
        },
        {
          icon: 'Target',
          title: 'Keyword Research',
          description:
            'We identify the exact searches your audience makes to find businesses like yours, with volume, intent, and difficulty all analyzed.',
        },
        {
          icon: 'FileText',
          title: 'On-Page Optimization',
          description:
            'We optimize meta tags, content, URL structure, heading hierarchy, and structured data for maximum visibility on every page.',
        },
        {
          icon: 'Link2',
          title: 'Authority Building',
          description:
            'Ethical link building strategy that increases domain authority and search engine trust in a sustainable and lasting way.',
        },
        {
          icon: 'MapPin',
          title: 'Local SEO',
          description:
            'Dominate local searches and Google Maps. We optimize your Google Business profile, local citations, and geo-specific content to attract nearby customers.',
        },
        {
          icon: 'BarChart3',
          title: 'Reports & Analytics',
          description:
            'Monthly dashboard with keyword rankings, organic traffic, conversions, and ROI. Data-driven decisions, not guesswork.',
        },
      ],
    },
    process: {
      eyebrow: 'Our methodology',
      h2: [{ text: 'Google results, ' }, { text: 'step by step', gradient: true }, { text: '.' }],
      subtitle: 'Every SEO campaign follows a proven process. We audit, strategize, execute, and continuously improve to sustain and grow your results.',
      steps: [
        { number: '01', icon: 'Search',     title: 'Full audit',               description: 'Technical and competitive diagnosis of your current SEO situation: errors, opportunities, and gaps versus your competitors.' },
        { number: '02', icon: 'Lightbulb',  title: 'Custom strategy',          description: 'Keyword and content plan based on your industry, target market, and specific business objectives.' },
        { number: '03', icon: 'Wrench',     title: 'Implementation & content', description: 'We execute technical improvements, create optimized content, and build authority with quality link building.' },
        { number: '04', icon: 'TrendingUp', title: 'Monitoring & improvement', description: 'Continuous tracking with monthly reports, strategy adjustments, and expansion to new keyword opportunities.' },
      ],
    },
    results: {
      eyebrow: 'Real results',
      h2: [{ text: 'Numbers that ' }, { text: 'speak for themselves', gradient: true }, { text: '.' }],
      subtitle: 'These are real averages from projects we have managed. Well-executed SEO is the marketing investment with the highest long-term return.',
      stats: [
        { value: '+340%', label: 'Avg. organic traffic growth in 6 months', color: '#10b981' },
        { value: '90 days', label: 'To first-page rankings on Google',       color: '#3b82f6' },
        { value: '+85%',  label: 'Keywords ranking on first page',           color: '#a855f7' },
        { value: '5:1',   label: 'Average SEO campaign ROI',                 color: '#f59e0b' },
      ],
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      h2: [{ text: 'Everything you want ' }, { text: 'to know about SEO', gradient: true }, { text: '.' }],
      subtitle: 'We answer the most common questions before we start working together.',
      items: [
        {
          question: 'How long does it take to see SEO results?',
          answer:
            'The first ranking movements happen between 60 and 90 days. Significant traffic results occur between 3 and 6 months. SEO is a long-term investment: once you rank, organic traffic flows consistently without paying per click.',
        },
        {
          question: "What's the difference between SEO and Google Ads (SEM)?",
          answer:
            'Paid advertising (Google Ads) is immediate but you pay per click — when you stop investing, traffic disappears. SEO generates free, sustainable organic traffic. The most powerful strategy is to combine both: Ads for immediate results, SEO for compounding growth.',
        },
        {
          question: 'Do you do local SEO for my city or area?',
          answer:
            'Yes. We optimize your Google Business Profile, manage your citations in local directories, and create geo-specific content. The goal is to appear in "near me" searches and in the Google map pack.',
        },
        {
          question: 'Do I need to change my website to do SEO?',
          answer:
            "It depends on the current technical state. We run an initial audit and apply the necessary improvements. In many cases a complete redesign isn't required — just technical and content optimizations. If your site has serious issues, we'll tell you clearly.",
        },
        {
          question: 'How do you report progress and results?',
          answer:
            'Every month you receive a report with your target keyword rankings, organic traffic evolution, top-performing pages, and month-over-month comparisons. You also have access to a real-time dashboard.',
        },
      ],
    },
  },
};
