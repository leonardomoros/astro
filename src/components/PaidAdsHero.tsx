import React, { useState } from 'react';
import { TrendingDown, BarChart3, Star, MousePointer2 } from 'lucide-react';
import type { PaidAdsTranslations } from '../content/paidAdsTranslations';

const COLOR_FROM = '#f43f5e';
const COLOR_TO   = '#ef4444';

const CAMPAIGNS = [
  { name: 'Búsqueda — Marca',    clicks: '1,240', ctr: '8.4%',  cpc: '$0.42', conv: '186', roas: '520%', good: true  },
  { name: 'Shopping — Productos', clicks: '3,810', ctr: '5.1%',  cpc: '$0.31', conv: '412', roas: '380%', good: true  },
  { name: 'Display — Retarget',   clicks: '890',   ctr: '2.3%',  cpc: '$0.18', conv: '74',  roas: '290%', good: false },
  { name: 'Meta — Conversiones',  clicks: '2,100', ctr: '3.7%',  cpc: '$0.55', conv: '248', roas: '440%', good: true  },
];

function AdsVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-15"
        style={{ background: `radial-gradient(ellipse at center, ${COLOR_FROM}, ${COLOR_TO})` }}
      />

      {/* Dashboard mockup */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-chrome)' }}
      >
        {/* Chrome bar */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
        >
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div
            className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center truncate"
            style={{ background: 'var(--bg)', color: 'var(--text-muted)' }}
          >
            ads.google.com · Campañas
          </div>
        </div>

        {/* Summary chips */}
        <div
          className="flex gap-3 px-4 py-3 border-b text-xs"
          style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
        >
          {[
            { label: 'ROAS', value: '4.2×', color: COLOR_FROM },
            { label: 'CPA', value: '$1.84', color: '#10b981' },
            { label: 'Conversiones', value: '920', color: '#3b82f6' },
          ].map(c => (
            <div
              key={c.label}
              className="flex-1 rounded-lg px-2 py-1.5 text-center"
              style={{ background: `${c.color}15` }}
            >
              <div className="font-bold text-sm" style={{ color: c.color }}>{c.value}</div>
              <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{c.label}</div>
            </div>
          ))}
        </div>

        {/* Campaigns table */}
        <div className="overflow-hidden">
          {/* Header */}
          <div
            className="grid text-[10px] font-semibold px-4 py-2 border-b"
            style={{
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              borderColor: 'var(--border)',
              color: 'var(--text-muted)',
              background: 'var(--bg-card)',
            }}
          >
            <span>Campaña</span>
            <span className="text-right">CTR</span>
            <span className="text-right">Conv.</span>
            <span className="text-right">ROAS</span>
          </div>

          {CAMPAIGNS.map((c, i) => (
            <div
              key={i}
              className="grid items-center px-4 py-2.5 border-b text-[11px] transition-colors"
              style={{
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                borderColor: 'var(--border)',
                background: c.good ? `${COLOR_FROM}08` : 'transparent',
              }}
            >
              <div className="flex items-center gap-1.5 truncate pr-2">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: c.good ? COLOR_FROM : 'var(--text-muted)' }}
                />
                <span className="truncate" style={{ color: 'var(--text)' }}>{c.name}</span>
              </div>
              <span className="text-right" style={{ color: 'var(--text-muted)' }}>{c.ctr}</span>
              <span className="text-right font-medium" style={{ color: c.good ? COLOR_FROM : 'var(--text-muted)' }}>{c.conv}</span>
              <span
                className="text-right font-bold"
                style={{ color: c.good ? COLOR_FROM : 'var(--text-muted)' }}
              >
                {c.roas}
              </span>
            </div>
          ))}
        </div>

        {/* Sparkline footer */}
        <div
          className="px-4 py-3 flex items-center gap-2"
          style={{ background: 'var(--bg-card)' }}
        >
          <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Últ. 30 días</span>
          <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
            <polyline
              points="0,20 13,16 26,14 39,9 52,11 65,5 80,3"
              stroke={COLOR_FROM}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className="ml-auto text-[11px] font-bold" style={{ color: COLOR_FROM }}>↑ +34%</span>
        </div>
      </div>

      {/* Badge 1 */}
      <div
        className="absolute -top-3 -right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border"
        style={{ background: 'var(--bg-card)', borderColor: `${COLOR_FROM}55`, color: COLOR_FROM }}
      >
        <TrendingDown size={13} />
        -40% CPA
      </div>

      {/* Badge 2 */}
      <div
        className="absolute -bottom-3 -left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border"
        style={{ background: 'var(--bg-card)', borderColor: `${COLOR_TO}55`, color: COLOR_TO }}
      >
        <BarChart3 size={13} />
        +320% ROAS
      </div>
    </div>
  );
}

interface Props { t: PaidAdsTranslations['hero'] }

export default function PaidAdsHero({ t }: Props) {
  const [hoverCta, setHoverCta] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, ${COLOR_FROM} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLOR_FROM}, ${COLOR_TO})` }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.eyebrow}</span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4 mb-6" style={{ color: 'var(--text)' }}>
              {t.headingParts.map((part, i) =>
                part.gradient ? (
                  <span
                    key={i}
                    style={{
                      background:           `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip:       'text',
                      WebkitTextFillColor:  'transparent',
                      color:                'transparent',
                    }}
                  >{part.text}</span>
                ) : <span key={i}>{part.text}</span>
              )}
            </h1>

            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              {t.subheading}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: hoverCta
                    ? `linear-gradient(to right, ${COLOR_TO}, ${COLOR_FROM})`
                    : `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`,
                  color: '#fff',
                  transform: hoverCta ? 'translateY(-1px)' : 'none',
                  boxShadow: hoverCta ? `0 8px 25px ${COLOR_FROM}55` : 'none',
                }}
                onMouseEnter={() => setHoverCta(true)}
                onMouseLeave={() => setHoverCta(false)}
              >
                {t.cta}
              </button>
              <button
                className="px-6 py-3 rounded-xl font-semibold text-sm border transition-colors duration-200"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                {t.ctaSecondary}
              </button>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" style={{ color: COLOR_FROM }} />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                +60 campañas activas · ROAS promedio 4.2×
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative px-6">
            <AdsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
