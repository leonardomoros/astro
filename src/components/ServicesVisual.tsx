import { useState, useEffect } from 'react';
import { Monitor, TrendingUp, Mail, BarChart3, Zap, Paintbrush, CheckCircle2 } from 'lucide-react';
import type { Lang } from '../content/translations';

const SERVICES = [
  { Icon: Monitor,    color: '#a855f7', label: 'Web' },
  { Icon: TrendingUp, color: '#10b981', label: 'SEO' },
  { Icon: Mail,       color: '#f59e0b', label: 'Email' },
  { Icon: BarChart3,  color: '#f43f5e', label: 'Ads' },
  { Icon: Zap,        color: '#06b6d4', label: 'Speed' },
  { Icon: Paintbrush, color: '#ec4899', label: 'UX/UI' },
];

// Right-to-left order per row
const APPEAR_ORDER = [2, 1, 0, 5, 4, 3];

const STAGGER      = 280;
const INIT_DELAY   = 500;
const GRID_HOLD    = 700;   // pause after last grid card before linear
const LINEAR_STAG  = 160;   // stagger between each linear icon
const LABEL_DELAY  = 500;   // pause after last icon before showing label
const LABEL_HOLD   = 1600;  // how long to show the completed state
const GAP          = 700;   // pause before next cycle

const ui = {
  es: { building: 'Construyendo', approved: 'Aprobado', services: 'servicios', label: 'Tu sitio ideal', url: 'gixlabs.com/servicios' },
  en: { building: 'Building',     approved: 'Approved',  services: 'services',  label: 'Your ideal site', url: 'gixlabs.com/services' },
};

