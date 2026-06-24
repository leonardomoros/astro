import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import UxUiHero from './UxUiHero';
import UxUiFeatures from './UxUiFeatures';
import UxUiProcess from './UxUiProcess';
import UxUiResults from './UxUiResults';
import UxUiFAQ from './UxUiFAQ';
import FinalCTA from './FinalCTA';
import { translations } from '../content/translations';
import { uxUiTranslations } from '../content/uxUiTranslations';
import type { Lang } from '../content/translations';

const COLOR_FROM = '#ec4899';
const COLOR_TO   = '#a855f7';

interface Props { initialLang?: Lang }

export default function UxUiPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]   = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t  = uxUiTranslations[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es'
    ? '/en/services/ux-ui-design/'
    : '/servicios/diseno-ux-ui/';

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
      <UxUiHero     t={t.hero}     />
      <UxUiFeatures t={t.features} />
      <UxUiProcess  t={t.process}  />
      <UxUiResults  t={t.results}  />
      <UxUiFAQ      t={t.faq}      />
      <FinalCTA     t={ht.finalCTA} colorFrom={COLOR_FROM} colorTo={COLOR_TO} />
      </main>
      <Footer       t={ht.footer}  />
    </div>
  );
}
