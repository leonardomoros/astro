import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translations } from '../content/translations';

interface StatsSectionProps {
  t: Translations['statsSection'];
}

export default function StatsSection({ t }: StatsSectionProps) {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>('[data-stat-row]');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('stat-in'), i * 110);
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

        {/* ── Section header ── */}
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
            {t.paragraph}
          </p>
        </div>

        {/* ── 2×2 card grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {t.metrics.map((metric, i) => (
            /*
             * Wrapper: handles the entrance animation (translateY + scale + opacity).
             * Inner card: handles hover effects on its own transform layer.
             * Keeping them on separate elements prevents transform conflicts.
             */
            <div key={i} data-stat-row className="stat-row">
              <div className="
                group relative h-full p-7 lg:p-8 rounded-2xl overflow-hidden cursor-default
                bg-[var(--bg-card)] border border-[var(--border)]
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[#a855f7]/30
                hover:shadow-2xl hover:shadow-[#a855f7]/10
              ">

                {/* Top gradient line — slides in on hover */}
                <div className="
                  absolute top-0 inset-x-0 h-[2px]
                  bg-gradient-to-r from-[#a855f7] to-[#ec4899]
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-400 origin-left
                " />

                {/* Corner ambient glow */}
                <div className="
                  absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none
                  bg-gradient-to-br from-[#a855f7]/12 to-[#ec4899]/8
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                " />

                {/* Large number */}
                <div className="
                  text-6xl lg:text-7xl font-bold gradient-text tabular-nums leading-none mb-4
                  origin-left transition-transform duration-300
                  group-hover:scale-[1.05]
                ">
                  {metric.number}
                </div>

                {/* Description */}
                <p className="text-sm lg:text-[15px] leading-relaxed text-[var(--text-muted)] transition-colors duration-300">
                  {metric.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
