import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import EmailHero from './EmailHero';
import EmailFeatures from './EmailFeatures';
import EmailProcess from './EmailProcess';
import EmailResults from './EmailResults';
import EmailFAQ from './EmailFAQ';
import FinalCTA from './FinalCTA';
import { translations } from '../content/translations';
import { emailMarketingTranslations } from '../content/emailMarketingTranslations';
import type { Lang } from '../content/translations';

const COLOR_FROM = '#f59e0b';
const COLOR_TO   = '#f97316';

interface Props { initialLang?: Lang }

export default function EmailPage({ initialLang = 'es' }: Props) {
  const [lang, setLang]   = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t  = emailMarketingTranslations[lang];
  const ht = translations[lang];
  const alternateHref = lang === 'es'
    ? '/en/services/email-marketing/'
    : '/servicios/email-marketing/';

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav lang={lang} t={ht.nav} theme={theme} toggleTheme={toggleTheme} alternateHref={alternateHref} />
      <EmailHero     t={t.hero}     />
      <EmailFeatures t={t.features} />
      <EmailProcess  t={t.process}  />
      <EmailResults  t={t.results}  />
      <EmailFAQ      t={t.faq}      />
      <FinalCTA      t={ht.finalCTA} colorFrom={COLOR_FROM} colorTo={COLOR_TO} />
      <Footer        t={ht.footer}  />
    </div>
  );
}
