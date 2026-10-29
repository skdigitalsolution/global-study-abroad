import { BookOpen, Globe2, ListChecks, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading, CounsellingPhoto } from './CounsellingPrimitives';
const icons = { BookOpen, Globe2, ListChecks };

export default function CounsellingBenefits({ service }) {
  return <section aria-labelledby="benefits-title" className="bg-white border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-20 items-center">
      <CounsellingPhoto photo={service.photos.planning} className="max-w-lg mx-auto w-full" />
      <div><SectionHeading id="benefits-title" eyebrow="Perspective before paperwork" title="Make the important choices with more clarity.">Counselling gives your research a direction. It helps you connect your interests with practical questions about studying abroad.</SectionHeading>
        <div className="mt-8 space-y-7">{service.benefits.map((benefit) => { const Icon = icons[benefit.icon]; return <article key={benefit.title} className="flex items-start gap-4"><div className="shrink-0 rounded-xl bg-gold-50 p-3 text-gold-600"><Icon size={22} aria-hidden="true" /></div><div><h3 className="font-bold text-lg leading-snug">{benefit.title}</h3><p className="mt-2 text-sm text-slate-600 leading-relaxed">{benefit.description}</p></div></article>; })}</div>
        <Link to="/destinations" className="inline-flex gap-2 items-center mt-8 font-bold text-sm underline underline-offset-4 hover:text-gold-600">Explore study destinations <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </div>
  </section>;
}
