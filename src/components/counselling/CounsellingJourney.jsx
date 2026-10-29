import { ArrowDownRight } from 'lucide-react';
import { SectionHeading } from './CounsellingPrimitives';

export default function CounsellingJourney({ steps }) {
  return <section id="process" aria-labelledby="journey-title" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 scroll-mt-28">
    <div className="flex flex-col md:flex-row justify-between gap-6 md:items-end"><SectionHeading id="journey-title" eyebrow="Your student journey" title="From questions to a considered next step.">A useful plan grows from a sequence of thoughtful decisions. Here is a simple framework for your counselling conversation.</SectionHeading><ArrowDownRight size={52} aria-hidden="true" className="hidden md:block text-gold-600 shrink-0" /></div>
    <ol className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">{steps.map((step,index) => <li key={step.title} className="relative border-t border-navy-900/20 pt-7"><span className="absolute -top-4 left-0 flex items-center justify-center h-8 w-8 bg-gold-400 text-navy-950 rounded-full font-bold text-xs">0{index+1}</span><h3 className="text-xl font-bold mt-3">{step.title}</h3><p className="text-slate-600 text-sm leading-relaxed mt-4">{step.description}</p><p className="text-xs font-semibold text-navy-700 mt-5 border-l-2 border-gold-400 pl-3">{step.takeaway}</p></li>)}</ol>
  </section>;
}
