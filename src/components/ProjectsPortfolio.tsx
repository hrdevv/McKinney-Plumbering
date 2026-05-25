import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2, Clock, MapPin, Sparkles, AlertTriangle } from 'lucide-react';

interface Project {
  id: string;
  category: string;
  title: string;
  location: string;
  timeframe: string;
  challenge: string;
  solution: string;
  beforeImg: string;
  afterImg: string;
  testimonial: {
    quote: string;
    author: string;
    rating: number;
  };
  metrics: string[];
}

const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "tank-upgrade",
    category: "Water Heater Upgrade",
    title: "Leaking Legacy Gas Water Heater Replacement",
    location: "Quarryville, PA",
    timeframe: "3 Hours",
    challenge: "15-year-old failing atmospheric draft gas water heater with heavy internal scale deposit, rusty pipe nipples, and a dripping relief line pooling water in the utility space.",
    solution: "Installed a modern premium 50-gallon high-recovery unit with corrosion-resistant brass elements, a thermal expansion tank calibrated for well-pump pressures, and new full-port brass isolation ball valves.",
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=650&q=80",
    afterImg: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=650&q=80",
    testimonial: {
      quote: "Dillon was fast, clean, and upfront about the exact pricing. No surprise fees. Solid, master-grade pipe work!",
      author: "Robert T., Quarryville resident",
      rating: 5
    },
    metrics: ["100% Code Compliant", "Energy-Star Rated Tank", "Lifetime Brass Fittings"]
  },
  {
    id: "drain-clearing",
    category: "Main Line Clog Extraction",
    title: "Sewer Drain Blockage & Tree Root Hydro-Jetting",
    location: "Lancaster, PA",
    timeframe: "2.5 Hours",
    challenge: "Complete blockage on the main waste collection lateral. Wastewater was backing up through double-fixture traps into basement bathrooms due to severe root intrusion.",
    solution: "Performed electronic camera plumbing inspection to isolate the block. Used a commercial mechanical auger to extract heavy root clusters, followed by a thorough 4000 PSI hydro-jetting clean.",
    beforeImg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=650&q=80",
    afterImg: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=650&q=80",
    testimonial: {
      quote: "Absolute life-saver. He showed up within an hour with heavy professional gear and solved a major backup nightmare in no time.",
      author: "Claire M., Suburban Lancaster Homeowner",
      rating: 5
    },
    metrics: ["Full Lateral Flow Restored", "1-Year No-Clog Warranty", "Video Verification Completed"]
  },
  {
    id: "well-system",
    category: "Well Pump & Pressure Service",
    title: "Sputtering Well Water Bladder Tank Replacement",
    location: "Oxford, PA",
    timeframe: "4 Hours",
    challenge: "Failed well water pressure tank with completely ruptured air bladder. This caused the well pump to rapidly short-cycle every 5 seconds, threatening pump-motor burn-out.",
    solution: "Replaced the waterlogging unit with a high-capacity heavy-gauge seamless vertical pressure tank. Rebuilt adjacent controls with a high-durability Square-D pressure switch and heavy-duty brass manifold.",
    beforeImg: "https://images.unsplash.com/photo-1615840287214-7fe58a8bc685?auto=format&fit=crop&w=650&q=80",
    afterImg: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=650&q=80",
    testimonial: {
      quote: "Water pressure does not fluctuate at all anymore. Super-sturdy steel tank and pristine brass safety regulators.",
      author: "Marcus K., Country Acreage Owner",
      rating: 5
    },
    metrics: ["Pump Lifespan Restored", "Uniform Water Pressure", "Heavy-Duty Brass Controls"]
  }
];

