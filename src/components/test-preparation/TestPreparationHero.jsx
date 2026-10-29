import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, BookOpen, ChevronRight } from 'lucide-react';

export default function TestPreparationHero({ service }) {
  return (
    <section aria-labelledby="test-preparation-title" className="bg-gold-50 border-b border-gold-400/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-7 pb-14 lg:pb-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-600 mb-12">
          <Link to="/" className="hover:text-gold-600">Home</Link>
          <ChevronRight size={12} aria-hidden="true" />
          <Link to="/services" className="hover:text-gold-600">Services</Link>
          <ChevronRight size={12} aria-hidden="true" />
          <span aria-current="page" className="font-semibold text-navy-900">Test Preparation</span>
        </nav>

        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold text-gold-600">
              <BookOpen size={17} aria-hidden="true" /> The GlobalPath study desk
            </p>
            <h1 id="test-preparation-title" className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mt-6">
              A clear goal.<br />A steady routine.<br />
              <span className="font-serif italic font-medium">Your next breakthrough.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-6 max-w-xl">{service.description}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#exam-discovery" className="inline-flex items-center gap-3 bg-navy-900 hover:bg-navy-800 text-white rounded-xl px-6 py-3.5 text-sm font-bold focus-visible:outline-2 focus-visible:outline-gold-600">
                Find your exam <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 rounded-xl border border-navy-900/20 px-5 py-3.5 text-sm font-bold hover:bg-white">
                Build a preparation plan <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-500">Start with your programme requirements, not someone else's target score.</p>
          </div>

          <figure className="relative min-w-0">
            <img
              src={`${import.meta.env.BASE_URL}${service.photo.file}`}
              alt={service.photo.alt}
              width={service.photo.width} height={service.photo.height} loading="eager" fetchPriority="high" decoding="async"
              className="w-full aspect-[3/2] object-cover object-center rounded-t-[3rem] rounded-b-xl shadow-sm"
            />
            <div className="bg-navy-900 text-white rounded-b-xl px-6 py-5 flex items-center justify-between gap-4">
              <p className="text-xs text-slate-300">A preparation mindset<br /><strong className="block text-base sm:text-lg text-white mt-1">Focus on progress. Learn from practice.</strong></p>
              <span className="h-10 w-10 flex items-center justify-center rounded-full border border-gold-400 text-gold-400 shrink-0" aria-hidden="true"><ArrowUpRight size={22} /></span>
            </div>
            <figcaption className="text-[11px] text-slate-500 mt-3">
              {service.photo.caption || 'Illustrative study photograph.'} <a href={service.photo.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{service.photo.credit}</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
