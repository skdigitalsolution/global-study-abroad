import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    office: 'mumbai',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required.';
    if (!formData.phone || formData.phone.length < 8) errs.phone = 'Valid phone number is required.';
    if (!formData.message.trim()) errs.message = 'Please provide your enquiry message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        office: 'mumbai',
        subject: '',
        message: ''
      });
    }, 900);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-navy-900">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-semibold">Contact Us</span>
        </div>

        <SectionTitle
          badge="Get in Touch"
          title="Visit Our Offices or Send an Enquiry"
          subtitle="Our student counselors are available across physical hubs and online virtual counseling sessions."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-900 text-white p-7 rounded-2xl shadow-xl border border-navy-800">
              <h3 className="text-xl font-bold text-white mb-4">Central Advisory Hub</h3>
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Suite 402, Edu Towers, Nariman Point, Mumbai 400021</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>+1 (800) 123-4567 / +91 (22) 5550-1928</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>contact@globalpath.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Mon - Sat: 9:30 AM to 6:30 PM (IST)</span>
                </div>
              </div>
            </div>

            {/* Other Branch Offices */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold text-navy-900">Global Representative Branches</h4>
              
              <div className="text-xs border-b border-slate-100 pb-3">
                <div className="font-bold text-navy-900">London Advisory Hub (UK)</div>
                <div className="text-slate-500">14 King's Way, Holborn, London WC2B 6UN</div>
              </div>

              <div className="text-xs border-b border-slate-100 pb-3">
                <div className="font-bold text-navy-900">Delhi Branch (India)</div>
                <div className="text-slate-500">Connaught Place, Barakhamba Road, New Delhi</div>
              </div>

              <div className="text-xs">
                <div className="font-bold text-navy-900">Toronto Desk (Canada)</div>
                <div className="text-slate-500">Bay Street Financial Hub, Toronto, ON</div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-2">Send an Instant Message</h3>
              <p className="text-xs text-slate-500 mb-6">Fill in the form below and an education mentor will respond within 24 hours.</p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <strong>Enquiry Received!</strong> Thank you for reaching out. A dedicated counselor will contact you shortly. (Demo feedback simulation)
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500"
                    placeholder="e.g. Aditi Sharma"
                  />
                  {errors.name && <p className="text-rose-500 text-[11px] mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500"
                      placeholder="aditi@example.com"
                    />
                    {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
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
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Office / Mode</label>
                  <select
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="mumbai">Mumbai Office</option>
                    <option value="delhi">Delhi Office</option>
                    <option value="london">London Office</option>
                    <option value="online">Online Video Session (Zoom / Meet)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Message or Query *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500"
                    placeholder="Tell us about your target course, educational background, or questions..."
                  />
                  {errors.message && <p className="text-rose-500 text-[11px] mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="md" 
                  className="w-full font-bold"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Transmitting...' : 'Send Message Now'}
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

