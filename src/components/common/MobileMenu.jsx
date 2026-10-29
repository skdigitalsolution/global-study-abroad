import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Compass, X } from 'lucide-react';
import NavigationItems from './NavigationItems';

export default function MobileMenu({ isOpen, onClose, navLinks }) {
  const drawer = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    drawer.current?.querySelector('button')?.focus();
    const handleKey = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return; }
      if (event.key !== 'Tab') return;
      const controls = Array.from(drawer.current?.querySelectorAll('a[href], button, summary') || [])
        .filter((element) => element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => { document.removeEventListener('keydown', handleKey); previousFocus?.focus(); };
  }, [isOpen, onClose]);
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
    <div className="fixed inset-0 z-50 xl:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div ref={drawer} className="fixed top-0 right-0 w-full max-w-xs h-full bg-navy-950 border-l border-navy-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header with Circular Logo */}
          <div className="flex items-center justify-between pb-6 border-b border-navy-800">
            <div className="flex items-center gap-3">
              <Compass className="h-10 w-10 text-gold-400 shrink-0" aria-hidden="true" />
              <div><span className="text-xl font-bold text-white">Global<span className="text-gold-400">Path</span></span><span className="block text-[10px] uppercase tracking-widest text-slate-400">Your next chapter</span></div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-navy-800 cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-2">
            <NavigationItems navLinks={navLinks} onNavigate={onClose} mobile />
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-navy-800">
          <Link to="/services/counselling#enquiry" onClick={onClose} className="flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-4 py-3 text-sm font-bold text-navy-950 hover:bg-gold-300 mb-4">
            Plan Your Studies <ArrowRight className="w-4 h-4" />
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
