import React, { useState } from 'react';
import type { UxUiTranslations } from '../content/uxUiTranslations';

const COLOR_FROM = '#ec4899';
const COLOR_TO   = '#a855f7';

interface Props { t: UxUiTranslations['results'] }

export default function UxUiResults({ t }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${COLOR_FROM}, transparent 70%)` }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--text)' }}>{t.title}</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.map((stat, i) => {
            const isActive = hovered === i;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border text-center transition-all duration-300 cursor-default"
                style={{
                  background:  isActive ? `${COLOR_FROM}18` : 'var(--bg-card)',
                  borderColor: isActive ? `${COLOR_FROM}66` : 'var(--border)',
                  transform:   isActive ? 'translateY(-4px)' : 'none',
                  boxShadow:   isActive ? `0 12px 32px ${COLOR_FROM}22` : 'none',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="text-4xl font-black mb-2"
                  style={{
                    background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`,
                    WebkitBackgroundClip: 'text', backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', color: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-semibold mb-1" style={{ color: 'var(--text)' }}>{stat.label}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
