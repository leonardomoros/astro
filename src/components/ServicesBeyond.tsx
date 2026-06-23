import {
  Sparkles, Code2, Search, Zap, Link2, Layers, Lock, Users,
} from 'lucide-react';
import type { ServicesPageTranslations } from '../content/servicesTranslations';

interface ServicesBeyondProps {
  t: ServicesPageTranslations['beyond'];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles, Code2, Search, Zap, Link2, Layers, Lock, Users,
};

const COLORS = [
  '#a855f7', '#3b82f6', '#10b981', '#06b6d4',
  '#f59e0b', '#ec4899', '#f43f5e', '#8b5cf6',
];

export default function ServicesBeyond({ t }: ServicesBeyondProps) {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--border)] overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#a855f7]/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
            <span className="eyebrow">{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#ec4899] to-[#a855f7]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-[1.1] mb-5">
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
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 4×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.cards.map((card, i) => {
            const Icon  = ICON_MAP[card.icon] ?? Sparkles;
            const color = COLORS[i] ?? '#a855f7';

            return (
              <div
                key={i}
                className="relative overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col gap-3 group transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/25 hover:shadow-lg hover:shadow-[#a855f7]/8"
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-sm font-bold text-[var(--text)] mb-1.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}60)` }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
