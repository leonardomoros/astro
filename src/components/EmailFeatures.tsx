import React, { useState } from 'react';
import { Zap, Users, PenTool, FlaskConical, Plug, BarChart3 } from 'lucide-react';
import type { EmailMarketingTranslations } from '../content/emailMarketingTranslations';

const COLOR_FROM = '#f59e0b';
const COLOR_TO   = '#f97316';

const ICONS = [Zap, Users, PenTool, FlaskConical, Plug, BarChart3];
const COLORS = [COLOR_FROM, COLOR_TO, '#a855f7', '#10b981', '#3b82f6', '#ec4899'];

interface Props {
  t: EmailMarketingTranslations['features'];
}

export default function EmailFeatures({ t }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, ${COLOR_FROM} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--text)' }}>
            {t.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => {
            const Icon = ICONS[i];
            const color = COLORS[i];
            const active = hovered === i;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border transition-all duration-300 cursor-default"
                style={{
                  background: active ? `${color}12` : 'var(--bg-card)',
                  borderColor: active ? `${color}55` : 'var(--border)',
                  transform: active ? 'translateY(-4px)' : 'none',
                  boxShadow: active ? `0 12px 32px ${color}22` : 'none',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}22`, color }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
