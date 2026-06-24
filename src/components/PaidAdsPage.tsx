import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import PaidAdsHero from './PaidAdsHero';
import PaidAdsFeatures from './PaidAdsFeatures';
import PaidAdsProcess from './PaidAdsProcess';
import PaidAdsResults from './PaidAdsResults';
import PaidAdsFAQ from './PaidAdsFAQ';
import FinalCTA from './FinalCTA';
import { translations } from '../content/translations';
import { paidAdsTranslations } from '../content/paidAdsTranslations';
import type { Lang } from '../content/translations';

const COLOR_FROM = '#f43f5e';
const COLOR_TO   = '#ef4444';

interface Props { initialLang?: Lang }

export default function PaidAdsPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]   = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t  = paidAdsTranslations[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es'
    ? '/en/services/paid-advertising/'
    : '/servicios/publicidad-pagada/';

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav lang={lang} t={ht.nav} theme={theme} toggleTheme={toggleTheme} alternateHref={alternateHref} />
      <PaidAdsHero     t={t.hero}     />
      <PaidAdsFeatures t={t.features} />
      <PaidAdsProcess  t={t.process}  />
      <PaidAdsResults  t={t.results}  />
      <PaidAdsFAQ      t={t.faq}      />
      <FinalCTA        t={ht.finalCTA} colorFrom={COLOR_FROM} colorTo={COLOR_TO} />
      <Footer          t={ht.footer}  />
    </div>
  );
}
