import {
  Globe, TrendingUp, Server, Mail, Target, Activity, PenTool,
} from 'lucide-react';
import type { ServicesPageTranslations } from '../content/servicesTranslations';

interface ServicesStackProps {
  t: ServicesPageTranslations['techStack'];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Globe, TrendingUp, Server, Mail, Target, Activity, PenTool,
};

const COLORS = [
  '#a855f7',
  '#10b981',
  '#3b82f6',
  '#f59e0b',
  '#f43f5e',
  '#06b6d4',
  '#ec4899',
];

export default function ServicesStack({ t }: ServicesStackProps) {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--border)] overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px] bg-[#a855f7]/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[400px] h-[400px] bg-[#ec4899]/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
            <span className="eyebrow">{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#ec4899] to-[#a855f7]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-[1.1] mb-5">
            {t.h2.map((part, i) =>
              part.gradient ? (
                <span key={i} className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 7-category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.categories.map((cat, i) => {
            const Icon  = ICON_MAP[cat.icon] ?? Globe;
            const color = COLORS[i] ?? '#a855f7';
            const isLast = i === t.categories.length - 1 && t.categories.length % 3 === 1;

            return (
              <div
                key={i}
                className={`
                  relative overflow-hidden
                  bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6
                  transition-all duration-300 group
                  hover:-translate-y-1.5 hover:shadow-xl hover:border-[#a855f7]/25
                  ${isLast ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
                `}
              >
                {/* Icon + category name */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text)] font-jetbrains">
                    {cat.category}
                  </h3>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-jetbrains text-[var(--text-muted)] bg-[var(--bg-chrome)] border border-[var(--border)] rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
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
