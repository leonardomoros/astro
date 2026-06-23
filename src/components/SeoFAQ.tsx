import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { SeoPageTranslations } from '../content/seoPageTranslations';

interface Props { t: SeoPageTranslations['faq'] }

export default function SeoFAQ({ t }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 border-t border-[var(--border)] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#10b981]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="h-px w-5 bg-gradient-to-r from-[#10b981] to-[#3b82f6]" />
            <span className="eyebrow">{t.eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#3b82f6] to-[#10b981]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] leading-tight mb-5">
            {t.h2.map((part, i) =>
              part.gradient ? (
                <span key={i} className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h2>

          <p className="text-[var(--text-muted)] text-[15px] leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden transition-colors duration-200"
              style={{ borderColor: open === i ? '#10b98130' : undefined }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="text-[14px] font-semibold text-[var(--text)] leading-snug">{item.question}</span>
                <ChevronDown
                  size={16}
                  className="flex-shrink-0 text-[var(--text-muted)] transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', color: open === i ? '#10b981' : undefined }}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? '400px' : '0px' }}
              >
                <p className="px-6 pb-5 text-[13px] text-[var(--text-muted)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
