import type { Lang } from './translations';

export interface HeroPart {
  text: string;
  gradient?: boolean;
}

export interface ServiceGridItem {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export interface BannerPoint {
  text: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export interface TechCategory {
  icon: string;
  category: string;
  techs: string[];
}

export interface ServicesPageTranslations {
  hero: {
    eyebrow: string;
    h1: HeroPart[];
    subtitle: string;
  };
  servicesGrid: {
    items: ServiceGridItem[];
  };
  banner: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    points: BannerPoint[];
  };
  process: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    steps: ProcessStep[];
  };
  techStack: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    categories: TechCategory[];
  };
  experience: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    points: { title: string; description: string }[];
    stats: { value: string; label: string }[];
  };
  beyond: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    cards: { icon: string; title: string; description: string }[];
  };
  payments: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    note: string;
    methods: { icon: string; name: string; available: string }[];
  };
}

export const servicesTranslations: Record<Lang, ServicesPageTranslations> = {
  es: {
    hero: {
      eyebrow: 'Nuestros servicios',
      h1: [
        { text: 'Todo lo que necesitas para ' },
        { text: 'crecer en línea', gradient: true },
        { text: '.' },
      ],
      subtitle:
        'Desde la concepción hasta el lanzamiento y más allá, ofrecemos una gama completa de servicios digitales para construir, optimizar y escalar tu presencia en línea.',
    },
    servicesGrid: {
      items: [
        {
          icon: 'Monitor',
          title: 'Desarrollo web profesional',
          description:
            'Sitios web personalizados de alto rendimiento, diseñados para velocidad, escalabilidad y conversión, su base digital.',
          cta: 'Más información',
          href: '/servicios/desarrollo-web/',
        },
        {
          icon: 'TrendingUp',
          title: 'Estrategia y optimización SEO',
          description:
            'Arquitectura SEO basada en datos que posiciona tu marca en los primeros resultados de búsqueda y genera tráfico orgánico cualificado.',
          cta: 'Más información',
          href: '/servicios/estrategia-seo/',
        },
        {
          icon: 'Layers',
          title: 'Páginas de destino centradas en la conversión',
          description:
            'Páginas de destino estratégicamente diseñadas para convertir a sus visitantes en clientes, con seguimiento del rendimiento incorporado.',
          cta: 'Más información',
          href: '/servicios/landing-pages/',
        },
        {
          icon: 'Mail',
          title: 'Automatización del marketing por correo electrónico',
          description:
            'Secuencias y campañas de correo electrónico automatizadas que nutren clientes potenciales, impulsan la retención y el valor de vida del cliente.',
          cta: 'Más información',
          href: '/servicios/email-marketing/',
        },
        {
          icon: 'BarChart3',
          title: 'Campañas de publicidad pagada',
          description:
            'Campañas estratégicas de Google Ads y Meta Ads que optimizan continuamente para maximizar el retorno de la inversión y minimizar el costo de adquisición de clientes.',
          cta: 'Más información',
          href: '/servicios/publicidad-pagada/',
        },
        {
          icon: 'Zap',
          title: 'Optimización y rendimiento del sitio web',
          description:
            'Optimización de velocidad, mejoras en los indicadores clave de rendimiento web (Core Web Vitals) y garantía de máximo rendimiento del sitio web.',
          cta: 'Más información',
          href: '/servicios/optimizacion-web/',
        },
        {
          icon: 'Paintbrush',
          title: 'Diseño UX/UI',
          description:
            'Diseño centrado en el usuario que crea interfaces intuitivas y atractivas que convierten a los visitantes en clientes recurrentes y leales a la marca.',
          cta: 'Más información',
          href: '/servicios/diseno-ux-ui/',
        },
      ],
    },
    banner: {
      eyebrow: 'Por qué importa',
      h2: [
        { text: 'Tu sitio web es tu activo digital ' },
        { text: 'más valioso', gradient: true },
        { text: '.' },
      ],
      subtitle:
        'Mientras tú duermes, tu sitio web trabaja: atrae visitantes, responde preguntas, genera confianza y convierte prospectos en clientes. Un sitio mal construido no solo pierde ventas — aleja a los clientes para siempre.',
      points: [
        { text: 'Disponible 24 / 7 sin descanso' },
        { text: 'Tu mejor vendedor, siempre activo' },
        { text: 'Escala sin límites de horario' },
        { text: 'La primera impresión de tu marca' },
      ],
    },
    process: {
      eyebrow: 'Nuestro proceso',
      h2: [
        { text: 'De la idea al lanzamiento, ' },
        { text: 'sin sorpresas', gradient: true },
        { text: '.' },
      ],
      subtitle:
        'Un proceso claro y colaborativo que garantiza resultados. Cada paso tiene un propósito, un entregable y tu aprobación.',
      steps: [
        {
          icon: 'Search',
          title: 'Consulta inicial',
          description: 'Entendemos tus objetivos, audiencia y competencia para definir la dirección más efectiva.',
        },
        {
          icon: 'Lightbulb',
          title: 'Estrategia a medida',
          description: 'Diseñamos el plan completo: canales, tecnología, KPIs y cronograma adaptado a tu negocio.',
        },
        {
          icon: 'PenTool',
          title: 'Diseño UX / UI',
          description: 'Creamos wireframes y maquetas visuales que equilibran estética, usabilidad y conversión.',
        },
        {
          icon: 'Code2',
          title: 'Desarrollo',
          description: 'Construimos tu sitio con código limpio, rápido y orientado al rendimiento desde el primer commit.',
        },
        {
          icon: 'FileText',
          title: 'Integración de contenido',
          description: 'Incorporamos textos, imágenes y multimedia con estructura semántica y SEO optimizado.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Control de calidad',
          description: 'Validamos velocidad, compatibilidad, accesibilidad y seguridad en cada dispositivo y navegador.',
        },
        {
          icon: 'Rocket',
          title: 'Lanzamiento',
          description: 'Publicamos con monitoreo en tiempo real para garantizar un arranque sin fricciones ni errores.',
        },
        {
          icon: 'TrendingUp',
          title: 'Optimización continua',
          description: 'Analizamos métricas reales y refinamos cada elemento para mejorar resultados mes a mes.',
        },
        {
          icon: 'Headphones',
          title: 'Soporte y crecimiento',
          description: 'Estamos contigo más allá del lanzamiento: actualizaciones, soporte técnico y evolución de tu estrategia.',
        },
      ],
    },
    techStack: {
      eyebrow: 'Tecnología',
      h2: [
        { text: 'Herramientas que ' },
        { text: 'potencian resultados', gradient: true },
        { text: '.' },
      ],
      subtitle: 'Trabajamos con las plataformas y tecnologías líderes de la industria para garantizar rendimiento, escalabilidad y resultados medibles.',
      categories: [
        {
          icon: 'Globe',
          category: 'Web & Frontend',
          techs: ['React', 'Astro', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        },
        {
          icon: 'TrendingUp',
          category: 'SEO',
          techs: ['Google Search Console', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Schema.org'],
        },
        {
          icon: 'Server',
          category: 'CMS & Backend',
          techs: ['WordPress', 'Sanity', 'Node.js', 'PHP', 'REST APIs'],
        },
        {
          icon: 'Mail',
          category: 'Email Marketing',
          techs: ['Mailchimp', 'ActiveCampaign', 'ConvertKit', 'Klaviyo'],
        },
        {
          icon: 'Target',
          category: 'Publicidad',
          techs: ['Google Ads', 'Meta Ads', 'Google Tag Manager', 'Meta Pixel'],
        },
        {
          icon: 'Activity',
          category: 'Analytics',
          techs: ['Google Analytics 4', 'Hotjar', 'Microsoft Clarity', 'Looker Studio'],
        },
        {
          icon: 'PenTool',
          category: 'Diseño',
          techs: ['Figma', 'Adobe Illustrator', 'Adobe XD', 'Webflow'],
        },
      ],
    },
    experience: {
      eyebrow: '¿Por qué GixLabs?',
      h2: [
        { text: 'Experiencia comprobada, ' },
        { text: 'resultados reales', gradient: true },
        { text: '.' },
      ],
      subtitle: 'No somos una agencia genérica. Somos un equipo pequeño y especializado que trata cada proyecto como si fuera el propio.',
      points: [
        {
          title: 'Resultados que puedes medir',
          description: 'Cada proyecto incluye tracking, reportes y métricas claras desde el primer mes.',
        },
        {
          title: 'Comunicación sin rodeos',
          description: 'Sabrás exactamente en qué etapa está tu proyecto, sin jerga técnica ni sorpresas.',
        },
        {
          title: 'Tecnología de alto rendimiento',
          description: 'Sitios rápidos, seguros y optimizados para Core Web Vitals y posicionamiento SEO.',
        },
        {
          title: 'Más allá del lanzamiento',
          description: 'No desaparecemos al entregar: soporte continuo, actualizaciones y crecimiento conjunto.',
        },
      ],
      stats: [
        { value: '5+',   label: 'Años de experiencia' },
        { value: '50+',  label: 'Proyectos entregados' },
        { value: '3',    label: 'Países con clientes' },
        { value: '100%', label: 'Satisfacción del cliente' },
      ],
    },
    beyond: {
      eyebrow: 'Nuestro enfoque',
      h2: [
        { text: 'No vendemos plantillas, ' },
        { text: 'construimos soluciones', gradient: true },
        { text: '.' },
      ],
      subtitle: 'Cada proyecto se diseña y desarrolla desde cero, pensado específicamente para tu negocio, tu audiencia y tus objetivos.',
      cards: [
        {
          icon: 'Sparkles',
          title: 'Diseño exclusivo',
          description: 'Cada diseño es único para tu marca. Nunca verás tu sitio en otro negocio.',
        },
        {
          icon: 'Code2',
          title: 'Código limpio y propio',
          description: 'Construimos desde cero, sin bloatware ni dependencias innecesarias.',
        },
        {
          icon: 'Search',
          title: 'SEO desde el día 1',
          description: 'La arquitectura SEO está integrada en el código, no pegada como parche.',
        },
        {
          icon: 'Zap',
          title: 'Velocidad extrema',
          description: 'Puntuaciones perfectas en Core Web Vitals, no plantillas de 3 MB.',
        },
        {
          icon: 'Link2',
          title: 'Integración a medida',
          description: 'Conectamos con cualquier CRM, pasarela de pago o herramienta que uses.',
        },
        {
          icon: 'Layers',
          title: 'Arquitectura escalable',
          description: 'Construido para crecer contigo sin reescribir todo cuando escales.',
        },
        {
          icon: 'Lock',
          title: 'Seguridad incorporada',
          description: 'Mejores prácticas de seguridad web desde el primer commit, no al final.',
        },
        {
          icon: 'Users',
          title: 'Equipo real, respuestas reales',
          description: 'Hablas con quien construye tu proyecto, no con un chatbot ni un portal de tickets.',
        },
      ],
    },
    payments: {
      eyebrow: 'Métodos de pago',
      h2: [
        { text: 'Pagamos en tu ' },
        { text: 'moneda y plataforma', gradient: true },
        { text: '.' },
      ],
      subtitle: 'Trabajamos con clientes en Venezuela, Estados Unidos y España. Aceptamos los métodos más convenientes para cada región.',
      note: 'Todas las transacciones incluyen confirmación escrita y factura detallada.',
      methods: [
        { icon: 'CreditCard', name: 'PayPal',                available: 'Internacional' },
        { icon: 'Smartphone', name: 'Zelle',                 available: 'Estados Unidos' },
        { icon: 'Wallet',     name: 'Zinli',                 available: 'Venezuela / LATAM' },
        { icon: 'Building2',  name: 'Transferencia bancaria', available: 'Venezuela' },
        { icon: 'Coins',      name: 'Binance Pay',           available: 'Internacional' },
      ],
    },
  },
  en: {
    hero: {
      eyebrow: 'Our Services',
      h1: [
        { text: 'Everything you need to ' },
        { text: 'grow online', gradient: true },
        { text: '.' },
      ],
      subtitle:
        'Website, Google rankings, ads, and automated emails — all working together to bring you more customers.',
    },
    servicesGrid: {
      items: [
        {
          icon: 'Monitor',
          title: 'Web Development',
          description:
            'Your site, built right from day one. Fast, professional, and designed to convert visitors into customers.',
          cta: 'Learn more',
          href: '/en/services/web-development/',
        },
        {
          icon: 'TrendingUp',
          title: 'SEO Strategy',
          description:
            'Show up first when people search for you. Organic visibility that brings in qualified traffic.',
          cta: 'Learn more',
          href: '/en/services/seo-strategy/',
        },
        {
          icon: 'Layers',
          title: 'Landing Pages',
          description:
            'A page built to sell. Designed for your campaigns, with one goal: get the visitor to act.',
          cta: 'Learn more',
          href: '/en/services/landing-pages/',
        },
        {
          icon: 'Mail',
          title: 'Email Marketing',
          description:
            'Stay connected with your customers effortlessly. Automated emails that work while you focus on your business.',
          cta: 'Learn more',
          href: '/en/services/email-marketing/',
        },
        {
          icon: 'BarChart3',
          title: 'Paid Advertising',
          description:
            'Ads that bring in customers, not just clicks. Google and social campaigns managed to maximize your return.',
          cta: 'Learn more',
          href: '/en/services/paid-advertising/',
        },
        {
          icon: 'Zap',
          title: 'Website Optimization',
          description:
            "Site loading slow? We audit and optimize it so you stop losing visitors and search rankings.",
          cta: 'Learn more',
          href: '/en/services/website-optimization/',
        },
        {
          icon: 'Paintbrush',
          title: 'UX/UI Design',
          description:
            "A design that looks great and works even better — built so visitors don't leave without taking action.",
          cta: 'Learn more',
          href: '/en/services/ux-ui-design/',
        },
      ],
    },
    banner: {
      eyebrow: 'Why it matters',
      h2: [
        { text: 'Your website is your most valuable ' },
        { text: 'digital asset', gradient: true },
        { text: '.' },
      ],
      subtitle:
        "While you sleep, your website works: attracting visitors, answering questions, building trust, and turning prospects into customers. A poorly built site doesn't just lose sales — it drives customers away for good.",
      points: [
        { text: 'Available 24 / 7 without breaks' },
        { text: 'Your best salesperson, always on' },
        { text: 'Scales without time constraints' },
        { text: 'The first impression of your brand' },
      ],
    },
    process: {
      eyebrow: 'Our process',
      h2: [
        { text: 'From idea to launch, ' },
        { text: 'no surprises', gradient: true },
        { text: '.' },
      ],
      subtitle:
        'A clear, collaborative process that guarantees results. Every step has a purpose, a deliverable, and your approval.',
      steps: [
        {
          icon: 'Search',
          title: 'Initial Consultation',
          description: 'We learn your goals, audience, and competitive landscape to define the most effective direction.',
        },
        {
          icon: 'Lightbulb',
          title: 'Custom Strategy',
          description: 'We design the full plan: channels, technology, KPIs, and a timeline tailored to your business.',
        },
        {
          icon: 'PenTool',
          title: 'UX / UI Design',
          description: 'We create wireframes and visual mockups that balance aesthetics, usability, and conversion.',
        },
        {
          icon: 'Code2',
          title: 'Development',
          description: 'We build your site with clean, fast, performance-driven code from the very first commit.',
        },
        {
          icon: 'FileText',
          title: 'Content Integration',
          description: 'We incorporate text, images, and multimedia with semantic structure and optimized SEO.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Quality Assurance',
          description: 'We validate speed, compatibility, accessibility, and security across every device and browser.',
        },
        {
          icon: 'Rocket',
          title: 'Launch',
          description: 'We go live with real-time monitoring to ensure a smooth, friction-free rollout.',
        },
        {
          icon: 'TrendingUp',
          title: 'Continuous Optimization',
          description: 'We analyze real metrics and refine every element to improve results month after month.',
        },
        {
          icon: 'Headphones',
          title: 'Support & Growth',
          description: 'We stay with you beyond launch: updates, technical support, and evolution of your strategy.',
        },
      ],
    },
    techStack: {
      eyebrow: 'Technology',
      h2: [
        { text: 'Tools that ' },
        { text: 'power real results', gradient: true },
        { text: '.' },
      ],
      subtitle: 'We work with the industry-leading platforms and technologies to ensure performance, scalability, and measurable outcomes.',
      categories: [
        {
          icon: 'Globe',
          category: 'Web & Frontend',
          techs: ['React', 'Astro', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        },
        {
          icon: 'TrendingUp',
          category: 'SEO',
          techs: ['Google Search Console', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Schema.org'],
        },
        {
          icon: 'Server',
          category: 'CMS & Backend',
          techs: ['WordPress', 'Sanity', 'Node.js', 'PHP', 'REST APIs'],
        },
        {
          icon: 'Mail',
          category: 'Email Marketing',
          techs: ['Mailchimp', 'ActiveCampaign', 'ConvertKit', 'Klaviyo'],
        },
        {
          icon: 'Target',
          category: 'Advertising',
          techs: ['Google Ads', 'Meta Ads', 'Google Tag Manager', 'Meta Pixel'],
        },
        {
          icon: 'Activity',
          category: 'Analytics',
          techs: ['Google Analytics 4', 'Hotjar', 'Microsoft Clarity', 'Looker Studio'],
        },
        {
          icon: 'PenTool',
          category: 'Design',
          techs: ['Figma', 'Adobe Illustrator', 'Adobe XD', 'Webflow'],
        },
      ],
    },
    experience: {
      eyebrow: 'Why GixLabs?',
      h2: [
        { text: 'Proven experience, ' },
        { text: 'real results', gradient: true },
        { text: '.' },
      ],
      subtitle: "We're not a generic agency. We're a small, specialized team that treats every project as if it were our own.",
      points: [
        {
          title: 'Results you can measure',
          description: 'Every project includes tracking, reports, and clear metrics from the very first month.',
        },
        {
          title: 'Straight-to-the-point communication',
          description: "You'll always know exactly where your project stands — no technical jargon, no surprises.",
        },
        {
          title: 'High-performance technology',
          description: 'Fast, secure sites optimized for Core Web Vitals and search engine rankings.',
        },
        {
          title: 'Beyond the launch',
          description: "We don't disappear after delivery: ongoing support, updates, and continued growth together.",
        },
      ],
      stats: [
        { value: '5+',   label: 'Years of experience' },
        { value: '50+',  label: 'Projects delivered' },
        { value: '3',    label: 'Countries with clients' },
        { value: '100%', label: 'Client satisfaction' },
      ],
    },
    beyond: {
      eyebrow: 'Our approach',
      h2: [
        { text: "We don't sell templates, " },
        { text: 'we build solutions', gradient: true },
        { text: '.' },
      ],
      subtitle: 'Every project is designed and built from scratch, crafted specifically for your business, your audience, and your goals.',
      cards: [
        {
          icon: 'Sparkles',
          title: 'Exclusive design',
          description: "Every design is unique to your brand. You'll never see your site on another business.",
        },
        {
          icon: 'Code2',
          title: 'Clean, proprietary code',
          description: 'Built from scratch — no bloatware or unnecessary dependencies slowing you down.',
        },
        {
          icon: 'Search',
          title: 'SEO from day 1',
          description: 'SEO architecture is baked into the code, not bolted on as an afterthought.',
        },
        {
          icon: 'Zap',
          title: 'Extreme speed',
          description: 'Perfect Core Web Vitals scores, not heavy 3 MB templates.',
        },
        {
          icon: 'Link2',
          title: 'Custom integrations',
          description: 'We connect with any CRM, payment gateway, or tool you already use.',
        },
        {
          icon: 'Layers',
          title: 'Scalable architecture',
          description: 'Built to grow with you — no need to rewrite everything when you scale.',
        },
        {
          icon: 'Lock',
          title: 'Security built in',
          description: 'Web security best practices from the very first commit, not as an afterthought.',
        },
        {
          icon: 'Users',
          title: 'Real team, real answers',
          description: "You talk to the people building your project — not a chatbot or a ticket portal.",
        },
      ],
    },
    payments: {
      eyebrow: 'Payment methods',
      h2: [
        { text: 'Pay in your ' },
        { text: 'preferred currency & platform', gradient: true },
        { text: '.' },
      ],
      subtitle: 'We work with clients in Venezuela, the United States, and Spain. We accept the most convenient methods for each region.',
      note: 'All transactions include written confirmation and a detailed invoice.',
      methods: [
        { icon: 'CreditCard', name: 'PayPal',          available: 'International' },
        { icon: 'Smartphone', name: 'Zelle',            available: 'United States' },
        { icon: 'Wallet',     name: 'Zinli',            available: 'Venezuela / LATAM' },
        { icon: 'Building2',  name: 'Bank transfer',    available: 'Venezuela' },
        { icon: 'Coins',      name: 'Binance Pay',      available: 'International' },
      ],
    },
  },
};
