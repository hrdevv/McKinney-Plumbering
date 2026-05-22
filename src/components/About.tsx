import { Check, ShieldCheck, UserCheck, Wrench, Clock, Landmark } from 'lucide-react';
import { BUSINESS_INFO } from '../data.ts';

interface AboutProps {
  onOpenQuote: () => void;
}

export default function About({ onOpenQuote }: AboutProps) {
  return (
    <section id="about-us-section" className="py-20 bg-[#0c1e30] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Story structure layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black tracking-widest text-[#E8581C] uppercase py-1 px-3 bg-[#E8581C]/10 rounded-full">
              Our Heritage
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight lead-tight">
              Honest Blue-Collar Plumbing For Our PA-MD Border Neighbors
            </h2>
            
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              McKinney Plumbing Services LLC was established on simple foundations: deliver high-quality, transparent, and prompt plumbing solutions without corporate markup or sales games. Based in rural Peach Bottom, Pennsylvania, we live in the very same communities we service.
            </p>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              We understand rural home infrastructure. Unlike city plumbing operations, our team specializes in the issues common to homes near the Susquehanna River basin—harsh mineral scaling on heating elements, rapid pressure fluctuates on traditional well switches, and deep winter freezing risks in crawlspaces.
            </p>

            {/* Core Commitments List */}
            <div className="space-y-3 pt-2">
              {[
                { title: 'No Sales Pitching nor Sub-Contracting', desc: 'The technician who inspects your pipes is a master plumber, not a commission-based salesman. We diagnose the issue honestly and tell you exactly what it takes to resolve.' },
                { title: 'Durable Hardware Standard Rules', desc: 'We only install professional-tier brass valves, solid thick-walled copper joints, and food-safe heavy PEX. We do not use thin-grade cheap home store builder lines.' },
                { title: 'Fair Flat-Rate Estimates Built First', desc: 'We do not billing on a secret hourly payroll clock. You approve the precise final invoice amount in writing before our wrench touches your hardware.' }
              ].map((val, index) => (
                <div key={index} className="flex gap-3">
                  <div className="p-1 px-1.5 bg-[#E8581C]/10 border border-[#E8581C]/20 text-[#E8581C] rounded h-fit font-bold text-xs shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-md leading-tight">{val.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal mt-0.5">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Bento Grid Stats Panels */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-2">
              <div className="p-3 bg-slate-950 rounded-lg w-fit">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Licensed Registry</h3>
              <p className="text-3xs text-slate-400 leading-relaxed font-medium">
                {BUSINESS_INFO.licensePA}<br />
                {BUSINESS_INFO.licenseMD}
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-2">
              <div className="p-3 bg-slate-950 rounded-lg w-fit">
                <UserCheck className="w-5 h-5 text-[#E8581C]" />
              </div>
              <h3 className="text-xl font-bold text-white">Local Crew</h3>
              <p className="text-3xs text-slate-450 leading-relaxed">
                Dispatching from Peach Bottom. We support southern Lancaster, York PA and northern MD.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-2">
              <div className="p-3 bg-slate-950 rounded-lg w-fit">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Response Limit</h3>
              <p className="text-3xs text-slate-450 leading-relaxed">
                Emergency crews target a 1-2 hour response envelope for major bursting failures and plumbing hazards.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-810 rounded-xl space-y-2">
              <div className="p-3 bg-slate-950 rounded-lg w-fit">
                <Landmark className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Trust Ethics</h3>
              <p className="text-3xs text-slate-450 leading-relaxed">
                Locally registered, active LLC with clean Better Business ratings, supporting Lancaster County families.
              </p>
            </div>

          </div>

        </div>

        {/* Corporate Trust Statements banner */}
        <div className="p-8 md:p-10 rounded-2xl bg-[#091522] border border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1.5 md:max-w-2xl">
            <h3 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
              <span>★</span> OUR UNBIASED PROMISE
            </h3>
            <p className="text-xs text-slate-350 leading-relaxed">
              If another plumber quoted you an astronomical sum for a 'total house system repipe,' contact McKinney Plumbing for a transparent, unbiased secondary opinion. Often, a minor spot-repair with heavy copper or food-safe PEX is completely sufficient to grant your home another 10-15 years of uninterrupted water pressure.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="p-3.5 px-6 bg-slate-950 hover:bg-slate-900 border border-slate-750 text-slate-200 text-xs font-extrabold rounded-lg flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-[#E8581C]" />
            Request Free Diagnostics
          </button>
        </div>

      </div>
    </section>
  );
}
