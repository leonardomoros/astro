import type { Translations } from '../content/translations';
import GixLogo from './GixLogo';

interface FooterProps {
  t: Translations['footer'];
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  Instagram: IconInstagram,
  Linkedin:  IconLinkedin,
  Youtube:   IconYoutube,
};

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 py-16">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo */}
            <a href="/" className="inline-flex items-center mb-5 text-[var(--text)]">
              <GixLogo className="h-8 w-auto" />
            </a>

            {/* Tagline */}
            <p className="text-sm leading-relaxed text-[var(--text-muted)] max-w-[260px] mb-7">
              {t.tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {t.social.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return Icon ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="
                      w-9 h-9 rounded-xl flex items-center justify-center
                      border border-[var(--border)]
                      text-[var(--text-muted)]
                      hover:text-[#a855f7] hover:border-[#a855f7]/40
                      hover:bg-[#a855f7]/8
                      transition-all duration-200
                    "
                  >
                    <Icon size={16} />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          {/* Nav columns */}
          {t.columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text)] mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-[var(--border)] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)]">{t.copyright}</p>
          <p className="text-xs text-[var(--text-muted)]">
            Hecho con ♥ por{' '}
            <span className="gradient-text font-semibold">GixLabs</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
