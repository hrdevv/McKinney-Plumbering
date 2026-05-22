import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Phone, Calendar, Upload, AlertTriangle, ShieldCheck, Mail, Send } from 'lucide-react';
import { QuoteFormData } from '../types.ts';
import { SERVICES, SERVICE_CITIES, BUSINESS_INFO } from '../data.ts';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    serviceType: SERVICES[0].id,
    urgency: 'routine',
    details: ''
  });

  const [validationError, setValidationError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // File Upload State
  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) return 'Please enter your name.';
    if (!formData.phone.trim()) return 'Please enter your phone number.';
    const phoneRegex = /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      return 'Please enter a valid 10-digit phone number (e.g. 717-548-8120).';
    }
    if (!formData.zipCode.trim()) return 'Please enter your service ZIP code.';
    return '';
  };

  const handleNextStep = () => {
    const err = validateStep1();
    if (err) {
      setValidationError(err);
      return;
    }
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  // Drag & Drop event handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setAttachedFile(file.name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.details.trim()) {
      setValidationError('Please share a few brief details about the issue.');
      return;
    }

    setSubmitting(true);
    setValidationError('');

    // Simulate Server-side delivery
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      zipCode: '',
      serviceType: SERVICES[0].id,
      urgency: 'routine',
      details: ''
    });
    setStep(1);
    setAttachedFile(null);
    setSubmitted(false);
  };

  return (
    <div id="quote-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="bg-[#0c1e30] border border-slate-850 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl relative z-60"
      >
        {/* Close Button top-right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-full transition-colors z-70 text-xs"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          /* SUCCESS VIEW */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 md:p-12 text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-emerald-400" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-black text-white">Your Plumbing Ticket is Created!</h3>
              <p className="text-sm text-slate-350 leading-relaxed font-light">
                Thank you, <strong className="text-white font-semibold">{formData.name}</strong>. McKinney's dispatch coordinator has received your diagnostic quote request. A copy of this ticket has been routed to <strong className="text-white">contact@mckinneyplumbing.com</strong>.
              </p>
            </div>

            <div className="bg-slate-950/60 p-4.5 rounded-xl border border-slate-850 text-xs text-left text-slate-300 space-y-2 max-w-sm mx-auto">
              <div className="font-bold flex items-center gap-1 text-[#E8581C] uppercase tracking-wider text-2xs">
                <span>⏱</span> Next steps on your dispatch ticket:
              </div>
              <p>1. We are screening nearest dispatch trucks servicing your ZIP.</p>
              <p>2. Cell text or direct phone call confirmation is incoming shortly.</p>
              {attachedFile && (
                <p className="text-emerald-400 font-medium">✓ Leak Photo attached: {attachedFile}</p>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BUSINESS_INFO.phoneFormatted}
                className="p-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-4 h-4 animate-pulse" />
                <span>Call Coordinator: {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="p-3 px-6 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition-all"
              >
                Return to Site
              </button>
            </div>
          </motion.div>
        ) : (
          /* FORM ENTRY */
          <form onSubmit={handleSubmit} className="flex flex-col">
            
            {/* Header branding */}
            <div className="bg-[#091522] p-6 border-b border-slate-800">
              <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#E8581C]" />
                McKinney Quote Dispatcher
              </h3>
              <p className="text-2xs text-slate-400 mt-1">
                Step {step} of 2 • Submit details for upfront diagnostic pricing.
              </p>
            </div>

            {/* Error display */}
            {validationError && (
              <div className="bg-rose-500/10 border-b border-rose-500/20 p-4 text-xs font-bold text-rose-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Form Steps */}
            <div className="p-6 md:p-8 space-y-5">
              
              {step === 1 ? (
                /* STEP 1: CONTACT DETAILS */
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-2xs font-bold text-slate-400 uppercase tracking-wider">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Richard Butler"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8581C]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-2xs font-bold text-slate-400 uppercase tracking-wider">Phone / SMS Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. (717) 548-8120"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8581C]"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-2xs font-bold text-slate-400 uppercase tracking-wider">Email Address (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. name@domain.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8581C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-2xs font-bold text-slate-400 uppercase tracking-wider">Service Zip Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="e.g. 17563"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8581C]"
                        maxLength={10}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-2xs font-bold text-slate-400 uppercase tracking-wider">Which Plumbing Dept?</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#E8581C]"
                      >
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.id} className="bg-slate-950">{srv.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full p-3.5 bg-gradient-to-r from-slate-900 to-slate-850 border border-slate-750 hover:bg-slate-800 text-white font-bold text-xs rounded-lg uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Continue & Share Damage Details</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* STEP 2: PROBLEM SECTOR & WORK ATTRIBUTES */
                <div className="space-y-4">
                  {/* Urgency selection panel */}
                  <div className="space-y-2">
                    <label className="text-2xs font-bold text-slate-400 uppercase tracking-wider block">Urgency Level Assessment</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'routine', lbl: 'Routine', clr: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/5' },
                        { id: 'urgent', lbl: 'Urgent', clr: 'border-amber-500/30 text-amber-300 bg-amber-500/5' },
                        { id: 'emergency', lbl: 'Emergency', clr: 'border-red-500/30 text-red-300 bg-red-500/5 ring-1 ring-red-500/20' }
                      ].map((urg) => (
                        <button
                          key={urg.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, urgency: urg.id as any }))}
                          className={`p-3 text-center text-xs font-bold border rounded-lg transition-all cursor-pointer ${
                            formData.urgency === urg.id
                              ? urg.clr + ' border-2 shadow'
                              : 'border-slate-800 text-slate-400 hover:text-white bg-slate-950/20'
                          }`}
                        >
                          {urg.lbl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-2xs font-bold text-slate-400 uppercase tracking-wider">Explain plumbing symptoms what's wrong *</label>
                    <textarea
                      name="details"
                      placeholder="Describe what is dripping, leaking, water colors, or noises (e.g., 'Water pooling under standard electric water tank boiler bottom, rusty odor, well system short cycling')"
                      value={formData.details}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8581C] min-h-[100px]"
                      required
                    />
                  </div>

                  {/* Drag-and-drop file upload */}
                  <div className="space-y-2">
                    <label className="text-2xs font-bold text-slate-400 uppercase tracking-wider block">Option: Upload Leak Photo</label>
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-lg p-5 text-center transition-all cursor-pointer relative ${
                        dragOver
                          ? 'border-[#E8581C] bg-[#E8581C]/5'
                          : attachedFile
                          ? 'border-emerald-500/50 bg-emerald-500/5'
                          : 'border-slate-800 bg-slate-950/25 hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="file"
                        id="form-photo-upload"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileSelect}
                        accept="image/*"
                      />
                      <div className="flex flex-col items-center justify-center space-y-1.5 pointer-events-none">
                        <Upload className={`w-6 h-6 ${attachedFile ? 'text-emerald-400' : 'text-slate-500'}`} />
                        {attachedFile ? (
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-white block">File Loaded:</span>
                            <span className="text-2xs text-emerald-400 block break-all font-mono">{attachedFile}</span>
                          </div>
                        ) : (
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-slate-300 block">Drag & Drop or Click to Select</span>
                            <span className="text-3xs text-slate-500 block">Accepts leaks, heaters, and pipe photos for faster review.</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Navigation footer of form */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 p-3 bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:text-white text-slate-400 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 p-3 bg-gradient-to-r from-[#E8581C] to-orange-650 text-white font-extrabold text-xs rounded-lg uppercase tracking-wider hover:from-[#f3672d] hover:to-orange-555 transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {submitting ? 'Submitting...' : 'Submit Dispatch Request'}
                    </button>
                  </div>
                </div>

              )}

            </div>

            {/* Bottom secure tag */}
            <div className="p-4 bg-[#091522] border-t border-slate-800 text-center flex items-center justify-center gap-1.5 text-3xs text-slate-505 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-505" />
              <span>Perfect GDPR privacy alignment • Direct owner-dispatcher review strictly enforced</span>
            </div>

          </form>
        )}

      </motion.div>
    </div>
  );
}
