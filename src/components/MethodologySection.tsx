import { useState } from 'react';
import { Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translations } from '../content/translations';

interface MethodologySectionProps {
  t: Translations['methodologySection'];
}

export default function MethodologySection({ t }: MethodologySectionProps) {
  const [active, setActive] = useState(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const bodyRef   = useScrollReveal<HTMLDivElement>();

  const phase = t.phases[active];

  return (
    <section className="py-28 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={headerRef} className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
              <span className="eyebrow">
                {t.eyebrow}
              </span>
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
        <div ref={bodyRef} className="grid lg:grid-cols-[340px_1fr] gap-4 lg:gap-6">

          {/* Phase selector — scrollable on mobile */}
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
                {/* Number badge */}
                <span className={`
                  flex-shrink-0 w-9 h-9 rounded-lg text-xs font-bold flex items-center justify-center transition-all duration-200
                  ${active === i
                    ? 'bg-gradient-to-br from-[#a855f7] to-[#ec4899] text-white shadow-md shadow-purple-500/30'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] group-hover:border-[#a855f7]/30'
                  }
                `}>
                  {p.number}
                </span>
                {/* Title */}
                <span className={`
                  font-medium text-sm whitespace-nowrap lg:whitespace-normal transition-colors duration-200
                  ${active === i ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'}
                `}>
                  {p.title}
                </span>
                {/* Active indicator bar (desktop only) */}
                {active === i && (
                  <div className="hidden lg:block ml-auto w-1 h-5 rounded-full bg-gradient-to-b from-[#a855f7] to-[#ec4899]" />
                )}
              </button>
            ))}
          </div>

          {/* Phase content */}
          <div
            key={active}
            className="
              bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 lg:p-10
              animate-phase-in
            "
          >
            {/* Phase number + title */}
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

            {/* Description */}
            <p className="text-base lg:text-lg leading-relaxed mb-8 text-[var(--text-muted)]">
              {phase.description}
            </p>

            {/* Detail checklist */}
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

        </div>
      </div>
    </section>
  );
}
