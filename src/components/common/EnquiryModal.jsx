import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import Button from './Button';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'UK',
    interest: 'Masters',
    city: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [enquiryRefId, setEnquiryRefId] = useState('');

  // Automatically open the enquiry form when the user lands on the website
  useEffect(() => {
    // 800ms delay for smooth page entrance animation
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit WhatsApp/Phone number.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedId = 'IMP-' + Math.floor(10000 + Math.random() * 90000);
      setEnquiryRefId(generatedId);
    }, 900);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset state after close animation
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  return (
    <>
      {/* Floating Re-Open Button (Visible when modal is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-r from-amber-500 via-gold-500 to-amber-600 hover:from-amber-600 hover:to-gold-600 text-navy-950 font-black py-3 px-3.5 rounded-l-2xl shadow-2xl shadow-gold-500/30 flex items-center gap-2 cursor-pointer border-t border-b border-l border-gold-300 transition-all hover:scale-105 active:scale-95 group"
          title="Open Quick Admission Enquiry"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span className="flex items-center gap-2 tracking-wider text-xs uppercase rotate-180">
            <MessageSquare className="w-4 h-4 rotate-90 text-navy-950" />
            Quick Enquiry
          </span>
        </button>
      )}

      {/* Main Popup Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop Click Dismiss */}
          <div 
            className="fixed inset-0"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <div className="relative z-10 bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
            
            {/* Modal Header (Dark Navy & Gold) */}
            <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white p-5 sm:p-6 border-b border-gold-500/30 relative flex-shrink-0">
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 w-9 h-9 rounded-full bg-navy-800/80 hover:bg-gold-500 hover:text-navy-950 text-slate-300 flex items-center justify-center transition-all cursor-pointer border border-navy-700 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 pr-8">
                <img 
                  src={`${import.meta.env.BASE_URL}imperial-logo.png`} 
                  alt="Imperial Study Abroad" 
                  className="w-12 h-12 rounded-full object-contain ring-2 ring-gold-400/80 bg-navy-950 p-0.5 shadow-md flex-shrink-0"
                />
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 border border-gold-400/30 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3 text-gold-400" /> Free Admission Assessment
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white font-serif leading-tight">
                    Imperial <span className="font-sans text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-200">Study Abroad</span>
                  </h2>
                  <p className="text-[10px] text-slate-300 font-semibold tracking-wide">
                    Jayshree Charitable Trust • Direct Counselor Connection
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 overflow-y-auto flex-1">
              {isSuccess ? (
                /* Success Feedback Screen */
                <div className="text-center py-6 sm:py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                      Enquiry Registered Successfully
                    </span>
                    <h3 className="text-2xl font-black text-navy-900">
                      Thank You, {formData.name}!
                    </h3>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto">
                    <span className="text-xs text-slate-500 block">Your Enquiry Reference No:</span>
                    <span className="text-xl font-mono font-black text-navy-900">{enquiryRefId}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our senior academic counsellor will reach out on your WhatsApp number <strong>{formData.phone}</strong> and email within 24 hours with course options and eligibility requirements.
                  </p>

                  <div className="pt-4 flex gap-3 justify-center">
                    <Button variant="primary" size="md" onClick={handleClose}>
                      Explore Website Now
                    </Button>
                  </div>
                </div>
              ) : (
                /* Enquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-3">
                      Fill this quick 30-second form to get personalized guidance:
                    </span>
                  </div>

                  {/* Student Full Name */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aditi Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500'
                      }`}
                    />
                    {errors.name && <p className="text-rose-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        WhatsApp / Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500'
                        }`}
                      />
                      {errors.phone && <p className="text-rose-500 text-[11px] mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="aditi@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500'
                        }`}
                      />
                      {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Destination & Course Interest Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Preferred Study Destination
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus:outline-none focus:border-gold-500 cursor-pointer"
                      >
                        <option value="UK">United Kingdom (UK)</option>
                        <option value="USA">United States (USA)</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ireland">Ireland</option>
                        <option value="India - IIAM Campus">India (IIAM Campus Programs)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Study Level / Domain
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus:outline-none focus:border-gold-500 cursor-pointer"
                      >
                        <option value="Masters">Postgraduate / Master's</option>
                        <option value="Bachelors">Undergraduate / Bachelor's</option>
                        <option value="Aviation">Aviation & Airport Operations</option>
                        <option value="Hospitality">Hospitality & Hotel Chains</option>
                        <option value="MBA">MBA & Advanced Management</option>
                      </select>
                    </div>
                  </div>

                  {/* Current City */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Current City / Location (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai, Kalyan, Thane, Pune, Delhi..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full font-bold shadow-xl shadow-gold-500/25"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Registering Your Enquiry...' : 'Get Free Counselling & Brochure'}
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>

                  {/* Security Guarantee Note */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your details are 100% confidential. Zero spam.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Bottom Footer Ribbon */}
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 flex-shrink-0">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-gold-600" />
                Helpline: <strong className="text-slate-800">+91 9326632584</strong>
              </span>
              <button
                type="button"
                onClick={handleClose}
                className="text-slate-500 hover:text-navy-950 underline font-semibold cursor-pointer"
              >
                Skip & browse website
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

