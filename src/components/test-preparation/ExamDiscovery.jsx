import { useState } from 'react';
import { ArrowUpRight, ChevronDown, GraduationCap, Languages, Check } from 'lucide-react';
import { exams, examCategories } from '../../data/testPreparation';

const categoryIcons = { Languages, GraduationCap };

export default function ExamDiscovery() {
  const [category, setCategory] = useState('all');
  const [expandedExam, setExpandedExam] = useState(null);
  const visibleCategories = examCategories.filter((item) => category === 'all' || category === item.id);
  const visibleCount = exams.filter((exam) => category === 'all' || exam.category === category).length;

  function changeCategory(id) {
    setCategory(id);
    setExpandedExam(null);
  }

  return (
    <section id="exam-discovery" aria-labelledby="exam-discovery-title" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 scroll-mt-28">
      <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6 lg:gap-16 items-end">
        <div>
          <p className="text-gold-600 font-bold text-xs uppercase tracking-[0.18em]">Find the right starting point</p>
          <h2 id="exam-discovery-title" className="text-3xl sm:text-4xl font-bold tracking-tight mt-4">Different exams.<br />Different purposes.</h2>
        </div>
        <p className="text-slate-600 leading-relaxed">English proficiency and academic admission tests answer different questions. Your university, programme and destination determine which exam and scores, if any, you need.</p>
      </div>

      <div role="group" aria-label="Filter exams by purpose" className="flex flex-wrap gap-2 mt-9">
        {[{ id: 'all', name: 'All exams' }, ...examCategories].map((item) => (
          <button
            key={item.id} type="button" aria-pressed={category === item.id} aria-controls="exam-results"
            onClick={() => changeCategory(item.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold border transition-colors focus-visible:outline-2 focus-visible:outline-gold-600 ${category === item.id ? 'bg-navy-900 text-white border-navy-900' : 'bg-white border-slate-300 text-slate-600 hover:border-gold-600'}`}
          >{item.name}</button>
        ))}
      </div>
      <p role="status" className="mt-4 text-xs text-slate-500">Showing {visibleCount} of {exams.length} exam guides. These are research guides, not available coaching batches.</p>

      <div id="exam-results" className="space-y-12 mt-9">
        {visibleCategories.map((group) => {
          const Icon = categoryIcons[group.icon];
          return (
            <section key={group.id} aria-labelledby={`category-${group.id}`}>
              <div className="flex items-start gap-4 mb-6">
                <span className="rounded-xl bg-gold-100 text-navy-900 p-3 shrink-0"><Icon size={24} aria-hidden="true" /></span>
                <div>
                  <h3 id={`category-${group.id}`} className="text-xl font-bold">{group.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">{group.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
                {exams.filter((exam) => exam.category === group.id).map((exam) => {
                  const expanded = expandedExam === exam.id;
                  return (
                    <article key={exam.id} id={`exam-${exam.id}`} aria-labelledby={`exam-title-${exam.id}`} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm scroll-mt-28">
                      <div className={`h-1 ${group.id === 'english' ? 'bg-gold-400' : 'bg-navy-800'}`} />
                      <div className="p-6">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{exam.context}</p>
                        <h4 id={`exam-title-${exam.id}`} className="text-3xl font-bold mt-3">{exam.name}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mt-4 min-h-20">{exam.description}</p>
                        <button
                          type="button" aria-expanded={expanded} aria-controls={`exam-detail-${exam.id}`}
                          onClick={() => setExpandedExam(expanded ? null : exam.id)}
                          className="flex items-center justify-between w-full gap-3 border-t border-slate-200 pt-4 mt-5 text-sm font-bold text-navy-900 hover:text-gold-600 focus-visible:outline-2 focus-visible:outline-gold-600"
                        >
                          <span>{expanded ? 'Close' : 'Explore'} {exam.name} guide</span>
                          <ChevronDown size={17} aria-hidden="true" className={expanded ? 'rotate-180' : ''} />
                        </button>
                        <div id={`exam-detail-${exam.id}`} hidden={!expanded}>
                          <h5 className="text-xs uppercase tracking-wider font-bold mt-6 mb-3">Practice directions</h5>
                          <ul className="space-y-3">{exam.focus.map((focus) => <li key={focus} className="flex gap-2 text-sm text-slate-600"><Check size={16} className="text-gold-600 shrink-0 mt-0.5" aria-hidden="true" />{focus}</li>)}</ul>
                          <p className="bg-gold-50 rounded-lg p-4 text-sm mt-5"><strong className="block mb-1">A question to verify</strong>{exam.question}</p>
                          <a href={exam.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center text-sm font-bold underline underline-offset-4 mt-5">Official {exam.name} information <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
                          <a href="#process" className="block text-sm font-semibold text-navy-700 underline underline-offset-4 mt-4">Use the preparation framework</a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      <p className="mt-8 border-l-2 border-gold-400 pl-4 text-xs text-slate-500 leading-relaxed">Exam names identify the respective providers' tests. No affiliation, official exam administration or authorised test-centre status is claimed by GlobalPath.</p>
    </section>
  );
}
