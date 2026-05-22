import { Phone, Mail, MapPin, Shield, CheckCircle2, FileSpreadsheet, Sun, Moon } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data.ts';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenQuote: () => void;
  theme?: string;
  onToggleTheme?: () => void;
}

export default function Footer({ setActiveTab, onOpenQuote, theme = 'night', onToggleTheme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-app-footer" className="bg-[#091522] text-slate-400 border-t border-slate-800 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company identity & licensure */}
          <div id="footer-branding-block" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#E8581C] to-red-600 flex items-center justify-center text-white font-black shadow-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5"
                >
                  <path d="M4 12V4a2 2 0 0 1 2-2h4" />
                  <path d="M14 2h4a2 2 0 0 1 2 2v8" />
                  <rect x="2" y="14" width="20" height="6" rx="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-md font-bold text-white tracking-tight leading-none">
                  McKINNEY
                </span>
                <span className="text-3xs font-semibold tracking-widest text-[#E8581C] leading-normal uppercase">
                  PLUMBING SERVICES
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Trusted, local, and honest plumbers. Dispatched straight from Peach Bottom to residents across southern Lancaster, York, and northern MD state borders.
            </p>
            
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-500">
                <Shield className="w-4 h-4 text-[#E8581C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-400">Licensed & Insured</div>
                  <div>{BUSINESS_INFO.licensePA}</div>
                  <div>{BUSINESS_INFO.licenseMD}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-400">Insurance Bond Limit</div>
                  <div>{BUSINESS_INFO.insuranceLimit}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div id="footer-services-links">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-5">
              Plumbing Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="hover:text-white hover:underline transition-colors text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="text-[#E8581C] hover:text-orange-400 font-semibold transition-colors"
                >
                  View Details & Symptoms →
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact info */}
          <div id="footer-contact-block" className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-5">
              Contact & Dispatches
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E8581C] shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-300">Call Live Dispatch:</div>
                  <a href={BUSINESS_INFO.phoneFormatted} className="text-[#E8581C] font-black text-base hover:text-orange-400">
                    {BUSINESS_INFO.phone}
                  </a>
                  <div className="text-3xs text-slate-500 mt-0.5">Prompt response across Mason-Dixon zone</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-350">Email Support:</div>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white select-all">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-350">Base Dispatch Address:</div>
                  <div className="text-slate-400 pr-4">{BUSINESS_INFO.address}</div>
                  <div className="text-3xs text-slate-500 mt-1 font-medium">{BUSINESS_INFO.addressNote}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Operating hours + quick dispatch CTA */}
          <div id="footer-hours-block" className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-5">
              Service Operations
            </h3>
            <p className="text-sm text-slate-400">
              <strong className="text-slate-300">Office Working Hours:</strong><br />
              {BUSINESS_INFO.hours}
            </p>
            <div className="bg-slate-900 border border-slate-800 p-4.5 rounded-lg space-y-3">
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-amber-500 h-full w-full animate-pulse" />
              </div>
              <div className="text-2xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                24/7 Leak & Burst Response
              </div>
              <p className="text-3xs text-slate-400">
                {BUSINESS_INFO.emergencyNote}
              </p>
              <button
                onClick={onOpenQuote}
                id="footer-quote-btn"
                className="w-full text-center px-3 py-2 bg-slate-800 hover:bg-slate-755 border border-slate-700 text-white font-bold text-xs rounded transition-colors"
              >
                Book Same-Day Visit
              </button>
            </div>
          </div>

        </div>

        {/* Day/Night Theme Switcher */}
        <div id="theme-switch-row" className="mt-12 pt-6 border-t border-slate-800/80 flex justify-center items-center">
          <button
            onClick={onToggleTheme}
            id="theme-mode-toggle-button"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-bold text-slate-300 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
          >
            {theme === 'day' ? (
              <>
                <Moon className="w-4 h-4 text-amber-500 fill-amber-500/10" />
                <span>Switch to Night vision (High Contrast)</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-[#E8581C]" />
                <span>Switch to Day light mode</span>
              </>
            )}
          </button>
        </div>

        {/* Lower copyright bar */}
        <div id="footer-legal-bar" className="mt-16 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button onClick={() => handleLinkClick('about')} className="hover:text-slate-400 hover:underline">About</button>
            <span>•</span>
            <button onClick={() => handleLinkClick('areas')} className="hover:text-slate-400 hover:underline">Service Limits</button>
            <span>•</span>
            <button onClick={() => handleLinkClick('faqs')} className="hover:text-slate-400 hover:underline">Emergency Info</button>
            <span>•</span>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-slate-400 hover:underline">Legal Disclosures</button>
          </div>
          <p className="text-3xs text-slate-600">
            Website custom styled with local PA community guidelines. Built with durable, zero-tracker high-performance specifications.
          </p>
        </div>
      </div>
    </footer>
  );
}
