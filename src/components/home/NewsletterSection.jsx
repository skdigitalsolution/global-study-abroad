import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('error');
    setErrorMessage('Newsletter signup is not connected. Your email has not been sent or subscribed.');
  };

  return (
    <section className="bg-navy-950 text-white py-16 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-gold-400 text-xs font-bold uppercase tracking-widest block mb-1">
              Stay Ahead of Admissions
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Subscribe To Global Intake Alerts
            </h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              Get weekly updates on university deadlines, newly announced scholarships, and visa rule changes directly in your inbox.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            {status === 'success' ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-2xl p-4 flex items-center gap-3 text-emerald-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Thank you for subscribing! You will receive our next study abroad dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-navy-950/90 border border-navy-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="md" 
                  className="flex-shrink-0"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            )}

            {status === 'error' && (
              <p className="mt-2 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errorMessage}
              </p>
            )}

            <p className="text-[11px] text-slate-400 mt-3 text-center lg:text-left">
              Zero spam. Unsubscribe at any time. Demo subscription simulation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
