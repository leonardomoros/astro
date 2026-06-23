import React, { useState } from 'react';
import { Search, Lightbulb, Wrench, TrendingUp } from 'lucide-react';
import type { SeoPageTranslations } from '../content/seoPageTranslations';

const COLOR_FROM = '#10b981';
const COLOR_TO   = '#3b82f6';
const ICONS: Record<string, React.ElementType> = { Search, Lightbulb, Wrench, TrendingUp };

interface Props { t: SeoPageTranslations['process'] }

export default function SeoProcess({ t }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-24 border-t border-[var(--border)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="h-px w-5 bg-gradient-to-r from-[#10b981] to-[#3b82f6]" />
            <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#3b82f6] to-[#10b981]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-tight mb-5">
            {t.h2.map((part, i) =>
              part.gradient ? (
                <span
                  key={i}
                  style={{
                    background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`,
                    WebkitBackgroundClip: 'text', backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', color: 'transparent',
                  }}
                >{part.text}</span>
              ) : <span key={i}>{part.text}</span>
            )}
          </h2>
          <p className="text-[var(--text-muted)] text-[15px] max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {t.steps.map((step, i) => {
            const Icon = ICONS[step.icon] ?? Search;
            const isLast = i === t.steps.length - 1;
            const isActive = active === i;

            return (
              <div
                key={i}
                className="relative flex gap-5 items-start"
                style={{ marginBottom: isLast ? 0 : '24px' }}
              >
                {!isLast && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '23px',
                      top: '48px',
                      bottom: '-24px',
                      width: '1px',
                      background: `linear-gradient(to bottom, ${COLOR_FROM}, ${COLOR_TO})`,
                      opacity: 0.35,
                    }}
                  />
                )}

                <div
                  className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center border-2 relative z-10 transition-all duration-300"
                  style={{
                    background: 'var(--bg)',
                    borderColor: isActive ? COLOR_FROM : `${COLOR_FROM}55`,
                    color: COLOR_FROM,
                    boxShadow: isActive ? `0 0 16px ${COLOR_FROM}44` : 'none',
                  }}
                >
                  <Icon size={18} />
                </div>

                <div
                  className="flex-1 p-5 rounded-2xl border transition-all duration-300 cursor-default"
                  style={{
                    background:  isActive ? `${COLOR_FROM}10` : 'var(--bg-card)',
                    borderColor: isActive ? `${COLOR_FROM}55` : 'var(--border)',
                    transform:   isActive ? 'translateY(-2px)' : 'none',
                    boxShadow:   isActive ? `0 8px 24px ${COLOR_FROM}18` : 'none',
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{ background: `${COLOR_FROM}22`, color: COLOR_FROM }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="font-semibold" style={{ color: 'var(--text)' }}>{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
