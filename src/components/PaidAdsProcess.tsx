import React, { useState } from 'react';
import { Search, Settings, TrendingUp, Rocket } from 'lucide-react';
import type { PaidAdsTranslations } from '../content/paidAdsTranslations';

const COLOR_FROM = '#f43f5e';
const COLOR_TO   = '#ef4444';
const ICONS = [Search, Settings, TrendingUp, Rocket];

interface Props { t: PaidAdsTranslations['process'] }

export default function PaidAdsProcess({ t }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--text)' }}>
            {t.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {t.steps.map((step, i) => {
            const Icon = ICONS[i];
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
