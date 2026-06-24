export interface ContactTranslations {
  hero: {
    eyebrow: string;
    headingParts: { text: string; gradient?: boolean }[];
    subheading: string;
    email: string;
    responseTime: string;
    sessionNote: string;
  };
  form: {
    step1: {
      title: string;
      firstName: string; firstNamePh: string;
      lastName: string;  lastNamePh: string;
      email: string;     emailPh: string;
    };
    step2: {
      title: string;
      hasWebsite: string;
      yes: string; no: string;
      websiteUrl: string; websiteUrlPh: string;
      service: string;
      services: string[];
      budget: string;
      budgets: string[];
    };
    step3: {
      title: string;
      message: string; messagePh: string;
      privacy: string;
    };
    success: {
      title: string; // use {name} placeholder
      body: string;
      separator: string;
      calCta: string;
      calNote: string;
    };
    next: string;
    back: string;
    submit: string;
    sending: string;
    errorGeneral: string;
    errors: {
      required: string;
      emailInvalid: string;
      messageTooShort: string;
    };
    stepLabel: string; // "Paso {current} de {total}" / "Step {current} of {total}"
  };
  next: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
}

export const contactTranslations: Record<'es' | 'en', ContactTranslations> = {
  es: {
    hero: {
      eyebrow: 'Hablemos',
      headingParts: [
        { text: 'Transforma tu ' },
        { text: 'presencia digital.', gradient: true },
      ],
      subheading:
        'Agenda una sesión estratégica gratuita de 30 minutos para analizar tu situación actual y definir cómo transformarla en un motor de crecimiento.',
      email: 'hola@gixlabs.com',
      responseTime: 'Respuesta en menos de 24 horas',
      sessionNote: 'Consulta de 30 minutos — Sin compromiso. Valor completo desde el primer contacto.',
    },
    form: {
      step1: {
        title: '¿Quién eres?',
        firstName: 'Nombre', firstNamePh: 'Juan',
        lastName: 'Apellido', lastNamePh: 'García',
        email: 'Correo electrónico', emailPh: 'juan@empresa.com',
      },
      step2: {
        title: 'Tu proyecto',
        hasWebsite: '¿Tienes sitio web?',
        yes: 'Sí', no: 'No',
        websiteUrl: 'URL de tu sitio web', websiteUrlPh: 'https://tuempresa.com',
        service: 'Estoy interesado en',
        services: [
          'Selecciona un servicio…',
          'Desarrollo Web',
          'Estrategia SEO',
          'Email Marketing',
          'Campañas Pagas',
          'Landing Pages',
          'Estrategia Digital',
          'Ecosistema Digital Completo',
        ],
        budget: 'Presupuesto estimado',
        budgets: [
          'Selecciona un rango…',
          'Menos de $1,000',
          '$1,000 – $3,000',
          '$3,000 – $5,000',
          '$5,000 – $10,000',
          '$10,000+',
        ],
      },
      step3: {
        title: 'Cuéntanos más',
        message: 'Cuéntanos sobre tu proyecto',
        messagePh: 'Describe tu proyecto, objetivos y cualquier detalle que consideres relevante...',
        privacy: '🔒 Tu información está segura. Nunca compartimos tus datos.',
      },
      success: {
        title: '¡Gracias, {name}!',
        body: 'Recibimos tu mensaje. Te responderemos en menos de 24 horas con los próximos pasos.',
        separator: '¿Quieres agendar tu sesión ahora?',
        calCta: 'Agendar llamada ahora',
        calNote: 'Sin compromiso. La sesión es completamente gratuita.',
      },
      next: 'Siguiente →',
      back: '← Atrás',
      submit: 'Enviar mi información',
      sending: 'Enviando...',
      errorGeneral: 'Ocurrió un error al enviar. Por favor intenta de nuevo.',
      errors: {
        required: 'Este campo es obligatorio',
        emailInvalid: 'Ingresa un correo electrónico válido',
        messageTooShort: 'El mensaje debe tener al menos 20 caracteres',
      },
      stepLabel: 'Paso {current} de {total}',
    },
    next: {
      eyebrow: 'Qué sucede después',
      title: 'Tu camino hacia un ecosistema digital completo.',
      steps: [
        {
          title: 'Respuesta inicial',
          description: 'Revisamos tu mensaje y respondemos en menos de 24 horas con una confirmación rápida y preguntas clave antes de agendar la sesión.',
        },
        {
          title: 'Sesión estratégica de 30 min',
          description: 'Llamada profunda para definir objetivos, audiencia, competencia y requisitos técnicos. Primero entendemos el contexto, luego proponemos.',
        },
        {
          title: 'Propuesta personalizada',
          description: 'Recibes una propuesta clara con alcance, timeline, entregables y precio. Sin letra pequeña. Sin sorpresas.',
        },
      ],
    },
  },

  en: {
    hero: {
      eyebrow: "Let's Talk",
      headingParts: [
        { text: 'Transform your ' },
        { text: 'digital presence.', gradient: true },
      ],
      subheading:
        'Book a free 30-minute strategy session to analyze your current situation and define how to turn it into a growth engine.',
      email: 'hello@gixlabs.com',
      responseTime: 'Response in less than 24 hours',
      sessionNote: '30-minute consultation — No commitment. Full value from the first contact.',
    },
    form: {
      step1: {
        title: 'Who are you?',
        firstName: 'First name', firstNamePh: 'John',
        lastName: 'Last name',  lastNamePh: 'Smith',
        email: 'Email address', emailPh: 'john@company.com',
      },
      step2: {
        title: 'Your project',
        hasWebsite: 'Do you have a website?',
        yes: 'Yes', no: 'No',
        websiteUrl: 'Your website URL', websiteUrlPh: 'https://yourcompany.com',
        service: "I'm interested in",
        services: [
          'Select a service…',
          'Web Development',
          'SEO Strategy',
          'Email Marketing',
          'Paid Campaigns',
          'Landing Pages',
          'Digital Strategy',
          'Complete Digital Ecosystem',
        ],
        budget: 'Estimated budget',
        budgets: [
          'Select a range…',
          'Under $1,000',
          '$1,000 – $3,000',
          '$3,000 – $5,000',
          '$5,000 – $10,000',
          '$10,000+',
        ],
      },
      step3: {
        title: 'Tell us more',
        message: 'Tell us about your project',
        messagePh: 'Describe your project, goals, and any details you consider relevant...',
        privacy: '🔒 Your information is safe. We never share your data.',
      },
      success: {
        title: 'Thank you, {name}!',
        body: "We received your message. We'll get back to you within 24 hours with next steps.",
        separator: 'In the meantime, want to book your session now?',
        calCta: 'Book a call now',
        calNote: 'No commitment. The session is completely free.',
      },
      next: 'Next →',
      back: '← Back',
      submit: 'Send my information',
      sending: 'Sending...',
      errorGeneral: 'An error occurred while sending. Please try again.',
      errors: {
        required: 'This field is required',
        emailInvalid: 'Enter a valid email address',
        messageTooShort: 'Message must be at least 20 characters',
      },
      stepLabel: 'Step {current} of {total}',
    },
    next: {
      eyebrow: 'What happens next',
      title: 'Your path to a complete digital ecosystem.',
      steps: [
        {
          title: 'Initial response',
          description: 'We review your message and respond within 24 hours with a quick confirmation and key questions before scheduling the session.',
        },
        {
          title: '30-min strategy session',
          description: 'A deep-dive call to define goals, audience, competition, and technical requirements. We understand first, then propose.',
        },
        {
          title: 'Custom proposal',
          description: 'You receive a clear proposal with scope, timeline, deliverables, and pricing. No fine print. No surprises.',
        },
      ],
    },
  },
};