export default function ServicesVisual({ lang = 'es' }: { lang?: Lang }) {
  const copy = ui[lang];
  const [visible,     setVisible]     = useState<boolean[]>(new Array(SERVICES.length).fill(false));
  const [showLinear,  setShowLinear]  = useState(false);
  const [linearStep,  setLinearStep]  = useState(0); // 0–6: how many linear icons visible
  const [showLabel,   setShowLabel]   = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;

    function runCycle() {
      // Phase 1: grid cards slide in right → left
      APPEAR_ORDER.forEach((idx, step) => {
        timers.push(setTimeout(() => {
          if (cancelled) return;
          setVisible(prev => { const n = [...prev]; n[idx] = true; return n; });
        }, INIT_DELAY + step * STAGGER));
      });

      // Phase 2: show linear row
      const linearAt = INIT_DELAY + APPEAR_ORDER.length * STAGGER + GRID_HOLD;

      timers.push(setTimeout(() => {
        if (!cancelled) setShowLinear(true);
      }, linearAt));

      // Icons appear left → right
      for (let i = 0; i < SERVICES.length; i++) {
        timers.push(setTimeout(() => {
          if (!cancelled) setLinearStep(i + 1);
        }, linearAt + i * LINEAR_STAG));
      }

      // Label after all icons
      const labelAt = linearAt + SERVICES.length * LINEAR_STAG + LABEL_DELAY;
      timers.push(setTimeout(() => {
        if (!cancelled) setShowLabel(true);
      }, labelAt));

      // Reset
      timers.push(setTimeout(() => {
        if (cancelled) return;
        setShowLinear(false);
        setLinearStep(0);
        setShowLabel(false);
        setVisible(new Array(SERVICES.length).fill(false));
        timers.push(setTimeout(() => { if (!cancelled) runCycle(); }, GAP));
      }, labelAt + LABEL_HOLD));
    }

    runCycle();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  const visibleCount = visible.filter(Boolean).length;

  // Line fill: goes from first to last icon center as linearStep grows
  const linePct = linearStep <= 1
    ? 0
    : ((linearStep - 1) / (SERVICES.length - 1)) * 100;

  return (
    <div className="relative w-full max-w-[500px] mx-auto">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/15 to-[#3b82f6]/10 rounded-2xl blur-2xl scale-110 pointer-events-none" />

      {/* Browser frame */}
      <div className="relative rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl shadow-[#a855f7]/10">

        {/* Chrome bar */}
        <div className="bg-[var(--bg-chrome)] px-4 py-3 flex items-center gap-3 border-b border-[var(--border)]">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#f43f5e]/70" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]/70" />
            <div className="w-3 h-3 rounded-full bg-[#10b981]/70" />
          </div>
          <div className="flex-1 bg-[var(--bg)] rounded-md px-3 py-1.5 text-[11px] text-[var(--text-muted)] font-jetbrains tracking-wide truncate">
            {copy.url}
          </div>
        </div>

        {/* Page preview */}
        <div className="bg-[var(--bg-card)] p-4">

          {/* Nav skeleton */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-3 bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-full" />
            <div className="flex gap-2">
              {[40, 30, 36].map((w, i) => (
                <div key={i} className="h-2 bg-[var(--border)] rounded-full" style={{ width: w }} />
              ))}
            </div>
          </div>

          {/* Hero skeleton */}
          <div className="mb-4 space-y-2">
            <div className="h-4 w-[52%] bg-[var(--border)] rounded-full opacity-50" />
            <div className="h-4 w-[72%] bg-gradient-to-r from-[#a855f7]/25 to-[#ec4899]/25 rounded-full" />
            <div className="h-2.5 w-[42%] bg-[var(--border)] rounded-full opacity-25" />
          </div>

          {/* Animated content area — fixed height, both phases stacked */}
          <div className="relative overflow-hidden" style={{ height: 172 }}>

            {/* ── Phase 1: card grid ── */}
            <div
              className="absolute inset-0 grid grid-cols-3 gap-2 content-start"
              style={{ opacity: showLinear ? 0 : 1, transition: 'opacity 0.45s ease' }}
            >
              {SERVICES.map((svc, i) => (
                <div
                  key={i}
                  style={{
                    opacity:    visible[i] ? 1 : 0,
                    transform:  visible[i] ? 'translateX(0)' : 'translateX(36px)',
                    transition: 'opacity 0.45s ease-out, transform 0.45s ease-out',
                  }}
                >
                  <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-2.5 flex flex-col gap-1.5">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center"
                      style={{ background: `${svc.color}22` }}
                    >
                      <svc.Icon size={12} style={{ color: svc.color }} strokeWidth={1.75} />
                    </div>
                    <div className="h-2 w-[68%] rounded-full" style={{ background: `${svc.color}70` }} />
                    <div className="h-1.5 w-full bg-[var(--border)] rounded-full opacity-40" />
                    <div className="h-1.5 w-[80%] bg-[var(--border)] rounded-full opacity-25" />
                  </div>
                </div>
              ))}
            </div>

            {/* ── Phase 2: linear timeline ── */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-5"
              style={{ opacity: showLinear ? 1 : 0, transition: 'opacity 0.45s ease' }}
            >
              {/* Icon row + line */}
              <div className="relative w-full flex items-center justify-between px-3">

                {/* Background track */}
                <div className="absolute left-[26px] right-[26px] top-1/2 -translate-y-1/2 h-px bg-[var(--border)] rounded-full" />

                {/* Fill line */}
                <div className="absolute left-[26px] right-[26px] top-1/2 -translate-y-1/2 h-px overflow-hidden rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-[#a855f7] to-[#ec4899]"
                    style={{
                      width:      `${linePct}%`,
                      transition: 'width 0.22s ease-out',
                    }}
                  />
                </div>

                {/* Icons */}
                {SERVICES.map((svc, i) => (
                  <div
                    key={i}
                    className="relative z-10 flex items-center justify-center rounded-full"
                    style={{
                      width:      28,
                      height:     28,
                      opacity:    linearStep > i ? 1 : 0,
                      transform:  linearStep > i ? 'scale(1)' : 'scale(0.4)',
                      background: `${svc.color}22`,
                      border:     `1px solid ${svc.color}55`,
                      boxShadow:  linearStep > i ? `0 0 8px ${svc.color}40` : 'none',
                      transition: 'opacity 0.25s ease-out, transform 0.25s ease-out, box-shadow 0.25s',
                    }}
                  >
                    <svc.Icon size={13} style={{ color: svc.color }} strokeWidth={1.5} />
                  </div>
                ))}
              </div>

              {/* "Tu sitio ideal" label */}
              <div
                className="flex items-center gap-2"
                style={{
                  opacity:    showLabel ? 1 : 0,
                  transform:  showLabel ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width:      20,
                    height:     20,
                    background: '#10b98122',
                    border:     '1px solid #10b98155',
                  }}
                >
                  <CheckCircle2 size={11} style={{ color: '#10b981' }} />
                </div>
                <span
                  className="text-sm font-jetbrains font-bold tracking-wide"
                  style={{
                    background:           'linear-gradient(90deg, #a855f7, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor:  'transparent',
                  }}
                >
                  {copy.label}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Status badge */}
      <div
        className="absolute -bottom-4 -right-4 border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 transition-colors duration-500"
        style={{
          background:  'var(--bg-card)',
          borderColor: showLabel ? '#10b98140' : '#a855f740',
          boxShadow:   showLabel ? '0 4px 20px #10b98118' : '0 4px 20px #a855f718',
        }}
      >
        {showLabel
          ? <CheckCircle2 size={13} style={{ color: '#10b981' }} />
          : <div className="w-3 h-3 rounded-full border-2 border-[#a855f7] border-t-transparent animate-spin" />
        }
        <div>
          <p className="text-[9px] text-[var(--text-muted)] font-jetbrains uppercase tracking-wide leading-none mb-0.5">
            {showLabel ? copy.approved : copy.building}
          </p>
          <p
            className="text-xs font-bold font-jetbrains leading-none"
            style={{ color: showLabel ? '#10b981' : '#a855f7' }}
          >
            {showLabel ? `✓ ${copy.label}` : `${visibleCount}/${SERVICES.length} ${copy.services}`}
          </p>
        </div>
      </div>

    </div>
  );
}
