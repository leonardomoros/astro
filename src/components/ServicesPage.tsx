import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import ServicesHero from './ServicesHero';
import ServicesGrid from './ServicesGrid';
import ServicesBanner from './ServicesBanner';
import ServicesProcess from './ServicesProcess';
import ServicesStack from './ServicesStack';
import ServicesExperience from './ServicesExperience';
import ServicesBeyond from './ServicesBeyond';
import ServicesPayments from './ServicesPayments';
import FinalCTA from './FinalCTA';
import { translations } from '../content/translations';
import { servicesTranslations } from '../content/servicesTranslations';
import type { Lang } from '../content/translations';

interface ServicesPageProps {
  initialLang?: Lang;
}

export default function ServicesPage({ initialLang = 'es' }: ServicesPageProps) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t  = servicesTranslations[lang];
  const ht = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav lang={lang} setLang={setLang} t={ht.nav} theme={theme} toggleTheme={toggleTheme} />
      <ServicesHero t={t.hero} />
      <ServicesGrid t={t.servicesGrid} />
      <ServicesBanner t={t.banner} />
      <ServicesProcess t={t.process} />
      <ServicesStack t={t.techStack} />
      <ServicesExperience t={t.experience} />
      <ServicesBeyond t={t.beyond} />
      <ServicesPayments t={t.payments} />
      <FinalCTA t={ht.finalCTA} />
      <Footer t={ht.footer} />
    </div>
  );
}
