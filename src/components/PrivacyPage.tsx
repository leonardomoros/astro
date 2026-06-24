import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { translations } from '../content/translations';
import type { Lang } from '../content/translations';

interface Props { initialLang?: Lang }

const content = {
  es: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: junio 2025',
    sections: [
      {
        heading: '1. Responsable',
        body: 'GixLabs es un estudio digital independiente operado por Leonardo Moros. Puedes contactarnos en hola@gixlabs.com para cualquier consulta relacionada con tus datos.',
      },
      {
        heading: '2. Datos que recopilamos',
        body: 'Recopilamos únicamente los datos que tú nos proporcionas a través del formulario de contacto: nombre completo, correo electrónico, nombre de empresa (opcional) y mensaje. No recopilamos datos sensibles ni financieros.',
      },
      {
        heading: '3. Para qué usamos tus datos',
        body: 'Utilizamos tus datos exclusivamente para responder a tu solicitud de información o presupuesto y enviarte comunicaciones relacionadas con los servicios que has consultado. No los vendemos ni cedemos a terceros.',
      },
      {
        heading: '4. Consentimiento',
        body: 'Al completar y enviar el formulario de contacto, consientes el tratamiento de tus datos con las finalidades descritas en esta política.',
      },
      {
        heading: '5. Herramientas que utilizamos',
        body: 'Para operar el sitio web y gestionar las comunicaciones utilizamos: Resend (envío de correos electrónicos) y Vercel (alojamiento web y análisis de rendimiento anónimo). Estas herramientas pueden procesar tus datos en sus propios servidores bajo sus respectivas políticas de privacidad.',
      },
      {
        heading: '6. Tiempo de conservación',
        body: 'Conservamos tus datos durante el tiempo necesario para atender tu solicitud y un máximo de 2 años adicionales, salvo que solicites su eliminación antes.',
      },
      {
        heading: '7. Tus derechos',
        body: 'Puedes solicitar en cualquier momento el acceso, rectificación o eliminación de tus datos personales escribiéndonos a hola@gixlabs.com. Atenderemos tu solicitud en un plazo máximo de 30 días.',
      },
      {
        heading: '8. Cambios en esta política',
        body: 'Podemos actualizar esta política en cualquier momento. La fecha de última actualización siempre estará visible al inicio de este documento.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: June 2025',
    sections: [
      {
        heading: '1. Who We Are',
        body: 'GixLabs is an independent digital studio operated by Leonardo Moros. You can contact us at hola@gixlabs.com for any questions related to your data.',
      },
      {
        heading: '2. Data We Collect',
        body: 'We only collect data you provide through the contact form: full name, email address, company name (optional), and message. We do not collect sensitive or financial data.',
      },
      {
        heading: '3. How We Use Your Data',
        body: 'We use your data exclusively to respond to your information or quote request and to send you communications related to the services you have inquired about. We do not sell or share your data with third parties.',
      },
      {
        heading: '4. Consent',
        body: 'By completing and submitting the contact form, you consent to the processing of your data for the purposes described in this policy.',
      },
      {
        heading: '5. Tools We Use',
        body: 'We use the following tools to operate the website and manage communications: Resend (email delivery) and Vercel (web hosting and anonymous performance analytics). These tools may process your data on their own servers under their respective privacy policies.',
      },
      {
        heading: '6. Data Retention',
        body: 'We retain your data for as long as necessary to handle your request, and for a maximum of 2 additional years, unless you request deletion earlier.',
      },
      {
        heading: '7. Your Rights',
        body: 'You can request access, rectification, or deletion of your personal data at any time by writing to us at hola@gixlabs.com. We will respond within 30 days.',
      },
      {
        heading: '8. Changes to This Policy',
        body: 'We may update this policy at any time. The last updated date will always be visible at the top of this document.',
      },
    ],
  },
};

export default function PrivacyPage({ initialLang = 'es' }: Props) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const ht = translations[lang];
  const c = content[lang];
  const alternateHref = lang === 'es' ? '/en/privacy/' : '/privacidad/';

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') root.classList.add('light');
    else root.classList.remove('light');
  }, [theme]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav lang={lang} setLang={setLang} t={ht.nav} theme={theme} toggleTheme={() => setTheme(p => p === 'dark' ? 'light' : 'dark')} alternateHref={alternateHref} />
      <main>
        <section className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text)' }}>{c.title}</h1>
          <p className="text-sm mb-14" style={{ color: 'var(--text-muted)' }}>{c.updated}</p>
          <div className="space-y-10">
            {c.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>{section.heading}</h2>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer t={ht.footer} />
    </div>
  );
}
