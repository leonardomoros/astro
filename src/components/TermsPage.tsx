import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { translations } from '../content/translations';
import type { Lang } from '../content/translations';

interface Props { initialLang?: Lang }

const content = {
  es: {
    title: 'Términos de Uso',
    updated: 'Última actualización: junio 2025',
    sections: [
      {
        heading: '1. Aceptación de los términos',
        body: 'Al acceder y utilizar el sitio web gixlabs.com, aceptas estos Términos de Uso en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, te pedimos que no utilices el sitio.',
      },
      {
        heading: '2. Sobre GixLabs',
        body: 'GixLabs es un estudio digital independiente que ofrece servicios de diseño y desarrollo web, estrategia SEO, publicidad pagada, email marketing, diseño UX/UI y optimización web. Operamos bajo el nombre comercial GixLabs.',
      },
      {
        heading: '3. Uso del sitio web',
        body: 'Este sitio web tiene fines informativos y comerciales. Puedes navegar y utilizar el formulario de contacto para consultar sobre nuestros servicios. Queda prohibido usar el sitio para actividades ilícitas, enviar contenido malicioso o intentar acceder a sistemas no autorizados.',
      },
      {
        heading: '4. Propiedad intelectual',
        body: 'Todos los textos, imágenes, diseños, logotipos y demás contenidos de este sitio son propiedad de GixLabs o de sus respectivos autores y están protegidos por las leyes de propiedad intelectual aplicables. Queda prohibida su reproducción total o parcial sin autorización expresa.',
      },
      {
        heading: '5. Contenido de terceros',
        body: 'Este sitio puede incluir enlaces a sitios web de terceros. GixLabs no se responsabiliza del contenido, la disponibilidad ni las prácticas de privacidad de esos sitios externos.',
      },
      {
        heading: '6. Limitación de responsabilidad',
        body: 'GixLabs no garantiza que el sitio web esté disponible de forma ininterrumpida ni libre de errores. No somos responsables de daños directos, indirectos o consecuentes derivados del uso o la imposibilidad de uso del sitio web.',
      },
      {
        heading: '7. Modificaciones',
        body: 'Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios entrarán en vigor en el momento de su publicación en este sitio.',
      },
      {
        heading: '8. Contacto',
        body: 'Para cualquier consulta sobre estos términos, puedes escribirnos a hola@gixlabs.com.',
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    updated: 'Last updated: June 2025',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing and using the website gixlabs.com, you agree to these Terms of Use in full. If you disagree with any part of these terms, please do not use the site.',
      },
      {
        heading: '2. About GixLabs',
        body: 'GixLabs is an independent digital studio offering web design and development, SEO strategy, paid advertising, email marketing, UX/UI design, and web optimization services. We operate under the trade name GixLabs.',
      },
      {
        heading: '3. Use of the Website',
        body: 'This website is for informational and commercial purposes. You may browse and use the contact form to inquire about our services. It is prohibited to use the site for unlawful activities, send malicious content, or attempt to access unauthorized systems.',
      },
      {
        heading: '4. Intellectual Property',
        body: 'All text, images, designs, logos, and other content on this site are the property of GixLabs or their respective authors and are protected by applicable intellectual property laws. Reproduction in whole or in part without express authorization is prohibited.',
      },
      {
        heading: '5. Third-Party Content',
        body: 'This site may include links to third-party websites. GixLabs is not responsible for the content, availability, or privacy practices of those external sites.',
      },
      {
        heading: '6. Limitation of Liability',
        body: 'GixLabs does not guarantee that the website will be available uninterruptedly or error-free. We are not liable for direct, indirect, or consequential damages arising from the use or inability to use the website.',
      },
      {
        heading: '7. Modifications',
        body: 'We reserve the right to modify these Terms of Use at any time. Changes will take effect upon publication on this site.',
      },
      {
        heading: '8. Contact',
        body: 'For any questions about these terms, you can write to us at hola@gixlabs.com.',
      },
    ],
  },
};

export default function TermsPage({ initialLang = 'es' }: Props) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const ht = translations[lang];
  const c = content[lang];
  const alternateHref = lang === 'es' ? '/en/terms/' : '/terminos/';

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
