import React, { useState } from 'react';
import { Layers, MousePointer2, Star } from 'lucide-react';
import type { UxUiTranslations } from '../content/uxUiTranslations';

const COLOR_FROM = '#ec4899';
const COLOR_TO   = '#a855f7';

const LAYERS = [
  { label: 'Button / Primary',  color: '#ec4899', w: '60%' },
  { label: 'Card Container',    color: '#a855f7', w: '80%' },
  { label: 'Input / Text Field',color: '#ec489977', w: '70%' },
  { label: 'Hero Section',      color: '#a855f777', w: '90%' },
  { label: 'Navigation',        color: '#ec489955', w: '50%' },
];

const SWATCHES = ['#ec4899', '#a855f7', '#1e1b4b', '#f9fafb', '#6b7280'];

function FigmaVisual() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-15"
        style={{ background: `radial-gradient(ellipse at center, ${COLOR_FROM}, ${COLOR_TO})` }}
      />

      {/* Figma window */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-chrome)' }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-b"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
        >
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
              Figma — GixLabs Design System v2.4
            </span>
          </div>
        </div>

        <div className="flex" style={{ height: '300px' }}>
          {/* Left panel — Layers */}
          <div
            className="w-40 border-r flex flex-col"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
          >
            <div
              className="px-3 py-2 text-[10px] font-bold tracking-widest border-b"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              LAYERS
            </div>
            <div className="flex-1 overflow-hidden py-1">
              {LAYERS.map((layer, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-left transition-colors"
                  style={{
                    background: selectedLayer === i ? `${COLOR_FROM}18` : 'transparent',
                    borderLeft: selectedLayer === i ? `2px solid ${COLOR_FROM}` : '2px solid transparent',
                  }}
                  onClick={() => setSelectedLayer(i)}
                >
                  <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: layer.color }} />
                  <span className="text-[10px] truncate" style={{ color: selectedLayer === i ? COLOR_FROM : 'var(--text-muted)' }}>
                    {layer.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Canvas */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3 relative"
            style={{ background: 'var(--bg)' }}>
            {/* Mockup card on canvas */}
            <div
              className="w-36 rounded-xl border p-3 shadow-lg"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="h-10 rounded-lg mb-2 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${COLOR_FROM}33, ${COLOR_TO}33)` }}>
                <div className="w-6 h-6 rounded-full" style={{ background: `linear-gradient(135deg, ${COLOR_FROM}, ${COLOR_TO})` }} />
              </div>
              <div className="h-2 rounded w-4/5 mb-1" style={{ background: 'var(--border)' }} />
              <div className="h-2 rounded w-3/5 mb-3" style={{ background: 'var(--border)' }} />
              <div
                className="w-full py-1.5 rounded-lg text-center text-[10px] font-bold"
                style={{ background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`, color: '#fff' }}
              >
                CTA Button
              </div>
            </div>

            {/* Selection overlay hint */}
            <div
              className="absolute inset-4 rounded-lg border-2 pointer-events-none opacity-30"
              style={{ borderColor: COLOR_FROM, borderStyle: 'dashed' }}
            />

            {/* Corner handles */}
            {[['top-4', 'left-4'], ['top-4', 'right-4'], ['bottom-4', 'left-4'], ['bottom-4', 'right-4']].map(([t, lr], i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-sm border pointer-events-none`}
                style={{ top: t.startsWith('top') ? '14px' : undefined, bottom: t.startsWith('bottom') ? '14px' : undefined, left: lr.startsWith('left') ? '14px' : undefined, right: lr.startsWith('right') ? '14px' : undefined, background: '#fff', borderColor: COLOR_FROM }}
              />
            ))}
          </div>

          {/* Right panel — Properties */}
          <div
            className="w-36 border-l flex flex-col"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
          >
            <div
              className="px-3 py-2 text-[10px] font-bold tracking-widest border-b"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              DESIGN
            </div>
            <div className="p-3 space-y-3">
              <div>
                <p className="text-[9px] mb-1" style={{ color: 'var(--text-muted)' }}>Fill</p>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ background: `linear-gradient(135deg, ${COLOR_FROM}, ${COLOR_TO})` }} />
                  <span className="text-[9px]" style={{ color: 'var(--text)' }}>Gradient</span>
                </div>
              </div>
              <div>
                <p className="text-[9px] mb-1" style={{ color: 'var(--text-muted)' }}>Corner radius</p>
                <div className="px-2 py-1 rounded text-[9px]" style={{ background: 'var(--bg)', color: 'var(--text)' }}>12</div>
              </div>
              <div>
                <p className="text-[9px] mb-2" style={{ color: 'var(--text-muted)' }}>Color palette</p>
                <div className="flex flex-wrap gap-1">
                  {SWATCHES.map((c, i) => (
                    <div key={i} className="w-4 h-4 rounded-full border" style={{ background: c, borderColor: 'var(--border)' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center gap-3 px-4 py-2 border-t text-[10px]"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-card)', color: 'var(--text-muted)' }}
        >
          <Layers size={11} style={{ color: COLOR_FROM }} />
          <span>42 components</span>
          <span className="mx-auto" />
          <MousePointer2 size={11} />
          <span>Prototype ready</span>
        </div>
      </div>

      {/* Badge 1 */}
      <div
        className="absolute -top-3 -right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border"
        style={{ background: 'var(--bg-card)', borderColor: `${COLOR_FROM}55`, color: COLOR_FROM }}
      >
        <Layers size={13} />
        Design system listo
      </div>

      {/* Badge 2 */}
      <div
        className="absolute -bottom-3 -left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border"
        style={{ background: 'var(--bg-card)', borderColor: `${COLOR_TO}55`, color: COLOR_TO }}
      >
        +38% conversión
      </div>
    </div>
  );
}

interface Props { t: UxUiTranslations['hero'] }

export default function UxUiHero({ t }: Props) {
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
                +40 proyectos UX/UI · 4.9/5 satisfacción
              </span>
            </div>
          </div>
          <div className="relative px-6">
            <FigmaVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
