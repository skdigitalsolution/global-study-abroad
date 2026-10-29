import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  X 
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

export default function BookCounsellingPage() {
  const [searchParams] = useSearchParams();
  const initialCountry = searchParams.get('country') || 'uk';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    destination: initialCountry,
    studyLevel: 'Masters',
    targetIntake: 'Fall 2025',
    mode: 'online',
    preferredSlot: 'morning'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting] = useState(false);
  const [successBookingId, setSuccessBookingId] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required.';
    if (!formData.phone || formData.phone.length < 8) errs.phone = 'Valid phone number is required.';
    if (!formData.city.trim()) errs.city = 'City of residence is required.';
    return errs;
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({ submission: 'Online booking is not connected. No session has been booked and your details have not been sent.' });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-navy-900">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-semibold">Book Counselling</span>
        </div>

        <SectionTitle
          badge="1-on-1 Personalized Session"
          title="Schedule Your Free Counselling Consultation"
          subtitle="Sit down with an experienced international education mentor to map your university shortlisting and visa strategy."
          align="center"
        />

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          <form onSubmit={handleBooking} className="space-y-6 text-xs">
                <p className="text-sm text-slate-600" role="status">Online submission is not connected. No details will be sent.</p>
                {errors.submission && <p role="alert" className="text-sm text-amber-800">{errors.submission}</p>}
            
            {/* Personal Details */}
            <div>
              <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider pb-2 border-b border-slate-100 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold text-[10px]">1</span>
                Personal Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500"
                    placeholder="e.g. Rahul Verma"
                  />
                  {errors.fullName && <p className="text-rose-500 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500"
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && <p className="text-rose-500 text-[11px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500"
                    placeholder="rahul@example.com"
                  />
                  {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Current City *</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500"
                    placeholder="e.g. Pune / Bangalore"
                  />
                  {errors.city && <p className="text-rose-500 text-[11px] mt-1">{errors.city}</p>}
                </div>
              </div>
            </div>

            {/* Academic & Study Preferences */}
            <div>
              <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider pb-2 border-b border-slate-100 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold text-[10px]">2</span>
                Academic Intent
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Country</label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="uk">United Kingdom (UK)</option>
                    <option value="usa">United States (USA)</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="ireland">Ireland</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Study Level</label>
                  <select
                    value={formData.studyLevel}
                    onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="Masters">Masters / Postgraduate</option>
                    <option value="Bachelors">Bachelors / Undergraduate</option>
                    <option value="Doctorate">Doctorate / PhD</option>
                    <option value="Diploma">Diploma / Cert</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Intake Season</label>
                  <select
                    value={formData.targetIntake}
                    onChange={(e) => setFormData({ ...formData, targetIntake: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="Fall 2025">Fall 2025 (Aug - Oct)</option>
                    <option value="Spring 2026">Spring 2026 (Jan - Mar)</option>
                    <option value="Fall 2026">Fall 2026</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Session Mode & Slot */}
            <div>
              <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider pb-2 border-b border-slate-100 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold text-[10px]">3</span>
                Preferred Meeting Slot
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Counselling Mode</label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="online">Online Video Session (Zoom / Google Meet)</option>
                    <option value="in-person">In-Person at Regional Office</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Time Slot Preference</label>
                  <select
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="evening">Evening (5:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full font-bold mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Confirming Appointment...' : 'Confirm My Free Session'}
            </Button>
          </form>
        </div>

        {/* Success Modal */}
        {successBookingId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Appointment Scheduled
              </span>
              <h3 className="text-2xl font-black text-navy-900 mt-1">Counselling Confirmed!</h3>
              
              <div className="my-4 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[11px] text-slate-500 block">Your Demo Booking ID:</span>
                <span className="text-lg font-mono font-bold text-navy-900">{successBookingId}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                A calendar invitation link has been simulated. Prepare your academic transcripts and target questions for your mentor session.
              </p>

              <Button
                variant="primary"
                size="md"
                className="w-full mt-6 font-bold"
                onClick={() => setSuccessBookingId(null)}
              >
                Close & Return
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

