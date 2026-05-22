import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, ChevronRight, Check, AlertCircle, Phone, Navigation } from 'lucide-react';
import { SERVICE_CITIES, BUSINESS_INFO } from '../data.ts';

interface ServiceAreasProps {
  onOpenQuote: () => void;
}

export default function ServiceAreas({ onOpenQuote }: ServiceAreasProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [testResult, setTestResult] = useState<{
    status: 'covered' | 'uncovered' | 'idle';
    city?: string;
    zip?: string;
    travel?: number;
  }>({ status: 'idle' });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = searchQuery.trim().toLowerCase();
    if (!cleanQuery) return;

    const matched = SERVICE_CITIES.find(
      (c) =>
        c.name.toLowerCase().includes(cleanQuery) ||
        c.zipCode.includes(cleanQuery)
    );

    if (matched) {
      setTestResult({
        status: 'covered',
        city: matched.name,
        zip: matched.zipCode,
        travel: matched.estTravelTimeMin
      });
    } else {
      setTestResult({ status: 'uncovered' });
    }
  };

  // Divide cities by State for high-contrast organization
  const paCities = SERVICE_CITIES.filter(c => c.state === 'PA');
  const mdCities = SERVICE_CITIES.filter(c => c.state === 'MD');

  return (
    <section id="service-areas-dashboard" className="py-20 bg-[#091522] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black tracking-widest text-[#E8581C] uppercase py-1 px-3 bg-[#E8581C]/10 rounded-full">
            Local Coordinates
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Our Covered Service Territory
          </h2>
          <p className="text-slate-350 font-light text-sm md:text-base">
            We operate out of Peach Bottom, PA. We dispatch master plumbers across Southern Lancaster County, York County, and adjacent Northern Maryland border towns.
          </p>
        </div>

        {/* Dynamic Map and Lookup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: List of serviced cities */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Navigation className="w-5 h-5 text-emerald-500" />
                Standard Dispatch Cities
              </h3>
              <p className="text-xs text-slate-400">
                If your home or commercial space is located inside any of the postal codes below, you qualify for standard residential plumbing services and rapid same-day emergency dispatch.
              </p>
            </div>

            {/* State Grid Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Pennsylvania segment */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-center text-xs font-black tracking-wider text-[#E8581C] uppercase pb-2 border-b border-slate-800">
                  <span>Pennsylvania Cities</span>
                  <span className="px-2 py-0.5 bg-[#E8581C]/15 rounded text-3xs">Lancaster/York/Chester Co.</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-300">
                  {paCities.map((city, idx) => (
                    <div key={`${city.name}-${city.zipCode}-${idx}`} className="flex items-center gap-2 bg-slate-950/40 p-2.5 rounded border border-slate-850">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <div>
                        <div className="font-bold text-white">{city.name}</div>
                        <div className="text-3xs text-slate-500">PA {city.zipCode} • ~{city.estTravelTimeMin}m</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maryland Segment */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-center text-xs font-black tracking-wider text-indigo-400 uppercase pb-2 border-b border-slate-800">
                  <span>Maryland Cities</span>
                  <span className="px-2 py-0.5 bg-indigo-505/15 rounded text-3xs">Cecil / Harford Co.</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-300">
                  {mdCities.map((city, idx) => (
                    <div key={`${city.name}-${city.zipCode}-${idx}`} className="flex items-center gap-2 bg-slate-950/40 p-2.5 rounded border border-slate-850">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <div>
                        <div className="font-bold text-white">{city.name}</div>
                        <div className="text-3xs text-slate-500">MD {city.zipCode} • ~{city.estTravelTimeMin}m</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Note on border operations */}
            <div className="p-4 bg-slate-950/50 border border-slate-850 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-2xs text-slate-400 leading-normal">
                <strong className="text-slate-300">Maryland Regulatory Compliance</strong>: Our dispatch centers reside in Lancaster County, PA. For MD properties, we ensure our cross-border dispatch specialists maintain perfect alignment with MHIC requirements. Contact our coordinator to verify local inspectors' requirements.
              </p>
            </div>
          </div>

          {/* Right Column: Check and confirm checker, interactive radius overview */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/40 border border-slate-805 rounded-2xl p-6 md:p-8 space-y-6 shadow-lg">
            
            <div className="space-y-2">
              <h3 className="font-bold text-white text-md">On-Demand Coverage Checker</h3>
              <p className="text-xs text-slate-400">
                Planning repairs or installations? Query our geographical dispatch system to verify whether an active McKinney service truck is assigned to your area code.
              </p>
            </div>

            <form onSubmit={handleSearch} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type Zip Code (e.g. 17566) or Town Name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4.5 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E8581C]"
                  maxLength={30}
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-2.5 p-1 px-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-white font-bold text-xs rounded transition-all"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Result area */}
            <div id="coverage-checker-result-box" className="min-h-[145px] flex items-center justify-center p-4 rounded-xl border border-dashed border-slate-800 bg-slate-950/20">
              {testResult.status === 'idle' && (
                <div className="text-center space-y-2">
                  <span className="text-slate-600 block text-xs">Waiting for diagnostic postcode check...</span>
                  <span className="text-2xs text-slate-500 leading-relaxed max-w-xs block mx-auto">
                    Supports 5-digit postal zipcodes or municipal names on the PA-MD Mason Dixon axis.
                  </span>
                </div>
              )}

              {testResult.status === 'covered' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full space-y-3"
                >
                  <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                    <Check className="w-4 h-4 bg-emerald-500/20 rounded-full p-0.5 shrink-0" />
                    <span>McKinney Dispatch Confirmed</span>
                  </div>
                  <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                    <p>
                      Excellent news! <strong className="text-white font-semibold">{testResult.city} ({testResult.zip})</strong> lies firmly inside our standard same-day servicing polygon bounds.
                    </p>
                    <p className="bg-slate-950/60 p-2.5 rounded text-2xs text-slate-405 border border-slate-850">
                      Average dispatch time to {testResult.city} from our nearest dispatch station is roughly{' '}
                      <strong className="text-white">{testResult.travel} minutes</strong>. We do not assess additional travel surcharges for standard work inside this zip code.
                    </p>
                  </div>
                  <button
                    onClick={onOpenQuote}
                    className="w-full text-center py-2.5 bg-gradient-to-r from-[#E8581C] to-orange-600 text-white text-xs font-black rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Lock in {testResult.city} Visit Window
                  </button>
                </motion.div>
              )}

              {testResult.status === 'uncovered' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full space-y-3"
                >
                  <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
                    <AlertCircle className="w-4.5 h-4.5 shrink-0 text-amber-500" />
                    <span>Outer Servicing Perimeter</span>
                  </div>
                  <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                    <p>
                      "{searchQuery}" doesn't sit inside our instant-dispatch city database list, but we regularly schedule custom plumbing services there depending on distance!
                    </p>
                    <p className="text-2xs text-slate-400">
                      Our dispatch crews frequently cross adjacent townships if plumbing projects require complete sewer replacements or custom water heater rigs.
                    </p>
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneFormatted}
                    className="block w-full text-center py-2 bg-slate-900 hover:bg-slate-850 border border-slate-850 text-slate-200 text-xs font-bold rounded-lg transition-colors"
                  >
                    Speak with Coordinator: {BUSINESS_INFO.phone}
                  </a>
                </motion.div>
              )}
            </div>

            {/* Micro FAQ segment inside areas check */}
            <div className="pt-4 border-t border-slate-850 space-y-2 text-3xs text-slate-500">
              <div className="font-bold uppercase tracking-wider text-slate-400">Distance Surcharge Policy:</div>
              <p className="leading-normal">
                No residential travel surcharges apply for local clients inside the primary 20-mile standard dispatch radius from Peach Bottom, PA. Outer boundary jobs may assess a fixed $45 diagnostics travel fee, which is fully credited to the plumbing invoice upon authorization.
              </p>
            </div>

          </div>

        </div>

        {/* Local Area Interactive Map Placeholder Graphic */}
        <div id="service-area-contour" className="p-8 bg-[#091522] border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="space-y-3 max-w-xl">
            <span className="text-3xs font-extrabold text-slate-500 uppercase tracking-widest border border-slate-800 px-2 py-0.5 rounded">
              Base Coordinates
            </span>
            <h3 className="text-xl font-bold text-white">Central Dispatch Station: Peach Bottom, PA</h3>
            <p className="text-xs text-slate-350 leading-relaxed font-light">
              We operate central operations out of 508 Little Britain Church Road in Peach Bottom. This rural positioning allows us to deploy rapidly along Rt 222, Rt 272, and standard secondary routes servicing properties near the Conowingo Hydroelectric Plant, Delta, Kirkwood, Wakefield, and Oxford.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8581C]" />
                Southern Lancaster Co.
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                Southeastern York Co.
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-405" />
                Northern Maryland Axis
              </span>
            </div>
          </div>

          <div className="w-full md:w-80 h-44 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center p-4 shrink-0">
            {/* abstract map graphic representation using css */}
            <div className="absolute inset-0 opacity-10 flex flex-col justify-between">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-0.5 w-full bg-white border-t border-dashed border-slate-500" />
              ))}
            </div>
            {/* Map dots representation */}
            <div className="relative z-10 text-center space-y-2">
              <div className="relative inline-block">
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                <span className="relative z-10 inline-block w-4 h-4 bg-[#E8581C] text-white rounded-full font-bold text-3xs shadow-md">
                  ★
                </span>
              </div>
              <div>
                <span className="font-bold text-white text-xs block">Peach Bottom HQ Station</span>
                <span className="text-3xs text-slate-500 block">GPS: Latitude 39.754 | Longitude -76.185</span>
              </div>
              <span className="inline-block text-3xs text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-500/10 rounded">
                Standard Transit Circle Coverages Verified
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
