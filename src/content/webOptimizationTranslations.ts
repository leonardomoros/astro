export interface WebOptTranslations {
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

export const webOptimizationTranslations: Record<'es' | 'en', WebOptTranslations> = {
  es: {
    hero: {
      eyebrow: 'Optimización Web',
      headingParts: [
        { text: 'Tu sitio, más rápido.' },
        { text: ' Tus conversiones, más altas.', gradient: true },
      ],
      subheading:
        'Auditamos y optimizamos tu sitio web para que cargue en menos de 2 segundos, pase los Core Web Vitals y convierta más sin cambiar tu diseño.',
      cta: 'Quiero auditoría gratuita',
      ctaSecondary: 'Ver casos de éxito',
    },
    features: {
      eyebrow: 'Capacidades',
      title: 'Velocidad que se traduce en resultados',
      subtitle: 'Cada milisegundo cuenta. Un sitio más rápido retiene más usuarios, posiciona mejor en Google y convierte a mayor tasa.',
      items: [
        {
          title: 'Auditoría técnica completa',
          description: 'Analizamos Lighthouse, PageSpeed Insights, GTmetrix y las herramientas de Chrome DevTools para identificar todos los cuellos de botella técnicos de tu sitio.',
        },
        {
          title: 'Core Web Vitals (LCP, FID, CLS)',
          description: 'Optimizamos los tres indicadores que Google usa como factor de ranking: Largest Contentful Paint, First Input Delay y Cumulative Layout Shift.',
        },
        {
          title: 'Optimización de imágenes y assets',
          description: 'Convertimos imágenes a WebP/AVIF, implementamos lazy loading, comprimimos CSS/JS, eliminamos recursos bloqueantes y activamos compresión Brotli/Gzip.',
        },
        {
          title: 'Caché y CDN',
          description: 'Configuramos estrategias de caché agresiva, headers HTTP correctos y distribuimos assets en un CDN global para reducir la latencia sin importar dónde esté tu usuario.',
        },
        {
          title: 'Optimización de código y bundle',
          description: 'Code splitting, tree shaking, minificación, eliminación de JS/CSS no utilizado y reducción del tiempo de bloqueo del hilo principal.',
        },
        {
          title: 'Monitoreo continuo',
          description: 'Implementamos alertas automáticas para detectar regresiones de rendimiento. Recibes un reporte mensual con las métricas clave y las acciones tomadas.',
        },
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'De la auditoría al 90+ en Lighthouse',
      subtitle: 'Un proceso metódico que prioriza los cambios de mayor impacto y garantiza que las mejoras sean medibles desde el primer día.',
      steps: [
        {
          title: 'Auditoría y diagnóstico',
          description: 'Corremos análisis con Lighthouse, WebPageTest y Chrome DevTools en múltiples dispositivos y conexiones. Mapeamos todos los problemas con su impacto estimado en el score.',
        },
        {
          title: 'Priorización y plan de acción',
          description: 'Ordenamos los cambios por impacto vs. esfuerzo. Los quick wins (compresión, lazy load, caché) van primero. Los cambios estructurales se planifican con fechas claras.',
        },
        {
          title: 'Implementación y pruebas',
          description: 'Aplicamos cada optimización en un entorno de staging antes de producción. Cada cambio se mide individualmente para confirmar que mejora las métricas objetivo.',
        },
        {
          title: 'Verificación y monitoreo',
          description: 'Validamos el resultado final con las mismas herramientas del diagnóstico inicial. Dejamos alertas activas y programamos revisiones periódicas para mantener el rendimiento.',
        },
      ],
    },
    results: {
      eyebrow: 'Resultados',
      title: 'Velocidad real, no solo números',
      subtitle: 'Resultados medidos en proyectos de optimización completados en los últimos 12 meses.',
      stats: [
        { value: '+40 pts', label: 'Score Lighthouse', description: 'Mejora promedio en Performance score' },
        { value: '-60%',    label: 'Tiempo de carga',  description: 'Reducción del LCP vs. estado inicial' },
        { value: '100/100', label: 'Core Web Vitals',  description: 'Sitios que pasan todos los indicadores' },
        { value: '+25%',    label: 'Tasa de conversión', description: 'Mejora atribuida a mayor velocidad' },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: '¿Dudas sobre optimización web?',
      subtitle: 'Si no encuentras tu pregunta aquí, escríbenos — respondemos el mismo día.',
      items: [
        {
          question: '¿Qué son los Core Web Vitals y por qué importan?',
          answer: 'Son tres métricas que Google usa como factor de ranking desde 2021: LCP (velocidad de carga del contenido principal), FID (tiempo de respuesta al primer clic) y CLS (estabilidad visual del layout). Sitios que los pasan tienen ventaja en el posicionamiento orgánico y menor tasa de rebote.',
        },
        {
          question: '¿Funciona con WordPress, Shopify u otros CMS?',
          answer: 'Sí. Trabajamos con WordPress, Shopify, Webflow, Squarespace, sitios en Astro, Next.js y cualquier stack. Las técnicas de optimización se adaptan a cada plataforma: en WordPress usamos plugins como WP Rocket y Imagify; en otros CMS implementamos las optimizaciones directamente en el código.',
        },
        {
          question: '¿Cuánto tiempo tarda en mejorar el puntaje?',
          answer: 'Los quick wins (compresión, caché, lazy load) se pueden implementar en 2-5 días y el impacto es inmediato. Optimizaciones más profundas como code splitting o cambios de arquitectura pueden tomar 2-4 semanas. En promedio, nuestros proyectos logran mejoras visibles en 1-2 semanas.',
        },
        {
          question: '¿Necesito optimización si mi sitio ya carga "rápido" a ojo?',
          answer: 'La percepción subjetiva no siempre coincide con las métricas reales. Un sitio puede sentirse rápido en una conexión de fibra y computador de escritorio, pero ser lento para un usuario en móvil con 4G. Google mide con datos reales de campo (CrUX), por lo que el score de laboratorio puede diferir del real.',
        },
        {
          question: '¿Afecta la velocidad al SEO y a las conversiones?',
          answer: 'Directamente. Google confirmó que la velocidad es factor de ranking en búsqueda móvil y escritorio. Además, estudios de Google y Deloitte muestran que cada 0.1s de mejora en el tiempo de carga aumenta las conversiones un 8% en e-commerce. La optimización de velocidad es una de las inversiones con mayor ROI en marketing digital.',
        },
      ],
    },
  },

  en: {
    hero: {
      eyebrow: 'Web Optimization',
      headingParts: [
        { text: 'Your site, faster.' },
        { text: ' Your conversions, higher.', gradient: true },
      ],
      subheading:
        'We audit and optimize your website to load in under 2 seconds, pass Core Web Vitals, and convert more without changing your design.',
      cta: 'Get a free audit',
      ctaSecondary: 'See success stories',
    },
    features: {
      eyebrow: 'Capabilities',
      title: 'Speed that translates into results',
      subtitle: 'Every millisecond counts. A faster site retains more users, ranks higher on Google, and converts at a higher rate.',
      items: [
        {
          title: 'Full technical audit',
          description: 'We analyze Lighthouse, PageSpeed Insights, GTmetrix, and Chrome DevTools to identify every technical bottleneck on your site.',
        },
        {
          title: 'Core Web Vitals (LCP, FID, CLS)',
          description: 'We optimize the three metrics Google uses as a ranking factor: Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift.',
        },
        {
          title: 'Image & asset optimization',
          description: 'We convert images to WebP/AVIF, implement lazy loading, compress CSS/JS, eliminate render-blocking resources, and enable Brotli/Gzip compression.',
        },
        {
          title: 'Caching & CDN',
          description: 'We configure aggressive caching strategies, correct HTTP headers, and distribute assets on a global CDN to reduce latency regardless of user location.',
        },
        {
          title: 'Code & bundle optimization',
          description: 'Code splitting, tree shaking, minification, removal of unused JS/CSS, and reduction of main thread blocking time.',
        },
        {
          title: 'Continuous monitoring',
          description: 'We set up automatic alerts to catch performance regressions. You receive a monthly report with key metrics and actions taken.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'From audit to 90+ on Lighthouse',
      subtitle: 'A methodical process that prioritizes the highest-impact changes and ensures improvements are measurable from day one.',
      steps: [
        {
          title: 'Audit & diagnosis',
          description: 'We run analysis with Lighthouse, WebPageTest, and Chrome DevTools across multiple devices and connections. We map every issue with its estimated impact on the score.',
        },
        {
          title: 'Prioritization & action plan',
          description: 'We sort changes by impact vs. effort. Quick wins (compression, lazy load, caching) come first. Structural changes are planned with clear timelines.',
        },
        {
          title: 'Implementation & testing',
          description: 'We apply each optimization in a staging environment before production. Every change is measured individually to confirm it improves the target metrics.',
        },
        {
          title: 'Verification & monitoring',
          description: 'We validate the final result with the same tools used in the initial diagnosis. We set up active alerts and schedule periodic reviews to maintain performance.',
        },
      ],
    },
    results: {
      eyebrow: 'Results',
      title: 'Real speed, not just numbers',
      subtitle: 'Results measured across optimization projects completed in the last 12 months.',
      stats: [
        { value: '+40 pts', label: 'Lighthouse score',   description: 'Average improvement in Performance score' },
        { value: '-60%',    label: 'Load time',          description: 'LCP reduction vs. initial state' },
        { value: '100/100', label: 'Core Web Vitals',    description: 'Sites passing all three indicators' },
        { value: '+25%',    label: 'Conversion rate',    description: 'Improvement attributed to faster speed' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions about web optimization?',
      subtitle: "If you don't find your answer here, write to us — we reply the same day.",
      items: [
        {
          question: 'What are Core Web Vitals and why do they matter?',
          answer: 'They are three metrics Google uses as a ranking factor since 2021: LCP (loading speed of the main content), FID (response time to the first click), and CLS (visual stability of the layout). Sites that pass them have an advantage in organic rankings and lower bounce rates.',
        },
        {
          question: 'Does it work with WordPress, Shopify, or other CMS?',
          answer: 'Yes. We work with WordPress, Shopify, Webflow, Squarespace, Astro, Next.js, and any stack. Optimization techniques adapt to each platform: for WordPress we use plugins like WP Rocket and Imagify; for other CMS we implement optimizations directly in the code.',
        },
        {
          question: 'How long does it take to improve the score?',
          answer: 'Quick wins (compression, caching, lazy load) can be implemented in 2-5 days with immediate impact. Deeper optimizations like code splitting or architectural changes may take 2-4 weeks. On average, our projects achieve visible improvements in 1-2 weeks.',
        },
        {
          question: 'Do I need optimization if my site already feels "fast"?',
          answer: 'Subjective perception doesn\'t always match real metrics. A site may feel fast on a fiber connection with a desktop computer, but be slow for a mobile user on 4G. Google measures with real field data (CrUX), so the lab score may differ from the real-world score.',
        },
        {
          question: 'Does speed affect SEO and conversions?',
          answer: 'Directly. Google confirmed that speed is a ranking factor for both mobile and desktop search. Additionally, studies from Google and Deloitte show that every 0.1s improvement in load time increases conversions by 8% in e-commerce. Speed optimization is one of the highest-ROI investments in digital marketing.',
        },
      ],
    },
  },
};
