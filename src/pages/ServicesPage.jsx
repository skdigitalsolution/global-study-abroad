import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass } from 'lucide-react';
import { services } from '../data/services';

export default function ServicesPage() {
  return <main className="bg-slate-50 text-navy-900">
    <section className="bg-navy-950 text-white"><div className="max-w-7xl mx-auto px-5 sm:px-8 py-16"><nav aria-label="Breadcrumb" className="text-xs text-slate-300 mb-10"><Link to="/" className="hover:text-gold-400">Home</Link><span className="mx-3">/</span><span aria-current="page">Services</span></nav><p className="text-gold-400 uppercase tracking-widest text-xs font-bold">The GlobalPath guides</p><h1 className="text-4xl sm:text-5xl font-bold max-w-2xl mt-5">Every next step deserves a little clarity.</h1><p className="text-slate-300 text-lg mt-6 max-w-2xl leading-relaxed">From choosing a course to preparing for arrival, explore practical guides to the decisions ahead. Start where you are, and move at your own pace.</p></div></section>
    <section aria-label="All services" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">{services.map((service,index) => <article key={service.slug} className="rounded-2xl bg-white border border-slate-200 p-7 flex flex-col"><div className="flex justify-between items-center"><Compass className="text-gold-600" /><span className="font-mono text-sm text-slate-400">0{index+1}</span></div><h2 className="text-xl font-bold mt-7">{service.name}</h2><p className="text-sm text-slate-600 leading-relaxed mt-4 mb-7 flex-1">{service.description}</p><Link to={`/services/${service.slug}`} className="flex items-center justify-between gap-3 font-bold text-sm border-t border-slate-200 pt-4 hover:text-gold-600">Explore this guide <ArrowUpRight size={18} /></Link></article>)}</section>
  </main>;
}
