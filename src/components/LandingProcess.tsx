import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import type { LandingPageTranslations } from '../content/landingPageTranslations';

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  Search, PenTool, Code2, Rocket,
};

const COLORS = ['#3b82f6', '#06b6d4', '#a855f7', '#10b981'];

interface Props { t: LandingPageTranslations['process'] }

export default function LandingProcess({ t }: Props) {
  return (
    <section className="relative py-24 border-t border-[var(--border)] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-[#06b6d4]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="h-px w-5 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]" />
            <span className="eyebrow" style={{ color: '#3b82f6' }}>{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-tight mb-5">
            {t.h2.map((part, i) =>
              part.gradient ? (
                <span key={i} className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h2>

          <p className="text-[var(--text-muted)] text-[15px] max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

          {t.steps.map((step, i) => {
            const Icon = ICONS[step.icon];
            const color = COLORS[i % COLORS.length];
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div
                  className="relative z-10 w-[52px] h-[52px] rounded-full flex items-center justify-center mb-5 border"
                  style={{ background: `${color}15`, borderColor: `${color}40` }}
                >
                  {Icon && <Icon size={22} style={{ color }} strokeWidth={1.5} />}
                  <div
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold font-jetbrains"
                    style={{ background: color, color: '#fff' }}
                  >
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-[var(--text)] mb-2">{step.title}</h3>
                <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
