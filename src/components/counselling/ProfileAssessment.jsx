import { useState } from 'react';
import { ArrowRight, ClipboardList } from 'lucide-react';
import { SectionHeading } from './CounsellingPrimitives';

export default function ProfileAssessment({ items }) {
  const [ready, setReady] = useState([]);
  function toggle(title) { setReady((current) => current.includes(title) ? current.filter((item) => item !== title) : [...current, title]); }
  return <section id="profile-assessment" aria-labelledby="profile-title" className="bg-navy-50 scroll-mt-28">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
      <div><SectionHeading id="profile-title" eyebrow="Your profile, in focus" title="A good plan starts with understanding you.">Your interests are one part of the picture. Your academic background, budget and timing help put those interests into context.</SectionHeading>
        <div className="mt-8 flex items-start gap-4 rounded-2xl bg-navy-900 text-white p-6"><ClipboardList className="shrink-0 text-gold-400" aria-hidden="true" /><div><h3 className="font-bold">A preparation check, not an eligibility score</h3><p className="mt-2 text-sm text-slate-300 leading-relaxed">Mark the topics you have thought about. There is no right starting point, and no documents are uploaded or shared.</p></div></div>
        <a href="#enquiry" className="inline-flex items-center gap-2 mt-7 text-sm font-bold hover:text-gold-600 underline underline-offset-4">Turn your notes into an enquiry <ArrowRight size={17} aria-hidden="true" /></a>
      </div>
      <fieldset className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8"><legend className="sr-only">Counselling preparation checklist</legend><h3 className="font-bold text-xl">What have you explored so far?</h3><p className="mt-2 text-sm text-slate-500">Select the topics you feel ready to discuss.</p><div className="mt-6 divide-y divide-slate-200">{items.map((item) => <label key={item.title} className="flex gap-4 items-start py-5 cursor-pointer"><input type="checkbox" checked={ready.includes(item.title)} onChange={() => toggle(item.title)} className="mt-1 h-5 w-5 shrink-0 accent-amber-600" /><span><span className="block text-sm font-bold">{item.title}</span><span className="block text-sm text-slate-600 leading-relaxed mt-1">{item.description}</span></span></label>)}</div><label htmlFor="profile-progress" className="block text-xs font-semibold mt-3">Topics ready to discuss</label><progress id="profile-progress" value={ready.length} max={items.length} className="mt-3 h-2 w-full accent-amber-600" /><p role="status" className="text-xs text-slate-600 mt-3">{ready.length} of {items.length} topics selected. This checklist stays on this page only.</p></fieldset>
    </div>
  </section>;
}
