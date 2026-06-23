import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { EmailMarketingTranslations } from '../content/emailMarketingTranslations';

const COLOR_FROM = '#f59e0b';
const COLOR_TO   = '#f97316';

interface Props {
  t: EmailMarketingTranslations['faq'];
}

export default function EmailFAQ({ t }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="eyebrow" style={{ color: COLOR_FROM }}>{t.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--text)' }}>
            {t.title}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {t.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? `${COLOR_FROM}55` : 'var(--border)',
                  background: isOpen ? `${COLOR_FROM}0d` : 'var(--bg-card)',
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: isOpen ? COLOR_FROM : 'var(--text-muted)',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
