import { Phone, Calendar, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data.ts';

interface MobileStickyBarProps {
  onOpenQuote: () => void;
}

export default function MobileStickyBar({ onOpenQuote }: MobileStickyBarProps) {
  return (
    <div
      id="mobile-sticky-action-bar"
      className="fixed bottom-0 left-0 right-0 z-35 bg-[#0b1c2e]/95 backdrop-blur-md border-t border-slate-800 lg:hidden shadow-2xl px-4 py-3 pb-4 safe-bottom"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        
        {/* Urgent Call Link */}
        <a
          href={BUSINESS_INFO.phoneFormatted}
          id="mobile-sticky-call-btn"
          className="flex items-center justify-center gap-2 py-3.5 bg-emerald-650 active:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg transition-transform active:scale-[0.98]"
        >
          <Phone className="w-4.5 h-4.5 animate-pulse" />
          <div className="text-left leading-none">
            <span className="text-[10px] uppercase font-bold text-emerald-200 block">Immediate Help</span>
            <span className="text-xs font-black block tracking-tight">Call {BUSINESS_INFO.phone}</span>
          </div>
        </a>

        {/* Free quote scheduling */}
        <button
          onClick={onOpenQuote}
          id="mobile-sticky-quote-btn"
          className="flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#E8581C] to-amber-600 text-white font-extrabold text-xs rounded-xl shadow-lg transition-colors"
        >
          <Calendar className="w-4.5 h-4.5" />
          <div className="text-left leading-none">
            <span className="text-[10px] uppercase font-bold text-orange-200 block">Free Estimates</span>
            <span className="text-xs font-black block tracking-tight">Request Quote</span>
          </div>
        </button>

      </div>
    </div>
  );
}
