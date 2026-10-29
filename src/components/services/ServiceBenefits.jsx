import { CheckCircle2 } from 'lucide-react';
export default function ServiceBenefits({ service }) {
  return <section aria-labelledby="benefits-heading" className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
    <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Make room for possibility</p>
    <h2 id="benefits-heading" className="text-3xl font-bold text-navy-900 mt-3 mb-8">A stronger starting point</h2>
    <div className={`grid gap-5 ${service.variant === 'editorial' ? 'md:grid-cols-1' : 'md:grid-cols-3'}`}>
      {service.benefits.map((benefit) => <article key={benefit.title} className="rounded-2xl bg-white border border-slate-200 p-7">
        <CheckCircle2 className="text-gold-600 mb-5" aria-hidden="true" />
        <h3 className="text-lg font-bold text-navy-900 mb-3">{benefit.title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
      </article>)}
    </div>
  </section>;
}
