import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, DollarSign, ShieldAlert, BadgeCheck, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data.ts';

interface FAQProps {
  onOpenQuote: () => void;
}

export default function FAQ({ onOpenQuote }: FAQProps) {
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState<'all' | 'pricing' | 'emergency' | 'coverage' | 'general'>('all');

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(faq => faq.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'pricing', label: 'Pricing & Estimates' },
    { id: 'emergency', label: 'Emergency Support' },
    { id: 'coverage', label: 'Service Coverage' },
    { id: 'general', label: 'Licensing & Rules' }
  ];

  return (
    <section id="faq-accordions" className="py-20 bg-[#0c1e30] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-black tracking-widest text-[#E8581C] uppercase py-1 px-3 bg-[#E8581C]/10 rounded-full">
            Knowledge Base
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Frequently Answered Questions
          </h2>
          <p className="text-slate-350 font-light text-sm md:text-base max-w-2xl mx-auto">
            Got questions about home service diagnostics or local well pressure tanks? Explore our comprehensive answers below or call the office anytime.
          </p>
        </div>

        {/* Category Filters row */}
        <div className="flex flex-wrap justify-center gap-2 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                setExpandedId(null);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#E8581C] border-[#E8581C] text-white'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions block */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#091522] border border-slate-800 rounded-xl overflow-hidden transition-all duration-350"
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 hover:bg-slate-900/40 focus:outline-none transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className="w-5 h-5 text-[#E8581C] shrink-0 mt-0.5" />
                    <span className="font-bold text-white text-sm md:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 px-1.5 bg-slate-900 border border-slate-800 text-slate-400 rounded shrink-0 text-xs">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion answer panel with motion animations */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-800/60 text-slate-350 text-xs md:text-sm leading-relaxed space-y-3 font-light">
                        <p>{faq.answer}</p>
                        
                        {/* Dynamic category-specific trust prompts */}
                        {faq.category === 'pricing' && (
                          <div className="flex items-center gap-1.5 p-3 rounded bg-emerald-500/10 text-emerald-300 text-2xs mt-4 border border-emerald-500/20">
                            <DollarSign className="w-3.5 h-3.5" />
                            <span>McKinney Flat-Rate: Diagnostics fee fully waived if repairs authorized.</span>
                          </div>
                        )}
                        {faq.category === 'emergency' && (
                          <div className="flex items-center gap-1.5 p-3 rounded bg-red-500/10 text-red-300 text-2xs mt-4 border border-red-500/20">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            <span>Extreme leak? Shut off the water source valve before the tech arrives.</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA help desk banner */}
        <div className="p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-bold text-white text-md">Still have an unanswered plumbing question?</h3>
            <p className="text-2xs text-slate-400 max-w-md">
              Speak directly to our base dispatch technician. We handle technical well operations, drainage blockages, and pre-buy inspections.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={BUSINESS_INFO.phoneFormatted}
              className="p-3 bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-slate-200 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#E8581C]" />
              <span>Call Plumber: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="p-3 bg-[#E8581C] hover:bg-orange-600 text-white rounded-lg text-xs font-black shadow-lg transition-colors"
            >
              Request Free Estimate Link
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
