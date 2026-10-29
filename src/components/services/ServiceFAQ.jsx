import { Plus } from 'lucide-react';
export default function ServiceFAQ({ service }) {
  return <section aria-labelledby="faq-heading" className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
    <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Good questions deserve clear answers</p>
    <h2 id="faq-heading" className="text-3xl font-bold mt-3 mb-8">About {service.name.toLowerCase()}</h2>
    <div className="space-y-3">{service.faqs.map((faq) => <details key={faq.question} className="group bg-white border border-slate-200 rounded-xl p-5">
      <summary className="flex justify-between gap-5 cursor-pointer font-semibold list-none [&::-webkit-details-marker]:hidden">{faq.question}<Plus className="shrink-0 text-gold-600 group-open:rotate-45" size={20} /></summary>
      <p className="text-slate-600 text-sm leading-relaxed mt-4">{faq.answer}</p>
    </details>)}</div>
  </section>;
}
