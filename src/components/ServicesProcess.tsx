import {
  Search, Lightbulb, PenTool, Code2, FileText,
  ShieldCheck, Rocket, TrendingUp, Headphones,
} from 'lucide-react';
import type { ServicesPageTranslations } from '../content/servicesTranslations';

interface ServicesProcessProps {
  t: ServicesPageTranslations['process'];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Search, Lightbulb, PenTool, Code2, FileText,
  ShieldCheck, Rocket, TrendingUp, Headphones,
};

export default function ServicesProcess({ t }: ServicesProcessProps) {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--border)] overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#a855f7]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#ec4899]/5 rounded-full blur-3xl" />
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
        <div className="text-center mb-16">
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

        {/* 3×3 step grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.steps.map((step, i) => {
            const Icon = ICON_MAP[step.icon] ?? Search;
            const num  = String(i + 1).padStart(2, '0');

            return (
              <div
                key={i}
                className="
                  relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7
                  transition-all duration-300 group
                  hover:-translate-y-1.5 hover:border-[#a855f7]/30
                  hover:shadow-xl hover:shadow-[#a855f7]/8
                "
              >
                {/* Step number + icon row */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="font-jetbrains text-5xl font-bold leading-none bg-gradient-to-br from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent"
                    style={{ opacity: 0.35 }}
                  >
                    {num}
                  </span>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#a855f7]/10 group-hover:bg-[#a855f7]/15 transition-colors duration-300">
                    <Icon size={18} className="text-[#a855f7]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[var(--text)] mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
