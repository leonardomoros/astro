import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import WebOptHero from './WebOptHero';
import WebOptFeatures from './WebOptFeatures';
import WebOptProcess from './WebOptProcess';
import WebOptResults from './WebOptResults';
import WebOptFAQ from './WebOptFAQ';
import FinalCTA from './FinalCTA';
import { translations } from '../content/translations';
import { webOptimizationTranslations } from '../content/webOptimizationTranslations';
import type { Lang } from '../content/translations';

const COLOR_FROM = '#06b6d4';
const COLOR_TO   = '#0ea5e9';

interface Props { initialLang?: Lang }

export default function WebOptPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]   = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t  = webOptimizationTranslations[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es'
    ? '/en/services/website-optimization/'
    : '/servicios/optimizacion-web/';

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
      <WebOptHero     t={t.hero}     />
      <WebOptFeatures t={t.features} />
      <WebOptProcess  t={t.process}  />
      <WebOptResults  t={t.results}  />
      <WebOptFAQ      t={t.faq}      />
      <FinalCTA       t={ht.finalCTA} colorFrom={COLOR_FROM} colorTo={COLOR_TO} />
      </main>
      <Footer         t={ht.footer}  />
    </div>
  );
}
