import { useState, useEffect } from 'react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';
import Nav from './Nav';
import Footer from './Footer';
import { translations } from '../content/translations';
import type { Lang } from '../content/translations';

const COLOR_FROM = '#a855f7';
const COLOR_TO   = '#7c3aed';
const CALENDLY_URL = 'https://calendly.com/gixlabprojects/30min?embed_domain=gixlabs.com&embed_type=Inline&background_color=1e293b&text_color=ffffff&primary_color=b587fb';

const copy = {
  es: {
    eyebrow:   'Todo listo',
    title:     '¡Mensaje recibido',
    titleEnd:  '!',
    subtitle:  'Te responderemos en menos de 24 horas. Mientras tanto, reserva tu sesión estratégica gratuita de 30 minutos directamente en nuestra agenda.',
    badge:     'Sesión gratuita · 30 min · Sin compromiso',
    calTitle:  'Elige tu horario',
    calSub:    'Selecciona el día y la hora que mejor te convienen. La sesión es por videollamada.',
    services:  'Explorar servicios',
    servicesHref: '/servicios/',
    noName:    '',
  },
  en: {
    eyebrow:   'All set',
    title:     'Message received',
    titleEnd:  '!',
    subtitle:  "We'll get back to you within 24 hours. In the meantime, book your free 30-minute strategy session directly on our calendar.",
    badge:     'Free session · 30 min · No commitment',
    calTitle:  'Pick your time',
    calSub:    'Select the day and time that works best for you. The session is via video call.',
    services:  'Explore services',
    servicesHref: '/en/services/',
    noName:    '',
  },
};

interface Props { initialLang?: Lang }

export default function ThankYouPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]   = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [name, setName]   = useState('');

  const t  = copy[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es' ? '/en/thank-you/' : '/gracias/';

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const n = params.get(lang === 'es' ? 'nombre' : 'name') || '';
    setName(n);
  }, [lang]);

  useEffect(() => {
    // Load Calendly inline widget assets
    if (document.querySelector('[data-calendly-css]')) return;

    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.setAttribute('data-calendly-css', '1');
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src   = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav lang={lang} t={ht.nav} theme={theme} toggleTheme={toggleTheme} alternateHref={alternateHref} />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, ${COLOR_FROM} 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${COLOR_FROM}, ${COLOR_TO})` }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-2xl">
          {/* Animated check */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: `linear-gradient(135deg, ${COLOR_FROM}22, ${COLOR_TO}22)`,
              border: `2px solid ${COLOR_FROM}66`,
            }}
          >
            <CheckCircle size={40} style={{ color: COLOR_FROM }} />
          </div>

          <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.eyebrow}</span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5" style={{ color: 'var(--text)' }}>
            {t.title}
            {name && (
              <span
                style={{
                  background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`,
                  WebkitBackgroundClip: 'text', backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent', color: 'transparent',
                }}
              >
                {', '}{name}
              </span>
            )}
            {t.titleEnd}
          </h1>

          <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
            {t.subtitle}
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: `${COLOR_FROM}18`, color: COLOR_FROM, border: `1px solid ${COLOR_FROM}44` }}>
            <Clock size={14} />
            {t.badge}
          </div>
        </div>
      </section>

      {/* ── Calendly embed ───────────────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              {t.calTitle}
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>{t.calSub}</p>
          </div>

          {/* Calendly inline widget */}
          <div
            className="rounded-3xl overflow-hidden border"
            style={{ borderColor: `${COLOR_FROM}33`, background: 'var(--bg-card)' }}
          >
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=${encodeURIComponent('1a1a2e')}&text_color=${encodeURIComponent('e2e8f0')}&primary_color=${encodeURIComponent('a855f7')}`}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </section>

      {/* ── Services link ────────────────────────────────────────────────────── */}
      <section className="py-12 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <a
            href={t.servicesHref}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: COLOR_FROM }}
          >
            {t.services}
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer t={ht.footer} />
    </div>
  );
}
