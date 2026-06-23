import { CreditCard, Smartphone, Wallet, Building2, Coins, ShieldCheck } from 'lucide-react';
import type { ServicesPageTranslations } from '../content/servicesTranslations';

interface ServicesPaymentsProps {
  t: ServicesPageTranslations['payments'];
}

const ICON_MAP: Record<string, React.ElementType> = {
  CreditCard, Smartphone, Wallet, Building2, Coins,
};

const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#f0a500'];

export default function ServicesPayments({ t }: ServicesPaymentsProps) {
  return (
    <section className="relative py-24 border-t border-[var(--border)] overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
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

        {/* 5 payment method cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {t.methods.map((method, i) => {
            const Icon  = ICON_MAP[method.icon] ?? CreditCard;
            const color = COLORS[i] ?? '#a855f7';

            return (
              <div
                key={i}
                className="relative overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col items-center text-center gap-3 group transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/25 hover:shadow-lg"
              >
                {/* Icon badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                {/* Method name */}
                <div>
                  <p className="text-sm font-bold text-[var(--text)] mb-1 leading-snug">
                    {method.name}
                  </p>
                  <p className="text-[11px] font-jetbrains text-[var(--text-muted)] uppercase tracking-wide">
                    {method.available}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}60)` }}
                />
              </div>
            );
          })}
        </div>

        {/* Security note */}
        <div className="flex items-center justify-center gap-2.5 text-[var(--text-muted)]">
          <ShieldCheck size={15} className="text-[#10b981] flex-shrink-0" />
          <p className="text-sm font-jetbrains">{t.note}</p>
        </div>

      </div>
    </section>
  );
}
