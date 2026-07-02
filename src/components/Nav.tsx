import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, Menu, X, Globe, ArrowRight, Sun, Moon,
  Monitor, TrendingUp, LayoutTemplate, Mail, Target, Zap, Palette,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Lang, Translations } from '../content/translations';
import GixLogo from './GixLogo';

interface NavProps {
  lang: Lang;
  t: Translations['nav'];
  alternateHref: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Monitor, TrendingUp, LayoutTemplate, Mail, Target, Zap, Palette,
};

export default function Nav({ lang, t, alternateHref }: NavProps) {
  const [scrolled, setScrolled]               = useState(false);
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [dropdownOpen, setDropdownOpen]       = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isLight = theme === 'light';
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMobileOpen(false); setDropdownOpen(false); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg = scrolled || mobileOpen
    ? isLight
      ? 'bg-white/95 backdrop-blur-md border-b border-black/8'
      : 'bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/5'
    : 'bg-transparent';

  const textMuted    = isLight ? 'text-zinc-500 hover:text-zinc-900' : 'text-zinc-400 hover:text-white';
  const mobileBg     = isLight ? 'bg-white border-black/8' : 'bg-[#0f0f0f] border-white/5';
  const mobileText   = isLight ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-300 hover:text-white';
  const mobileAccordion = isLight ? 'border-zinc-200' : 'border-white/10';
  const toggleBorder = isLight ? 'border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-900' : 'border-white/10 hover:border-white/20 text-zinc-400 hover:text-white';

  // Mega menu theme tokens
  const megaBg       = isLight ? 'bg-white border-zinc-200/80 shadow-zinc-200/60' : 'bg-[#161616] border-white/8 shadow-black/70';
  const megaHeader   = isLight ? 'text-zinc-400' : 'text-zinc-500';
  const megaItem     = isLight
    ? 'hover:bg-zinc-50 text-zinc-800'
    : 'hover:bg-white/[0.04] text-[var(--text)]';
  const megaDivider  = isLight ? 'border-zinc-100' : 'border-white/6';
  const megaIconBg   = isLight ? 'bg-[#a855f7]/8 group-hover:bg-[#a855f7]/14' : 'bg-[#a855f7]/10 group-hover:bg-[#a855f7]/20';
  const megaCtaText  = isLight ? 'text-zinc-500 hover:text-[#a855f7]' : 'text-zinc-400 hover:text-[#a855f7]';

  const viewAllLabel = lang === 'es' ? 'Ver todos los servicios' : 'View all services';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            {isLight
              ? <img src="/logo-gix-black.svg" alt="GixLabs" className="h-7 w-auto" />
              : <GixLogo className="h-7 w-auto" />
            }
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {/* ── Services trigger + mega menu ── */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => { clearTimeout(closeTimer.current); setDropdownOpen(true); }}
              onMouseLeave={() => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 120); }}
            >
              <a
                href={t.servicesHref}
                className={`flex items-center gap-1 text-sm py-1 transition-colors font-jetbrains ${textMuted}`}
              >
                {t.services}
                <ChevronDown
                  size={13}
                  className={`mt-px transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </a>

              {/* ── Mega menu panel ── */}
              <div
                className={`
                  absolute top-full left-0 mt-3 w-[600px]
                  border rounded-2xl shadow-2xl overflow-hidden
                  transition-all duration-200 origin-top-left
                  ${megaBg}
                  ${dropdownOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-[0.97] -translate-y-1 pointer-events-none'}
                `}
              >
                {/* Header row */}
                <div className={`flex items-center justify-between px-5 pt-4 pb-3 border-b ${megaDivider}`}>
                  <span className={`text-[11px] font-semibold tracking-[0.16em] uppercase ${megaHeader}`}>
                    {lang === 'es' ? 'Nuestros Servicios' : 'Our Services'}
                  </span>
                  <a
                    href={t.servicesHref}
                    onClick={() => setDropdownOpen(false)}
                    className={`flex items-center gap-1 text-xs font-medium transition-colors ${megaCtaText}`}
                  >
                    {viewAllLabel}
                    <ArrowRight size={11} />
                  </a>
                </div>

                {/* Grid of services — 2 columns */}
                <div className="grid grid-cols-2 gap-1 p-3">
                  {t.servicesItems.map((item) => {
                    const IconComp = ICON_MAP[item.icon] ?? Monitor;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`group flex items-start gap-3 p-3 rounded-xl transition-all duration-150 ${megaItem}`}
                      >
                        {/* Icon pill */}
                        <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${megaIconBg}`}>
                          <IconComp size={17} className="text-[#a855f7]" />
                        </div>
                        {/* Text */}
                        <div className="min-w-0">
                          <div className="text-[13px] font-semibold leading-snug mb-0.5">{item.label}</div>
                          <div className="text-[11px] leading-relaxed text-[var(--text-muted)] truncate">{item.description}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <a href={t.contactHref} className={`text-sm transition-colors font-jetbrains ${textMuted}`}>{t.contact}</a>
            <a href={t.faqsHref}    className={`text-sm transition-colors font-jetbrains ${textMuted}`}>{t.faqs}</a>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 ${toggleBorder}`}
            >
              {isLight ? <Moon size={13} /> : <Sun size={13} />}
            </button>

            <button
              onClick={() => { window.location.href = alternateHref; }}
              className={`flex items-center gap-1.5 text-xs font-medium border rounded-full px-3 py-1.5 transition-all duration-200 ${toggleBorder}`}
            >
              <Globe size={12} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <a
              href={t.ctaHref}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              {t.cta}
              <ArrowRight size={13} />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden transition-colors p-1 ${textMuted}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? `max-h-screen border-t ${mobileAccordion}` : 'max-h-0'
        }`}
      >
        <div className={`${mobileBg} px-4 pb-6 pt-4 space-y-1`}>
          {/* Services accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className={`flex items-center justify-between w-full py-3 text-sm transition-colors ${mobileText}`}
          >
            <span>{t.services}</span>
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <div className={`pl-2 pb-2 space-y-0.5 border-l ${mobileAccordion}`}>
              {t.servicesItems.map((item) => {
                const IconComp = ICON_MAP[item.icon] ?? Monitor;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 py-2.5 pl-3 pr-2 rounded-lg text-sm transition-colors ${mobileText}`}
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center bg-[#a855f7]/10">
                      <IconComp size={14} className="text-[#a855f7]" />
                    </div>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          <a
            href={t.contactHref}
            onClick={() => setMobileOpen(false)}
            className={`block py-3 text-sm transition-colors ${mobileText}`}
          >
            {t.contact}
          </a>
          <a
            href={t.faqsHref}
            onClick={() => setMobileOpen(false)}
            className={`block py-3 text-sm transition-colors ${mobileText}`}
          >
            {t.faqs}
          </a>

          <div className="pt-4">
            <a
              href={t.ctaHref}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-sm font-semibold px-5 py-3 rounded-full w-full"
            >
              {t.cta}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
