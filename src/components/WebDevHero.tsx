import { ArrowRight, Zap, Search } from 'lucide-react';
import type { WebDevTranslations } from '../content/webDevTranslations';

interface Props { t: WebDevTranslations['hero'] }

function BrowserVisual() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/15 to-[#3b82f6]/10 rounded-2xl blur-2xl scale-110" />

      {/* Browser frame */}
      <div className="relative rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl shadow-[#a855f7]/10">

        {/* Chrome bar */}
        <div className="bg-[var(--bg-chrome)] px-4 py-3 flex items-center gap-3 border-b border-[var(--border)]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#f43f5e]/70" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]/70" />
            <div className="w-3 h-3 rounded-full bg-[#10b981]/70" />
          </div>
          <div className="flex-1 bg-[var(--bg)] rounded-md px-3 py-1.5 text-[11px] text-[var(--text-muted)] font-jetbrains tracking-wide">
            gixlabs.com/tu-negocio
          </div>
        </div>

        {/* Website preview */}
        <div className="bg-[var(--bg-card)] p-6 min-h-[260px] flex flex-col gap-4">

          {/* Nav */}
          <div className="flex items-center justify-between">
            <div className="w-20 h-3 bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-full" />
            <div className="flex gap-2.5">
              {[48, 36, 44, 36].map((w, i) => (
                <div key={i} className="h-2 bg-[var(--border)] rounded-full" style={{ width: w }} />
              ))}
            </div>
          </div>

          {/* Hero content */}
          <div className="flex-1 flex flex-col gap-3 mt-3">
            <div className="h-5 w-[72%] bg-[var(--border)] rounded-full opacity-50" />
            <div className="h-5 w-full bg-gradient-to-r from-[#a855f7]/25 to-[#ec4899]/25 rounded-full" />
            <div className="h-5 w-[45%] bg-[var(--border)] rounded-full opacity-35" />
            <div className="h-3 w-[60%] bg-[var(--border)] rounded-full opacity-25 mt-1" />
            <div className="h-3 w-[48%] bg-[var(--border)] rounded-full opacity-20" />
            <div className="flex gap-3 mt-4">
              <div className="h-9 w-28 bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-lg" />
              <div className="h-9 w-24 border border-[var(--border)] rounded-lg" />
            </div>
          </div>

          {/* Stats bar */}
          <div className="flex gap-4 pt-3 border-t border-[var(--border)]">
            {[['#10b981', '2.1s'], ['#3b82f6', '98%'], ['#f59e0b', '100']].map(([color, val], i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                <span className="text-[10px] font-jetbrains text-[var(--text-muted)]">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge — Lighthouse */}
      <div className="absolute -top-4 -right-4 bg-[var(--bg-card)] border border-[#10b981]/30 rounded-xl px-3 py-2.5 shadow-lg shadow-[#10b981]/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#10b981]/15 flex items-center justify-center">
            <Zap size={13} style={{ color: '#10b981' }} />
          </div>
          <div>
            <p className="text-[9px] text-[var(--text-muted)] font-jetbrains uppercase tracking-wide">Lighthouse</p>
            <p className="text-sm font-bold font-jetbrains" style={{ color: '#10b981' }}>100 / 100</p>
          </div>
        </div>
      </div>

      {/* Floating badge — SEO */}
      <div className="absolute -bottom-4 -left-4 bg-[var(--bg-card)] border border-[#3b82f6]/30 rounded-xl px-3 py-2.5 shadow-lg shadow-[#3b82f6]/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#3b82f6]/15 flex items-center justify-center">
            <Search size={13} style={{ color: '#3b82f6' }} />
          </div>
          <div>
            <p className="text-[9px] text-[var(--text-muted)] font-jetbrains uppercase tracking-wide">SEO Score</p>
            <p className="text-sm font-bold font-jetbrains" style={{ color: '#3b82f6' }}>Optimizado</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebDevHero({ t }: Props) {
  const bc = t.breadcrumb;

  return (
    <section className="relative min-h-[90vh] flex items-center py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#a855f7]/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#3b82f6]/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)',
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
              <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
              <span className="eyebrow" style={{ color: '#a855f7' }}>{t.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[var(--text)] leading-[1.05] mb-6">
              {t.h1.map((part, i) =>
                part.gradient ? (
                  <span key={i} className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#a855f7]/30"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
              >
                {t.ctaPrimary}
                <ArrowRight size={15} />
              </a>
              <a
                href="/#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-[var(--border)] text-[var(--text)] hover:border-[#a855f7]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <BrowserVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
