import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function ServiceFocus({ service }) {
  return <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
    <div className={`rounded-3xl border border-gold-400/40 bg-gold-50 p-7 sm:p-10 grid gap-8 ${service.variant === 'editorial' ? '' : 'lg:grid-cols-2'}`}>
      <div><p className="text-xs uppercase tracking-widest text-gold-600 font-bold">A closer look</p><h2 className="text-3xl font-bold mt-3">{service.focus.title}</h2><p className="text-slate-600 leading-relaxed mt-4">{service.focus.intro}</p>
        {service.slug === 'country-university-selection' && <Link className="inline-block mt-5 font-bold underline" to="/universities">Explore the university directory</Link>}
      </div>
      <ul className={`grid gap-4 ${service.variant === 'editorial' ? 'sm:grid-cols-3' : ''}`}>{service.focus.items.map((item) => <li key={item} className="flex items-start gap-3 bg-white/80 rounded-xl p-4 text-sm font-medium"><Check size={18} className="shrink-0 text-gold-600" />{item}</li>)}</ul>
    </div>
  </section>;
}
