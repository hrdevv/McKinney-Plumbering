import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_CITIES } from '../data.ts';

interface ContactPortalProps {
  onOpenQuote: () => void;
}

export default function ContactPortal({ onOpenQuote }: ContactPortalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    subject: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact-portal-page" className="py-20 bg-[#091522] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black tracking-widest text-[#E8581C] uppercase py-1 px-3 bg-[#E8581C]/10 rounded-full">
            Inquiries Portal
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Connect With Our Office
          </h2>
          <p className="text-slate-350 font-light text-sm md:text-base">
            Need diagnostic advice or a firm scheduled visit? Call our primary dispatcher line, send us an email, or complete the quick message form below.
          </p>
        </div>

        {/* Dispatch contacts block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Detailed Contact Directory & Info Grid */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight pb-3 border-b border-slate-800 flex items-center gap-2">
                <span>☎</span> Direct Dispatch Channels
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
                
                {/* Channel aspect */}
                <div className="space-y-2">
                  <div className="text-[#E8581C] font-extrabold text-xs uppercase tracking-wider">Phone Dispatch Hotline:</div>
                  <a href={BUSINESS_INFO.phoneFormatted} className="text-2xl font-black text-white hover:text-[#E8581C] block transition-colors mt-1 pr-2 leading-none">
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-3xs text-slate-500 leading-normal">
                    Call anytime. For immediate emergency bursts, press option '1' to reach dispatchers directly.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-slate-400 font-extrabold text-xs uppercase tracking-wider">Office Email Box:</div>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-md font-bold text-[#E8581C] hover:text-orange-400 block break-all select-all mt-1">
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-3xs text-slate-500 leading-normal">
                    Send blueprints, billing sheets, or photos of faulty well setups. Reviewed same budget-day.
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                <div className="space-y-2">
                  <div className="text-slate-450 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Dispatch Coordinates:
                  </div>
                  <p className="text-2xs text-slate-300 leading-relaxed font-light">
                    {BUSINESS_INFO.address}<br />
                    Peach Bottom, Pennsylvania 17563
                  </p>
                  <span className="text-3xs text-slate-500 font-medium block">Region: Lancaster County, PA Border</span>
                </div>

                <div className="space-y-2">
                  <div className="text-slate-455 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Standard Dispatch Office Hours:
                  </div>
                  <p className="text-2xs text-slate-300 leading-normal font-light">
                    Monday - Friday: 7:00 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 12:00 PM<br />
                    Sunday: Closed (Emergency Dispatch Active)
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Prompt callout */}
            <div className="bg-amber-500/5 border border-amber-500/15 p-6 rounded-2xl flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1.5 text-xs text-slate-300">
                <h4 className="font-extrabold text-white">Critical Plumbing Alert</h4>
                <p className="leading-relaxed">
                  If you are currently facing active flooring damage, leaking ceiling structures, or a failed water tank pumping steam, please <strong className="text-white">DO NOT write an email</strong> or wait for standard form replies. Call our direct priority line line immediately.
                </p>
                <a href={BUSINESS_INFO.phoneFormatted} className="inline-flex items-center gap-1 text-[#E8581C] font-black underline hover:text-orange-400">
                  Dial McKinney Urgent Link &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right: Unified Intake Launcher Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#E8581C]/10 border border-[#E8581C]/20 rounded-full flex items-center justify-center text-[#E8581C]">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Central Ticket Intake Portal</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                To guarantee perfect tracking, immediate dispatch truck checking, and direct communication, McKinney Plumbing Services LLC uses a single, unified ticket intake system. 
              </p>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Whether you need a routine diagnostic or immediate emergency relief from standard leaks, all customer details and photos are verified in this form and dispatched instantly. A secure backup receipt of your ticket is routed directly to <strong className="text-white">contact@mckinneyplumbing.com</strong>.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={onOpenQuote}
                className="w-full p-4 bg-gradient-to-r from-[#E8581C] to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-extrabold text-sm rounded-xl uppercase tracking-wider shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Launch Unified Quote Form</span>
                <span className="text-lg">➔</span>
              </button>
              <div className="text-center">
                <span className="text-3xs text-slate-500 font-semibold uppercase tracking-wider block">Average response: Under 60 minutes</span>
              </div>
            </div>

            {/* Verification tag inside */}
            <div className="pt-4 border-t border-slate-850 flex items-center justify-center gap-1.5 text-3xs text-slate-500 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Double $2,000,000 Liability Insured</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
