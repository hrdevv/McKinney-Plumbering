import { TESTIMONIALS } from '../data.ts';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export default function Reviews() {
  const averageRating = 5.0;
  const ratingCount = 47;

  return (
    <section id="customer-reviews-section" className="py-20 bg-[#091522] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header containing Aggregate rating board */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-slate-805">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-black tracking-widest text-[#E8581C] uppercase py-1 px-3 bg-[#E8581C]/10 rounded-full">
              Trust Score
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              What Your Neighbors Say
            </h2>
            <p className="text-slate-400 font-light text-sm max-w-xl">
              We take pride in our punctuality and clean blue-collar craftsmanship. See real verified plumbing feedback from families across Lancaster, PA and Cecil, MD.
            </p>
          </div>

          {/* Aggregate Badge Board */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center gap-5 shrink-0 shadow-lg pr-8">
            <div className="text-center">
              <span className="text-5xl font-black text-white block leading-none">5.0</span>
              <span className="text-3xs text-slate-500 font-bold uppercase tracking-wider block mt-1">Average Star</span>
            </div>
            <div className="h-12 w-px bg-slate-800" />
            <div className="space-y-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-xs text-slate-350">
                Based on <strong className="text-white font-bold">{ratingCount} Verified Reviews</strong>
              </p>
              <span className="text-3xs font-semibold text-emerald-400 flex items-center gap-1 leading-none mt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Google Local verified
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials grid cards */}
        <div id="reviews-card-gallery" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl flex flex-col justify-between relative group hover:border-[#E8581C]/50 transition-all duration-300 shadow-md"
            >
              {/* Corner Quote Mark */}
              <div className="absolute top-6 right-6 text-slate-800 group-hover:text-[#E8581C]/10 transition-colors pointer-events-none">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              <div className="space-y-4">
                {/* Score and Verification badge */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-3xs text-[#E8581C] font-extrabold uppercase tracking-widest bg-orange-650/10 border border-orange-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    Verified Customer
                  </span>
                </div>

                {/* Review Body Text */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex justify-between items-center text-xs">
                <div>
                  <div className="font-extrabold text-white text-sm">{review.author}</div>
                  <div className="text-3xs text-slate-500">{review.location}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-slate-400">Service: {review.serviceReceived}</div>
                  <div className="text-3xs text-slate-500">Date: {review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GMB direct badge footer */}
        <div className="text-center pt-2 text-xs text-slate-500 flex flex-col sm:flex-row justify-center items-center gap-3">
          <span>Interested in seeing our full historical profile?</span>
          <span className="hidden sm:inline-block">/</span>
          <span className="font-bold text-slate-300 flex items-center gap-1.5 justify-center">
            <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
            Google Business Profile ranking pending launch configuration
          </span>
        </div>

      </div>
    </section>
  );
}
