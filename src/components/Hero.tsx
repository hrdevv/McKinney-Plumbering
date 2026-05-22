import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight, CheckCircle, Shield, Award, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_CITIES } from '../data.ts';

interface HeroProps {
  onOpenQuote: () => void;
  setActiveTab: (tab: string) => void;
}

export default function Hero({ onOpenQuote, setActiveTab }: HeroProps) {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<{
    found: boolean;
    city?: string;
    travelTime?: number;
    checked: boolean;
  }>({ found: false, checked: false });

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    const matched = SERVICE_CITIES.find(
      (c) => c.zipCode === cleanZip || c.name.toLowerCase() === cleanZip.toLowerCase()
    );

    if (matched) {
      setZipResult({
        found: true,
        city: matched.name,
        travelTime: matched.estTravelTimeMin,
        checked: true
      });
    } else {
      setZipResult({
        found: false,
        checked: true
      });
    }
  };

  // Safe reference to the generated image with picsum fallback
  const heroImageSrc = "/src/assets/images/plumbing_work_hero_1779484799974.png";
  const heroImageWebp = "/src/assets/images/plumbing_work_hero_1779484799974.webp";

  return (
    <div id="hero-banner-section" className="relative bg-slate-950 text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image structure with fallback and premium overlay */}
      <div className="absolute inset-0 z-0">
        <picture id="hero-picture-block">
          <source srcSet={heroImageWebp} type="image/webp" />
          <img
            src={heroImageSrc}
            id="hero-background-img"
            alt="McKinney Precision Plumbing Work"
            className="w-full h-full object-cover object-center opacity-30 object-bottom"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            onError={(e) => {
              // Safe fallback if generated path is somehow not resolved in test frameworks
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/plumbing/1920/1080?blur=2";
            }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#091522] via-[#0F2A44]/80 to-[#0F2A44]/65 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Mission, Positioning & Actions */}
        <div id="hero-headlines" className="lg:col-span-7 space-y-6 md:space-y-8">
          
          {/* Trust Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-semibold text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-[#E8581C] animate-pulse" />
            Licensed & Insured Local Plumbing Team
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
            Plumbing You Can <span className="text-[#E8581C]">Count On</span> in Southern PA & MD
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            From emergency pipe leaks and clogged drains to vertical water heater swaps and well pump controls. McKinney Plumbing Services LLC delivers swift, honest work with guaranteed upfront workmanship.
          </p>

          {/* Core Trust Indicators Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-sm font-semibold text-slate-200">100% Upfront Quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-sm font-semibold text-slate-200">Local Peach Bottom Base</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-sm font-semibold text-slate-200">24/7 Leak Response</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BUSINESS_INFO.phoneFormatted}
              id="hero-call-cta"
              className="flex justify-center items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E8581C] to-orange-600 text-white rounded-lg font-extrabold text-base shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 animate-wiggle" />
              <span>Call Plumber: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenQuote}
              id="hero-estimate-cta"
              className="flex justify-center items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-700 rounded-lg text-slate-250 font-extrabold text-base shadow-md transition-colors"
            >
              <span>Get Free Quote Estimate</span>
              <ArrowRight className="w-4 h-4 text-[#E8581C]" />
            </button>
          </div>

          {/* Subtle rating guarantee */}
          <p className="text-xs text-slate-400 font-medium">
            ★ ★ ★ ★ ★ <strong className="text-slate-250">5.0 Star Rated</strong> by southern Lancaster & York County PA homeowners
          </p>
        </div>

        {/* Right Column: Local Area Live Dispatch Estimator Widget */}
        <div id="hero-live-widget" className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#0b1c2e]/95 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative"
          >
            {/* Corner Badge */}
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-[#E8581C] text-white font-extrabold text-3xs uppercase tracking-widest rounded-md shadow-md animate-bounce">
              Live Dispatch
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#E8581C]" />
                <h3 className="font-bold text-lg text-white">Am I in the Service Area?</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We are dispatched fast. Type your ZIP code or municipal town name below to check immediate dispatch coverage and average travel time to your door.
              </p>

              <form onSubmit={handleZipCheck} className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. 17566 or Quarryville"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-750 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E8581C] transition-colors"
                  maxLength={25}
                />
                <button
                  type="submit"
                  id="zip-check-submit"
                  className="px-4 bg-[#E8581C] hover:bg-orange-600 text-white font-bold text-sm rounded-lg transition-colors flex items-center justify-center shrink-0"
                >
                  Verify
                </button>
              </form>

              {/* Check result rendering */}
              {zipResult.checked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`p-4.5 rounded-xl border ${
                    zipResult.found
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  }`}
                >
                  {zipResult.found ? (
                    <div className="space-y-2 text-xs">
                      <div className="font-extrabold text-sm text-[#00E5A3] flex items-center gap-2">
                        <span>✓</span> COVERED AREA: {zipResult.city}, PA-MD Zone
                      </div>
                      <p className="text-slate-300">
                        Excellent! McKinney trucks regularly service {zipResult.city}. Emergency crew can reach your home within{' '}
                        <strong className="text-white font-bold">{zipResult.travelTime} minutes</strong> in typical traffic.
                      </p>
                      <button
                        onClick={onOpenQuote}
                        className="text-xs font-bold text-white underline hover:text-emerald-200 mt-1"
                      >
                        Proceed to Book and Lock in {zipResult.city} Priority Dispatch &rarr;
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1.5 text-xs">
                      <div className="font-extrabold text-sm text-rose-450">✕ Outer Region / Boundary Pending</div>
                      <p className="text-slate-350">
                        "{zipInput}" is outside our standard automatic dispatch list, but we frequently service nearby areas! Please contact our office directly at{' '}
                        <a href={BUSINESS_INFO.phoneFormatted} className="text-[#E8581C] underline font-bold">
                          {BUSINESS_INFO.phone}
                        </a>{' '}
                        to confirm if a truck is available near you.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Standard Quick Info Links inside widget */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-3xs text-slate-400">
                <div className="flex gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Licensed HIC PA Registry</span>
                </div>
                <div className="flex gap-1.5">
                  <Award className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Guaranteed Repair Labor</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
