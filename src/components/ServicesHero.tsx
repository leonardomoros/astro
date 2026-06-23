import { useScrollReveal } from '../hooks/useScrollReveal';
import ServicesVisual from './ServicesVisual';
import type { ServicesPageTranslations } from '../content/servicesTranslations';

interface ServicesHeroProps {
  t: ServicesPageTranslations['hero'];
}

export default function ServicesHero({ t }: ServicesHeroProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative min-h-[88vh] flex items-center pt-16 overflow-hidden">

      {/* Background atmosphere — same pattern as homepage Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#a855f7]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#ec4899]/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-center">

          {/* ── Left: content ── */}
          <div ref={ref}>

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
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-md">
              {t.subtitle}
            </p>

          </div>

          {/* ── Right: animated visual ── */}
          <div className="hidden lg:flex justify-center items-center">
            <ServicesVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
