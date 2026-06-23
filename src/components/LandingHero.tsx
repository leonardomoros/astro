import { ArrowRight, Target, CheckCircle2 } from 'lucide-react';
import type { LandingPageTranslations } from '../content/landingPageTranslations';

interface Props { t: LandingPageTranslations['hero'] }

function LandingVisual() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/12 to-[#06b6d4]/10 rounded-2xl blur-2xl scale-110 pointer-events-none" />

      {/* Browser frame */}
      <div className="relative rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl shadow-[#3b82f6]/10">

        {/* Chrome */}
        <div className="bg-[var(--bg-chrome)] px-4 py-3 flex items-center gap-3 border-b border-[var(--border)]">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#f43f5e]/70" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]/70" />
            <div className="w-3 h-3 rounded-full bg-[#10b981]/70" />
          </div>
          <div className="flex-1 bg-[var(--bg)] rounded-md px-3 py-1.5 text-[11px] text-[var(--text-muted)] font-jetbrains tracking-wide truncate">
            tudominio.com/oferta-especial
          </div>
        </div>

        {/* Page preview */}
        <div className="bg-[var(--bg-card)] p-5">

          {/* Minimal nav */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-14 h-3 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full" />
            <div className="h-7 w-20 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-lg" />
          </div>

          {/* 2-col hero */}
          <div className="grid grid-cols-[1fr_auto] gap-4 items-start mb-4">

            {/* Left: copy */}
            <div className="space-y-2.5">
              <div className="h-4 w-full bg-gradient-to-r from-[#3b82f6]/30 to-[#06b6d4]/30 rounded-full" />
              <div className="h-4 w-[85%] bg-gradient-to-r from-[#3b82f6]/20 to-[#06b6d4]/20 rounded-full" />
              <div className="h-3 w-full bg-[var(--border)] rounded-full opacity-30" />
              <div className="h-3 w-[80%] bg-[var(--border)] rounded-full opacity-20" />

              {/* Stars + social proof */}
              <div className="flex items-center gap-1.5 pt-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: '#f59e0b' }} />
                ))}
                <span className="text-[9px] font-jetbrains text-[var(--text-muted)] ml-1">4.9 · +150 clientes</span>
              </div>

              {/* CTA */}
              <div className="h-8 w-36 rounded-lg" style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }} />
            </div>

            {/* Right: form card */}
            <div className="w-28 bg-[var(--bg)] border border-[var(--border)] rounded-xl p-3 flex flex-col gap-2">
              <div className="h-2 w-[70%] bg-[var(--border)] rounded-full opacity-50" />
              <div className="h-6 w-full border border-[var(--border)] rounded-md opacity-60" />
              <div className="h-6 w-full border border-[var(--border)] rounded-md opacity-60" />
              <div className="h-6 w-full border border-[var(--border)] rounded-md opacity-60" />
              <div className="h-7 w-full rounded-md" style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }} />
            </div>
          </div>

          {/* Trust bar */}
          <div className="pt-3 border-t border-[var(--border)] flex items-center gap-3">
            <span className="text-[8px] font-jetbrains text-[var(--text-muted)] opacity-50 flex-shrink-0">Confiado por:</span>
            {[44, 36, 52, 40].map((w, i) => (
              <div key={i} className="h-2 bg-[var(--border)] rounded-full opacity-30" style={{ width: w }} />
            ))}
          </div>
        </div>
      </div>

      {/* Badge top-right */}
      <div className="absolute -top-4 -right-4 bg-[var(--bg-card)] border border-[#3b82f6]/30 rounded-xl px-3 py-2.5 shadow-lg shadow-[#3b82f6]/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#3b82f6]/15 flex items-center justify-center">
            <Target size={13} style={{ color: '#3b82f6' }} />
          </div>
          <div>
            <p className="text-[9px] text-[var(--text-muted)] font-jetbrains uppercase tracking-wide">Conversión</p>
            <p className="text-sm font-bold font-jetbrains" style={{ color: '#3b82f6' }}>+240%</p>
          </div>
        </div>
      </div>

      {/* Badge bottom-left */}
      <div className="absolute -bottom-4 -left-4 bg-[var(--bg-card)] border border-[#06b6d4]/30 rounded-xl px-3 py-2.5 shadow-lg shadow-[#06b6d4]/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#06b6d4]/15 flex items-center justify-center">
            <CheckCircle2 size={13} style={{ color: '#06b6d4' }} />
          </div>
          <div>
            <p className="text-[9px] text-[var(--text-muted)] font-jetbrains uppercase tracking-wide">Nuevo lead</p>
            <p className="text-sm font-bold font-jetbrains" style={{ color: '#06b6d4' }}>Capturado ✓</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingHero({ t }: Props) {
  const bc = t.breadcrumb;

  return (
    <section className="relative min-h-[90vh] flex items-center py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#3b82f6]/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#06b6d4]/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 mb-10 text-[12px] font-jetbrains text-[var(--text-muted)]">
          <a href={bc.homeHref} className="hover:text-[var(--accent)] transition-colors">{bc.homeLabel}</a>
          <span>/</span>
          <a href={bc.servicesHref} className="hover:text-[var(--accent)] transition-colors">{bc.servicesLabel}</a>
          <span>/</span>
          <span className="text-[var(--text)]">{bc.current}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-px w-5 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]" />
              <span className="eyebrow" style={{ color: '#3b82f6' }}>{t.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[var(--text)] leading-[1.05] mb-6">
              {t.h1.map((part, i) =>
                part.gradient ? (
                  <span key={i} className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </h1>

            <p className="text-[16px] text-[var(--text-muted)] leading-relaxed mb-10 max-w-lg">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contacto/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3b82f6]/30"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
              >
                {t.ctaPrimary}
                <ArrowRight size={15} />
              </a>
              <a
                href="/servicios/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-[var(--border)] text-[var(--text)] hover:border-[#3b82f6]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <LandingVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
