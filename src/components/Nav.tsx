import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Globe, ArrowRight, Sun, Moon } from 'lucide-react';
import type { Lang, Translations } from '../content/translations';
import GixLogo from './GixLogo';

interface NavProps {
  lang: Lang;
  t: Translations['nav'];
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  alternateHref: string;
}

export default function Nav({ lang, t, theme, toggleTheme, alternateHref }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isLight = theme === 'light';

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

  const textMuted = isLight ? 'text-zinc-500 hover:text-zinc-900' : 'text-zinc-400 hover:text-white';
const dropdownBg = isLight ? 'bg-white border-zinc-200 shadow-zinc-200/60' : 'bg-[#161616] border-white/8 shadow-black/60';
  const dropdownItem = isLight ? 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50' : 'text-zinc-400 hover:text-white hover:bg-white/5';
  const mobileBg = isLight ? 'bg-white border-black/8' : 'bg-[#0f0f0f] border-white/5';
  const mobileText = isLight ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-300 hover:text-white';
  const mobileAccordion = isLight ? 'border-zinc-200' : 'border-white/10';
  const toggleBorder = isLight ? 'border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-900' : 'border-white/10 hover:border-white/20 text-zinc-400 hover:text-white';

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
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => { clearTimeout(closeTimer.current); setDropdownOpen(true); }}
              onMouseLeave={() => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 150); }}
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

              <div
                className={`absolute top-full left-0 mt-2 w-52 border rounded-xl shadow-2xl overflow-hidden transition-all duration-200 origin-top-left ${dropdownBg} ${
                  dropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="py-1.5">
                  {t.servicesItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${dropdownItem}`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href={t.contactHref} className={`text-sm transition-colors font-jetbrains ${textMuted}`}>{t.contact}</a>
            <a href={t.faqsHref} className={`text-sm transition-colors font-jetbrains ${textMuted}`}>{t.faqs}</a>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 ${toggleBorder}`}
            >
              {isLight ? <Moon size={13} /> : <Sun size={13} />}
            </button>

            {/* Language toggle */}
            <button
              onClick={() => { window.location.href = alternateHref; }}
              className={`flex items-center gap-1.5 text-xs font-medium border rounded-full px-3 py-1.5 transition-all duration-200 ${toggleBorder}`}
            >
              <Globe size={12} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Desktop CTA */}
            <a
              href={t.ctaHref}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              {t.cta}
              <ArrowRight size={13} />
            </a>

            {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? `max-h-screen border-t ${mobileAccordion}` : 'max-h-0'
        }`}
      >
        <div className={`${mobileBg} px-4 pb-6 pt-4 space-y-1`}>
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
              mobileServicesOpen ? 'max-h-64' : 'max-h-0'
            }`}
          >
            <div className={`pl-3 pb-2 space-y-0.5 border-l ${mobileAccordion}`}>
              {t.servicesItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 pl-3 text-sm transition-colors ${mobileText}`}
                >
                  {item.label}
                </a>
              ))}
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
