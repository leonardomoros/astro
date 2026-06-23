import { useRef, useEffect } from 'react';
import { ArrowRight, Monitor, Target, TrendingUp, Mail, BarChart3, Layers } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translations } from '../content/translations';

interface ServicesSectionProps {
  t: Translations['servicesSection'];
}


const ICON_MAP: Record<string, React.ElementType> = {
  web:      Monitor,
  strategy: Target,
  seo:      TrendingUp,
  email:    Mail,
  ads:      BarChart3,
  landing:  Layers,
};

export default function ServicesSection({ t }: ServicesSectionProps) {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>('[data-service-card]');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('stat-in'), i * 80);
        });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={headerRef} className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
              <span className="eyebrow">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.1] text-[var(--text)]">
              {t.headline}
            </h2>
          </div>
          <p className="text-lg leading-relaxed lg:pb-1 text-[var(--text-muted)]">
            {t.subtitle}
          </p>
        </div>

        {/* ── 3×2 service cards ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {t.items.map((item) => {
            const Icon = ICON_MAP[item.slug] ?? Monitor;
            return (
              /*
               * Wrapper handles the entrance animation (translateY + scale + opacity).
               * Inner <a> handles hover, keeping transform layers separate.
               */
              <div key={item.slug} data-service-card className="stat-row">
                <a
                  href={item.href}
                  className="
                    group relative flex flex-col h-full p-7 rounded-2xl overflow-hidden
                    bg-[var(--bg-card)] border border-[var(--border)]
                    transition-all duration-300
                    hover:-translate-y-1.5
                    hover:border-[#a855f7]/30
                    hover:shadow-2xl hover:shadow-[#a855f7]/10
                  "
                >
                  {/* Top gradient line — expands on hover */}
                  <div className="
                    absolute top-0 inset-x-0 h-[2px]
                    bg-gradient-to-r from-[#a855f7] to-[#ec4899]
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 origin-left
                  " />

                  {/* Corner ambient glow */}
                  <div className="
                    absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl pointer-events-none
                    bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/8
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  " />

                  {/* Icon */}
                  <div className="
                    relative w-11 h-11 rounded-xl mb-5 flex items-center justify-center flex-shrink-0
                    bg-gradient-to-br from-[#a855f7]/15 to-[#ec4899]/10
                    border border-[#a855f7]/20
                    transition-all duration-300
                    group-hover:border-[#a855f7]/40 group-hover:shadow-lg group-hover:shadow-[#a855f7]/15
                  ">
                    <Icon size={20} className="text-[#a855f7] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Headline */}
                  <h3 className="text-base font-semibold mb-2.5 text-[var(--text)] transition-colors duration-200">
                    {item.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1 text-[var(--text-muted)]">
                    {item.description}
                  </p>

                  {/* Arrow link */}
                  <div className="
                    mt-5 flex items-center gap-1.5
                    text-xs font-medium text-[#a855f7]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  ">
                    <span>{t.learnMore}</span>
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>

                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
