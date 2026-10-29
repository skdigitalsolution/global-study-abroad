import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function ServiceHero({ service }) {
  return <section className="bg-navy-950 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-7 pb-16 lg:pb-20">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-12">
        <Link className="hover:text-gold-400" to="/">Home</Link><ChevronRight size={12} />
        <Link className="hover:text-gold-400" to="/services">Services</Link><ChevronRight size={12} />
        <span aria-current="page" className="text-gold-400">{service.name}</span>
      </nav>
      <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${service.variant === 'reverse' ? 'lg:[&>figure]:order-first' : ''}`}>
        <div>
          <p className="text-gold-400 text-xs uppercase font-bold tracking-[0.2em] mb-5">GlobalPath / {service.name}</p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl leading-[1.12] font-bold tracking-tight max-w-2xl">{service.title}</h1>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed max-w-xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#enquiry" className="inline-flex items-center gap-3 rounded-xl bg-gold-400 text-navy-950 font-bold px-6 py-3.5 hover:bg-gold-300 focus-visible:outline focus-visible:outline-white">Plan my next step <ArrowRight size={18} /></a>
            <a href="#process" className="inline-flex items-center px-4 py-3 text-white underline underline-offset-4 hover:text-gold-400">See the process</a>
          </div>
          <p className="text-xs text-slate-400 mt-6">Practical planning. Thoughtful choices. Your own path.</p>
        </div>
        <figure className="relative max-w-xl w-full mx-auto">
          <img src={`${import.meta.env.BASE_URL}${service.image}`} alt={`Original illustration about ${service.name.toLowerCase()}`} width="640" height="480" className="w-full rounded-3xl border border-navy-700 shadow-2xl" />
          <figcaption className="mt-3 text-xs text-slate-400">The next chapter starts with a considered decision.</figcaption>
        </figure>
      </div>
    </div>
  </section>;
}
