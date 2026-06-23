import { useState, useEffect } from 'react';
import type { Lang } from '../content/translations';

interface HeroVisualProps {
  lang: Lang;
}

interface Metric {
  labelEs: string;
  labelEn: string;
  value: string;
  percent: number;
  barClass: string;
  valueClass: string;
}

const METRICS: Metric[] = [
  {
    labelEs: 'Rendimiento',
    labelEn: 'Performance',
    value: '97',
    percent: 97,
    barClass: 'from-[#a855f7] to-[#c084fc]',
    valueClass: 'text-[#c084fc]',
  },
  {
    labelEs: 'Puntaje SEO',
    labelEn: 'SEO Score',
    value: '94',
    percent: 94,
    barClass: 'from-[#38bdf8] to-[#7dd3fc]',
    valueClass: 'text-[#7dd3fc]',
  },
  {
    labelEs: 'Conversión',
    labelEn: 'Conversion',
    value: '3.8%',
    percent: 38,
    barClass: 'from-[#a855f7] to-[#ec4899]',
    valueClass: 'text-[#ec4899]',
  },
];

export default function HeroVisual({ lang }: HeroVisualProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex justify-center lg:justify-end select-none">
      {/* Background glow orb — stays fixed */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#a855f7]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Everything that floats */}
      <div className="relative w-full max-w-[460px] animate-float">

        {/* Floating badge — top right */}
        <div className="absolute -top-4 -right-3 z-10">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg shadow-purple-500/30">
            +40% {lang === 'es' ? 'Tráfico Orgánico' : 'Organic Traffic'}
          </span>
        </div>

        {/* Main card */}
        <div className="bg-[#161616] border border-white/8 rounded-2xl overflow-hidden shadow-2xl shadow-black/70">

          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-5 py-3.5 bg-[#1c1c1c] border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] flex-shrink-0" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] flex-shrink-0" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] flex-shrink-0" />
            <div className="flex-1 ml-3 flex items-center gap-2 bg-black/30 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/80 flex-shrink-0" />
              <span className="text-xs text-zinc-500 truncate">gixlabs.com/project</span>
            </div>
          </div>

          {/* Card content */}
          <div className="p-6">
            {/* Preview mockup */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#ec4899]/20 border border-[#a855f7]/20 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#a855f7]/70 to-[#ec4899]/70" />
              </div>
              <div className="flex-1 space-y-2.5 pt-1">
                <div className="h-2.5 rounded-full bg-white/8" style={{ width: '72%' }} />
                <div className="h-2.5 rounded-full bg-white/5" style={{ width: '50%' }} />
                <div className="h-2.5 rounded-full bg-white/8" style={{ width: '88%' }} />
                <div className="h-2.5 rounded-full bg-white/5" style={{ width: '60%' }} />
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-5">
              {METRICS.map((m, i) => (
                <div key={m.labelEn}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-zinc-400">
                      {lang === 'es' ? m.labelEs : m.labelEn}
                    </span>
                    <span className={`text-sm font-bold tabular-nums ${m.valueClass}`}>
                      {m.value}
                    </span>
                  </div>
                  <div className="h-2 bg-white/6 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${m.barClass}`}
                      style={{
                        width: animate ? `${m.percent}%` : '0%',
                        transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + i * 0.22}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live indicator */}
        <div className="mt-4 flex items-center gap-2 px-1">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          <span className="text-xs text-zinc-500 font-mono">live_project.gixlabs.com</span>
        </div>
      </div>
    </div>
  );
}
