import React, { useState } from 'react';
import { Zap, TrendingUp, Star } from 'lucide-react';
import type { WebOptTranslations } from '../content/webOptimizationTranslations';

const COLOR_FROM = '#06b6d4';
const COLOR_TO   = '#0ea5e9';

const SCORES = [
  { label: 'Performance', value: 97, color: '#10b981' },
  { label: 'Accessibility', value: 100, color: '#10b981' },
  { label: 'Best Practices', value: 100, color: '#10b981' },
  { label: 'SEO', value: 98, color: '#10b981' },
];

const VITALS = [
  { key: 'LCP', value: '1.2s', status: 'good',  label: 'Largest Contentful Paint' },
  { key: 'FID', value: '8ms',  status: 'good',  label: 'First Input Delay' },
  { key: 'CLS', value: '0.02', status: 'good',  label: 'Cumulative Layout Shift' },
];

function ScoreRing({ score, color }: { score: number; color: string }) {
  const r = 18;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <svg width="44" height="44" viewBox="0 0 44 44">
      <circle cx="22" cy="22" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
      <circle
        cx="22" cy="22" r={r} fill="none"
        stroke={color} strokeWidth="3"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 22 22)"
      />
      <text x="22" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>
        {score}
      </text>
    </svg>
  );
}

function LighthouseVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-15"
        style={{ background: `radial-gradient(ellipse at center, ${COLOR_FROM}, ${COLOR_TO})` }}
      />

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
            PageSpeed Insights · gixlabs.com
          </div>
        </div>

        {/* Lighthouse header */}
        <div
          className="px-5 pt-4 pb-3 border-b"
          style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-6 h-6 rounded flex items-center justify-center"
              style={{ background: `${COLOR_FROM}22` }}
            >
              <Zap size={13} style={{ color: COLOR_FROM }} />
            </div>
            <span className="text-xs font-semibold" style={{ color: 'var(--text)' }}>
              Lighthouse Report — Mobile
            </span>
            <span
              className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{ background: '#10b98122', color: '#10b981' }}
            >
              Passed ✓
            </span>
          </div>

          {/* Score rings */}
          <div className="grid grid-cols-4 gap-2">
            {SCORES.map(s => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <ScoreRing score={s.value} color={s.color} />
                <span className="text-[9px] text-center leading-tight" style={{ color: 'var(--text-muted)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Web Vitals */}
        <div className="px-5 py-3">
          <p className="text-[10px] font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
            CORE WEB VITALS
          </p>
          <div className="space-y-2">
            {VITALS.map(v => (
              <div key={v.key} className="flex items-center gap-3">
                <span
                  className="text-[10px] font-bold w-8 shrink-0"
                  style={{ color: COLOR_FROM }}
                >
                  {v.key}
                </span>
                <div
                  className="flex-1 h-1.5 rounded-full overflow-hidden"
                  style={{ background: 'var(--border)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: '92%', background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})` }}
                  />
                </div>
                <span className="text-[10px] font-bold w-10 text-right" style={{ color: '#10b981' }}>
                  {v.value}
                </span>
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded"
                  style={{ background: '#10b98120', color: '#10b981' }}
                >
                  Good
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Load time bar */}
        <div
          className="px-5 py-3 border-t flex items-center gap-3"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
        >
          <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Tiempo de carga</span>
          <div className="flex-1 flex items-center gap-1">
            <div
              className="h-2 rounded-full"
              style={{ width: '22%', background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})` }}
            />
            <span className="text-[10px] font-bold ml-1" style={{ color: COLOR_FROM }}>1.4s</span>
          </div>
          <span className="text-[10px] line-through" style={{ color: 'var(--text-muted)' }}>5.8s</span>
        </div>
      </div>

      {/* Badge 1 */}
      <div
        className="absolute -top-3 -right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border"
        style={{ background: 'var(--bg-card)', borderColor: `${COLOR_FROM}55`, color: COLOR_FROM }}
      >
        <Zap size={13} />
        +40 pts Lighthouse
      </div>

      {/* Badge 2 */}
      <div
        className="absolute -bottom-3 -left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border"
        style={{ background: 'var(--bg-card)', borderColor: `${COLOR_TO}55`, color: COLOR_TO }}
      >
        <TrendingUp size={13} />
        -60% tiempo de carga
      </div>
    </div>
  );
}

interface Props { t: WebOptTranslations['hero'] }

export default function WebOptHero({ t }: Props) {
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
            <div className="flex items-center gap-3 mt-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" style={{ color: COLOR_FROM }} />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                +50 sitios optimizados · Promedio 96/100 Lighthouse
              </span>
            </div>
          </div>
          <div className="relative px-6">
            <LighthouseVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
