import { Gauge, Target, FileText, Link2, MapPin, BarChart3 } from 'lucide-react';
import type { SeoPageTranslations } from '../content/seoPageTranslations';

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  Gauge, Target, FileText, Link2, MapPin, BarChart3,
};

const COLORS = ['#10b981', '#3b82f6', '#a855f7', '#f59e0b', '#06b6d4', '#ec4899'];

interface Props { t: SeoPageTranslations['features'] }

export default function SeoFeatures({ t }: Props) {
  return (
    <section className="relative py-24 border-t border-[var(--border)] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="h-px w-5 bg-gradient-to-r from-[#10b981] to-[#3b82f6]" />
            <span className="eyebrow" style={{ color: '#10b981' }}>{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#3b82f6] to-[#10b981]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-tight mb-5">
            {t.h2.map((part, i) =>
              part.gradient ? (
                <span key={i} className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h2>

          <p className="text-[var(--text-muted)] text-[15px] max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            const color = COLORS[i % COLORS.length];
            return (
              <div
                key={i}
                className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 transition-all duration-300 hover:border-opacity-60 hover:-translate-y-1"
                style={{ '--hover-color': color } as React.CSSProperties}
              >
                {/* Top glow on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  {Icon && <Icon size={20} style={{ color }} strokeWidth={1.5} />}
                </div>

                <h3 className="text-base font-semibold text-[var(--text)] mb-2">{item.title}</h3>
                <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
