import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass,
  Menu, 
  X, 
  PhoneCall, 
  Mail, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import MobileMenu from './MobileMenu';
import NavigationItems from './NavigationItems';
import { navigationData } from '../../data/navigationData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = navigationData;

  return (
    <>
      {/* Top Premium Notification Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-800/90 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-gold-500/20 text-gold-300 border border-gold-400/40 px-3 py-0.5 rounded-full font-bold text-[11px] shadow-sm">
              <Sparkles className="w-3 h-3 text-gold-400" /> Explore your next chapter
            </span>
            <span className="text-slate-300 text-xs hidden md:inline">
              GlobalPath ? Explore your study abroad possibilities
            </span>
          </div>

          <div className="flex items-center gap-5 text-[12px] font-medium">
            <a 
              href="tel:+919326632584" 
              className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-slate-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-400" /> 
              <span>+91 9326632584</span>
            </a>
            <span className="text-navy-700 hidden sm:inline">|</span>
            <a 
              href="mailto:admin@iiamedu.com" 
              className="hover:text-gold-400 transition-colors hidden sm:flex items-center gap-1.5 text-slate-200"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" /> 
              <span>admin@iiamedu.com</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Luxury Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-950/95 backdrop-blur-md shadow-2xl shadow-navy-950/50 border-b border-gold-500/20 py-2.5' 
          : 'bg-navy-900/95 backdrop-blur-sm py-3.5 border-b border-navy-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity (Clean Single-Line Presentation) */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none flex-shrink-0">
            <Compass className="h-11 w-11 rounded-full border border-gold-400 p-2 text-gold-400" aria-hidden="true" />
            <div><span className="block text-2xl font-bold text-white">Global<span className="text-gold-400">Path</span></span><span className="text-[10px] uppercase tracking-widest text-slate-300">Your study abroad journey</span></div>
          </Link>

          {/* Desktop Navigation Links (No 'Home' text, Spaced & No-wrap) */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-2 mx-4" aria-label="Main Navigation">
            <NavigationItems navLinks={navLinks} />
          </nav>

          {/* Right Action CTA & Direct Helpline */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            <a 
              href="tel:+919326775718" 
              className="hidden 2xl:flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-gold-400 bg-navy-950/80 hover:bg-navy-800/90 px-3.5 py-2.5 rounded-xl border border-navy-700/80 transition-all shadow-sm whitespace-nowrap"
              title="Call Campus Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-mono font-bold">+91 9326775718</span>
            </a>

            <Link to="/services/counselling#enquiry" className="inline-flex items-center gap-2 rounded-xl bg-gold-400 px-5 py-3 text-sm font-bold text-navy-950 hover:bg-gold-300 whitespace-nowrap">
              Plan Your Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu 
        isOpen={isOpen} 
        onClose={closeMenu}
        navLinks={navLinks} 
      />
    </>
  );
}
