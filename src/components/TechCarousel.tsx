import { Server } from 'lucide-react';

/* ── Inline SVG brand icons ─────────────────────────────────────── */

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.25">
    <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2L2 20.5h20L12 2z"/>
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5h-1.688L9.188 8.438V16.5H7.5V7.5h2.063L15 15.188V7.5H16.5v9z"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <rect width="24" height="24" rx="3.5"/>
    <path fill="#0a0a14" d="M4 10.5h6v1.5H7.5V18H6v-6H4v-1.5zm7 0h4.5c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v1H16V17h-4.5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2.5v-1H11v-1.5z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 54 33" className="w-8 h-5" fill="currentColor">
    <path d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 12.726 33.37 15.6 39 15.6c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C35.256 2.874 32.63 0 27 0zM13.5 15.6C6.3 15.6 1.8 19.2 0 26.4c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.744 28.326 19.37 31.2 25 31.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C21.756 18.474 19.13 15.6 13.5 15.6z"/>
  </svg>
);

const AstroIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M16.074 16.86C15.354 17.476 13.58 18 12 18s-3.354-.524-4.074-1.14c-.72-.617-.743-1.52-.743-2.226v-.233c0-.787.418-1.44 1.107-1.74C9.5 12.242 10.702 12 12 12s2.5.242 3.71.661c.69.3 1.107.953 1.107 1.74v.233c0 .706-.023 1.609-.743 2.226z"/>
    <path d="M15.27 4.46c.463 1.515-.078 3.758-1.688 5.46C11.972 11.63 9.26 12 9.26 12S8 10.528 7.547 9.08C7.07 7.57 7.658 5.6 9.032 4.06c1.382-1.55 3.24-2.56 4.44-2.06 1.198.5 1.33 1 1.798 2.46z"/>
    <path d="M8.73 4.46C8.267 5.975 8.808 8.218 10.418 9.92c1.61 1.71 4.32 2.08 4.32 2.08s1.26-1.472 1.713-2.92c.477-1.51-.111-3.48-1.485-5.02C13.584 2.51 11.726 1.5 10.526 2c-1.198.5-1.33 1-1.796 2.46z"/>
  </svg>
);

const WordPressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM2.14 12c0-5.453 4.41-9.857 9.86-9.857 2.232 0 4.285.74 5.934 1.98L4.12 17.934A9.822 9.822 0 012.14 12zm9.86 9.857a9.822 9.822 0 01-5.71-1.82l11.688-13.416A9.848 9.848 0 0121.86 12c0 5.453-4.41 9.857-9.86 9.857z"/>
  </svg>
);

const ShopifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M15.337 23.979l7.216-1.561S20.119 5.47 20.1 5.354c-.017-.116-.114-.192-.21-.192-.098 0-1.541-.1-1.541-.1s-1.232-1.292-1.012-1.083v20zm-4.204.021L11.133 0S9.492.5 8.822.717c-.076.025-.165.052-.263.081C7.843.302 6.95 0 5.929 0 2.717 0 1.12 4.07 1.12 5.914c0 1.147.272 1.964.682 2.566L.538 9.12c.003.056.543 3.654 1.22 8.23L13.133 24l-2-.022zm-2.69-11.082A5.218 5.218 0 018 12.5c0-.59.09-1.14.253-1.64.174.063.358.1.556.1.82 0 1.47-.65 1.47-1.47a1.47 1.47 0 00-.135-.616C10.58 9.5 11 10.186 11 11c0 .978-.698 1.8-1.557 1.918z"/>
  </svg>
);

const StripeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
  </svg>
);

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-6" fill="currentColor">
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.37.21 1.973.195.8.42 1.403.762 1.856.344.457.802.7 1.347.7.82 0 1.582-.391 2.643-1.524.596-.64 1.354-1.6 2.322-2.926l1.073-1.524.003.014c.313.46.826 1.285 1.826 1.285.48 0 .91-.278 1.302-.858.378-.558.695-1.33.963-2.273.215-.76.38-1.628.38-2.563 0-1.28-.21-2.563-.56-3.844C11.96 3.834 9.405 4.03 6.915 4.03zm10.17 0c-1.035 0-2.136.5-3.243 1.55-.507.598-1.014 1.351-1.527 2.297-.517.95-.974 2.157-1.317 3.425-.35 1.28-.56 2.563-.56 3.844 0 .935.165 1.803.38 2.563.268.943.585 1.715.963 2.273.392.58.821.858 1.302.858 1 0 1.513-.825 1.826-1.285l.003-.014 1.073 1.524c.968 1.326 1.726 2.286 2.322 2.926 1.061 1.133 1.822 1.524 2.643 1.524.545 0 1.003-.243 1.347-.7.342-.453.567-1.057.762-1.856.14-.604.21-1.267.21-1.973 0-2.566-.704-5.241-2.044-7.306-1.188-1.832-2.903-3.113-4.871-3.113z"/>
  </svg>
);

const GoogleAdsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M2.503 12.004a2.503 2.503 0 100 5.006 2.503 2.503 0 000-5.006zM12 6.998a2.503 2.503 0 100 5.005A2.503 2.503 0 0012 6.998zM9.497 2.003L4.56 10.543l2.165 1.25L11.66 3.25 9.497 2.003zM21.497 12a2.503 2.503 0 100 5.006 2.503 2.503 0 000-5.006zm-4.334-9.997L12.34 9.543l2.165 1.25 4.823-8.542-2.165-1.248z"/>
  </svg>
);

const WebflowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17.82 7.724H13.3c0 1.38-.865 2.607-2.16 3.059v-.02a3.225 3.225 0 01-1.064.178H10.05c-1.77 0-3.237-1.34-3.415-3.062l-.003-.001V7.72H1.87L5.613 21l4.22-8.468L14.053 21zM22.13 7.724h-3.737l-2.39 5.956-1.764-5.956h-1.35l2.655 7.984z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-20H4c-2.2 0-4 1.8-4 4s1.8 4 4 4h4V4zm4 0v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4zM8 12H4C1.8 12 0 13.8 0 16s1.8 4 4 4h4v-8zm4 0c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4z"/>
  </svg>
);

/* ── Tech list ──────────────────────────────────────────────────── */

const TECHS = [
  { name: 'React',         icon: <ReactIcon /> },
  { name: 'Next.js',       icon: <NextjsIcon /> },
  { name: 'TypeScript',    icon: <TypeScriptIcon /> },
  { name: 'Tailwind CSS',  icon: <TailwindIcon /> },
  { name: 'Astro',         icon: <AstroIcon /> },
  { name: 'Node.js',       icon: <Server size={22} /> },
  { name: 'WordPress',     icon: <WordPressIcon /> },
  { name: 'Shopify',       icon: <ShopifyIcon /> },
  { name: 'Webflow',       icon: <WebflowIcon /> },
  { name: 'Figma',         icon: <FigmaIcon /> },
  { name: 'GitHub',        icon: <GithubIcon /> },
  { name: 'Vercel',        icon: <VercelIcon /> },
  { name: 'Stripe',        icon: <StripeIcon /> },
  { name: 'Meta Ads',      icon: <MetaIcon /> },
  { name: 'Google Ads',    icon: <GoogleAdsIcon /> },
];

interface TechCarouselProps {
  eyebrow: string;
  headline: string;
}

export default function TechCarousel({ eyebrow, headline }: TechCarouselProps) {
  const items = [...TECHS, ...TECHS]; // duplicate for seamless loop

  return (
    <section className="py-20 border-t border-[var(--border)] overflow-hidden">
      <style>{`
        @keyframes techMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .tech-marquee { animation: techMarquee 40s linear infinite; }
        .tech-marquee:hover { animation-play-state: paused; }
        .tech-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <div className="h-px w-5 bg-gradient-to-r from-[#a855f7] to-[#ec4899]" />
          <span className="eyebrow">{eyebrow}</span>
          <div className="h-px w-5 bg-gradient-to-r from-[#ec4899] to-[#a855f7]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">{headline}</h2>
      </div>

      {/* Marquee strip */}
      <div className="tech-fade">
        <div className="flex tech-marquee">
          {items.map((tech, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 flex items-center gap-3
                mx-6 opacity-40 hover:opacity-80
                transition-opacity duration-300
                text-[var(--text)]
              "
            >
              <span className="flex-shrink-0">{tech.icon}</span>
              <span className="text-sm font-semibold whitespace-nowrap tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
