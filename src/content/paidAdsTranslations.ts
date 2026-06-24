export interface PaidAdsTranslations {
  hero: {
    eyebrow: string;
    headingParts: { text: string; gradient?: boolean }[];
    subheading: string;
    cta: string;
    ctaSecondary: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  results: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: { value: string; label: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
}

export const paidAdsTranslations: Record<'es' | 'en', PaidAdsTranslations> = {
  es: {
    hero: {
      eyebrow: 'Publicidad Pagada',
      headingParts: [
        { text: 'Cada peso invertido,' },
        { text: ' con retorno medible', gradient: true },
      ],
      subheading:
        'Diseñamos y optimizamos campañas de Google Ads y Meta Ads que reducen tu costo por adquisición y escalan tus resultados con datos, no suposiciones.',
      cta: 'Quiero auditoría gratuita',
      ctaSecondary: 'Ver casos de éxito',
    },
    features: {
      eyebrow: 'Capacidades',
      title: 'Publicidad que convierte, no solo que aparece',
      subtitle: 'De la segmentación al remarketing, cada ajuste está respaldado por datos reales de tu cuenta y de tu industria.',
      items: [
        {
          title: 'Google Ads (Search, Display, Shopping)',
          description: 'Campañas de búsqueda con palabras clave de alta intención, display para branding y retargeting, y Shopping para e-commerce con feeds optimizados.',
        },
        {
          title: 'Meta Ads (Facebook e Instagram)',
          description: 'Campañas de captación de leads, conversiones y reconocimiento de marca con creatividades que detienen el scroll y audiencias ultra-segmentadas.',
        },
        {
          title: 'Segmentación avanzada de audiencias',
          description: 'Construimos audiencias personalizadas por comportamiento, intereses, datos demográficos y actividad en tu sitio. Llegamos a quien tiene más probabilidad de comprar.',
        },
        {
          title: 'Optimización de conversiones (CRO)',
          description: 'No solo generamos clics — optimizamos todo el embudo. Páginas de destino, formularios y checkout alineados con el mensaje del anuncio para maximizar el ROAS.',
        },
        {
          title: 'Remarketing y retargeting',
          description: 'Volvemos a impactar a los visitantes que no convirtieron con anuncios personalizados según su etapa en el funnel. Recuperamos el 20-40% del tráfico perdido.',
        },
        {
          title: 'Reportes y análisis en tiempo real',
          description: 'Dashboard claro con ROAS, CPA, CTR y conversiones por campaña. Reunión mensual de resultados y ajustes de estrategia basados en los datos reales.',
        },
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'De la auditoría al primer resultado en 7 días',
      subtitle: 'Un proceso que minimiza el desperdicio de presupuesto desde el primer día y escala solo lo que demuestra funcionar.',
      steps: [
        {
          title: 'Auditoría y estrategia',
          description: 'Analizamos tu cuenta actual (si existe), la competencia, el mercado y tus objetivos. Definimos estructuras de campaña, presupuesto, pujas y KPIs claros.',
        },
        {
          title: 'Configuración y lanzamiento',
          description: 'Creamos o reestructuramos las campañas: grupos de anuncios, palabras clave con intención, creatividades, landing pages y píxeles de seguimiento correctamente configurados.',
        },
        {
          title: 'Optimización continua',
          description: 'Revisamos el rendimiento semanalmente. Pausamos lo que no convierte, aumentamos el presupuesto en lo que sí funciona y hacemos pruebas A/B de anuncios y audiencias.',
        },
        {
          title: 'Escala y expansión',
          description: 'Una vez estabilizado el ROAS objetivo, escalamos gradualmente el presupuesto y expandimos a nuevas audiencias, formatos o plataformas para maximizar el crecimiento.',
        },
      ],
    },
    results: {
      eyebrow: 'Resultados',
      title: 'Números que se traducen en ventas',
      subtitle: 'Promedios medidos en los primeros 90 días de gestión con nuestros clientes.',
      stats: [
        { value: '-40%', label: 'Costo por adquisición', description: 'Reducción del CPA vs. campañas anteriores' },
        { value: '+320%', label: 'ROAS promedio', description: 'Retorno sobre inversión en publicidad' },
        { value: '7 días', label: 'Primeros resultados', description: 'Desde el lanzamiento hasta datos accionables' },
        { value: '+85%', label: 'Tasa de conversión', description: 'Mejora con landing pages optimizadas' },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: '¿Dudas sobre publicidad pagada?',
      subtitle: 'Si no encuentras tu pregunta aquí, escríbenos — respondemos el mismo día.',
      items: [
        {
          question: '¿Cuánto presupuesto necesito para empezar?',
          answer: 'Depende de la industria y los objetivos, pero trabajamos con presupuestos desde $300 USD/mes en publicidad. Para Google Ads de búsqueda en nichos competitivos recomendamos al menos $500/mes. Te ayudamos a calcular el presupuesto óptimo en la llamada inicial.',
        },
        {
          question: '¿Cuánto tiempo tarda en ver resultados reales?',
          answer: 'Los primeros datos significativos aparecen en 7-14 días. La optimización real empieza en la semana 2-3, cuando ya tenemos suficiente información para tomar decisiones. Resultados consistentes y escalables generalmente ocurren entre el mes 2 y 3.',
        },
        {
          question: '¿Trabajan con Google Ads y Meta Ads al mismo tiempo?',
          answer: 'Sí. Muchos de nuestros clientes se benefician de una estrategia multicanal: Google captura demanda existente (personas buscando lo que ofreces) y Meta genera demanda nueva (personas que no te conocen aún). Te recomendamos la combinación según tu objetivo.',
        },
        {
          question: '¿Qué pasa si una campaña no está funcionando?',
          answer: 'La revisamos semanalmente. Si una campaña o grupo de anuncios no cumple los KPIs acordados, la pausamos, analizamos la causa (targeting, creatividad, landing, oferta) y hacemos los ajustes necesarios. El presupuesto siempre va a donde funciona.',
        },
        {
          question: '¿El presupuesto de publicidad va a través de ustedes?',
          answer: 'No. El presupuesto de publicidad se paga directamente a Google o Meta desde tu tarjeta o cuenta de facturación. Nosotros cobramos por la gestión por separado. Así tienes total control y visibilidad de lo que se gasta en cada plataforma.',
        },
      ],
    },
  },

  en: {
    hero: {
      eyebrow: 'Paid Advertising',
      headingParts: [
        { text: 'Every dollar invested,' },
        { text: ' with measurable return', gradient: true },
      ],
      subheading:
        'We design and optimize Google Ads and Meta Ads campaigns that reduce your cost per acquisition and scale your results with data, not guesswork.',
      cta: 'Get a free audit',
      ctaSecondary: 'See success stories',
    },
    features: {
      eyebrow: 'Capabilities',
      title: 'Advertising that converts, not just appears',
      subtitle: 'From targeting to remarketing, every adjustment is backed by real data from your account and your industry.',
      items: [
        {
          title: 'Google Ads (Search, Display, Shopping)',
          description: 'Search campaigns with high-intent keywords, display for branding and retargeting, and Shopping for e-commerce with optimized product feeds.',
        },
        {
          title: 'Meta Ads (Facebook & Instagram)',
          description: 'Lead generation, conversion, and brand awareness campaigns with scroll-stopping creatives and ultra-segmented audiences.',
        },
        {
          title: 'Advanced audience segmentation',
          description: 'We build custom audiences by behavior, interests, demographics, and site activity. We reach the people most likely to buy from you.',
        },
        {
          title: 'Conversion rate optimization (CRO)',
          description: 'We don\'t just drive clicks — we optimize the entire funnel. Landing pages, forms, and checkout aligned with the ad message to maximize ROAS.',
        },
        {
          title: 'Remarketing & retargeting',
          description: 'We re-engage visitors who didn\'t convert with personalized ads based on their funnel stage. We recover 20-40% of lost traffic.',
        },
        {
          title: 'Real-time reporting & analytics',
          description: 'Clear dashboard with ROAS, CPA, CTR, and conversions per campaign. Monthly results meeting and strategy adjustments based on real data.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'From audit to first result in 7 days',
      subtitle: 'A process that minimizes budget waste from day one and only scales what proves to work.',
      steps: [
        {
          title: 'Audit & strategy',
          description: 'We analyze your current account (if any), competition, market, and goals. We define campaign structures, budget, bidding strategies, and clear KPIs.',
        },
        {
          title: 'Setup & launch',
          description: 'We create or restructure campaigns: ad groups, intent-based keywords, creatives, landing pages, and correctly configured tracking pixels.',
        },
        {
          title: 'Continuous optimization',
          description: 'We review performance weekly. We pause what doesn\'t convert, increase budget on what works, and run A/B tests on ads and audiences.',
        },
        {
          title: 'Scale & expansion',
          description: 'Once the target ROAS is stable, we gradually scale budget and expand to new audiences, formats, or platforms to maximize growth.',
        },
      ],
    },
    results: {
      eyebrow: 'Results',
      title: 'Numbers that translate into sales',
      subtitle: 'Averages measured in the first 90 days of managing our clients\' accounts.',
      stats: [
        { value: '-40%', label: 'Cost per acquisition', description: 'CPA reduction vs. previous campaigns' },
        { value: '+320%', label: 'Average ROAS', description: 'Return on advertising spend' },
        { value: '7 days', label: 'First results', description: 'From launch to actionable data' },
        { value: '+85%', label: 'Conversion rate', description: 'Improvement with optimized landing pages' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions about paid advertising?',
      subtitle: "If you don't find your answer here, write to us — we reply the same day.",
      items: [
        {
          question: 'How much budget do I need to get started?',
          answer: 'It depends on the industry and goals, but we work with ad budgets starting at $300 USD/month. For competitive Google Search niches, we recommend at least $500/month. We help you calculate the optimal budget on the initial call.',
        },
        {
          question: 'How long does it take to see real results?',
          answer: 'First meaningful data appears in 7-14 days. Real optimization starts in weeks 2-3, when we have enough data to make decisions. Consistent, scalable results generally occur between months 2 and 3.',
        },
        {
          question: 'Do you work with Google Ads and Meta Ads simultaneously?',
          answer: 'Yes. Many of our clients benefit from a multi-channel strategy: Google captures existing demand (people searching for what you offer) and Meta generates new demand (people who don\'t know you yet). We recommend the combination based on your goal.',
        },
        {
          question: 'What happens if a campaign isn\'t working?',
          answer: 'We review it weekly. If a campaign or ad group doesn\'t meet the agreed KPIs, we pause it, analyze the cause (targeting, creative, landing page, offer), and make the necessary adjustments. Budget always goes where it works.',
        },
        {
          question: 'Does the ad budget go through you?',
          answer: 'No. Ad budget is paid directly to Google or Meta from your card or billing account. We charge for management separately. This gives you full control and visibility of what\'s spent on each platform.',
        },
      ],
    },
  },
};