export default function ProjectsPortfolio({ onOpenQuote }: { onOpenQuote: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageMode, setActiveImageMode] = useState<'before' | 'after'>('after');

  const currentProject = PORTFOLIO_PROJECTS[currentIndex];

  const handleNext = () => {
    setActiveImageMode('after');
    setCurrentIndex((prev) => (prev + 1) % PORTFOLIO_PROJECTS.length);
  };

  const handlePrev = () => {
    setActiveImageMode('after');
    setCurrentIndex((prev) => (prev - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length);
  };

  return (
    <section id="projects-portfolio-section" className="py-20 bg-[#091522] border-t border-slate-800 relative overflow-hidden">
      {/* Background Aesthetic Ambient Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8581C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black tracking-widest text-[#E8581C] uppercase py-1 px-3 bg-[#E8581C]/10 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Proof of Craftsmanship
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Our Before-and-After Project Gallery
          </h2>
          <p className="text-slate-350 font-light text-sm md:text-base">
            Take a firsthand look at actual regional repairs and premium system assemblies executed by local master plumbers. Transparency and clean piping, backed up by customer reviews.
          </p>
        </div>

        {/* Carousel Outer Block */}
        <div className="bg-[#0c1e30] border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Active Carousel Navigation Header */}
          <div className="p-4 sm:p-6 bg-[#091522]/95 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#E8581C]/15 text-[#E8581C] rounded text-3xs font-black uppercase tracking-wider">
                {currentProject.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {currentProject.location}
              </span>
            </div>
            
            {/* Quick Dot Index and Left/Right Buttons */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              {/* Carousel Indicators */}
              <div className="flex gap-1.5 mr-2">
                {PORTFOLIO_PROJECTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImageMode('after');
                      setCurrentIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'bg-[#E8581C] w-6' : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                    title={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-md text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-md text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Next Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Comparison Split / Dual View Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Image Stage Container (lg:col-span-7) */}
            <div className="lg:col-span-7 p-6 md:p-8 bg-slate-950/40 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              
              {/* Interactive Tabs for Mobile Screen Toggle */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xs font-bold text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8581C]" />
                  Interactive Visual Proof
                </span>

                {/* Switcher Controls */}
                <div className="flex p-0.5 rounded-lg bg-slate-900 border border-slate-800 select-none">
                  <button
                    onClick={() => setActiveImageMode('before')}
                    className={`px-3 py-1 rounded-md text-3xs font-black transition-all cursor-pointer ${
                      activeImageMode === 'before'
                        ? 'bg-red-500/15 text-red-500'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    BEFORE
                  </button>
                  <button
                    onClick={() => setActiveImageMode('after')}
                    className={`px-3 py-1 rounded-md text-3xs font-black transition-all cursor-pointer ${
                      activeImageMode === 'after'
                        ? 'bg-emerald-500/15 text-[#00E5A3]'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    AFTER (RESOLVED)
                  </button>
                </div>
              </div>

              {/* Central Relative Comparer Block */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                
                {/* Before Image under absolute conditional */}
                <AnimatePresence mode="popLayout">
                  {activeImageMode === 'before' ? (
                    <motion.div
                      key="before-img"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={currentProject.beforeImg}
                        alt="Unresolved Plumbing Issue (Before)"
                        className="w-full h-full object-cover grayscale brightness-90"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 border border-red-500 text-white font-black tracking-widest text-3xs rounded-full uppercase shadow-lg flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-white" />
                        <span>CRITICAL CHALLENGE</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="after-img"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={currentProject.afterImg}
                        alt="Clean Resolved Master-Plumbing Installation (After)"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 border border-emerald-500 text-white font-black tracking-widest text-3xs rounded-full uppercase shadow-lg flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-emerald-250 animate-pulse" />
                        <span>McKINNEY RESOLUTION</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Small indicator tip */}
                <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 border border-slate-800 rounded text-[10px] text-slate-400 select-none font-medium">
                  Tap toggles above to compare
                </div>
              </div>

              {/* Side by side preview row (Desktop only visual helper) */}
              <div className="hidden sm:grid grid-cols-2 gap-4 mt-4">
                <button
                  onClick={() => setActiveImageMode('before')}
                  className={`p-2 rounded-lg border flex items-center gap-3 transition-colors text-left ${
                    activeImageMode === 'before'
                      ? 'bg-red-500/5 border-red-900/60'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-850'
                  }`}
                >
                  <div className="w-10 h-10 rounded overflow-hidden shrink-0 border border-slate-8 w-1/4">
                    <img src={currentProject.beforeImg} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="space-y-0.5 leading-tight">
                    <span className="text-[10px] uppercase font-black tracking-wider text-rose-450 block">Before</span>
                    <span className="text-3xs text-slate-400 block truncate">Rusty, leaking scale buildup</span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveImageMode('after')}
                  className={`p-2 rounded-lg border flex items-center gap-3 transition-colors text-left ${
                    activeImageMode === 'after'
                      ? 'bg-emerald-500/5 border-emerald-900/60'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-850'
                  }`}
                >
                  <div className="w-10 h-10 rounded overflow-hidden shrink-0 border border-slate-8 w-1/4">
                    <img src={currentProject.afterImg} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-0.5 leading-tight">
                    <span className="text-[10px] uppercase font-black tracking-wider text-emerald-400 block">After</span>
                    <span className="text-3xs text-slate-400 block truncate">Sleek, perfect-sealed upgrades</span>
                  </div>
                </button>
              </div>

            </div>

            {/* Description Details Panel (lg:col-span-5) */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-8">
              
              {/* Project Title Description */}
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-[#E8581C] uppercase tracking-widest flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    Completed in {currentProject.timeframe}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    {currentProject.title}
                  </h3>
                </div>

                {/* Challenge description */}
                <div className="p-4 bg-slate-950/50 border-l-2 border-red-500/70 rounded-r-lg space-y-1">
                  <span className="text-[10px] font-black uppercase text-red-400 tracking-wider">The Challenge:</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {currentProject.challenge}
                  </p>
                </div>

                {/* McKinney Resolution description */}
                <div className="p-4 bg-slate-950/50 border-l-2 border-emerald-500/70 rounded-r-lg space-y-1">
                  <span className="text-[10px] font-black uppercase text-[#00E5A3] tracking-wider">McKinney Solution:</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {currentProject.solution}
                  </p>
                </div>

                {/* Trust craft features built */}
                <div className="space-y-2">
                  <span className="text-3xs font-black uppercase tracking-wider text-slate-400">Quality Checklist Applied:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                    {currentProject.metrics.map((met, i) => (
                      <div key={i} className="flex items-center gap-2 text-3xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5A3] shrink-0" />
                        <span>{met}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified testimonial component */}
              <div className="pt-6 border-t border-slate-800/80 space-y-4">
                <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 relative">
                  <span className="absolute -top-3 left-4 px-2 bg-[#0c1e30] text-[9px] text-[#E8581C] font-black uppercase">VERIFIED RECONCILIATION</span>
                  <p className="text-3xs italic text-slate-300 leading-relaxed">
                    "{currentProject.testimonial.quote}"
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-4xs font-bold text-slate-400">
                      - {currentProject.testimonial.author}
                    </span>
                    {/* Rating Sterne representation */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-amber-500">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Same-Day Quote prompt */}
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#E8581C] to-amber-600 hover:from-orange-650 hover:to-amber-550 text-white rounded-lg text-xs font-black uppercase tracking-wider shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all select-none cursor-pointer text-center"
                >
                  Request Similar Repipe Diagnostic
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
