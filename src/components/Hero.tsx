import { ArrowRight } from 'lucide-react';
import type { Translations } from '../content/translations';
import type { Lang } from '../content/translations';
import HeroVisual from './HeroVisual';

interface HeroProps {
  t: Translations['hero'];
  lang: Lang;
}

export default function Hero({ t, lang }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#a855f7]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#ec4899]/6 rounded-full blur-3xl" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-center">

          {/* ── Left: content ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
              <span className="eyebrow">
                {t.eyebrow}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-[56px] font-bold text-[var(--text)] leading-[1.1] mb-6">
              {t.h1.map((part, i) =>
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
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-8 max-w-md">
              {t.subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-14">
              {/* Secondary — outline with fill-on-hover */}
              <a
                href="#portafolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="
                  group inline-flex items-center gap-2
                  text-sm font-medium text-[var(--text-muted)]
                  border border-[var(--border)]
                  px-5 py-2.5 rounded-full
                  transition-all duration-200
                  hover:text-[var(--text)] hover:border-[#a855f7]/40
                  active:scale-95
                "
              >
                {t.secondaryCTA}
              </a>

              {/* Primary — gradient with glow-on-hover */}
              <a
                href={t.primaryCTAHref}
                className="
                  group inline-flex items-center gap-2
                  bg-gradient-to-r from-[#a855f7] to-[#ec4899]
                  text-white text-sm font-semibold
                  px-5 py-2.5 rounded-full
                  shadow-md shadow-purple-500/20
                  transition-all duration-200
                  hover:shadow-lg hover:shadow-purple-500/40
                  hover:scale-[1.03]
                  active:scale-95
                "
              >
                {t.primaryCTA}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:flex sm:items-stretch sm:gap-0 sm:divide-x sm:divide-[var(--border)] border-t border-[var(--border)] pt-8">
              {t.stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left sm:px-6 sm:first:pl-0 sm:last:pr-0">
                  <div className="text-2xl font-bold text-[var(--text)] leading-none mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: visual ── */}
          <div className="hidden lg:block">
            <HeroVisual lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
