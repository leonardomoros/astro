import { CheckCircle2 } from 'lucide-react';
import type { ServicesPageTranslations } from '../content/servicesTranslations';

interface ServicesBannerProps {
  t: ServicesPageTranslations['banner'];
}

export default function ServicesBanner({ t }: ServicesBannerProps) {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--border)] overflow-hidden">

      {/* Background atmosphere — same pattern as home sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a855f7]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ec4899]/5 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
          <span className="eyebrow">{t.eyebrow}</span>
          <div className="h-px w-5 bg-gradient-to-r from-[#ec4899] to-[#a855f7]" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-[1.1] mb-6">
          {t.h2.map((part, i) =>
            part.gradient ? (
              <span
                key={i}
                className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent"
              >
                {part.text}
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto mb-12">
          {t.subtitle}
        </p>

        {/* 4 points */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {t.points.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3.5 text-left"
            >
              <CheckCircle2 size={16} className="text-[#a855f7] flex-shrink-0" />
              <span className="text-sm text-[var(--text-muted)] leading-snug font-jetbrains">{point.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
