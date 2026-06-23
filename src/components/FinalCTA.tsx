import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translations } from '../content/translations';

interface FinalCTAProps {
  t: Translations['finalCTA'];
}

export default function FinalCTA({ t }: FinalCTAProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 border-t border-[var(--border)] overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#a855f7]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ec4899]/6 rounded-full blur-2xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref}>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
            <span className="eyebrow">
              {t.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-bold leading-[1.08] mb-6 text-[var(--text)]">
            {t.headline}
          </h2>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed mb-10 max-w-xl mx-auto">
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <a
              href={t.primaryCTAHref}
              className="
                group inline-flex items-center gap-2
                bg-gradient-to-r from-[#a855f7] to-[#ec4899]
                text-white font-semibold text-sm
                px-7 py-3.5 rounded-full
                shadow-lg shadow-purple-500/25
                transition-all duration-200
                hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.03]
                active:scale-95
              "
            >
              {t.primaryCTA}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href={t.secondaryCTAHref}
              className="
                inline-flex items-center gap-2
                text-sm font-medium
                border border-[var(--border)]
                hover:border-[#a855f7]/40
                text-[var(--text-muted)] hover:text-[var(--text)]
                px-7 py-3.5 rounded-full
                transition-all duration-200
              "
            >
              {t.secondaryCTA}
            </a>
          </div>

          {/* Trust row */}
          <div className="flex items-center justify-center divide-x divide-[var(--border)]">
            {t.trust.map((item) => (
              <div key={item.label} className="px-6 first:pl-0 last:pr-0 text-center">
                <div className="text-2xl font-bold gradient-text leading-none mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-[var(--text-muted)] whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
