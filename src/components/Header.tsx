import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ShieldCheck, Clock, MapPin, Sun, Moon } from 'lucide-react';
import { BUSINESS_INFO } from '../data.ts';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuote: () => void;
  theme?: string;
  onToggleTheme?: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenQuote, theme = 'day', onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'areas', label: 'Service Areas' },
    { id: 'about', label: 'About Us' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Ticker */}
      <div id="top-bar-ticker" className="bg-[#0b1c2e] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Serving Southern PA & Northern MD Border
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8581C]" />
              Licensed & Insured
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Hours: Mon - Sat
            </span>
            <span className="hidden sm:inline-block">Emergency Dispatch Available</span>
            
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                id="header-theme-toggle"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer select-none text-[10px] font-black uppercase tracking-wider h-7"
                title={theme === 'day' ? 'Switch to Night mode' : 'Switch to Day mode'}
              >
                {theme === 'day' ? (
                  <>
                    <Moon className="w-3 h-3 text-amber-500 fill-amber-500/10" />
                    <span>Night Vision</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3 h-3 text-[#E8581C]" />
                    <span>Daylight</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        id="main-app-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F2A44]/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
            : 'bg-[#0F2A44] py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo area */}
            <div
              id="header-brand-logo"
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleLinkClick('home')}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E8581C] to-amber-600 flex items-center justify-center text-white font-black shadow-inner">
                {/* SVG Pipe Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300"
                >
                  <path d="M4 12V4a2 2 0 0 1 2-2h4" />
                  <path d="M14 2h4a2 2 0 0 1 2 2v8" />
                  <circle cx="10" cy="12" r="2" />
                  <circle cx="14" cy="12" r="2" />
                  <rect x="2" y="14" width="20" height="6" rx="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-none group-hover:text-slate-200 transition-colors">
                  McKINNEY
                </span>
                <span className="text-xs font-semibold tracking-widest text-[#E8581C] leading-normal uppercase">
                  PLUMBING SERVICES
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === link.id
                      ? 'text-white bg-slate-800'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Quick Actions (Call / Quote Buttons) */}
            <div id="desktop-actions" className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneFormatted}
                id="header-phone-button"
                className="flex items-center gap-2 px-4 py-2 bg-slate-850 hover:bg-slate-800 border border-slate-700 text-white rounded-md transition-colors text-sm font-semibold shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#E8581C]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={onOpenQuote}
                id="header-quote-button"
                className="px-4.5 py-2 bg-gradient-to-r from-[#E8581C] to-amber-600 text-white hover:from-[#f06429] hover:to-amber-500 rounded-md text-sm font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Request Quote
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-850 rounded-md transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Draw */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0c1e30] border-b border-slate-800 overflow-hidden sticky top-[73px] z-30"
          >
            <div className="px-4 py-5 space-y-3">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`p-3 text-left text-sm font-semibold rounded-lg transition-colors flex flex-col justify-center ${
                      activeTab === link.id
                        ? 'bg-[#E8581C]/15 border border-[#E8581C]/40 text-white'
                        : 'bg-slate-900/40 border border-slate-800/40 text-slate-300 hover:bg-slate-850 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                  </button>
                ))}
              </div>

              {/* Mobile quick diagnostic CTA */}
              <div className="bg-slate-900/60 p-4.5 rounded-xl border border-slate-850 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span className="text-white font-bold text-sm">Need Help Right Away?</span>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href={BUSINESS_INFO.phoneFormatted}
                    id="mobile-phone-btn"
                    className="flex justify-center items-center gap-2 p-3 bg-emerald-600 active:bg-emerald-700 text-white rounded-lg text-sm font-bold shadow-md transition-transform"
                  >
                    <Phone className="w-4 h-4 animate-bounce" />
                    Call Plumber Now
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenQuote();
                    }}
                    id="mobile-quote-btn"
                    className="p-3 bg-gradient-to-r from-[#E8581C] to-orange-600 text-center text-white rounded-lg text-sm font-bold shadow-md transition-colors"
                  >
                    Request Free Estimate Link
                  </button>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-slate-400 text-2xs mt-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Avg dispatch: 1-2 Hours in Southern PA/MD
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
