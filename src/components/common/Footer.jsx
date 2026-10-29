import { Link } from 'react-router-dom';
import { Compass, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services';

export default function Footer() {
  return <footer className="bg-navy-950 text-slate-300 border-t border-navy-700">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-1"><Link to="/" className="flex items-center gap-3 text-2xl font-bold text-white"><Compass className="text-gold-400" />Global<span className="text-gold-400 -ml-3">Path</span></Link><p className="text-sm leading-relaxed mt-5">A thoughtful place to start your international education journey. Explore your options, ask better questions and plan your next step.</p></div>
      <nav aria-label="Footer services" className="md:col-span-1 lg:col-span-2"><h2 className="text-xs uppercase tracking-widest font-bold text-gold-400 mb-5">Explore our service guides</h2><ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">{services.map((service) => <li key={service.slug}><Link className="text-sm hover:text-gold-400" to={`/services/${service.slug}`}>{service.name}</Link></li>)}</ul></nav>
      <nav aria-label="Footer explore"><h2 className="text-xs uppercase tracking-widest font-bold text-gold-400 mb-5">Find your direction</h2><ul className="space-y-3">{[['Destinations','/destinations'],['Universities','/universities'],['About us','/about'],['Careers','/careers'],['Contact us','/contact']].map(([name,path]) => <li key={path}><Link className="text-sm hover:text-gold-400" to={path}>{name}</Link></li>)}</ul><Link to="/services/counselling#enquiry" className="inline-flex items-center gap-2 mt-5 text-gold-400 font-semibold text-sm">Prepare an enquiry <ArrowUpRight size={16} /></Link></nav>
    </div>
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 border-t border-navy-800 text-xs text-slate-400 flex flex-wrap gap-4 justify-between"><span>? {new Date().getFullYear()} GlobalPath. Plan with perspective.</span><span>Admissions, funding and visa decisions are made by the relevant institutions.</span></div>
  </footer>;
}
