import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import LandingHero from './LandingHero';
import LandingFeatures from './LandingFeatures';
import LandingProcess from './LandingProcess';
import LandingResults from './LandingResults';
import LandingFAQ from './LandingFAQ';
import FinalCTA from './FinalCTA';
import { translations } from '../content/translations';
import { landingPageTranslations } from '../content/landingPageTranslations';
import type { Lang } from '../content/translations';

interface Props { initialLang?: Lang }

export default function LandingPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]   = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t  = landingPageTranslations[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es' ? '/en/services/landing-pages/' : '/servicios/landing-pages/';

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
      <LandingHero     t={t.hero}     />
      <LandingFeatures t={t.features} />
      <LandingProcess  t={t.process}  />
      <LandingResults  t={t.results}  />
      <LandingFAQ      t={t.faq}      />
      <FinalCTA        t={ht.finalCTA} colorFrom="#3b82f6" colorTo="#06b6d4" />
      </main>
      <Footer          t={ht.footer}  />
    </div>
  );
}
