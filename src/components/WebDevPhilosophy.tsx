import { ArrowRight, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translations } from '../content/translations';

interface WebDevPhilosophyProps {
  t: Translations['webDevPhilosophy'];
}

export default function WebDevPhilosophy({ t }: WebDevPhilosophyProps) {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-28 border-t border-[var(--border)] overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-[#a855f7]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24 items-center">

          {/* ── Left: manifesto statement ── */}
          <div ref={leftRef}>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
              <span className="eyebrow">
                {t.eyebrow}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-bold leading-[1.1] mb-6 text-[var(--text)]">
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

            <p className="text-base lg:text-lg leading-relaxed mb-8 max-w-lg text-[var(--text-muted)]">
              {t.paragraph}
            </p>

            <a
              href={t.ctaHref}
              className="
                inline-flex items-center gap-2 group
                text-sm font-medium
                border border-[var(--border)]
                hover:border-[#a855f7]/40
                text-[var(--text-muted)] hover:text-[var(--text)]
                px-5 py-2.5 rounded-full
                transition-all duration-200
              "
            >
              {t.cta}
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* ── Right: feature list ── */}
          <div ref={rightRef}>
            <ul className="space-y-0 divide-y divide-[var(--border)]">
              {t.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 py-5">
                  <div className="
                    w-7 h-7 rounded-full flex-shrink-0
                    bg-gradient-to-br from-[#a855f7] to-[#ec4899]
                    flex items-center justify-center
                    shadow-lg shadow-purple-500/25
                  ">
                    <Check size={13} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-base font-medium text-[var(--text)]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
