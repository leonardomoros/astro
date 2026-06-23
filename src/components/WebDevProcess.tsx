import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';
import type { WebDevTranslations } from '../content/webDevTranslations';

interface Props { t: WebDevTranslations['process'] }

const ICON_MAP: Record<string, React.ElementType> = { Lightbulb, PenTool, Code2, Rocket };
const COLORS = ['#a855f7', '#3b82f6', '#10b981', '#ec4899'];

export default function WebDevProcess({ t }: Props) {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--border)] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-3xl" />
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#a855f7]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
            <span className="eyebrow">{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#ec4899] to-[#a855f7]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-[1.1] mb-5">
            {t.h2.map((p, i) => p.gradient
              ? <span key={i} className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">{p.text}</span>
              : <span key={i}>{p.text}</span>
            )}
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

          {t.steps.map((step, i) => {
            const Icon  = ICON_MAP[step.icon] ?? Rocket;
            const color = COLORS[i] ?? '#a855f7';
            return (
              <div key={i} className="relative flex flex-col items-center text-center lg:items-center">

                {/* Step bubble */}
                <div className="relative mb-5 z-10">
                  <div
                    className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center border border-[var(--border)] bg-[var(--bg-card)]"
                    style={{ boxShadow: `0 0 0 6px var(--bg)` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                </div>

                {/* Step number */}
                <span
                  className="font-jetbrains text-[11px] font-bold tracking-widest mb-2"
                  style={{ color }}
                >
                  {step.number}
                </span>

                <h3 className="text-base font-bold text-[var(--text)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[220px] lg:max-w-none">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
