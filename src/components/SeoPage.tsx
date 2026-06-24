import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import SeoHero from './SeoHero';
import SeoFeatures from './SeoFeatures';
import SeoProcess from './SeoProcess';
import SeoResults from './SeoResults';
import SeoFAQ from './SeoFAQ';
import FinalCTA from './FinalCTA';
import { translations } from '../content/translations';
import { seoPageTranslations } from '../content/seoPageTranslations';
import type { Lang } from '../content/translations';

interface Props { initialLang?: Lang }

export default function SeoPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]   = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t  = seoPageTranslations[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es' ? '/en/services/seo-strategy/' : '/servicios/estrategia-seo/';

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav lang={lang} setLang={setLang} t={ht.nav} theme={theme} toggleTheme={toggleTheme} alternateHref={alternateHref} />
      <main>
      <SeoHero     t={t.hero}     />
      <SeoFeatures t={t.features} />
      <SeoProcess  t={t.process}  />
      <SeoResults  t={t.results}  />
      <SeoFAQ      t={t.faq}      />
      <FinalCTA    t={ht.finalCTA} colorFrom="#10b981" colorTo="#3b82f6" />
      </main>
      <Footer      t={ht.footer}  />
    </div>
  );
}
