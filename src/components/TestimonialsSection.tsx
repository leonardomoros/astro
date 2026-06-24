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

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="
      flex-shrink-0 w-80 mx-3
      flex flex-col gap-4 p-6
      bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl
      hover:border-[#a855f7]/40 transition-colors duration-300
    ">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} className="fill-[#a855f7] text-[#a855f7]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-[var(--text)] leading-relaxed flex-1">
        "{item.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-[var(--border)]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
        >
          {item.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--text)] leading-tight">{item.author}</p>
          <p className="text-xs text-[var(--text-muted)]">{item.role} · {item.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection({ eyebrow, headline, subtitle, items }: TestimonialsSectionProps) {
  const headerRef = useScrollReveal<HTMLDivElement>();

  // Duplicate all items twice per row for seamless infinite loop on all screen sizes
  const row1 = [...items, ...items];
  const row2 = [...[...items].reverse(), ...[...items].reverse()];

  return (
    <section className="py-24 border-t border-[var(--border)] overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .testimonials-scroll-left  { animation: scrollLeft  40s linear infinite; }
        .testimonials-scroll-right { animation: scrollRight 40s linear infinite; }
        .testimonials-scroll-left:hover,
        .testimonials-scroll-right:hover { animation-play-state: paused; }
        .testimonials-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>

      {/* Header */}
      <div ref={headerRef} className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
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

      {/* Row 1 — scrolls left */}
      <div className="testimonials-fade mb-5">
        <div className="flex testimonials-scroll-left">
          {row1.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="testimonials-fade">
        <div className="flex testimonials-scroll-right">
          {row2.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
