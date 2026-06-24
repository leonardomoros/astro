import { useState } from 'react';
import { Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translations } from '../content/translations';

interface MethodologySectionProps {
  t: Translations['methodologySection'];
}

/* ── Inline visuals — one per phase ─────────────────────────────────── */

function VisualDiscovery() {
  return (
    <div className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/8 shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-zinc-500 font-mono">audit_report.gixlabs</span>
      </div>
      <div className="p-5 space-y-3.5">
        <p className="text-[11px] font-mono text-[#a855f7] mb-1">// Diagnóstico digital inicial</p>
        {[
          { label: 'Velocidad web',    val: 24, color: 'from-red-500 to-red-400' },
          { label: 'SEO técnico',      val: 41, color: 'from-orange-500 to-amber-400' },
          { label: 'Conversión',       val: 1.2, isPercent: true, color: 'from-orange-500 to-amber-400' },
          { label: 'Competidor líder', val: 88, color: 'from-[#a855f7] to-[#ec4899]' },
        ].map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-[11px] mb-1.5">
              <span className="text-zinc-400">{row.label}</span>
              <span className="text-zinc-300 font-semibold tabular-nums">
                {row.isPercent ? `${row.val}%` : row.val}
              </span>
            </div>
            <div className="h-1.5 bg-white/6 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${row.color}`}
                style={{ width: `${row.isPercent ? row.val * 10 : row.val}%` }}
              />
            </div>
          </div>
        ))}
        <div className="pt-1 flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/20">⚠ 14 problemas críticos</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20">23 oportunidades</span>
        </div>
      </div>
    </div>
  );
}

