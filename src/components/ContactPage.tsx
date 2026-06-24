import { useState, useEffect } from 'react';
import { Mail, Clock, Shield, CheckCircle } from 'lucide-react';
import Nav from './Nav';
import Footer from './Footer';
import MultiStepForm from './MultiStepForm';
import { translations } from '../content/translations';
import { contactTranslations } from '../content/contactTranslations';
import type { Lang } from '../content/translations';

const COLOR_FROM = '#a855f7';
const COLOR_TO   = '#7c3aed';

const STEP_ICONS = [Mail, Clock, CheckCircle];

interface Props { initialLang?: Lang }

export default function ContactPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]   = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t  = contactTranslations[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es' ? '/en/contact/' : '/contacto/';

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav lang={lang} t={ht.nav} theme={theme} toggleTheme={toggleTheme} alternateHref={alternateHref} />
      <main>
      {/* ── Hero + Form ─────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        {/* Background dots */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, ${COLOR_FROM} 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.07] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${COLOR_FROM}, ${COLOR_TO})` }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — copy */}
            <div className="lg:pt-8">
              <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.hero.eyebrow}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4 mb-6" style={{ color: 'var(--text)' }}>
                {t.hero.headingParts.map((part, i) =>
                  part.gradient ? (
                    <span
                      key={i}
                      style={{
                        background:           `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`,
                        WebkitBackgroundClip: 'text',
                        backgroundClip:       'text',
                        WebkitTextFillColor:  'transparent',
                        color:                'transparent',
                      }}
                    >{part.text}</span>
                  ) : <span key={i}>{part.text}</span>
                )}
              </h1>
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
                {t.hero.subheading}
              </p>

              {/* Info cards */}
              <div className="space-y-4">
                <a
                  href={`mailto:${t.hero.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 hover:border-purple-500/50 group"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${COLOR_FROM}22`, color: COLOR_FROM }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-purple-400 transition-colors" style={{ color: 'var(--text)' }}>
                      {t.hero.email}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{t.hero.responseTime}</p>
                  </div>
                </a>

                <div
                  className="flex items-start gap-4 p-4 rounded-2xl border"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${COLOR_FROM}22`, color: COLOR_FROM }}
                  >
                    <Shield size={18} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {t.hero.sessionNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form card */}
            <div
              className="rounded-3xl border p-8 shadow-2xl"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <MultiStepForm t={t.form} lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* ── What happens next ───────────────────────────────────────────────── */}
      <section className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.next.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: 'var(--text)' }}>
              {t.next.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.next.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={i} className="relative text-center">
                  {/* Connector line */}
                  {i < t.next.steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-6 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-px"
                      style={{ background: `linear-gradient(to right, ${COLOR_FROM}55, ${COLOR_TO}22)` }}
                    />
                  )}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"
                    style={{ background: `linear-gradient(135deg, ${COLOR_FROM}33, ${COLOR_TO}33)`, color: COLOR_FROM }}
                  >
                    <Icon size={22} />
                  </div>
                  <div
                    className="text-xs font-bold mb-2 px-2 py-0.5 rounded-full inline-block"
                    style={{ background: `${COLOR_FROM}22`, color: COLOR_FROM }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-bold mb-2 text-base" style={{ color: 'var(--text)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      </main>
      <Footer t={ht.footer} />
    </div>
  );
}
