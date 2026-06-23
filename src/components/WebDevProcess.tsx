import React, { useState } from 'react';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';
import type { WebDevTranslations } from '../content/webDevTranslations';

const COLOR_FROM = '#a855f7';
const COLOR_TO   = '#ec4899';

const ICON_MAP: Record<string, React.ElementType> = { Lightbulb, PenTool, Code2, Rocket };

interface Props { t: WebDevTranslations['process'] }

export default function WebDevProcess({ t }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--border)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-3xl" />
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#a855f7]/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
            <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#ec4899] to-[#a855f7]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-[1.1] mb-5">
            {t.h2.map((p, i) =>
              p.gradient ? (
                <span
                  key={i}
                  style={{
                    background:           `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip:       'text',
                    WebkitTextFillColor:  'transparent',
                    color:                'transparent',
                  }}
                >
                  {p.text}
                </span>
              ) : (
                <span key={i}>{p.text}</span>
              )
            )}
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute w-px"
            style={{
              left: '23px',
              top: '24px',
              bottom: '24px',
              background: `linear-gradient(to bottom, ${COLOR_FROM}, ${COLOR_TO})`,
              opacity: 0.35,
            }}
          />

          <div className="space-y-6">
            {t.steps.map((step, i) => {
              const Icon = ICON_MAP[step.icon] ?? Rocket;
              const isActive = active === i;
              return (
                <div key={i} className="flex gap-5 items-start">
                  {/* Circle marker */}
                  <div
                    className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center border-2 relative z-10 transition-all duration-300"
                    style={{
                      background:  isActive ? `${COLOR_FROM}33` : `${COLOR_FROM}18`,
                      borderColor: isActive ? COLOR_FROM : `${COLOR_FROM}55`,
                      color: COLOR_FROM,
                      boxShadow: isActive ? `0 0 16px ${COLOR_FROM}44` : 'none',
                    }}
                  >
                    <Icon size={18} />
                    <span
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                      style={{ background: COLOR_FROM, color: '#fff' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
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
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
