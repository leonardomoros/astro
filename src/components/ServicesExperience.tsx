import { CheckCircle2 } from 'lucide-react';
import type { ServicesPageTranslations } from '../content/servicesTranslations';

interface ServicesExperienceProps {
  t: ServicesPageTranslations['experience'];
}

export default function ServicesExperience({ t }: ServicesExperienceProps) {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--border)] overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-[#a855f7]/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-[#ec4899]/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left: content + 4 points ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
              <span className="eyebrow">{t.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[var(--text)] leading-[1.1] mb-5">
              {t.h2.map((part, i) =>
                part.gradient ? (
                  <span key={i} className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </h2>

            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-10">
              {t.subtitle}
            </p>

            <div className="space-y-5">
              {t.points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2
                    size={20}
                    className="text-[#a855f7] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm font-bold text-[var(--text)] mb-0.5">
                      {point.title}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: 2×2 stats grid ── */}
          <div className="grid grid-cols-2 gap-4">
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 flex flex-col justify-between min-h-[140px] group hover:border-[#a855f7]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="text-4xl lg:text-5xl font-bold font-jetbrains leading-none mb-3 bg-gradient-to-br from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent"
                >
                  {stat.value}
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
