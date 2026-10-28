import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3.5 mb-4 group focus:outline-none">
              <img 
                src="/imperial-logo.png" 
                alt="Imperial Study Abroad Logo" 
                className="h-12 w-12 rounded-full object-contain ring-2 ring-gold-400/80 bg-navy-900 p-0.5 shadow-lg group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-xl sm:text-2xl font-black text-white font-serif">
                    Imperial
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-200 font-sans">
                    Study Abroad
                  </span>
                </div>
                <span className="text-[9.5px] uppercase tracking-widest font-bold text-slate-400 mt-1">
                  A Unit of Jayshree Charitable Trust
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Imperial Study Abroad is a premier international education & career advisory initiative under Jayshree Charitable Trust and Imperial Institute of Advanced Management (IIAM).
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Admin Building, Ideal College Campus, Bhal Malang Road Kalyan (E), Thane, Maharashtra - 421306</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Direct Helpline: +91 9326632584 | +91 9326775718</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>admin@iiamedu.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-4 text-slate-100">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link to="/destinations/uk" className="hover:text-gold-400 transition-colors">Study in UK</Link></li>
              <li><Link to="/destinations/usa" className="hover:text-gold-400 transition-colors">Study in USA</Link></li>
              <li><Link to="/destinations/canada" className="hover:text-gold-400 transition-colors">Study in Canada</Link></li>
              <li><Link to="/destinations/australia" className="hover:text-gold-400 transition-colors">Study in Australia</Link></li>
              <li><Link to="/destinations/germany" className="hover:text-gold-400 transition-colors">Study in Germany</Link></li>
              <li><Link to="/destinations/ireland" className="hover:text-gold-400 transition-colors">Study in Ireland</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-4 text-slate-100">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Profile Assessment</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">University Shortlisting</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">SOP Polish Support</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Scholarship Advice</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Student Visa Filing</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Pre-Departure Guidance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-4 text-slate-100">
              Institutes & Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">Jayshree Charitable Trust</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">IIAM Advanced Management</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">IIAM Aviation & Management</Link></li>
              <li><Link to="/universities" className="hover:text-gold-400 transition-colors">Explore Universities</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact Our Campus</Link></li>
              <li><Link to="/book-counselling" className="hover:text-gold-400 transition-colors">Book Free Session</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 p-4 rounded-2xl bg-navy-900 border border-navy-800 text-xs text-slate-400 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-200">Official Notice:</strong> Imperial Study Abroad is governed by Jayshree Charitable Trust (Registered under Bombay Public Trust Act 1950, Maharashtra) & Imperial Institute of Advanced Management (IIAM).
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Imperial Study Abroad • Jayshree Charitable Trust. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Accreditation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
