import { ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';
import type { SeoPageTranslations } from '../content/seoPageTranslations';

interface Props { t: SeoPageTranslations['hero'] }

function SerpVisual() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/12 to-[#3b82f6]/10 rounded-2xl blur-2xl scale-110 pointer-events-none" />

      {/* Browser frame */}
      <div className="relative rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl shadow-[#10b981]/10">

        {/* Chrome */}
        <div className="bg-[var(--bg-chrome)] px-4 py-3 flex items-center gap-3 border-b border-[var(--border)]">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#f43f5e]/70" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]/70" />
            <div className="w-3 h-3 rounded-full bg-[#10b981]/70" />
          </div>
          <div className="flex-1 bg-[var(--bg)] rounded-md px-3 py-1.5 text-[11px] text-[var(--text-muted)] font-jetbrains tracking-wide truncate">
            google.com/search?q=diseño+web+profesional
          </div>
        </div>

        {/* SERP preview */}
        <div className="bg-[var(--bg-card)] p-5">

          {/* Google bar */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-0.5">
              {['#4285f4','#ea4335','#fbbc05','#34a853'].map((c, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="flex-1 border border-[var(--border)] rounded-full px-3 py-1.5 flex items-center gap-2">
              <div className="flex-1 h-2 bg-[var(--border)] rounded-full opacity-60 text-[10px] font-jetbrains text-[var(--text-muted)] flex items-center">
                <span className="text-[10px] font-jetbrains text-[var(--text-muted)] leading-none">diseño web profesional</span>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-[9px] text-[var(--text-muted)] font-jetbrains mb-3 opacity-60">
            Acerca de 1,240,000,000 resultados (0.42 segundos)
          </p>

          {/* Result #1 — highlighted */}
          <div className="mb-3 p-3 rounded-lg border"
               style={{ borderColor: '#10b98133', background: '#10b98108' }}>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-3.5 h-3.5 rounded-sm bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex-shrink-0" />
              <span className="text-[9px] font-jetbrains" style={{ color: '#10b981' }}>gixlabs.com › diseño-web-profesional</span>
              <div className="ml-auto flex-shrink-0 text-[8px] font-jetbrains font-bold px-1.5 py-0.5 rounded-full"
                   style={{ background: '#10b98122', color: '#10b981' }}>#1</div>
            </div>
            <div className="h-2.5 w-[88%] rounded-full mb-1.5"
                 style={{ background: 'linear-gradient(90deg, #3b82f680, #6366f160)' }} />
            <div className="h-1.5 w-full bg-[var(--border)] rounded-full opacity-40 mb-1" />
            <div className="h-1.5 w-[75%] bg-[var(--border)] rounded-full opacity-30" />
          </div>

          {/* Result #2 */}
          <div className="mb-3 p-3 rounded-lg">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-3.5 h-3.5 rounded-sm bg-[var(--border)] flex-shrink-0" />
              <span className="text-[9px] font-jetbrains text-[var(--text-muted)] opacity-50">competidor.com › servicios-web</span>
              <div className="ml-auto text-[8px] font-jetbrains font-bold px-1.5 py-0.5 rounded-full bg-[var(--border)] text-[var(--text-muted)] opacity-50">#2</div>
            </div>
            <div className="h-2.5 w-[70%] bg-[var(--border)] rounded-full opacity-30 mb-1.5" />
            <div className="h-1.5 w-full bg-[var(--border)] rounded-full opacity-20 mb-1" />
            <div className="h-1.5 w-[60%] bg-[var(--border)] rounded-full opacity-15" />
          </div>

          {/* Result #3 */}
          <div className="p-3 rounded-lg">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-3.5 h-3.5 rounded-sm bg-[var(--border)] flex-shrink-0" />
              <span className="text-[9px] font-jetbrains text-[var(--text-muted)] opacity-40">otraagencia.com › web-design</span>
              <div className="ml-auto text-[8px] font-jetbrains font-bold px-1.5 py-0.5 rounded-full bg-[var(--border)] text-[var(--text-muted)] opacity-40">#3</div>
            </div>
            <div className="h-2.5 w-[65%] bg-[var(--border)] rounded-full opacity-25 mb-1.5" />
            <div className="h-1.5 w-full bg-[var(--border)] rounded-full opacity-15 mb-1" />
            <div className="h-1.5 w-[55%] bg-[var(--border)] rounded-full opacity-10" />
          </div>

        </div>
      </div>

      {/* Badge top-right */}
      <div className="absolute -top-4 -right-4 bg-[var(--bg-card)] border border-[#10b981]/30 rounded-xl px-3 py-2.5 shadow-lg shadow-[#10b981]/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#10b981]/15 flex items-center justify-center">
            <TrendingUp size={13} style={{ color: '#10b981' }} />
          </div>
          <div>
            <p className="text-[9px] text-[var(--text-muted)] font-jetbrains uppercase tracking-wide">Posición</p>
            <p className="text-sm font-bold font-jetbrains" style={{ color: '#10b981' }}>#1 en Google</p>
          </div>
        </div>
      </div>

      {/* Badge bottom-left */}
      <div className="absolute -bottom-4 -left-4 bg-[var(--bg-card)] border border-[#a855f7]/30 rounded-xl px-3 py-2.5 shadow-lg shadow-[#a855f7]/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#a855f7]/15 flex items-center justify-center">
            <BarChart3 size={13} style={{ color: '#a855f7' }} />
          </div>
          <div>
            <p className="text-[9px] text-[var(--text-muted)] font-jetbrains uppercase tracking-wide">Tráfico orgánico</p>
            <p className="text-sm font-bold font-jetbrains" style={{ color: '#a855f7' }}>+340%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SeoHero({ t }: Props) {
  const bc = t.breadcrumb;

  return (
    <section className="relative min-h-[90vh] flex items-center py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#10b981]/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#3b82f6]/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(16,185,129,1) 1px, transparent 1px)',
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
              <div className="h-px w-5 bg-gradient-to-r from-[#10b981] to-[#3b82f6]" />
              <span className="eyebrow" style={{ color: '#10b981' }}>{t.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[var(--text)] leading-[1.05] mb-6">
              {t.h1.map((part, i) =>
                part.gradient ? (
                  <span key={i} className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#10b981]/30"
                style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)' }}
              >
                {t.ctaPrimary}
                <ArrowRight size={15} />
              </a>
              <a
                href="/servicios/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-[var(--border)] text-[var(--text)] hover:border-[#10b981]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <SerpVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
