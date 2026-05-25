import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, BUSINESS_INFO } from '../data.ts';
import { ServiceItem } from '../types.ts';
import {
  Wrench,
  Flame,
  Search,
  Gauge,
  Droplet,
  GitMerge,
  ChevronDown,
  Info,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Phone
} from 'lucide-react';

interface ServicesHubProps {
  onOpenQuote: () => void;
}

// Icon Mapping Helper
const getServiceIcon = (iconName: string, className: string = "w-6 h-6") => {
  switch (iconName) {
    case 'DropletOff':
      return <Droplet className={`${className} text-indigo-500`} />;
    case 'Flame':
      return <Flame className={`${className} text-amber-500`} />;
    case 'Search':
      return <Search className={`${className} text-emerald-500`} />;
    case 'Gauge':
      return <Gauge className={`${className} text-cyan-500`} />;
    case 'Wrench':
      return <Wrench className={`${className} text-orange-500`} />;
    case 'GitMerge':
      return <GitMerge className={`${className} text-purple-400`} />;
    default:
      return <Wrench className={`${className} text-slate-500`} />;
  }
};

export default function ServicesHub({ onOpenQuote }: ServicesHubProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [troubleSymptom, setTroubleSymptom] = useState<string>('');
  const [diagnosticResult, setDiagnosticResult] = useState<{
    assessment: string;
    urgency: 'routine' | 'urgent' | 'emergency';
    immediateStep: string;
    recommendedId: string;
  } | null>(null);

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!troubleSymptom) return;

    const value = troubleSymptom.toLowerCase();
    let assessment = "We recommend an on-site master diagnostic to trace the plumbing issue.";
    let urgency: 'routine' | 'urgent' | 'emergency' = "routine";
    let immediateStep = "Take clear photos of any pooling water if safe, and monitor the area.";
    let recommendedId = "leak-detection";

    if (value.includes('hot') || value.includes('heater') || value.includes('cold shower') || value.includes('tepid')) {
      assessment = "Possible failed water heater heating element, sediment buildup, or thermostat collapse.";
      urgency = "urgent";
      immediateStep = "Locate the power switch on your electrical panel (for electric heaters) or shut off the local gas valve (for gas heaters) if you suspect a serious tank leak.";
      recommendedId = "water-heaters";
    } else if (value.includes('clog') || value.includes('drain') || value.includes('backup') || value.includes('slow') || value.includes('toilet block')) {
      assessment = "Sewer lateral clog or heavy grease/root congestion restricting structural water flow.";
      urgency = "urgent";
      immediateStep = "Avoid running washing machines, dishwashers, or showers until cleared to prevent structural wastewater backup into lower bathrooms.";
      recommendedId = "drain-cleaning";
    } else if (value.includes('gush') || value.includes('burst') || value.includes('major leak') || value.includes('flooding') || value.includes('spraying')) {
      assessment = "Busted copper/PEX water supply line under continuous structural pressure.";
      urgency = "emergency";
      immediateStep = "CRITICAL: Locate your main water shut-off valve, typically located near your front foundation wall or your well pressure tank, and rotate it clockwise (or turn the lever perpendicular to the line) immediately!";
      recommendedId = "pipe-replacement";
    } else if (value.includes('pressure') || value.includes('well') || value.includes('clicking') || value.includes('sputter')) {
      assessment = "Well system adjacent regulator issue, sediment filtration lockup, or short-cycling vertical bladder pressure tank.";
      urgency = "urgent";
      immediateStep = "Turn off power to the water pump subpanel or pump circuit breaker if you hear the well pump cycling continuously without stopping.";
      recommendedId = "well-water-systems";
    } else if (value.includes('dripping') || value.includes('faucet') || value.includes('running toilet') || value.includes('hissing')) {
      assessment = "Leaking fixture cartridges, worn flappers, or faulty internal seals causing consistent fluid loss.";
      urgency = "routine";
      immediateStep = "Locate the chrome quarter-turn shut-off valve behind the toilet or under the cabinetry and twist it tight to isolate the drip/hiss.";
      recommendedId = "toilets-faucets";
    }

    setDiagnosticResult({
      assessment,
      urgency,
      immediateStep,
      recommendedId
    });
  };

  const handleSymptomSelect = (symptom: string) => {
    setTroubleSymptom(symptom);
    // Auto-trigger submit behavior simulated
    const mockEvent = { preventDefault: () => {} } as React.FormEvent;
    setTimeout(() => {
      // Small timeout to allow state to settle
      const prevVal = troubleSymptom;
      setTroubleSymptom(symptom);
    }, 50);
  };

  return (
    <section id="services-grid-hub" className="py-20 bg-[#0c1e30] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black tracking-widest text-[#E8581C] uppercase py-1 px-3 bg-[#E8581C]/10 rounded-full">
            Contractor Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Our Professional Plumbing Suite
          </h2>
          <p className="text-slate-350 font-light text-base md:text-md">
            McKinney Plumbing is equipped for both small leaks and massive repipes. Select a core service below to view diagnostic symptoms and service details.
          </p>
        </div>

        {/* Dynamic Symptom Diagnostics Widget */}
        <div id="service-diagnostics-assistant" className="bg-[#091522] border border-slate-800 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <span className="text-[#E8581C] text-2xs uppercase tracking-widest font-black flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-orange-500" />
                Dwellers' Troubleshooting Assistant
              </span>
              <h3 className="text-lg font-bold text-white">What symptoms are you experiencing?</h3>
            </div>
            {/* Quick symptom pills */}
            <div className="flex flex-wrap gap-2">
              {['Water is lukewarm', 'Drain is backing up', 'Spray/Burst pipe!', 'Well pump clicks', 'Toilet runs constantly'].map((sym) => (
                <button
                  key={sym}
                  onClick={() => {
                    setTroubleSymptom(sym);
                    setTimeout(() => {
                      const btn = document.getElementById('diag-submit-btn');
                      if (btn) btn.click();
                    }, 80);
                  }}
                  className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 rounded-md text-3xs font-medium text-slate-300 transition-all cursor-pointer"
                >
                  {sym}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleDiagnosticSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Describe what's wrong (e.g., 'rusty hot water', 'kitchen drain clogged', 'copper pipe burst')"
              value={troubleSymptom}
              onChange={(e) => setTroubleSymptom(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E8581C]"
            />
            <button
              type="submit"
              id="diag-submit-btn"
              className="px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 hover:bg-slate-710 text-white font-bold text-sm rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1"
            >
              Analyze Plumbing
            </button>
          </form>

          {/* Diagnostic results render */}
          <AnimatePresence>
            {diagnosticResult && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="mt-6 p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-400">Preliminary Diagnostic Statement:</span>
                    <p className="text-sm font-semibold text-white leading-relaxed">{diagnosticResult.assessment}</p>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-3xs font-bold uppercase tracking-wider ${
                      diagnosticResult.urgency === 'emergency'
                        ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                        : diagnosticResult.urgency === 'urgent'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        : 'bg-slate-500/10 text-slate-400 border border-slate-800'
                    }`}>
                      {diagnosticResult.urgency} priority dispatch
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-600/5 border border-orange-500/10 space-y-1.5">
                    <span className="text-xs font-bold text-[#E8581C] flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      Immediate Action Suggested:
                    </span>
                    <p className="text-2xs text-slate-300 leading-normal">{diagnosticResult.immediateStep}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-3xs text-slate-500">
                    *Assessment generated based on community historical rural well operations. Consult mechanic on site.
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        const srv = SERVICES.find(s => s.id === diagnosticResult.recommendedId);
                        if (srv) setSelectedService(srv);
                      }}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-755 border border-slate-700 text-slate-200 text-xs font-semibold rounded"
                    >
                      View Service Estimations
                    </button>
                    <button
                      onClick={onOpenQuote}
                      className="px-4 py-2 bg-[#E8581C] hover:bg-orange-600 text-white text-xs font-black rounded shadow"
                    >
                      Dispatch McKinney Technician
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Grid of core Service Cards */}
        <div id="service-catalogue-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="bg-[#091522] border border-slate-800/80 hover:border-slate-700 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <div className="space-y-4">
                {/* Service Card Thumbnail */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950 shrink-0 text-center">
                  <img
                    src={`/src/assets/images/service-${srv.id}.webp`}
                    alt={`${srv.title} Visual Representation`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      // Fallback to recommended premium image if local bundle is not present
                      if (srv.imageUrl) {
                        (e.target as HTMLImageElement).src = srv.imageUrl;
                      } else {
                        (e.target as HTMLImageElement).src = "https://picsum.photos/seed/" + srv.id + "/600/400";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Header item */}
                <div className="flex justify-between items-start">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850">
                    {getServiceIcon(srv.iconName, "w-6 h-6")}
                  </div>
                  <span className="text-3xs font-extrabold text-slate-500 uppercase tracking-widest border border-slate-800/80 px-2 py-1 rounded">
                    Plumbing Dept
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#E8581C] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {srv.shortDesc}
                </p>

                {/* Pricing Block banner */}
                <div className="bg-slate-900 border border-slate-850 p-3 rounded-lg flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div>
                    <div className="text-3xs font-bold text-slate-400 uppercase tracking-wider">Estimated Pricing:</div>
                    <div className="text-xs font-black text-white">{srv.estimatedPrice}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(srv)}
                  className="text-xs font-bold text-[#E8581C] group-hover:underline flex items-center gap-1"
                >
                  Learn Symptoms & Features
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenQuote}
                  className="text-2xs font-extrabold bg-slate-900 text-slate-300 hover:text-white border border-slate-800 px-3 py-1.5 rounded hover:bg-slate-850 transition-colors"
                >
                  Book Estimate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Specification Drawer / Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#0c1e30] border border-slate-850 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Header aspect */}
                <div className="bg-[#091522] p-6 border-b border-slate-800 flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900 rounded-lg">
                      {getServiceIcon(selectedService.iconName, "w-7 h-7")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                      <span className="text-3xs text-[#E8581C] font-black uppercase tracking-widest leading-none">
                        Specification & Diagnostic Matrix
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1 px-2.5 bg-slate-900 border border-slate-800 rounded text-slate-400 hover:text-white transition-colors text-sm font-semibold"
                  >
                    Close ✕
                  </button>
                </div>

                {/* Content elements scrollable */}
                <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                  
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Deep Operational Overview</h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {selectedService.longDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Symptoms listed */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        Common House Symptoms
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {selectedService.symptoms.map((sym, index) => (
                          <li key={index} className="flex gap-2 items-start">
                            <span className="text-amber-500 font-extrabold mt-0.5">•</span>
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        McKinney Service Features
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {selectedService.features.map((feat, index) => (
                          <li key={index} className="flex gap-2 items-start">
                            <span className="text-emerald-500 font-extrabold">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Service estimate policy card */}
                  <div className="bg-slate-900 border border-slate-850 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Info className="w-4.5 h-4.5 text-slate-400" />
                        <span className="text-xs font-bold text-slate-300">Estimates Policy:</span>
                      </div>
                      <span className="text-2xs font-extrabold text-[#E8581C] border border-[#E8581C]/20 px-2 py-0.5 rounded uppercase">
                        {selectedService.pricingModel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-350 leading-relaxed font-light">
                      At McKinney Plumbing Services, we do not engage in bait-and-switch billing. Once our professional plumbers evaluate your fixtures onsite, we secure written authorization on specified line items before unpacking any tools. Fill out our central form to trigger an upfront estimate.
                    </p>
                  </div>

                </div>

                {/* Footer and Dispatch actions */}
                <div className="bg-[#091522] p-5 border-t border-slate-800 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Go Back
                  </button>
                  <div className="flex gap-3">
                    <a
                      href={BUSINESS_INFO.phoneFormatted}
                      className="px-4 py-2 bg-slate-900 border border-slate-750 text-white rounded font-bold text-xs hover:bg-slate-850 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#E8581C]" />
                      <span>Phone Dispatch</span>
                    </a>
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        onOpenQuote();
                      }}
                      className="px-4.5 py-2 bg-gradient-to-r from-[#E8581C] to-orange-600 text-white font-extrabold text-xs rounded shadow"
                    >
                      Instant Quote Request
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Highlight Banner / Emergency prompt inside services */}
        <div id="service-emergency-alert" className="p-8 md:p-10 rounded-2xl bg-gradient-to-tr from-rose-950/80 via-rose-900/40 to-slate-900 border border-rose-900/60 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-y-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-48 h-48 text-rose-500 fill-current"
            >
              <path d="M12 2L2 22h20L12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z" />
            </svg>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-3xs font-extrabold text-rose-455 uppercase tracking-widest border border-rose-500/30 px-2 py-0.5 rounded bg-rose-500/10 inline-block mb-1.5">
                Urgent Assistance Required?
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white">
                Burst Copper Lines, Failed Water Heaters, or Extreme Backups?
              </h3>
              <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Do not wait for standard dispatch hours if pooling wastewater is actively damaging your home. We dispatch fully equipped expert plumbers with local priority throughout Southern Lancaster County.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={BUSINESS_INFO.phoneFormatted}
                id="emergency-plumbing-call"
                className="p-3 px-6 bg-red-600 hover:bg-red-700 text-center text-white text-sm font-black rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4.5 h-4.5 animate-pulse" />
                <span>Call Emergency Line Now</span>
              </a>
              <button
                onClick={onOpenQuote}
                className="p-3 bg-slate-950/40 hover:bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-center text-xs font-bold rounded-lg transition-all"
              >
                Fast Inline Estimate Link
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
