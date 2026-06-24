import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import WebDevHero from './WebDevHero';
import WebDevFeatures from './WebDevFeatures';
import WebDevProcess from './WebDevProcess';
import WebDevStack from './WebDevStack';
import WebDevFAQ from './WebDevFAQ';
import PortfolioSection from './PortfolioSection';
import FinalCTA from './FinalCTA';
import { translations } from '../content/translations';
import { webDevTranslations } from '../content/webDevTranslations';
import type { Lang } from '../content/translations';

interface Props { initialLang?: Lang }

export default function WebDevPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]   = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t  = webDevTranslations[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es' ? '/en/services/web-development/' : '/servicios/desarrollo-web/';

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
      <WebDevHero     t={t.hero}     />
      <WebDevFeatures t={t.features} />
      <WebDevProcess  t={t.process}  />
      <WebDevStack    t={t.stack}    />
      <WebDevFAQ      t={t.faq}      />
      <PortfolioSection t={ht.portfolioSection} />
      <FinalCTA       t={ht.finalCTA} />
      </main>
      <Footer         t={ht.footer}  />
    </div>
  );
}
