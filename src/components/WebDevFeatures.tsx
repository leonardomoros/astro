import { Layers, Zap, Monitor, Search, FileText, Headphones } from 'lucide-react';
import type { WebDevTranslations } from '../content/webDevTranslations';

interface Props { t: WebDevTranslations['features'] }

const ICON_MAP: Record<string, React.ElementType> = { Layers, Zap, Monitor, Search, FileText, Headphones };
const COLORS = ['#a855f7', '#06b6d4', '#3b82f6', '#10b981', '#f59e0b', '#ec4899'];

export default function WebDevFeatures({ t }: Props) {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--border)] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#a855f7]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const Icon  = ICON_MAP[item.icon] ?? Zap;
            const color = COLORS[i] ?? '#a855f7';
            return (
              <div
                key={i}
                className="relative overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/25 hover:shadow-xl hover:shadow-[#a855f7]/5"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${color}18` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="text-base font-bold text-[var(--text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.description}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}60)` }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
