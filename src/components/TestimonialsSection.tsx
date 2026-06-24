import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

interface TestimonialsSectionProps {
  eyebrow: string;
  headline: string;
  subtitle: string;
  items: Testimonial[];
}

function TestimonialCard({ item, delay }: { item: Testimonial; delay: number }) {
  return (
    <div
      className="
        relative flex flex-col gap-5 p-7
        bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl
        hover:border-[#a855f7]/30 transition-colors duration-300
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Quote mark */}
      <div
        className="absolute top-5 right-6 text-6xl leading-none font-serif select-none"
        style={{
          background: 'linear-gradient(135deg, #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          opacity: 0.3,
        }}
      >
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-[#a855f7] text-[#a855f7]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[var(--text)] leading-relaxed text-sm lg:text-base flex-1">
        "{item.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
        >
          {item.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--text)]">{item.author}</p>
          <p className="text-xs text-[var(--text-muted)]">{item.role} · {item.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection({ eyebrow, headline, subtitle, items }: TestimonialsSectionProps) {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
            <span className="eyebrow">{eyebrow}</span>
            <div className="h-px w-5 bg-gradient-to-r from-[#ec4899] to-[#a855f7]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4">
            {headline}
          </h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">{subtitle}</p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <TestimonialCard key={i} item={item} delay={i * 80} />
          ))}
        </div>

      </div>
    </section>
  );
}
