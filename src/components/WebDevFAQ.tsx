import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { WebDevTranslations } from '../content/webDevTranslations';

interface Props { t: WebDevTranslations['faq'] }

export default function WebDevFAQ({ t }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--border)] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#a855f7]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
            <span className="eyebrow" style={{ color: '#a855f7' }}>{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#ec4899] to-[#a855f7]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-[1.1] mb-5">
            {t.h2.map((p, i) => p.gradient
              ? <span key={i} className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">{p.text}</span>
              : <span key={i}>{p.text}</span>
            )}
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="space-y-3">
          {t.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${isOpen ? 'border-[#a855f7]/30 bg-[var(--bg-card)]' : 'border-[var(--border)] bg-[var(--bg-card)]'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
                >
                  <span className={`font-semibold text-sm leading-snug transition-colors ${isOpen ? 'text-[var(--text)]' : 'text-[var(--text)] group-hover:text-[#a855f7]'}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    size={17}
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#a855f7]' : 'text-[var(--text-muted)]'}`}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
