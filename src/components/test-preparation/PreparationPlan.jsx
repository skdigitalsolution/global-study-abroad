import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw } from 'lucide-react';

export default function PreparationPlan({ steps }) {
  return (
    <section id="process" aria-labelledby="preparation-plan-title" className="bg-navy-950 text-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        <div>
          <p className="text-gold-400 text-xs uppercase tracking-[0.18em] font-bold">The preparation loop</p>
          <h2 id="preparation-plan-title" className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mt-4">A routine you can follow.<br />A plan you can refine.</h2>
          <p className="mt-6 text-slate-300 leading-relaxed">Preparation is more useful when you know why you are doing each task. Build a cycle of assessment, focused work and honest review.</p>
          <div className="flex items-start gap-3 mt-8 border border-navy-700 rounded-2xl p-5">
            <RefreshCw size={24} className="shrink-0 text-gold-400" aria-hidden="true" />
            <p className="text-sm text-slate-300 leading-relaxed">Repeat the loop as you learn. There is no fixed preparation duration or promised score here.</p>
          </div>
          <Link to="/services/counselling#enquiry" className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 underline underline-offset-4 mt-7">Prepare questions for a conversation <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>

        <ol className="border-l border-navy-600 pl-7 sm:pl-9 space-y-9">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-11 sm:-left-13 top-0 h-8 w-8 bg-navy-950 border border-gold-400 rounded-full inline-flex justify-center items-center text-xs font-bold text-gold-400">0{index + 1}</span>
              <p className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">{step.label}</p>
              <h3 className="text-xl font-bold mt-2">{step.title}</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
