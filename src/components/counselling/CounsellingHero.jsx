import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ChevronRight } from 'lucide-react';
import { CounsellingPhoto } from './CounsellingPrimitives';

export default function CounsellingHero({ service }) {
  return <section aria-labelledby="counselling-title" className="bg-navy-950 text-white relative overflow-hidden">
    <div aria-hidden="true" className="absolute -right-40 top-16 h-[500px] w-[500px] rounded-full border border-gold-400/10" />
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-7 pb-14 lg:pb-20 relative">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-10 lg:mb-14">
        <Link to="/" className="hover:text-gold-400">Home</Link><ChevronRight size={12} aria-hidden="true" /><Link to="/services" className="hover:text-gold-400">Services</Link><ChevronRight size={12} aria-hidden="true" /><span aria-current="page" className="text-gold-400">Counselling</span>
      </nav>
      <div className="grid lg:grid-cols-[1.05fr_1fr] items-center gap-10 lg:gap-14">
        <div><p className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-[0.18em] font-bold"><Compass size={16} aria-hidden="true" />A thoughtful first step</p>
          <h1 id="counselling-title" className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12]">Your ambitions.<br />A world of possibilities.<br /><span className="text-gold-400">A clearer plan.</span></h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-6 max-w-xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8"><a href="#enquiry" className="inline-flex items-center justify-center gap-3 bg-gold-400 text-navy-950 rounded-xl px-6 py-3.5 font-bold hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-white">Plan my counselling conversation <ArrowRight size={18} aria-hidden="true" /></a><a href="#process" className="inline-flex items-center text-sm font-semibold underline underline-offset-4 hover:text-gold-400 py-3">Explore the journey</a></div>
          <p className="mt-5 text-xs text-slate-400">Start with your questions. You do not need all the answers yet.</p>
        </div>
        <div className="relative lg:pt-8">
          <CounsellingPhoto photo={service.photos.hero} eager className="[&_figcaption]:text-slate-400" />
          <div className="mt-5 rounded-2xl border border-gold-400/30 bg-navy-800 px-6 py-5 shadow-sm"><p className="text-gold-400 uppercase tracking-widest text-[10px] font-bold">Your direction comes first</p><p className="text-lg font-semibold mt-2">A course. A destination.<br />A decision that feels considered.</p></div>
        </div>
      </div>
    </div>
  </section>;
}
