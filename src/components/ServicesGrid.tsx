import { useRef, useEffect } from 'react';
import {
  Monitor, TrendingUp, Layers, Mail, BarChart3, Zap, Paintbrush,
  ArrowRight,
} from 'lucide-react';
import type { ServicesPageTranslations } from '../content/servicesTranslations';

interface ServicesGridProps {
  t: ServicesPageTranslations['servicesGrid'];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor,
  TrendingUp,
  Layers,
  Mail,
  BarChart3,
  Zap,
  Paintbrush,
};

/* Same colors as ServicesVisual.tsx */
const ICON_COLORS: Record<string, string> = {
  Monitor:    '#a855f7',
  TrendingUp: '#10b981',
  Layers:     '#3b82f6',
  Mail:       '#f59e0b',
  BarChart3:  '#f43f5e',
  Zap:        '#06b6d4',
  Paintbrush: '#ec4899',
};

export default function ServicesGrid({ t }: ServicesGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>('[data-service-card]');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('stat-in'), i * 75);
        });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const Icon  = ICON_MAP[item.icon] ?? Monitor;
            const color = ICON_COLORS[item.icon] ?? '#a855f7';
            const isLast = i === t.items.length - 1 && t.items.length % 3 === 1;

            return (
              <div
                key={item.icon}
                data-service-card
                className={`stat-row ${isLast ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className="
                  relative overflow-hidden h-full flex flex-col
                  bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7
                  transition-all duration-300 group
                  hover:-translate-y-1.5 hover:border-[#a855f7]/30
                  hover:shadow-xl hover:shadow-[#a855f7]/10
                ">

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold mb-3 text-[var(--text)] leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1 mb-6 text-[var(--text-muted)]">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={item.href}
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                    style={{ color }}
                  >
                    {item.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                    />
                  </a>

                  {/* Line below CTA — expands on hover */}
                  <div
                    className="h-[2px] rounded-full mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
