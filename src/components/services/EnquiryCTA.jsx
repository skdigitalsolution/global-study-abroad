import { useId, useState } from 'react';
import { ArrowRight, ClipboardCopy } from 'lucide-react';

export default function EnquiryCTA({ service }) {
  const id = useId();
  const [draft, setDraft] = useState('');
  const [notice, setNotice] = useState('');
  function prepare(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('name').trim().length < 2) {
      form.elements.name.setCustomValidity('Please enter at least two characters.');
      form.elements.name.reportValidity();
      return;
    }
    if (data.get('message').trim().length < 10) {
      form.elements.message.setCustomValidity('Please describe your question in at least 10 characters.');
      form.elements.message.reportValidity();
      return;
    }
    const phone = data.get('phone');
    if (phone && (!/^[+0-9 ()-]{8,20}$/.test(phone) || phone.replace(/\D/g, '').length < 8)) {
      form.elements.phone.setCustomValidity('Please enter at least eight digits, or leave this optional field empty.');
      form.elements.phone.reportValidity();
      return;
    }
    setDraft(`GlobalPath enquiry: ${service.name}\nName: ${data.get('name').trim()}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nStudy plan: ${data.get('message').trim()}`);
    setNotice('Your draft is ready below. It has not been sent or saved.');
  }
  async function copy() {
    try { await navigator.clipboard.writeText(draft); setNotice('Draft copied. Nothing has been submitted.'); }
    catch { setNotice('Copy is unavailable. Select and copy the draft below manually.'); }
  }
  const inputClass = 'mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-950 focus:outline-2 focus:outline-gold-500';
  return <section id="enquiry" aria-labelledby={`${id}-heading`} className="bg-navy-900 text-white py-16 scroll-mt-28">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
      <div><p className="text-gold-400 uppercase text-xs tracking-widest font-bold">Start with a conversation</p>
        <h2 id={`${id}-heading`} className="text-3xl sm:text-4xl font-bold mt-4 leading-tight">{service.cta}</h2>
        <p className="text-slate-300 mt-5 leading-relaxed">Put your questions into words. Use this form to prepare a concise enquiry about {service.name.toLowerCase()}.</p>
        <div className="mt-8 rounded-xl border border-navy-600 p-5 text-sm text-slate-300"><strong className="text-gold-400 block mb-2">Before you share</strong>No online submission is connected yet. This form creates a draft on your screen only. Do not include passport numbers, bank details or other sensitive documents. Service availability and any fees need confirmation before you proceed.</div>
      </div>
      <form onSubmit={prepare} onChange={() => { setDraft(''); setNotice(''); }} className="bg-white text-navy-900 rounded-2xl p-6 sm:p-8 space-y-5">
        <h3 className="text-xl font-bold">Prepare your enquiry</h3>
        <label className="block text-sm font-semibold" htmlFor={`${id}-name`}>Full name <span aria-hidden="true">*</span><input id={`${id}-name`} name="name" autoComplete="name" required minLength={2} maxLength={100} onInput={(event) => event.target.setCustomValidity('')} className={inputClass} /></label>
        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block text-sm font-semibold" htmlFor={`${id}-email`}>Email *<input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} /></label>
          <label className="block text-sm font-semibold" htmlFor={`${id}-phone`}>Phone (optional)<input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" minLength={8} maxLength={20} onInput={(event) => event.target.setCustomValidity('')} title="Use 8 to 20 characters: digits, spaces, +, parentheses or hyphens." className={inputClass} /></label>
        </div>
        <label className="block text-sm font-semibold" htmlFor={`${id}-message`}>What would you like to explore? *<textarea id={`${id}-message`} name="message" required minLength={10} maxLength={2000} rows={3} onInput={(event) => event.target.setCustomValidity('')} className={inputClass} /></label>
        <label className="flex items-start gap-3 text-xs text-slate-600"><input type="checkbox" required className="mt-0.5 accent-amber-600" />I understand this prepares a draft and does not book a session or send my details.</label>
        <button type="submit" className="w-full flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-300 rounded-xl px-5 py-3 font-bold focus-visible:outline-2 focus-visible:outline-navy-900">Prepare enquiry draft <ArrowRight size={18} /></button>
        <p role="status" className="text-sm text-slate-600">{notice}</p>
        {draft && <div><label className="text-sm font-bold" htmlFor={`${id}-draft`}>Your unsent draft</label><textarea id={`${id}-draft`} readOnly value={draft} rows={7} className={inputClass} /><button type="button" onClick={copy} className="flex items-center gap-2 text-sm font-bold underline mt-3"><ClipboardCopy size={16} />Copy draft</button></div>}
      </form>
    </div>
  </section>;
}
