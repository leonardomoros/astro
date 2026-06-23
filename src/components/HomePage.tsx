import { useState, useEffect } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import StatsSection from './StatsSection';
import ServicesSection from './ServicesSection';
import WebDevPhilosophy from './WebDevPhilosophy';
import PortfolioSection from './PortfolioSection';
import MethodologySection from './MethodologySection';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import { translations } from '../content/translations';
import type { Lang } from '../content/translations';

interface HomePageProps {
  initialLang?: Lang;
}

export default function HomePage({ initialLang = 'es' }: HomePageProps) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t = translations[lang];
  const alternateHref = lang === 'es' ? '/en/' : '/';

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav lang={lang} setLang={setLang} t={t.nav} theme={theme} toggleTheme={toggleTheme} alternateHref={alternateHref} />
      <Hero t={t.hero} lang={lang} />
      <StatsSection t={t.statsSection} />
      <ServicesSection t={t.servicesSection} />
      <WebDevPhilosophy t={t.webDevPhilosophy} />
      <PortfolioSection t={t.portfolioSection} />
      <MethodologySection t={t.methodologySection} />
      <FinalCTA t={t.finalCTA} />
      <Footer t={t.footer} />
    </div>
  );
}
