import { useRef, useEffect } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translations } from '../content/translations';

interface PortfolioSectionProps {
  t: Translations['portfolioSection'];
}

const GRADIENTS = [
  { from: '#7c3aed', to: '#2563eb' },
  { from: '#059669', to: '#0d9488' },
  { from: '#ea580c', to: '#e11d48' },
  { from: '#2563eb', to: '#7c3aed' },
  { from: '#d97706', to: '#ea580c' },
  { from: '#0891b2', to: '#2563eb' },
];

export default function PortfolioSection({ t }: PortfolioSectionProps) {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>('[data-portfolio-card]');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('stat-in'), i * 90);
        });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portafolio" className="py-28 border-t border-[var(--border)]">
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

        {/* ── Project grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.map((project, i) => {
            const g = GRADIENTS[i] ?? GRADIENTS[0];
            return (
              <div
                key={project.name}
                data-portfolio-card
                className="stat-row flex flex-col rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a855f7]/30 hover:shadow-2xl hover:shadow-[#a855f7]/10 group"
              >
                {/* ── Image ── */}
                <div className="aspect-[16/10] relative overflow-hidden flex-shrink-0">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: project.imagePosition ?? 'top' }}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                        style={{ background: `linear-gradient(135deg, ${g.from}, ${g.to})` }}
                      />
                      <div
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
                          backgroundSize: '18px 18px',
                        }}
                      />
                    </>
                  )}

                  {/* Location badge — top left */}
                  <span className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium bg-black/45 backdrop-blur-sm text-white rounded-full border border-white/20 leading-none">
                    <MapPin size={10} className="flex-shrink-0" />
                    {project.location}
                  </span>
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-semibold mb-1.5 text-[var(--text)]">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4 text-[var(--text-muted)]">
                    {project.description}
                  </p>

                  {/* Tags + CTA row */}
                  <div className="flex items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 rounded-full border border-[var(--border)] text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Modern CTA — bottom right, visible only on card hover */}
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/btn flex-shrink-0
                        flex items-center gap-1.5
                        text-[11px] font-bold tracking-wide
                        px-3.5 py-1.5 rounded-full
                        bg-gradient-to-r from-[#a855f7] to-[#ec4899]
                        text-white shadow-md shadow-purple-500/30
                        opacity-100 translate-y-0
                        lg:opacity-0 lg:translate-y-1
                        lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                        transition-all duration-250 ease-out
                      "
                    >
                      Ver sitio
                      <ArrowUpRight
                        size={12}
                        className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── View all CTA ── */}
        <div className="mt-12 flex justify-center">
          <a
            href={t.ctaHref}
            className="
              group inline-flex items-center gap-2
              bg-gradient-to-r from-[#a855f7] to-[#ec4899]
              text-white text-sm font-semibold
              px-6 py-3 rounded-full
              shadow-md shadow-purple-500/20
              transition-all duration-200
              hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.03]
              active:scale-95
            "
          >
            {t.cta}
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