function VisualStrategy() {
  const quarters = [
    { q: 'Q1', label: 'SEO + Contenido',  color: '#7c3aed' },
    { q: 'Q2', label: 'Ads + Landing',    color: '#2563eb' },
    { q: 'Q3', label: 'Email + CRM',      color: '#059669' },
    { q: 'Q4', label: 'Escalar ROI',      color: '#a855f7' },
  ];
  return (
    <div className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/8 shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-zinc-500 font-mono">plan_digital_2025.gixlabs</span>
      </div>
      <div className="p-5 space-y-2.5">
        <p className="text-[11px] font-mono text-[#a855f7] mb-3">// Hoja de ruta estratégica</p>
        {quarters.map((q) => (
          <div key={q.q} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
            <span
              className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-[11px] font-bold text-white"
              style={{ background: q.color }}
            >
              {q.q}
            </span>
            <span className="text-sm text-zinc-300">{q.label}</span>
            <div className="ml-auto w-2 h-2 rounded-full" style={{ background: q.color }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualDesign() {
  return (
    <div className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/8 shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-zinc-500 font-mono">diseño_ui.gixlabs</span>
      </div>
      <div className="p-5">
        <p className="text-[11px] font-mono text-[#a855f7] mb-4">// Sistema de diseño</p>
        {/* Color palette */}
        <div className="flex gap-2 mb-4">
          {['#a855f7','#ec4899','#2563eb','#0f0f0f','#f8fafc'].map((c) => (
            <div key={c} className="w-8 h-8 rounded-lg border border-white/10 shadow-lg" style={{ background: c }} />
          ))}
          <span className="text-[10px] text-zinc-500 self-end ml-1">Brand colors</span>
        </div>
        {/* Wireframe blocks */}
        <div className="space-y-2">
          <div className="h-6 bg-gradient-to-r from-[#a855f7]/30 to-[#ec4899]/30 rounded-lg border border-[#a855f7]/20" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-14 bg-white/4 rounded-lg border border-white/8" />
            <div className="h-14 bg-white/4 rounded-lg border border-white/8" />
            <div className="h-14 bg-white/4 rounded-lg border border-white/8" />
          </div>
          <div className="h-4 bg-white/3 rounded-lg border border-white/6" style={{ width: '70%' }} />
          <div className="h-4 bg-white/3 rounded-lg border border-white/6" style={{ width: '50%' }} />
          <div className="flex gap-2">
            <div className="h-7 w-24 bg-gradient-to-r from-[#a855f7]/40 to-[#ec4899]/40 rounded-full border border-[#a855f7]/30" />
            <div className="h-7 w-20 bg-white/5 rounded-full border border-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualDevelopment() {
  const lines = [
    { text: '$ npm run build', color: 'text-zinc-400' },
    { text: '▸ Optimizing CSS...', color: 'text-zinc-500' },
    { text: '▸ Bundling components...', color: 'text-zinc-500' },
    { text: '✓ Build complete  1.24s', color: 'text-green-400' },
    { text: '', color: '' },
    { text: 'Performance    100  ████████', color: 'text-[#c084fc]' },
    { text: 'Accessibility  100  ████████', color: 'text-[#7dd3fc]' },
    { text: 'SEO            100  ████████', color: 'text-[#86efac]' },
  ];
  return (
    <div className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/8 shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-zinc-500 font-mono">terminal — zsh</span>
      </div>
      <div className="p-5 font-mono text-[12px] space-y-1.5">
        {lines.map((l, i) => (
          <div key={i} className={l.color}>{l.text || <span>&nbsp;</span>}</div>
        ))}
      </div>
    </div>
  );
}

function VisualLaunch() {
  return (
    <div className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/8 shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-zinc-500 font-mono">launch_dashboard.gixlabs</span>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[11px] font-mono text-[#a855f7]">// Lanzamiento activo</p>
          <span className="flex items-center gap-1.5 text-[11px] text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            LIVE
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { label: 'Checklist', value: '52/52', color: 'text-green-400' },
            { label: 'Usuarios hoy', value: '+847', color: 'text-[#c084fc]' },
            { label: 'Conversiones', value: '+23', color: 'text-[#7dd3fc]' },
          ].map((m) => (
            <div key={m.label} className="p-2.5 rounded-lg bg-white/[0.04] border border-white/6">
              <div className={`text-lg font-bold tabular-nums ${m.color}`}>{m.value}</div>
              <div className="text-[10px] text-zinc-500 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5 pt-1">
          {['DNS propagado', 'SSL activo', 'Analytics conectado', 'Emails configurados'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[11px] text-zinc-400">
              <span className="text-green-400">✓</span>{item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualOptimization() {
  return (
    <div className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/8 shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-zinc-500 font-mono">reporte_mensual.gixlabs</span>
      </div>
      <div className="p-5 space-y-3.5">
        <p className="text-[11px] font-mono text-[#a855f7] mb-1">// Resultados · Mes 6</p>
        {[
          { label: 'Tráfico orgánico', delta: '+68%', val: 68, color: 'from-[#a855f7] to-[#c084fc]', textColor: 'text-[#c084fc]' },
          { label: 'Leads generados',  delta: '+124%', val: 82, color: 'from-[#2563eb] to-[#7dd3fc]', textColor: 'text-[#7dd3fc]' },
          { label: 'ROI campañas',     delta: '+287%', val: 95, color: 'from-[#059669] to-[#86efac]', textColor: 'text-[#86efac]' },
        ].map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-[11px] mb-1.5">
              <span className="text-zinc-400">{row.label}</span>
              <span className={`font-bold tabular-nums ${row.textColor}`}>{row.delta}</span>
            </div>
            <div className="h-1.5 bg-white/6 rounded-full overflow-hidden">
              <div className={`h-full rounded-full bg-gradient-to-r ${row.color}`} style={{ width: `${row.val}%` }} />
            </div>
          </div>
        ))}
        <div className="pt-1 flex items-center gap-2 text-[10px]">
          <span className="px-2 py-0.5 rounded-full bg-[#a855f7]/15 text-[#c084fc] border border-[#a855f7]/20">A/B Test activo</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">↑ Tendencia positiva</span>
        </div>
      </div>
    </div>
  );
}

const PHASE_VISUALS = [
  VisualDiscovery,
  VisualStrategy,
  VisualDesign,
  VisualDevelopment,
  VisualLaunch,
  VisualOptimization,
];

/* ── Main component ──────────────────────────────────────────────────── */

export default function MethodologySection({ t }: MethodologySectionProps) {
  const [active, setActive] = useState(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const bodyRef   = useScrollReveal<HTMLDivElement>();

  const phase = t.phases[active];
  const Visual = PHASE_VISUALS[active] ?? PHASE_VISUALS[0];

  return (
    <section id="proceso" className="py-28 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={headerRef} className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
              <span className="eyebrow">{t.eyebrow}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.1] text-[var(--text)]">
              {t.headline}
            </h2>
          </div>
          <p className="text-lg leading-relaxed lg:pb-1 text-[var(--text-muted)]">
            {t.subtitle}
          </p>
        </div>

        {/* ── Tabs + content ── */}
        <div ref={bodyRef} className="grid lg:grid-cols-[300px_1fr] gap-4 lg:gap-8">

          {/* Phase selector */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-x-visible">
            {t.phases.map((p, i) => (
              <button
                key={p.number}
                onClick={() => setActive(i)}
                className={`
                  flex-shrink-0 flex items-center gap-3
                  text-left px-4 py-3.5 rounded-xl
                  transition-all duration-200 group
                  ${active === i
                    ? 'bg-[var(--bg-card)] border border-[#a855f7]/40 shadow-lg shadow-[#a855f7]/8'
                    : 'border border-transparent hover:border-[var(--border)] hover:bg-[var(--bg-card)]'
                  }
                `}
              >
                <span className={`
                  flex-shrink-0 w-9 h-9 rounded-lg text-xs font-bold flex items-center justify-center transition-all duration-200
                  ${active === i
                    ? 'bg-gradient-to-br from-[#a855f7] to-[#ec4899] text-white shadow-md shadow-purple-500/30'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] group-hover:border-[#a855f7]/30'
                  }
                `}>
                  {p.number}
                </span>
                <span className={`
                  font-medium text-sm whitespace-nowrap lg:whitespace-normal transition-colors duration-200
                  ${active === i ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'}
                `}>
                  {p.title}
                </span>
                {active === i && (
                  <div className="hidden lg:block ml-auto w-1 h-5 rounded-full bg-gradient-to-b from-[#a855f7] to-[#ec4899]" />
                )}
              </button>
            ))}
          </div>

          {/* Phase content — two columns: text left, visual right */}
          <div
            key={active}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden animate-phase-in"
          >
            <div className="grid lg:grid-cols-[1fr_340px] divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">

              {/* Text column */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-bold gradient-text tabular-nums leading-none">
                    {phase.number}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-[#a855f7] uppercase mb-0.5">
                      {t.eyebrow.split(' ')[0]}
                    </p>
                    <h3 className="text-2xl font-bold text-[var(--text)]">{phase.title}</h3>
                  </div>
                </div>

                <p className="text-base lg:text-lg leading-relaxed mb-8 text-[var(--text-muted)]">
                  {phase.description}
                </p>

                <ul className="space-y-3">
                  {phase.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center shadow-sm shadow-purple-500/20">
                        <Check size={11} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm lg:text-base text-[var(--text)]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual column */}
              <div className="p-6 flex items-center justify-center bg-[var(--bg)]">
                <div className="w-full">
                  <Visual />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
