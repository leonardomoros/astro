import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translations } from '../content/translations';

interface FinalCTAProps {
  t: Translations['finalCTA'];
  colorFrom?: string;
  colorTo?: string;
}

export default function FinalCTA({ t, colorFrom = '#a855f7', colorTo = '#ec4899' }: FinalCTAProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const [btnHover, setBtnHover] = useState(false);
  const [secHover, setSecHover] = useState(false);

  return (
    <section className="relative py-32 border-t border-[var(--border)] overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: `${colorFrom}1a` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-2xl"
          style={{ background: `${colorTo}0f` }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, ${colorFrom} 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref}>

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
            style={{ border: `1px solid ${colorFrom}4d`, background: `${colorFrom}14` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: colorFrom }} />
            <span className="eyebrow" style={{ color: colorFrom }}>{t.eyebrow}</span>
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
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              className="group inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95"
              style={{
                background:  `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
                boxShadow:   btnHover
                  ? `0 20px 25px -5px ${colorFrom}66, 0 8px 10px -6px ${colorFrom}40`
                  : `0 10px 15px -3px ${colorFrom}40, 0 4px 6px -4px ${colorFrom}28`,
                transform:   btnHover ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              {t.primaryCTA}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href={t.secondaryCTAHref}
              onMouseEnter={() => setSecHover(true)}
              onMouseLeave={() => setSecHover(false)}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] px-7 py-3.5 rounded-full transition-all duration-200 border border-[var(--border)]"
              style={{ borderColor: secHover ? `${colorFrom}66` : undefined }}
            >
              {t.secondaryCTA}
            </a>
          </div>

          {/* Trust row */}
          <div className="flex items-center justify-center divide-x divide-[var(--border)]">
            {t.trust.map((item) => (
              <div key={item.label} className="px-6 first:pl-0 last:pr-0 text-center">
                <div
                  className="text-2xl font-bold leading-none mb-1"
                  style={{
                    background:           `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip:       'text',
                    WebkitTextFillColor:  'transparent',
                    color:                'transparent',
                  }}
                >
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
