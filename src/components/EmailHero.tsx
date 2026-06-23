import React, { useState } from 'react';
import { Mail, TrendingUp, BarChart3, CheckCircle2, Star } from 'lucide-react';
import type { EmailMarketingTranslations } from '../content/emailMarketingTranslations';

const COLOR_FROM = '#f59e0b';
const COLOR_TO   = '#f97316';

function InboxVisual() {
  const emails = [
    { from: 'Tu marca', subject: '¡Gracias por unirte!', preview: 'Bienvenido/a. Aquí tienes tu regalo...', active: false, time: '09:42' },
    { from: 'Tu marca', subject: '3 tips para empezar', preview: 'Hola, antes de continuar queríamos...', active: false, time: 'Ayer' },
    { from: 'Tu marca', subject: '🎯 Tu oferta expira hoy', preview: 'Solo quedan 6 horas para aprovechar...', active: true, time: '11:15' },
    { from: 'Tu marca', subject: 'Descubre los resultados', preview: 'Esta semana nuestros clientes lograron...', active: false, time: 'Lun' },
  ];

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
        style={{ background: `radial-gradient(ellipse at center, ${COLOR_FROM}, ${COLOR_TO})` }}
      />

      {/* Email client mockup */}
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
            mail.google.com
          </div>
        </div>

        {/* Client layout */}
        <div className="flex" style={{ minHeight: 260 }}>
          {/* Sidebar */}
          <div
            className="w-28 shrink-0 border-r p-3 flex flex-col gap-1"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
          >
            {['Recibidos', 'Enviados', 'Destacados', 'Spam'].map((label, i) => (
              <div
                key={label}
                className="text-xs px-2 py-1.5 rounded"
                style={{
                  background: i === 0 ? `${COLOR_FROM}22` : 'transparent',
                  color: i === 0 ? COLOR_FROM : 'var(--text-muted)',
                  fontWeight: i === 0 ? 600 : 400,
                }}
              >
                {label}
                {i === 0 && (
                  <span
                    className="ml-auto float-right text-[10px] font-bold px-1 rounded"
                    style={{ background: COLOR_FROM, color: '#000' }}
                  >
                    4
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Email list */}
          <div className="flex-1 flex flex-col divide-y" style={{ divideColor: 'var(--border)' }}>
            {emails.map((email, i) => (
              <div
                key={i}
                className="flex gap-3 px-3 py-2.5 cursor-pointer transition-colors"
                style={{
                  background: email.active ? `${COLOR_FROM}18` : 'transparent',
                  borderLeft: email.active ? `3px solid ${COLOR_FROM}` : '3px solid transparent',
                }}
              >
                {/* Avatar */}
                <div
                  className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                  style={{ background: `${COLOR_FROM}33`, color: COLOR_FROM }}
                >
                  TM
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-xs font-semibold truncate" style={{ color: 'var(--text)' }}>
                      {email.from}
                    </span>
                    <span className="text-[10px] shrink-0 ml-2" style={{ color: 'var(--text-muted)' }}>
                      {email.time}
                    </span>
                  </div>
                  <p
                    className="text-[11px] font-medium truncate"
                    style={{ color: email.active ? COLOR_FROM : 'var(--text)' }}
                  >
                    {email.subject}
                  </p>
                  <p className="text-[10px] truncate" style={{ color: 'var(--text-muted)' }}>
                    {email.preview}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats footer */}
            <div
              className="flex items-center justify-between px-3 py-2 mt-auto"
              style={{ background: 'var(--bg-card)' }}
            >
              <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                Apertura del último envío
              </span>
              <span className="text-[11px] font-bold" style={{ color: COLOR_FROM }}>
                67.4% ↑
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Badge 1 */}
      <div
        className="absolute -top-3 -right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border"
        style={{
          background: 'var(--bg-card)',
          borderColor: `${COLOR_FROM}55`,
          color: COLOR_FROM,
        }}
      >
        <TrendingUp size={13} />
        +45% Open Rate
      </div>

      {/* Badge 2 */}
      <div
        className="absolute -bottom-3 -left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border"
        style={{
          background: 'var(--bg-card)',
          borderColor: `${COLOR_TO}55`,
          color: COLOR_TO,
        }}
      >
        <CheckCircle2 size={13} />
        Email enviado · 98% inbox
      </div>
    </div>
  );
}

interface Props {
  t: EmailMarketingTranslations['hero'];
}

export default function EmailHero({ t }: Props) {
  const [hoverCta, setHoverCta] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, ${COLOR_FROM} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      {/* Gradient blob */}
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLOR_FROM}, ${COLOR_TO})` }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <span
              className="eyebrow"
              style={{ color: COLOR_FROM }}
            >
              {t.eyebrow}
            </span>

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
                  >
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                )
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
                  color: '#000',
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
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                {t.ctaSecondary}
              </button>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" style={{ color: COLOR_FROM }} />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                +80 campañas activas · Promedio 67% apertura
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative px-6">
            <InboxVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
