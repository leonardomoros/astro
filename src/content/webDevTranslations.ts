export type HeroPart = { text: string; gradient?: boolean };

export interface WebDevTranslations {
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
  stack: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    categories: { icon: string; name: string; techs: string[] }[];
  };
  faq: {
    eyebrow: string;
    h2: HeroPart[];
    subtitle: string;
    items: { question: string; answer: string }[];
  };
}

export const webDevTranslations: Record<'es' | 'en', WebDevTranslations> = {
  es: {
    hero: {
      breadcrumb: { homeLabel: 'Inicio', homeHref: '/', servicesLabel: 'Servicios', servicesHref: '/servicios/', current: 'Desarrollo Web' },
      eyebrow: 'Desarrollo Web',
      h1: [{ text: 'Sitios web que ' }, { text: 'trabajan por ti', gradient: true }, { text: '.' }],
      subtitle: 'Diseñamos y desarrollamos plataformas digitales a medida: rápidas, escalables y optimizadas para convertir visitantes en clientes desde el primer día.',
      ctaPrimary: 'Iniciar proyecto',
      ctaSecondary: 'Ver nuestro trabajo',
    },
    features: {
      eyebrow: 'Qué incluye',
      h2: [{ text: 'Todo lo que necesitas, ' }, { text: 'nada que no', gradient: true }, { text: '.' }],
      subtitle: 'Cada proyecto es único. No usamos plantillas. Cada sitio que construimos es diseñado y programado desde cero para tus objetivos específicos.',
      items: [
        { icon: 'Layers',      title: 'Diseño exclusivo',          description: 'Sin templates ni constructores visuales. Tu sitio es único, diseñado específicamente para tu marca e industria.' },
        { icon: 'Zap',         title: 'Velocidad extrema',         description: 'Lighthouse 90+ garantizado. Core Web Vitals optimizados para que Google te premie y tus usuarios no se vayan.' },
        { icon: 'Monitor',     title: 'Mobile-first',              description: 'Diseñado primero para móvil y luego para escritorio. Perfecto en cualquier dispositivo y resolución.' },
        { icon: 'Search',      title: 'SEO técnico incluido',      description: 'Estructura semántica, meta tags, schema markup y velocidad de carga desde el primer commit, no como un extra al final.' },
        { icon: 'FileText',    title: 'Panel de administración',   description: 'Si lo necesitas, integramos un CMS intuitivo para que puedas actualizar tu contenido sin tocar una sola línea de código.' },
        { icon: 'Headphones',  title: 'Soporte post-lanzamiento',  description: 'No desaparecemos al entregar. Ofrecemos soporte técnico y mantenimiento para que tu sitio siempre funcione.' },
      ],
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      h2: [{ text: 'Un proceso claro, ' }, { text: 'sin sorpresas', gradient: true }, { text: '.' }],
      subtitle: 'Cada etapa tiene entregables definidos y revisión conjunta. Siempre sabes en qué punto está tu proyecto.',
      steps: [
        { number: '01', icon: 'Lightbulb', title: 'Descubrimiento',  description: 'Analizamos tu negocio, audiencia y competencia. Definimos objetivos claros antes de escribir una sola línea de código.' },
        { number: '02', icon: 'PenTool',   title: 'Diseño',          description: 'Wireframes, prototipos y diseño visual. Iteramos hasta que la experiencia de usuario sea exactamente lo que necesitas.' },
        { number: '03', icon: 'Code2',     title: 'Desarrollo',       description: 'Código limpio, probado y documentado. Metodología ágil con revisiones constantes para que siempre sepas el estado del proyecto.' },
        { number: '04', icon: 'Rocket',    title: 'Lanzamiento',     description: 'Deploy optimizado, dominio configurado y entrenamiento para tu equipo. Tu sitio en producción desde el primer día.' },
      ],
    },
    stack: {
      eyebrow: 'Tecnologías',
      h2: [{ text: 'Stack moderno, ' }, { text: 'resultados duraderos', gradient: true }, { text: '.' }],
      subtitle: 'Elegimos la tecnología correcta para cada proyecto. Priorizamos velocidad, mantenibilidad y escalabilidad sobre tendencias.',
      categories: [
        { icon: 'Monitor',  name: 'Frontend',         techs: ['Astro', 'React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
        { icon: 'FileText', name: 'CMS & Contenido',  techs: ['WordPress', 'Sanity', 'Contentful', 'Ghost', 'Payload'] },
        { icon: 'Server',   name: 'Backend & APIs',   techs: ['Node.js', 'Supabase', 'Firebase', 'PostgreSQL', 'REST', 'GraphQL'] },
        { icon: 'Globe',    name: 'Hosting & Deploy', techs: ['Vercel', 'Netlify', 'Cloudflare Pages', 'DigitalOcean', 'VPS'] },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      h2: [{ text: 'Lo que siempre ' }, { text: 'nos preguntan', gradient: true }, { text: '.' }],
      subtitle: 'Si tienes una duda que no está aquí, escríbenos — respondemos el mismo día.',
      items: [
        {
          question: '¿Cuánto tiempo tarda en construirse un sitio web?',
          answer: 'Depende del alcance. Un sitio institucional con 5-8 páginas puede estar listo en 3-4 semanas. Un proyecto más complejo con integraciones, CMS o funcionalidades a medida puede tomar 6-10 semanas. Siempre te damos un cronograma claro al inicio.',
        },
        {
          question: '¿Puedo actualizar el contenido yo mismo después del lanzamiento?',
          answer: 'Sí. Si tu proyecto lo requiere, integramos un CMS intuitivo (como WordPress o Sanity) para que puedas editar textos, imágenes y páginas sin conocimientos técnicos. Si prefieres que lo gestionemos nosotros, también podemos hacerlo.',
        },
        {
          question: '¿El sitio va a funcionar bien en Google?',
          answer: 'El SEO técnico va incluido en todos nuestros proyectos: URLs limpias, meta tags, schema markup, velocidad optimizada y sitemap. No es un add-on extra — es la forma en que construimos desde el primer commit.',
        },
        {
          question: '¿Trabajan con clientes fuera de Venezuela?',
          answer: 'Sí. Trabajamos con clientes en Venezuela, Estados Unidos y España. Toda la coordinación es remota y los pagos los manejamos mediante PayPal, Zelle, Zinli, transferencia bancaria o Binance Pay.',
        },
        {
          question: '¿Qué necesito para empezar?',
          answer: 'Solo necesitas tener claros tus objetivos y a quién va dirigido tu sitio. Nosotros te guiamos en el resto: brief, dominio, hosting, diseño y desarrollo. El punto de partida es una llamada inicial gratuita.',
        },
      ],
    },
  },

  en: {
    hero: {
      breadcrumb: { homeLabel: 'Home', homeHref: '/en/', servicesLabel: 'Services', servicesHref: '/en/services/', current: 'Web Development' },
      eyebrow: 'Web Development',
      h1: [{ text: 'Websites that ' }, { text: 'work for you', gradient: true }, { text: '.' }],
      subtitle: 'We design and build custom digital platforms — fast, scalable, and optimized to convert visitors into customers from day one.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'See our work',
    },
    features: {
      eyebrow: "What's included",
      h2: [{ text: 'Everything you need, ' }, { text: 'nothing you don\'t', gradient: true }, { text: '.' }],
      subtitle: 'Every project is unique. No templates. Every site we build is designed and coded from scratch for your specific goals.',
      items: [
        { icon: 'Layers',      title: 'Exclusive design',        description: 'No templates or page builders. Your site is unique, designed specifically for your brand and industry.' },
        { icon: 'Zap',         title: 'Extreme speed',           description: 'Lighthouse 90+ guaranteed. Core Web Vitals optimized so Google rewards you and your users stay.' },
        { icon: 'Monitor',     title: 'Mobile-first',            description: 'Designed for mobile first, then desktop. Perfect on any device and resolution.' },
        { icon: 'Search',      title: 'Technical SEO included',  description: 'Semantic structure, meta tags, schema markup, and load speed from the first commit — not as a last-minute extra.' },
        { icon: 'FileText',    title: 'Admin panel',             description: 'If you need it, we integrate an intuitive CMS so you can update content without touching a single line of code.' },
        { icon: 'Headphones',  title: 'Post-launch support',     description: "We don't disappear after delivery. We offer technical support and maintenance to keep your site running smoothly." },
      ],
    },
    process: {
      eyebrow: 'How we work',
      h2: [{ text: 'A clear process, ' }, { text: 'no surprises', gradient: true }, { text: '.' }],
      subtitle: 'Each stage has defined deliverables and joint review. You always know exactly where your project stands.',
      steps: [
        { number: '01', icon: 'Lightbulb', title: 'Discovery',    description: 'We analyze your business, audience, and competition. We define clear goals before writing a single line of code.' },
        { number: '02', icon: 'PenTool',   title: 'Design',       description: 'Wireframes, prototypes, and visual design. We iterate until the user experience is exactly what you need.' },
        { number: '03', icon: 'Code2',     title: 'Development',  description: 'Clean, tested, documented code. Agile methodology with constant reviews so you always know the project status.' },
        { number: '04', icon: 'Rocket',    title: 'Launch',       description: 'Optimized deploy, domain configured, and team training. Your site in production from day one.' },
      ],
    },
    stack: {
      eyebrow: 'Technologies',
      h2: [{ text: 'Modern stack, ' }, { text: 'lasting results', gradient: true }, { text: '.' }],
      subtitle: 'We choose the right technology for each project. We prioritize speed, maintainability, and scalability over trends.',
      categories: [
        { icon: 'Monitor',  name: 'Frontend',          techs: ['Astro', 'React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
        { icon: 'FileText', name: 'CMS & Content',     techs: ['WordPress', 'Sanity', 'Contentful', 'Ghost', 'Payload'] },
        { icon: 'Server',   name: 'Backend & APIs',    techs: ['Node.js', 'Supabase', 'Firebase', 'PostgreSQL', 'REST', 'GraphQL'] },
        { icon: 'Globe',    name: 'Hosting & Deploy',  techs: ['Vercel', 'Netlify', 'Cloudflare Pages', 'DigitalOcean', 'VPS'] },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: [{ text: 'What people ' }, { text: 'always ask us', gradient: true }, { text: '.' }],
      subtitle: "If your question isn't here, write to us — we reply the same day.",
      items: [
        {
          question: 'How long does it take to build a website?',
          answer: 'It depends on scope. An institutional site with 5-8 pages can be ready in 3-4 weeks. A more complex project with integrations, CMS, or custom features may take 6-10 weeks. We always give you a clear timeline upfront.',
        },
        {
          question: 'Can I update the content myself after launch?',
          answer: 'Yes. If your project requires it, we integrate an intuitive CMS (like WordPress or Sanity) so you can edit text, images, and pages without technical knowledge. If you prefer we manage it, we can do that too.',
        },
        {
          question: 'Will the site rank well on Google?',
          answer: 'Technical SEO is included in all our projects: clean URLs, meta tags, schema markup, optimized speed, and a sitemap. It\'s not an add-on — it\'s how we build from the very first commit.',
        },
        {
          question: 'Do you work with clients outside Venezuela?',
          answer: 'Yes. We work with clients in Venezuela, the United States, and Spain. All coordination is remote and we handle payments via PayPal, Zelle, Zinli, bank transfer, or Binance Pay.',
        },
        {
          question: 'What do I need to get started?',
          answer: 'You just need to have your goals clear and know who your site is for. We guide you through the rest: brief, domain, hosting, design, and development. The starting point is a free initial call.',
        },
      ],
    },
  },
};
