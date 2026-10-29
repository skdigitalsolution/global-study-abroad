import { ArrowUpRight } from 'lucide-react';
import IIAMPhoto from '../common/IIAMPhoto';
import { iiamPhotos } from '../../data/iiamPhotos';

export function IIAMLearningEnvironment() {
  return (
    <section aria-labelledby="iiam-learning-title" className="mb-16 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-600">A closer look at IIAM</p>
        <h2 id="iiam-learning-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">The people behind<br className="hidden sm:block" /> the learning.</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-600">Education is also shaped by the moments between classes: conversations with classmates, shared questions and time spent learning together.</p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600">This photograph comes from IIAM’s own collection, offering a glimpse of its student environment.</p>
        <a href="#iiam-student-life" className="mt-7 inline-flex items-center gap-2 self-start text-sm font-bold text-navy-900 underline underline-offset-4 hover:text-gold-600">Explore student moments <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
      <IIAMPhoto photo={iiamPhotos.campus} className="p-4 sm:p-6 md:pl-0" frameClassName="aspect-[4/3] md:aspect-auto md:h-[420px]" />
    </section>
  );
}

export function IIAMPracticalPhotos() {
  return (
    <section aria-labelledby="iiam-practical-title" className="border-t border-slate-200 pt-8">
      <div className="mb-6 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Inside the learning environment</p>
        <h4 id="iiam-practical-title" className="mt-3 text-2xl font-bold text-navy-900">A closer view of practical learning</h4>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">Photographs from IIAM’s official training collection. They show the settings and activities pictured, without promising a particular course, placement or outcome.</p>
      </div>
      <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
        <IIAMPhoto photo={iiamPhotos.mockAircraft} />
        <IIAMPhoto photo={iiamPhotos.aviation} />
        <IIAMPhoto photo={iiamPhotos.hospitality} frameClassName="aspect-[4/3] flex items-center justify-center" imageClassName="max-w-[404px] max-h-[303px] !object-contain" />
      </div>
    </section>
  );
}

export function IIAMStudentLife() {
  return (
    <section id="iiam-student-life" aria-labelledby="iiam-student-life-title" className="mb-16 scroll-mt-28 border-t border-slate-200 pt-12 sm:pt-16">
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Beyond the classroom</p>
          <h2 id="iiam-student-life-title" className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Different moments. Shared experiences.</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">A visit, a discussion, a gathering on stage. Explore selected moments from IIAM’s activity archive.</p>
        </div>
        <a href="https://www.iiamedu.com/Activity_Main.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-navy-900 underline underline-offset-4 hover:text-gold-600">IIAM activity archive <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (new tab)</span></a>
      </div>
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[iiamPhotos.visit, iiamPhotos.debate, iiamPhotos.annualDay].map((photo) => <IIAMPhoto key={photo.path} photo={photo} />)}
      </div>
    </section>
  );
}
