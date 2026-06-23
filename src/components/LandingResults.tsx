import type { LandingPageTranslations } from '../content/landingPageTranslations';

interface Props { t: LandingPageTranslations['results'] }

export default function LandingResults({ t }: Props) {
  return (
    <section className="relative py-24 border-t border-[var(--border)] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="h-px w-5 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]" />
            <span className="eyebrow" style={{ color: '#3b82f6' }}>{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-tight mb-5">
            {t.h2.map((part, i) =>
              part.gradient ? (
                <span key={i} className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h2>

          <p className="text-[var(--text-muted)] text-[15px] max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${stat.color}08 0%, transparent 70%)` }}
              />
              <div
                className="absolute top-0 inset-x-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}60, transparent)` }}
              />
              <div className="text-4xl sm:text-5xl font-bold font-jetbrains mb-3 leading-none" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <p className="text-[13px] text-[var(--text-muted)] leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
