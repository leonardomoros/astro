export interface EmailMarketingTranslations {
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
    items: {
      title: string;
      description: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  results: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: {
      value: string;
      label: string;
      description: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  finalCTA: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
}

export const emailMarketingTranslations: Record<'es' | 'en', EmailMarketingTranslations> = {
  es: {
    hero: {
      eyebrow: 'Email Marketing',
      headingParts: [
        { text: 'Convierte tu lista en' },
        { text: ' tu canal más rentable', gradient: true },
      ],
      subheading:
        'Diseñamos secuencias automatizadas, newsletters y campañas segmentadas que llevan el mensaje correcto a la persona correcta en el momento exacto.',
      cta: 'Quiero una estrategia gratis',
      ctaSecondary: 'Ver casos de éxito',
    },
    features: {
      eyebrow: 'Capacidades',
      title: 'Todo lo que necesitas para crecer con email',
      subtitle: 'Desde la captación hasta la recompra: cubrimos cada etapa del ciclo con automatizaciones que trabajan mientras tú duermes.',
      items: [
        {
          title: 'Automatizaciones de ciclo completo',
          description: 'Flujos de bienvenida, carrito abandonado, recuperación de inactivos y upsell. Cada suscriptor recibe el mensaje adecuado según su comportamiento.',
        },
        {
          title: 'Segmentación inteligente',
          description: 'Dividimos tu lista por comportamiento, etapa del funnel, geografía e intereses. Menor volumen, mayor relevancia, mejor conversión.',
        },
        {
          title: 'Copywriting y diseño persuasivo',
          description: 'Asuntos que se abren, cuerpos que se leen y CTAs que se hacen clic. Cada pieza está diseñada para mover al suscriptor al siguiente paso.',
        },
        {
          title: 'A/B testing sistemático',
          description: 'Testeamos asuntos, horarios, llamadas a la acción y diseños. Los datos deciden qué funciona, no las opiniones.',
        },
        {
          title: 'Integración con tu CRM',
          description: 'Conectamos tu plataforma de email con HubSpot, Salesforce, ActiveCampaign u otras herramientas para mantener datos sincronizados.',
        },
        {
          title: 'Reportes y analytics en tiempo real',
          description: 'Dashboards claros con tasas de apertura, clics, conversiones y ROI por campaña. Sabes exactamente lo que genera cada peso invertido.',
        },
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'De la estrategia al primer flujo activo en 48 horas',
      subtitle: 'Un proceso estructurado que garantiza relevancia, entregabilidad y resultados medibles desde el primer envío.',
      steps: [
        {
          title: 'Auditoría y estrategia',
          description: 'Analizamos tu lista actual, tasa de apertura histórica, competencia y oportunidades. Definimos objetivos, KPIs y el mapa de automatizaciones.',
        },
        {
          title: 'Segmentación y limpieza de lista',
          description: 'Limpiamos rebotes, segmentamos por comportamiento y configuramos los triggers de entrada para cada flujo. Base sana = mejor entregabilidad.',
        },
        {
          title: 'Copywriting, diseño y configuración',
          description: 'Redactamos los textos, diseñamos los templates responsivos y configuramos las automatizaciones en tu plataforma. Todo listo para activar.',
        },
        {
          title: 'Lanzamiento, medición y optimización',
          description: 'Activamos los flujos, monitoreamos los primeros resultados y ajustamos asuntos, horarios y segmentos según los datos reales.',
        },
      ],
    },
    results: {
      eyebrow: 'Resultados',
      title: 'Números que hablan por sí solos',
      subtitle: 'Promedios medidos en los primeros 90 días de trabajo con nuestros clientes.',
      stats: [
        {
          value: '+45%',
          label: 'Tasa de apertura',
          description: 'Sobre el promedio de la industria (22%)',
        },
        {
          value: '3×',
          label: 'ROI por email enviado',
          description: 'Retorno sobre la inversión en email marketing',
        },
        {
          value: '-70%',
          label: 'Tiempo manual',
          description: 'Reducción con automatizaciones activas',
        },
        {
          value: '48h',
          label: 'Primer flujo activo',
          description: 'Desde el onboarding hasta tu primera automatización',
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: '¿Tienes dudas sobre email marketing?',
      subtitle: 'Si no encuentras tu pregunta aquí, escríbenos — respondemos el mismo día.',
      items: [
        {
          question: '¿Con qué plataformas de email marketing trabajan?',
          answer: 'Trabajamos con Mailchimp, ActiveCampaign, Klaviyo, Brevo (Sendinblue), HubSpot y ConvertKit, entre otras. Si ya tienes una plataforma, nos adaptamos. Si estás empezando, te recomendamos la que mejor se ajuste a tu caso.',
        },
        {
          question: '¿Necesito tener una lista de suscriptores para empezar?',
          answer: 'No necesariamente. Si ya tienes una lista, la optimizamos y segmentamos. Si estás empezando, diseñamos la estrategia de captación junto con las automatizaciones, para que la lista crezca y se monetice en paralelo.',
        },
        {
          question: '¿Cómo evitan que los correos lleguen al spam?',
          answer: 'Configuramos autenticación técnica (SPF, DKIM, DMARC), calentamos el dominio si es nuevo, mantenemos la higiene de lista y redactamos los textos evitando palabras que activan filtros. El 98% de nuestros envíos llegan a la bandeja de entrada.',
        },
        {
          question: '¿Con qué frecuencia se envían los emails?',
          answer: 'Depende de tu audiencia y tus objetivos. En general, un newsletter semanal o quincenal funciona bien para la mayoría de los negocios. Las automatizaciones se disparan según el comportamiento del usuario, no según un calendario fijo.',
        },
        {
          question: '¿Puedo usar mis templates y diseños actuales?',
          answer: 'Sí. Si tienes templates que ya funcionan, los adaptamos y optimizamos. Si prefieres empezar desde cero, diseñamos piezas nuevas alineadas con tu marca que conviertan mejor.',
        },
      ],
    },
    finalCTA: {
      eyebrow: 'Empieza hoy',
      title: 'Tu lista está lista para crecer',
      subtitle: 'Una llamada de 30 minutos es todo lo que necesitamos para mostrarte qué automatizaciones pueden activarse esta semana.',
      cta: 'Agendar llamada gratuita',
      ctaSecondary: 'Ver otros servicios',
    },
  },

  en: {
    hero: {
      eyebrow: 'Email Marketing',
      headingParts: [
        { text: 'Turn your list into' },
        { text: ' your most profitable channel', gradient: true },
      ],
      subheading:
        'We design automated sequences, newsletters, and segmented campaigns that deliver the right message to the right person at exactly the right moment.',
      cta: 'Get a free strategy',
      ctaSecondary: 'See success stories',
    },
    features: {
      eyebrow: 'Capabilities',
      title: 'Everything you need to grow with email',
      subtitle: 'From acquisition to repurchase: we cover every stage of the cycle with automations that work while you sleep.',
      items: [
        {
          title: 'Full-cycle automations',
          description: 'Welcome flows, abandoned cart, win-back sequences, and upsell. Every subscriber receives the right message based on their behavior.',
        },
        {
          title: 'Smart segmentation',
          description: 'We segment your list by behavior, funnel stage, geography, and interests. Less volume, more relevance, better conversion.',
        },
        {
          title: 'Persuasive copy & design',
          description: 'Subject lines that get opened, bodies that get read, CTAs that get clicked. Every piece is designed to move subscribers to the next step.',
        },
        {
          title: 'Systematic A/B testing',
          description: 'We test subject lines, send times, calls to action, and designs. Data decides what works — not opinions.',
        },
        {
          title: 'CRM integration',
          description: 'We connect your email platform with HubSpot, Salesforce, ActiveCampaign, or other tools to keep data in sync.',
        },
        {
          title: 'Real-time reporting & analytics',
          description: 'Clear dashboards with open rates, clicks, conversions, and ROI per campaign. You know exactly what every dollar generates.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'From strategy to first live flow in 48 hours',
      subtitle: 'A structured process that guarantees relevance, deliverability, and measurable results from the very first send.',
      steps: [
        {
          title: 'Audit & strategy',
          description: 'We analyze your current list, historical open rates, competitors, and opportunities. We define goals, KPIs, and the automation roadmap.',
        },
        {
          title: 'Segmentation & list hygiene',
          description: 'We clean bounces, segment by behavior, and configure entry triggers for each flow. A healthy list equals better deliverability.',
        },
        {
          title: 'Copy, design & setup',
          description: 'We write the copy, design responsive templates, and configure automations in your platform. Everything ready to activate.',
        },
        {
          title: 'Launch, measure & optimize',
          description: 'We activate the flows, monitor early results, and adjust subject lines, send times, and segments based on real data.',
        },
      ],
    },
    results: {
      eyebrow: 'Results',
      title: 'Numbers that speak for themselves',
      subtitle: 'Averages measured in the first 90 days of working with our clients.',
      stats: [
        {
          value: '+45%',
          label: 'Open rate',
          description: 'Above industry average (22%)',
        },
        {
          value: '3×',
          label: 'ROI per email sent',
          description: 'Return on email marketing investment',
        },
        {
          value: '-70%',
          label: 'Manual work',
          description: 'Reduction with active automations',
        },
        {
          value: '48h',
          label: 'First live flow',
          description: 'From onboarding to your first automation',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions about email marketing?',
      subtitle: "If you don't find your question here, write to us — we reply the same day.",
      items: [
        {
          question: 'Which email marketing platforms do you work with?',
          answer: 'We work with Mailchimp, ActiveCampaign, Klaviyo, Brevo (Sendinblue), HubSpot, and ConvertKit, among others. If you already have a platform, we adapt to it. If you\'re starting out, we recommend the one that best fits your case.',
        },
        {
          question: 'Do I need a subscriber list to get started?',
          answer: 'Not necessarily. If you already have a list, we optimize and segment it. If you\'re starting from scratch, we design the acquisition strategy alongside the automations, so your list grows and monetizes in parallel.',
        },
        {
          question: 'How do you prevent emails from going to spam?',
          answer: 'We configure technical authentication (SPF, DKIM, DMARC), warm up the domain if it\'s new, maintain list hygiene, and write copy avoiding words that trigger spam filters. 98% of our sends reach the inbox.',
        },
        {
          question: 'How often are emails sent?',
          answer: 'It depends on your audience and goals. Generally, a weekly or biweekly newsletter works well for most businesses. Automations fire based on user behavior, not a fixed calendar.',
        },
        {
          question: 'Can I use my existing templates and designs?',
          answer: 'Yes. If you have templates that already work, we adapt and optimize them. If you prefer to start fresh, we design new pieces aligned with your brand that convert better.',
        },
      ],
    },
    finalCTA: {
      eyebrow: 'Start today',
      title: 'Your list is ready to grow',
      subtitle: 'A 30-minute call is all we need to show you which automations can go live this week.',
      cta: 'Schedule a free call',
      ctaSecondary: 'See other services',
    },
  },
};
