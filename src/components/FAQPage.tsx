import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import Nav from './Nav';
import Footer from './Footer';
import { translations } from '../content/translations';
import { faqPageTranslations } from '../content/faqPageTranslations';
import type { Lang } from '../content/translations';

const COLOR_FROM = '#a855f7';
const COLOR_TO   = '#7c3aed';

interface Props { initialLang?: Lang }

export default function FAQPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]         = useState<Lang>(initialLang);
  const [theme, setTheme]       = useState<'dark' | 'light'>('dark');
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch]     = useState('');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const t  = faqPageTranslations[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es' ? '/en/faq/' : '/preguntas-frecuentes/';

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return t.categories
      .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
      .map(cat => ({
        ...cat,
        questions: cat.questions.filter(item =>
          !q ||
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter(cat => cat.questions.length > 0);
  }, [t, activeCategory, search]);

  const totalVisible = filtered.reduce((n, c) => n + c.questions.length, 0);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav
        lang={lang} t={ht.nav} theme={theme}
        toggleTheme={toggleTheme} alternateHref={alternateHref}
      />
      <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, ${COLOR_FROM} 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${COLOR_FROM}, ${COLOR_TO})` }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${COLOR_FROM}33, ${COLOR_TO}33)`, color: COLOR_FROM }}
            >
              <HelpCircle size={28} />
            </div>
          </div>
          <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.hero.eyebrow}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: 'var(--text)' }}>
            {t.hero.title}
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: 'var(--text-muted)' }}>
            {t.hero.subtitle}
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'var(--text-muted)' }}
            />
            <input
              type="text"
              value={search}
              onChange={e => { setSearch(e.target.value); setOpenItem(null); }}
              placeholder={t.hero.searchPlaceholder}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm outline-none transition-all duration-200"
              style={{
                background:   'var(--bg-card)',
                borderColor:  search ? `${COLOR_FROM}66` : 'var(--border)',
                color:        'var(--text)',
                boxShadow:    search ? `0 0 0 3px ${COLOR_FROM}18` : 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* Category chips */}
      <div className="sticky top-0 z-20 border-b" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
        <div className="container mx-auto px-4 md:px-6 py-3 flex gap-2 flex-wrap justify-center">
          {[{ id: 'all', label: t.allLabel }, ...t.categories].map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenItem(null); }}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background:  isActive ? `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})` : 'var(--bg-card)',
                  color:       isActive ? '#fff' : 'var(--text-muted)',
                  border:      isActive ? 'none' : '1px solid var(--border)',
                  boxShadow:   isActive ? `0 4px 16px ${COLOR_FROM}33` : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ body */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {totalVisible === 0 ? (
            <div className="text-center py-20">
              <Search size={40} className="mx-auto mb-4 opacity-30" style={{ color: 'var(--text-muted)' }} />
              <p style={{ color: 'var(--text-muted)' }}>{t.hero.noResults}</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filtered.map(cat => (
                <div key={cat.id}>
                  {/* Category header — only shown when "All" is selected */}
                  {activeCategory === 'all' && (
                    <div className="flex items-center gap-3 mb-5">
                      <h2 className="text-lg font-bold" style={{ color: 'var(--text)' }}>{cat.label}</h2>
                      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${COLOR_FROM}22`, color: COLOR_FROM }}
                      >
                        {cat.questions.length}
                      </span>
                    </div>
                  )}
                  <div className="space-y-3">
                    {cat.questions.map((item, qi) => {
                      const key    = `${cat.id}-${qi}`;
                      const isOpen = openItem === key;
                      return (
                        <div
                          key={key}
                          className="rounded-2xl border overflow-hidden transition-all duration-200"
                          style={{
                            borderColor: isOpen ? `${COLOR_FROM}55` : 'var(--border)',
                            background:  isOpen ? `${COLOR_FROM}0d` : 'var(--bg-card)',
                          }}
                        >
                          <button
                            className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left"
                            onClick={() => setOpenItem(isOpen ? null : key)}
                          >
                            <span
                              className="font-semibold text-sm leading-snug"
                              style={{ color: isOpen ? COLOR_FROM : 'var(--text)' }}
                            >
                              {item.question}
                            </span>
                            <ChevronDown
                              size={18}
                              className="shrink-0 mt-0.5 transition-transform duration-300"
                              style={{
                                color:     isOpen ? COLOR_FROM : 'var(--text-muted)',
                                transform: isOpen ? 'rotate(180deg)' : 'none',
                              }}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-5">
                              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                {item.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div
            className="rounded-3xl p-10 text-center border"
            style={{
              background: `linear-gradient(135deg, ${COLOR_FROM}18, ${COLOR_TO}18)`,
              borderColor: `${COLOR_FROM}33`,
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: `linear-gradient(135deg, ${COLOR_FROM}, ${COLOR_TO})`, color: '#fff' }}
            >
              <MessageCircle size={22} />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>{t.cta.title}</h2>
            <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t.cta.subtitle}</p>
            <a
              href={lang === 'es' ? '/contacto/' : '/en/contact/'}
              className="inline-block px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 text-white"
              style={{ background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})` }}
            >
              {t.cta.button}
            </a>
          </div>
        </div>
      </section>

      </main>
      <Footer t={ht.footer} />
    </div>
  );
}
