export type Lang = 'es' | 'en';

export interface HeroPart {
  text: string;
  gradient?: boolean;
}

export interface ServiceItem {
  label: string;
  href: string;
}

export interface StatMetric {
  number: string;
  description: string;
}

export interface ServiceCard {
  slug: string;
  headline: string;
  description: string;
  href: string;
}

export interface Translations {
  nav: {
    services: string;
    servicesHref: string;
    servicesItems: ServiceItem[];
    contact: string;
    contactHref: string;
    faqs: string;
    faqsHref: string;
    cta: string;
    ctaHref: string;
  };
  hero: {
    eyebrow: string;
    h1: HeroPart[];
    subtitle: string;
    primaryCTA: string;
    primaryCTAHref: string;
    secondaryCTA: string;
    secondaryCTAHref: string;
    stats: { value: string; label: string }[];
  };
  statsSection: {
    eyebrow: string;
    headline: string;
    paragraph: string;
    metrics: StatMetric[];
  };
  servicesSection: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    cta: string;
    learnMore: string;
    items: ServiceCard[];
  };
  webDevPhilosophy: {
    eyebrow: string;
    h2: HeroPart[];
    paragraph: string;
    cta: string;
    ctaHref: string;
    features: string[];
  };
  portfolioSection: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    cta: string;
    ctaHref: string;
    projects: {
      name: string;
      category: string;
      description: string;
      tags: string[];
      href: string;
      image: string;
      location: string;
      imagePosition?: string;
    }[];
  };
  methodologySection: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    phases: {
      number: string;
      title: string;
      description: string;
      details: string[];
    }[];
  };
  finalCTA: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    primaryCTA: string;
    primaryCTAHref: string;
    secondaryCTA: string;
    secondaryCTAHref: string;
    trust: { value: string; label: string }[];
  };
  footer: {
    tagline: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    social: { label: string; href: string; icon: string }[];
    copyright: string;
  };
}

