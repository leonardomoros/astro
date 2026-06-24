export interface UxUiTranslations {
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

export const uxUiTranslations: Record<'es' | 'en', UxUiTranslations> = {
  es: {
    hero: {
      eyebrow: 'Diseño UX/UI',
      headingParts: [
        { text: 'Interfaces que enamoran' },
        { text: ' y convierten.', gradient: true },
      ],
      subheading:
        'Diseñamos experiencias digitales centradas en el usuario: desde la investigación y los wireframes hasta el prototipo final listo para desarrollo, con un design system que escala.',
      cta: 'Ver portafolio',
      ctaSecondary: 'Hablar con un diseñador',
    },
    features: {
      eyebrow: 'Capacidades',
      title: 'Diseño que resuelve problemas reales',
      subtitle: 'No diseñamos para ganar premios — diseñamos para que tus usuarios entiendan, confíen y actúen.',
      items: [
        {
          title: 'Investigación de usuarios (UX Research)',
          description: 'Entrevistas, encuestas, análisis de heatmaps y grabaciones de sesión para entender cómo piensan y se comportan tus usuarios antes de dibujar un solo pixel.',
        },
        {
          title: 'Arquitectura de información',
          description: 'Mapeamos el flujo de navegación, las jerarquías de contenido y los sitemap para que los usuarios encuentren lo que buscan sin fricción.',
        },
        {
          title: 'Wireframes y prototipos interactivos',
          description: 'De la idea al prototipo clickeable en Figma. Validamos la estructura y la lógica de navegación antes de invertir tiempo en el diseño visual.',
        },
        {
          title: 'Diseño visual de alta fidelidad',
          description: 'Interfaces pixel-perfect con tipografía, color, espaciado e iconografía coherentes con tu marca. Diseños responsivos para mobile, tablet y desktop.',
        },
        {
          title: 'Design system y componentes',
          description: 'Biblioteca de componentes reutilizables en Figma con variantes, estados y tokens de diseño. Acelera el desarrollo y garantiza consistencia visual.',
        },
        {
          title: 'Pruebas de usabilidad',
          description: 'Testeamos el prototipo con usuarios reales antes del lanzamiento para identificar puntos de fricción, confusión y oportunidades de mejora.',
        },
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'De la investigación al handoff en 4 semanas',
      subtitle: 'Un proceso iterativo que reduce el riesgo de rediseños costosos y garantiza que cada decisión de diseño esté respaldada por datos.',
      steps: [
        {
          title: 'Descubrimiento e investigación',
          description: 'Entendemos tu negocio, tus usuarios y tu competencia. Analizamos datos existentes, hacemos entrevistas y definimos los problemas a resolver con el diseño.',
        },
        {
          title: 'Arquitectura y wireframes',
          description: 'Estructuramos el flujo de navegación y creamos wireframes de baja y media fidelidad. En esta fase resolvemos la lógica antes de definir la estética.',
        },
        {
          title: 'Diseño visual y prototipo',
          description: 'Aplicamos el lenguaje visual sobre los wireframes aprobados: color, tipografía, componentes e imágenes. El resultado es un prototipo interactivo testeable.',
        },
        {
          title: 'Entrega y handoff al desarrollo',
          description: 'Entregamos los archivos Figma organizados con el design system, specs de desarrollo, assets exportados y guías de interacción para el equipo técnico.',
        },
      ],
    },
    results: {
      eyebrow: 'Resultados',
      title: 'Diseño que mueve métricas',
      subtitle: 'Resultados medidos en proyectos de diseño UX/UI completados en los últimos 12 meses.',
      stats: [
        { value: '+38%',  label: 'Tasa de conversión', description: 'Mejora promedio tras rediseño de flujo crítico' },
        { value: '-45%',  label: 'Tasa de abandono',   description: 'Reducción con arquitectura de información mejorada' },
        { value: '2 sem', label: 'Primeros wireframes', description: 'Desde el kick-off hasta wireframes validados' },
        { value: '4.9/5', label: 'Satisfacción usuario', description: 'Promedio en pruebas de usabilidad' },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: '¿Dudas sobre diseño UX/UI?',
      subtitle: 'Si no encuentras tu pregunta aquí, escríbenos — respondemos el mismo día.',
      items: [
        {
          question: '¿Qué diferencia hay entre UX y UI?',
          answer: 'UX (User Experience) es la parte estratégica y funcional: investigación, flujos, wireframes y arquitectura. UI (User Interface) es la parte visual: colores, tipografía, componentes y estética. En proyectos reales van de la mano — un buen diseño resuelve ambas dimensiones a la vez.',
        },
        {
          question: '¿Entregan los archivos Figma editables?',
          answer: 'Sí. Al final del proyecto recibes el archivo Figma completo con el design system, todos los frames organizados por pantalla, componentes con variantes y guía de estilos. Es tuyo para modificar o transferir a cualquier diseñador en el futuro.',
        },
        {
          question: '¿Pueden rediseñar solo una parte de mi sitio o app?',
          answer: 'Sí. Hacemos auditorías de UX puntuales y rediseñamos flujos específicos (onboarding, checkout, formularios, dashboard) sin necesidad de rehacer todo el producto. Es una forma eficiente de resolver cuellos de botella concretos.',
        },
        {
          question: '¿Hacen pruebas con usuarios reales?',
          answer: 'Sí. Incluimos pruebas de usabilidad moderadas o no moderadas según el alcance del proyecto. Reclutamos participantes que coincidan con tu perfil de usuario objetivo y documentamos los hallazgos con clip de video y análisis de comportamiento.',
        },
        {
          question: '¿El diseño está listo para entregar directamente a desarrollo?',
          answer: 'Sí. Nuestro handoff incluye specs de desarrollador (medidas, colores en HEX/RGB, variantes de estado), assets exportados en SVG/PNG y el design system documentado. Trabajamos coordinados con tu equipo técnico para responder dudas durante la implementación.',
        },
      ],
    },
  },

  en: {
    hero: {
      eyebrow: 'UX/UI Design',
      headingParts: [
        { text: 'Interfaces that delight' },
        { text: ' and convert.', gradient: true },
      ],
      subheading:
        'We design user-centered digital experiences: from research and wireframes to the final prototype ready for development, with a scalable design system.',
      cta: 'View portfolio',
      ctaSecondary: 'Talk to a designer',
    },
    features: {
      eyebrow: 'Capabilities',
      title: 'Design that solves real problems',
      subtitle: "We don't design to win awards — we design so your users understand, trust, and act.",
      items: [
        {
          title: 'UX Research',
          description: 'Interviews, surveys, heatmap analysis, and session recordings to understand how your users think and behave before drawing a single pixel.',
        },
        {
          title: 'Information architecture',
          description: 'We map the navigation flow, content hierarchies, and sitemaps so users find what they need without friction.',
        },
        {
          title: 'Wireframes & interactive prototypes',
          description: 'From idea to clickable Figma prototype. We validate structure and navigation logic before investing time in visual design.',
        },
        {
          title: 'High-fidelity visual design',
          description: 'Pixel-perfect interfaces with typography, color, spacing, and iconography consistent with your brand. Responsive designs for mobile, tablet, and desktop.',
        },
        {
          title: 'Design system & components',
          description: 'Reusable component library in Figma with variants, states, and design tokens. Speeds up development and guarantees visual consistency.',
        },
        {
          title: 'Usability testing',
          description: 'We test the prototype with real users before launch to identify friction points, confusion, and opportunities for improvement.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'From research to handoff in 4 weeks',
      subtitle: 'An iterative process that reduces the risk of costly redesigns and ensures every design decision is data-backed.',
      steps: [
        {
          title: 'Discovery & research',
          description: 'We understand your business, users, and competition. We analyze existing data, conduct interviews, and define the problems the design needs to solve.',
        },
        {
          title: 'Architecture & wireframes',
          description: 'We structure the navigation flow and create low-to-mid fidelity wireframes. In this phase we solve the logic before defining the aesthetics.',
        },
        {
          title: 'Visual design & prototype',
          description: 'We apply the visual language over approved wireframes: color, typography, components, and imagery. The result is a testable interactive prototype.',
        },
        {
          title: 'Delivery & dev handoff',
          description: 'We deliver organized Figma files with the design system, dev specs, exported assets, and interaction guides for the technical team.',
        },
      ],
    },
    results: {
      eyebrow: 'Results',
      title: 'Design that moves metrics',
      subtitle: 'Results measured across UX/UI design projects completed in the last 12 months.',
      stats: [
        { value: '+38%',  label: 'Conversion rate',  description: 'Average improvement after critical flow redesign' },
        { value: '-45%',  label: 'Abandonment rate', description: 'Reduction with improved information architecture' },
        { value: '2 wks', label: 'First wireframes',  description: 'From kick-off to validated wireframes' },
        { value: '4.9/5', label: 'User satisfaction', description: 'Average score in usability tests' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions about UX/UI design?',
      subtitle: "If you don't find your answer here, write to us — we reply the same day.",
      items: [
        {
          question: "What's the difference between UX and UI?",
          answer: "UX (User Experience) is the strategic and functional side: research, flows, wireframes, and architecture. UI (User Interface) is the visual side: colors, typography, components, and aesthetics. In real projects they go hand in hand — good design addresses both dimensions at once.",
        },
        {
          question: 'Do you deliver editable Figma files?',
          answer: "Yes. At the end of the project you receive the complete Figma file with the design system, all frames organized by screen, components with variants, and a style guide. It's yours to modify or transfer to any designer in the future.",
        },
        {
          question: 'Can you redesign just one part of my site or app?',
          answer: "Yes. We do focused UX audits and redesign specific flows (onboarding, checkout, forms, dashboard) without redoing the entire product. It's an efficient way to fix specific bottlenecks.",
        },
        {
          question: 'Do you test with real users?',
          answer: 'Yes. We include moderated or unmoderated usability tests depending on the project scope. We recruit participants matching your target user profile and document findings with video clips and behavioral analysis.',
        },
        {
          question: 'Is the design ready to hand off directly to development?',
          answer: 'Yes. Our handoff includes developer specs (measurements, colors in HEX/RGB, state variants), assets exported in SVG/PNG, and a documented design system. We coordinate with your technical team to answer questions during implementation.',
        },
      ],
    },
  },
};
