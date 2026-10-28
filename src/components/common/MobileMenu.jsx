import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Sparkles } from 'lucide-react';
import Button from './Button';

export default function MobileMenu({ isOpen, onClose, navLinks }) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 w-full max-w-xs h-full bg-navy-950 border-l border-navy-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header with Circular Logo */}
          <div className="flex items-center justify-between pb-6 border-b border-navy-800">
            <div className="flex items-center gap-3">
              <img 
                src="/imperial-logo.png" 
                alt="Imperial Study Abroad" 
                className="w-11 h-11 rounded-full object-contain ring-2 ring-gold-400/80 bg-navy-900 p-0.5 shadow-md"
              />
              <div>
                <span className="text-lg font-black text-white font-serif block leading-tight">
                  Imperial <span className="font-sans text-gold-400">Study Abroad</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                  Jayshree Charitable Trust
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-navy-800 cursor-pointer"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-gold-500/20 text-gold-400 font-bold border border-gold-400/30'
                      : 'text-slate-300 hover:bg-navy-900 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-navy-800">
          <Link to="/book-counselling" onClick={onClose} className="block w-full mb-4">
            <Button variant="primary" size="lg" className="w-full font-bold">
              Book Free Counselling <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>

          <div className="text-xs text-slate-300 space-y-2.5">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>+91 9326632584 / +91 9326775718</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>admin@iiamedu.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