export const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      services: 'Servicios',
      servicesHref: '/servicios/',
      servicesItems: [
        { label: 'Desarrollo Web',    href: '/servicios/desarrollo-web/' },
        { label: 'Estrategia SEO',    href: '/servicios/estrategia-seo/' },
        { label: 'Landing Pages',     href: '/servicios/landing-pages/' },
        { label: 'Email Marketing',   href: '/servicios/email-marketing/' },
        { label: 'Publicidad Pagada', href: '/servicios/publicidad-pagada/' },
        { label: 'Optimización Web',  href: '/servicios/optimizacion-web/' },
        { label: 'Diseño UX/UI',      href: '/servicios/diseno-ux-ui/' },
      ],
      contact: 'Contacto',
      contactHref: '/contacto/',
      faqs: 'Preguntas Frecuentes',
      faqsHref: '/preguntas-frecuentes/',
      cta: 'Comienza un Proyecto',
      ctaHref: '/contacto/',
    },
    hero: {
      eyebrow: 'Agencia Digital',
      h1: [
        { text: 'Tu negocio merece una ' },
        { text: 'presencia digital', gradient: true },
        { text: ' que trabaje por ti.' },
      ],
      subtitle:
        'Diseñamos y gestionamos tu sitio web, tu posicionamiento en Google, tus campañas de publicidad y tus correos automáticos — todo conectado para que atraigas más clientes y vendas más.',
      primaryCTA: 'Sesión Gratuita',
      primaryCTAHref: '/contacto/',
      secondaryCTA: 'Portafolio',
      secondaryCTAHref: '#portafolio',
      stats: [
        { value: '+150', label: 'Proyectos entregados' },
        { value: '98%', label: 'Satisfacción' },
        { value: '+15', label: 'Años de experiencia' },
        { value: '3', label: 'Continentes' },
      ],
    },
    statsSection: {
      eyebrow: 'Los números no mienten',
      headline: 'Tus clientes ya están buscando lo que vendes.',
      paragraph:
        'La pregunta no es si buscan en Google — sino si te encuentran a ti, o a tu competencia.',
      metrics: [
        {
          number: '94%',
          description:
            'de las personas juzga un negocio por su sitio web en menos de un segundo. La primera impresión es digital.',
        },
        {
          number: '68%',
          description:
            'de los clics en Google va a los primeros 3 resultados. Si no estás ahí, es como no existir.',
        },
        {
          number: '3.8x',
          description:
            'más ingresos generan los negocios con presencia digital bien estructurada frente a los que no la tienen.',
        },
        {
          number: '53%',
          description:
            'de los usuarios abandona un sitio si tarda más de 3 segundos en cargar. La velocidad es una estrategia de ventas.',
        },
      ],
    },
    servicesSection: {
      eyebrow: 'Nuestros Servicios',
      headline: 'Seis servicios. Una sola estrategia conectada.',
      subtitle:
        'No vendemos servicios sueltos. Cada pieza está diseñada para trabajar con las demás y multiplicar tus resultados.',
      cta: 'Ver todos los servicios',
      learnMore: 'Ver servicio',
      items: [
        {
          slug: 'web',
          headline: 'Desarrollo Web',
          description:
            'Sitios rápidos, modernos y optimizados para convertir visitantes en clientes desde el primer clic.',
          href: '/servicios/desarrollo-web/',
        },
        {
          slug: 'strategy',
          headline: 'Estrategia Digital',
          description:
            'Analizamos tu mercado y construimos un plan que conecta todos tus canales digitales hacia un solo objetivo.',
          href: '/servicios/estrategia-digital/',
        },
        {
          slug: 'seo',
          headline: 'Estrategia SEO',
          description:
            'Posicionamos tu negocio en Google para que tus clientes te encuentren antes de encontrar a tu competencia.',
          href: '/servicios/seo/',
        },
        {
          slug: 'email',
          headline: 'Email Marketing',
          description:
            'Flujos automáticos que nutren, convierten y retienen clientes — sin que tengas que levantar un dedo.',
          href: '/servicios/email-marketing/',
        },
        {
          slug: 'ads',
          headline: 'Publicidad Pagada',
          description:
            'Campañas de Google Ads y Meta Ads que maximizan tu retorno y generan clientes a demanda.',
          href: '/servicios/publicidad-pagada/',
        },
        {
          slug: 'landing',
          headline: 'Landing Pages',
          description:
            'Páginas de aterrizaje diseñadas con un solo objetivo: transformar visitas en prospectos y ventas.',
          href: '/servicios/landing-pages/',
        },
      ],
    },
    webDevPhilosophy: {
      eyebrow: 'Nuestra filosofía',
      h2: [
        { text: 'No creamos ' },
        { text: 'sitios web', gradient: true },
        { text: '. Diseñamos ' },
        { text: 'plataformas digitales', gradient: true },
        { text: '.' },
      ],
      paragraph:
        'Un sitio web sin estrategia es solo un folleto en línea. Nosotros construimos sistemas digitales que atraen, convierten y retienen clientes — integrando SEO, publicidad, email y analítica desde el primer día.',
      cta: 'Conoce nuestro proceso',
      ctaHref: '/proceso/',
      features: [
        'Velocidad técnica optimizada para conversión',
        'Diseño centrado en la experiencia del usuario',
        'SEO técnico integrado desde el primer día',
        'Conectado con todos tus canales digitales',
      ],
    },
    portfolioSection: {
      eyebrow: 'Nuestro Portafolio',
      headline: 'Proyectos que hablan por sí solos.',
      subtitle:
        'Cada proyecto es una historia de crecimiento digital. Aquí algunos de nuestros trabajos más recientes.',
      cta: 'Ver portafolio completo',
      ctaHref: '/portafolio/',
      projects: [
        {
          name: 'Herrería Rua',
          category: 'E-Commerce',
          description:
            'Sitio web con tienda online para empresa de herrería, reparación de santamarías y soldadura especializada.',
          tags: ['WordPress', 'E-Commerce', 'Desarrollo Web'],
          href: '/portafolio/herreria-rua/',
          image: '/images/portfolio/herreriarua.jpg.png',
          location: 'Venezuela',
          imagePosition: 'left top',
        },
        {
          name: 'IBERIDIA',
          category: 'Desarrollo Web',
          description:
            'Plataforma web corporativa para empresa de soluciones innovadoras en la industria farmacéutica y alimentaria.',
          tags: ['WordPress', 'Desarrollo Web', 'Corporativo'],
          href: '/portafolio/iberidia/',
          image: '/images/portfolio/iberidia.jpg.webp',
          location: 'España',
        },
        {
          name: 'EG Lawn Sprinklers',
          category: 'Desarrollo Web',
          description:
            'Sitio profesional para empresa de instalación de sistemas de riego y cuidado de jardines en Staten Island, NY.',
          tags: ['WordPress', 'Desarrollo Web'],
          href: '/portafolio/eg-lawn-sprinklers/',
          image: '/images/portfolio/eglawnsprinklers.jpg.png',
          location: 'New York',
        },
        {
          name: 'SICAFARM',
          category: 'Desarrollo Web',
          description:
            'Sitio corporativo para importadora y distribuidora de reactivos y materias primas para la industria farmacéutica.',
          tags: ['WordPress', 'Desarrollo Web', 'Corporativo'],
          href: '/portafolio/sicafarm/',
          image: '/images/portfolio/sicafarm.jpg.png',
          location: 'Venezuela',
          imagePosition: 'left top',
        },
        {
          name: 'AKSU Global',
          category: 'Desarrollo Web',
          description:
            'Presencia digital completa para marca venezolana de consumibles automotrices con 15 años en el mercado.',
          tags: ['WordPress', 'Desarrollo Web', 'SEO'],
          href: '/portafolio/aksu-global/',
          image: '/images/portfolio/aksu.jpg.png',
          location: 'Venezuela',
        },
        {
          name: 'JC Store',
          category: 'E-Commerce',
          description:
            'Tienda online de forros y accesorios para dispositivos móviles con catálogo digital y experiencia de compra optimizada.',
          tags: ['WordPress', 'E-Commerce'],
          href: '/portafolio/jc-store/',
          image: '/images/portfolio/jcstore.jpg.png',
          location: 'Venezuela',
        },
      ],
    },
    methodologySection: {
      eyebrow: 'Nuestro Proceso',
      headline: 'Seis fases. Un resultado garantizado.',
      subtitle: 'Cada proyecto sigue el mismo proceso riguroso que nos permite entregar resultados predecibles y medibles.',
      phases: [
        {
          number: '01',
          title: 'Descubrimiento',
          description: 'Entendemos tu negocio, tu mercado y tus objetivos antes de mover un solo píxel.',
          details: [
            'Análisis de tu situación digital actual',
            'Investigación de competidores y mercado',
            'Definición de objetivos y métricas de éxito',
            'Reunión de alineación con tu equipo',
          ],
        },
        {
          number: '02',
          title: 'Estrategia',
          description: 'Diseñamos el plan digital completo: canales, mensajes, tiempos y recursos necesarios.',
          details: [
            'Mapa de canales digitales prioritarios',
            'Estrategia de contenido y mensajes clave',
            'Cronograma de implementación',
            'Presupuesto y proyección de resultados',
          ],
        },
        {
          number: '03',
          title: 'Diseño',
          description: 'Creamos cada pieza visual con intención: desde el sitio web hasta los materiales de campaña.',
          details: [
            'Diseño UI/UX centrado en conversión',
            'Sistema de identidad visual consistente',
            'Prototipo interactivo para validación',
            'Materiales gráficos para todos los canales',
          ],
        },
        {
          number: '04',
          title: 'Desarrollo',
          description: 'Construimos y configuramos cada herramienta de tu ecosistema digital con precisión técnica.',
          details: [
            'Desarrollo web optimizado para velocidad y SEO',
            'Integración de automatizaciones y CRM',
            'Configuración de campañas publicitarias',
            'Pruebas de calidad exhaustivas antes del lanzamiento',
          ],
        },
        {
          number: '05',
          title: 'Lanzamiento',
          description: 'Activamos todo de forma coordinada para maximizar el impacto desde el primer día.',
          details: [
            'Checklist de lanzamiento de 50+ puntos',
            'Monitoreo en tiempo real las primeras 72 horas',
            'Ajustes inmediatos basados en primeros datos',
            'Comunicación de lanzamiento a tu audiencia',
          ],
        },
        {
          number: '06',
          title: 'Optimización',
          description: 'Analizamos, aprendemos y mejoramos continuamente para que tus resultados crezcan mes a mes.',
          details: [
            'Reportes mensuales de rendimiento',
            'A/B testing continuo de creativos y copys',
            'Ajuste de presupuestos según ROI',
            'Sesiones estratégicas de revisión trimestral',
          ],
        },
      ],
    },
    finalCTA: {
      eyebrow: '¿Listo para crecer?',
      headline: 'Tu próximo cliente ya está buscando lo que ofreces.',
      subtitle: 'Agenda una sesión gratuita de 30 minutos. Sin compromisos. Solo resultados.',
      primaryCTA: 'Agendar sesión gratuita',
      primaryCTAHref: '/contacto/',
      secondaryCTA: 'Ver portafolio',
      secondaryCTAHref: '/portafolio/',
      trust: [
        { value: '+150', label: 'Proyectos entregados' },
        { value: '98%', label: 'Clientes satisfechos' },
        { value: '+15', label: 'Años de experiencia' },
      ],
    },
    footer: {
      tagline: 'Diseñamos ecosistemas digitales que atraen, convierten y retienen clientes.',
      columns: [
        {
          title: 'Servicios',
          links: [
            { label: 'Desarrollo Web',    href: '/servicios/desarrollo-web/' },
            { label: 'Estrategia SEO',    href: '/servicios/estrategia-seo/' },
            { label: 'Landing Pages',     href: '/servicios/landing-pages/' },
            { label: 'Email Marketing',   href: '/servicios/email-marketing/' },
            { label: 'Publicidad Pagada', href: '/servicios/publicidad-pagada/' },
            { label: 'Optimización Web',  href: '/servicios/optimizacion-web/' },
            { label: 'Diseño UX/UI',      href: '/servicios/diseno-ux-ui/' },
          ],
        },
        {
          title: 'Empresa',
          links: [
            { label: 'Portafolio',            href: '/#portafolio' },
            { label: 'Nuestros Servicios',    href: '/servicios/' },
            { label: 'Preguntas Frecuentes',  href: '/preguntas-frecuentes/' },
            { label: 'Contacto',              href: '/contacto/' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Política de Privacidad', href: '/privacidad/' },
            { label: 'Términos de Uso', href: '/terminos/' },
          ],
        },
      ],
      social: [
        { label: 'Instagram', href: 'https://instagram.com/gixlabs', icon: 'Instagram' },
        { label: 'LinkedIn', href: 'https://linkedin.com/company/gixlabs', icon: 'Linkedin' },
        { label: 'YouTube', href: 'https://youtube.com/@gixlabs', icon: 'Youtube' },
      ],
      copyright: '© 2025 GixLabs. Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      servicesHref: '/en/services/',
      servicesItems: [
        { label: 'Web Development',      href: '/en/services/web-development/' },
        { label: 'SEO Strategy',         href: '/en/services/seo-strategy/' },
        { label: 'Landing Pages',        href: '/en/services/landing-pages/' },
        { label: 'Email Marketing',      href: '/en/services/email-marketing/' },
        { label: 'Paid Advertising',     href: '/en/services/paid-advertising/' },
        { label: 'Website Optimization', href: '/en/services/website-optimization/' },
        { label: 'UX/UI Design',         href: '/en/services/ux-ui-design/' },
      ],
      contact: 'Contact',
      contactHref: '/en/contact/',
      faqs: 'FAQs',
      faqsHref: '/en/faqs/',
      cta: 'Start a Project',
      ctaHref: '/en/contact/',
    },
    hero: {
      eyebrow: 'Digital Agency',
      h1: [
        { text: 'Your business deserves a ' },
        { text: 'digital presence', gradient: true },
        { text: ' that works for you.' },
      ],
      subtitle:
        'We build and manage your website, Google rankings, ad campaigns, and automated emails — all connected so you attract more customers and grow faster.',
      primaryCTA: 'Free Consultation',
      primaryCTAHref: '/en/contact/',
      secondaryCTA: 'Portfolio',
      secondaryCTAHref: '#portafolio',
      stats: [
        { value: '+150', label: 'Projects Delivered' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '+15', label: 'Years Experience' },
        { value: '3', label: 'Continents' },
      ],
    },
    statsSection: {
      eyebrow: "The numbers don't lie",
      headline: 'Your customers are already searching for what you sell.',
      paragraph:
        "The question isn't whether they search on Google — it's whether they find you, or your competitor.",
      metrics: [
        {
          number: '94%',
          description:
            'of people judge a business by its website before anything else. Your first impression is digital.',
        },
        {
          number: '68%',
          description:
            "of all Google clicks go to the top 3 results. If you're not there, you're invisible to most of your market.",
        },
        {
          number: '3.8x',
          description:
            'more revenue generated by businesses with a strong, connected digital presence versus those without one.',
        },
        {
          number: '53%',
          description:
            "of mobile users leave a website that takes more than 3 seconds to load. Speed isn't optional — it's a sales strategy.",
        },
      ],
    },
    servicesSection: {
      eyebrow: 'Our Services',
      headline: 'Six services. One connected strategy.',
      subtitle:
        "We don't sell isolated services. Every piece is designed to work with the others and multiply your results.",
      cta: 'View all services',
      learnMore: 'View service',
      items: [
        {
          slug: 'web',
          headline: 'Web Development',
          description:
            'Fast, modern websites built to convert visitors into customers from the very first click.',
          href: '/en/services/web-development/',
        },
        {
          slug: 'strategy',
          headline: 'Digital Strategy',
          description:
            'We map your market and build a plan that aligns every digital channel toward the same goal.',
          href: '/en/services/digital-strategy/',
        },
        {
          slug: 'seo',
          headline: 'SEO Strategy',
          description:
            'We position your business on Google so your customers find you before they find the competition.',
          href: '/en/services/seo/',
        },
        {
          slug: 'email',
          headline: 'Email Marketing',
          description:
            'Automated email flows that nurture, convert, and retain customers — without you lifting a finger.',
          href: '/en/services/email-marketing/',
        },
        {
          slug: 'ads',
          headline: 'Paid Advertising',
          description:
            'Google Ads and Meta Ads campaigns built to maximize your return and generate customers on demand.',
          href: '/en/services/paid-advertising/',
        },
        {
          slug: 'landing',
          headline: 'Landing Pages',
          description:
            'Landing pages designed with one purpose: turning visits into leads and sales.',
          href: '/en/services/landing-pages/',
        },
      ],
    },
    webDevPhilosophy: {
      eyebrow: 'Our philosophy',
      h2: [
        { text: "We don't build " },
        { text: 'websites', gradient: true },
        { text: '. We design ' },
        { text: 'digital platforms', gradient: true },
        { text: '.' },
      ],
      paragraph:
        'A website without strategy is just an online brochure. We build digital systems that attract, convert, and retain customers — integrating SEO, advertising, email, and analytics from day one.',
      cta: 'See our process',
      ctaHref: '/en/process/',
      features: [
        'Technical speed optimized for conversion',
        'User experience-centered design',
        'Technical SEO built in from day one',
        'Connected with all your digital channels',
      ],
    },
    portfolioSection: {
      eyebrow: 'Our Portfolio',
      headline: 'Projects that speak for themselves.',
      subtitle:
        'Every project is a story of digital growth. Here are some of our most recent works.',
      cta: 'View full portfolio',
      ctaHref: '/en/portfolio/',
      projects: [
        {
          name: 'Herrería Rua',
          category: 'E-Commerce',
          description:
            'Website with online store for a metalwork, rolling-door maintenance, and specialized welding company.',
          tags: ['WordPress', 'E-Commerce', 'Web Dev'],
          href: '/en/portfolio/herreria-rua/',
          image: '/images/portfolio/herreriarua.jpg.png',
          location: 'Venezuela',
          imagePosition: 'left top',
        },
        {
          name: 'IBERIDIA',
          category: 'Web Development',
          description:
            'Corporate web platform for a company offering innovative solutions to the pharmaceutical and food industries.',
          tags: ['WordPress', 'Web Dev', 'Corporate'],
          href: '/en/portfolio/iberidia/',
          image: '/images/portfolio/iberidia.jpg.webp',
          location: 'Spain',
        },
        {
          name: 'EG Lawn Sprinklers',
          category: 'Web Development',
          description:
            'Professional website for a lawn care and sprinkler installation company serving Staten Island, NY.',
          tags: ['WordPress', 'Web Dev'],
          href: '/en/portfolio/eg-lawn-sprinklers/',
          image: '/images/portfolio/eglawnsprinklers.jpg.png',
          location: 'New York',
        },
        {
          name: 'SICAFARM',
          category: 'Web Development',
          description:
            'Corporate site for an importer and distributor of reagents and raw materials for the pharmaceutical industry.',
          tags: ['WordPress', 'Web Dev', 'Corporate'],
          href: '/en/portfolio/sicafarm/',
          image: '/images/portfolio/sicafarm.jpg.png',
          location: 'Venezuela',
          imagePosition: 'left top',
        },
        {
          name: 'AKSU Global',
          category: 'Web Development',
          description:
            'Full digital presence for a Venezuelan automotive consumables brand with 15 years in the market.',
          tags: ['WordPress', 'Web Dev', 'SEO'],
          href: '/en/portfolio/aksu-global/',
          image: '/images/portfolio/aksu.jpg.png',
          location: 'Venezuela',
        },
        {
          name: 'JC Store',
          category: 'E-Commerce',
          description:
            'Online store for mobile device cases and accessories with an optimized shopping experience.',
          tags: ['WordPress', 'E-Commerce'],
          href: '/en/portfolio/jc-store/',
          image: '/images/portfolio/jcstore.jpg.png',
          location: 'Venezuela',
        },
      ],
    },
    methodologySection: {
      eyebrow: 'Our Process',
      headline: 'Six phases. One guaranteed outcome.',
      subtitle: 'Every project follows the same rigorous process that lets us deliver predictable, measurable results.',
      phases: [
        {
          number: '01',
          title: 'Discovery',
          description: 'We learn your business, market, and goals before moving a single pixel.',
          details: [
            'Analysis of your current digital footprint',
            'Competitor and market research',
            'Definition of goals and success metrics',
            'Alignment meeting with your team',
          ],
        },
        {
          number: '02',
          title: 'Strategy',
          description: 'We design the complete digital plan: channels, messaging, timelines, and required resources.',
          details: [
            'Map of priority digital channels',
            'Content strategy and key messaging',
            'Implementation timeline',
            'Budget and results projection',
          ],
        },
        {
          number: '03',
          title: 'Design',
          description: 'We create every visual piece with intent — from the website to campaign materials.',
          details: [
            'Conversion-centered UI/UX design',
            'Consistent visual identity system',
            'Interactive prototype for validation',
            'Graphic assets for all channels',
          ],
        },
        {
          number: '04',
          title: 'Development',
          description: 'We build and configure every tool in your digital ecosystem with technical precision.',
          details: [
            'Speed- and SEO-optimized web development',
            'Automation and CRM integrations',
            'Ad campaign configuration',
            'Thorough quality testing before launch',
          ],
        },
        {
          number: '05',
          title: 'Launch',
          description: 'We activate everything in a coordinated way to maximize impact from day one.',
          details: [
            '50+ point pre-launch checklist',
            'Real-time monitoring for the first 72 hours',
            'Immediate adjustments based on early data',
            'Launch communication to your audience',
          ],
        },
        {
          number: '06',
          title: 'Optimization',
          description: 'We analyze, learn, and continuously improve so your results grow month after month.',
          details: [
            'Monthly performance reports',
            'Continuous A/B testing of creatives and copy',
            'Budget adjustments based on ROI',
            'Quarterly strategic review sessions',
          ],
        },
      ],
    },
    finalCTA: {
      eyebrow: 'Ready to grow?',
      headline: 'Your next customer is already searching for what you offer.',
      subtitle: 'Book a free 30-minute session. No strings attached. Just results.',
      primaryCTA: 'Book a free session',
      primaryCTAHref: '/en/contact/',
      secondaryCTA: 'View portfolio',
      secondaryCTAHref: '/en/portfolio/',
      trust: [
        { value: '+150', label: 'Projects delivered' },
        { value: '98%', label: 'Client satisfaction' },
        { value: '+15', label: 'Years of experience' },
      ],
    },
    footer: {
      tagline: 'We design digital ecosystems that attract, convert, and retain customers.',
      columns: [
        {
          title: 'Services',
          links: [
            { label: 'Web Development',      href: '/en/services/web-development/' },
            { label: 'SEO Strategy',         href: '/en/services/seo-strategy/' },
            { label: 'Landing Pages',        href: '/en/services/landing-pages/' },
            { label: 'Email Marketing',      href: '/en/services/email-marketing/' },
            { label: 'Paid Advertising',     href: '/en/services/paid-advertising/' },
            { label: 'Website Optimization', href: '/en/services/website-optimization/' },
            { label: 'UX/UI Design',         href: '/en/services/ux-ui-design/' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'Portfolio',      href: '/en/#portafolio' },
            { label: 'Our Services',   href: '/en/services/' },
            { label: 'FAQs',           href: '/en/faqs/' },
            { label: 'Contact',        href: '/en/contact/' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', href: '/en/privacy/' },
            { label: 'Terms of Use', href: '/en/terms/' },
          ],
        },
      ],
      social: [
        { label: 'Instagram', href: 'https://instagram.com/gixlabs', icon: 'Instagram' },
        { label: 'LinkedIn', href: 'https://linkedin.com/company/gixlabs', icon: 'Linkedin' },
        { label: 'YouTube', href: 'https://youtube.com/@gixlabs', icon: 'Youtube' },
      ],
      copyright: '© 2025 GixLabs. All rights reserved.',
    },
  },
};
