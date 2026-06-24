import { useState, useEffect, useRef } from 'react';
import { Check, Search, Map, Palette, Code2, Rocket, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translations } from '../content/translations';

interface MethodologySectionProps {
  t: Translations['methodologySection'];
}

interface PhaseVisual {
  icon: LucideIcon;
  gradient: [string, string];
  accentFrom: string;
  accentTo: string;
  decorColor: string;
}

const PHASE_VISUALS: PhaseVisual[] = [
  { icon: Search,    gradient: ['#1e1b4b', '#2e1065'], accentFrom: '#7c3aed', accentTo: '#4f46e5', decorColor: 'rgba(124,58,237,0.15)' },
  { icon: Map,       gradient: ['#0c1a2e', '#0a1628'], accentFrom: '#2563eb', accentTo: '#0891b2', decorColor: 'rgba(37,99,235,0.15)' },
  { icon: Palette,   gradient: ['#2d0a3e', '#1a0530'], accentFrom: '#a855f7', accentTo: '#ec4899', decorColor: 'rgba(168,85,247,0.15)' },
  { icon: Code2,     gradient: ['#052e16', '#064e3b'], accentFrom: '#059669', accentTo: '#0d9488', decorColor: 'rgba(5,150,105,0.15)' },
  { icon: Rocket,    gradient: ['#431407', '#3b0764'], accentFrom: '#ea580c', accentTo: '#9333ea', decorColor: 'rgba(234,88,12,0.15)' },
  { icon: TrendingUp,gradient: ['#2e1065', '#1e1b4b'], accentFrom: '#a855f7', accentTo: '#ec4899', decorColor: 'rgba(168,85,247,0.15)' },
];

export default function MethodologySection({ t }: MethodologySectionProps) {
  const [activePhase, setActivePhase] = useState(0);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    const observers = phaseRefs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActivePhase(i);
        },
        { threshold: 0.4 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <section id="proceso" className="py-28 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={headerRef} className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-20">
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

        {/* ── Sticky two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — scrollable phases */}
          <div>
            {t.phases.map((phase, i) => {
              const visual = PHASE_VISUALS[i] ?? PHASE_VISUALS[0];
              const isActive = activePhase === i;
              return (
                <div
                  key={phase.number}
                  ref={el => { phaseRefs.current[i] = el; }}
                  className={`
                    min-h-[75vh] flex flex-col justify-center py-16
                    border-b border-[var(--border)] last:border-0
                    transition-all duration-500
                  `}
                >
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full transition-all duration-500"
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${visual.accentFrom}, ${visual.accentTo})`
                          : 'var(--bg-card)',
                        color: isActive ? '#fff' : 'var(--text-muted)',
                        border: isActive ? 'none' : '1px solid var(--border)',
                      }}
                    >
                      {phase.number}
                    </span>
                    <div className="h-px flex-1" style={{ background: isActive ? `linear-gradient(90deg, ${visual.accentFrom}40, transparent)` : 'var(--border)' }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl lg:text-4xl font-bold mb-5 transition-all duration-500"
                    style={{ color: isActive ? 'var(--text)' : 'var(--text-muted)' }}
                  >
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base lg:text-lg leading-relaxed mb-8 text-[var(--text-muted)] max-w-md">
                    {phase.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3">
                    {phase.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div
                          className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center shadow-sm transition-all duration-500"
                          style={{
                            background: isActive
                              ? `linear-gradient(135deg, ${visual.accentFrom}, ${visual.accentTo})`
                              : 'var(--bg-card)',
                            border: isActive ? 'none' : '1px solid var(--border)',
                          }}
                        >
                          <Check size={11} className={isActive ? 'text-white' : 'text-[var(--text-muted)]'} strokeWidth={2.5} />
                        </div>
                        <span className="text-sm lg:text-base text-[var(--text)]">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile visual — shown below content on small screens */}
                  <div className="lg:hidden mt-10">
                    <PhaseVisualCard visual={visual} phase={phase} active />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — sticky visual panel */}
          <div className="hidden lg:block sticky top-24">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
              {t.phases.map((phase, i) => {
                const visual = PHASE_VISUALS[i] ?? PHASE_VISUALS[0];
                return (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      i === activePhase
                        ? 'opacity-100 translate-y-0 scale-100'
                        : i < activePhase
                        ? 'opacity-0 -translate-y-6 scale-[0.97]'
                        : 'opacity-0 translate-y-6 scale-[0.97]'
                    }`}
                  >
                    <PhaseVisualCard visual={visual} phase={phase} active={i === activePhase} />
                  </div>
                );
              })}
            </div>

            {/* Phase dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {t.phases.map((_, i) => (
                <div
                  key={i}
                  className="transition-all duration-400 rounded-full"
                  style={{
                    width: i === activePhase ? '24px' : '6px',
                    height: '6px',
                    background: i === activePhase
                      ? `linear-gradient(90deg, ${PHASE_VISUALS[i]?.accentFrom ?? '#a855f7'}, ${PHASE_VISUALS[i]?.accentTo ?? '#ec4899'})`
                      : 'var(--border)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Phase visual card (used in both sticky panel and mobile) ── */
function PhaseVisualCard({
  visual,
  phase,
  active,
}: {
  visual: PhaseVisual;
  phase: { number: string; title: string };
  active: boolean;
}) {
  const Icon = visual.icon;
  return (
    <div
      className="w-full h-full relative overflow-hidden rounded-3xl"
      style={{ background: `linear-gradient(135deg, ${visual.gradient[0]}, ${visual.gradient[1]})` }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Large decorative circle */}
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl"
        style={{ background: visual.decorColor }}
      />
      <div
        className="absolute -top-10 -left-10 w-48 h-48 rounded-full blur-2xl"
        style={{ background: visual.decorColor }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
        {/* Icon container */}
        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${visual.accentFrom}, ${visual.accentTo})`,
            boxShadow: `0 24px 48px ${visual.accentFrom}40`,
          }}
        >
          <Icon size={44} className="text-white" strokeWidth={1.5} />
        </div>

        {/* Phase label */}
        <div className="text-center">
          <span
            className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase mb-3 px-3 py-1 rounded-full"
            style={{
              background: `${visual.accentFrom}20`,
              color: visual.accentFrom,
              border: `1px solid ${visual.accentFrom}30`,
            }}
          >
            Fase {phase.number}
          </span>
          <h4 className="text-3xl font-bold text-white">{phase.title}</h4>
        </div>
      </div>

      {/* Corner accent lines */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 rounded-tl-lg opacity-20" style={{ borderColor: visual.accentFrom }} />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 rounded-br-lg opacity-20" style={{ borderColor: visual.accentTo }} />
    </div>
  );
}
