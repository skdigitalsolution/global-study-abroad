import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  CircleCheck,
  ClipboardCheck,
  FileText,
  GraduationCap,
  ListChecks,
  MailCheck,
} from 'lucide-react';

const applicationSteps = [
  {
    title: 'Shape your shortlist',
    description: 'Match courses and universities to your academic interests, goals and preferred destinations.',
  },
  {
    title: 'Check the entry criteria',
    description: 'Review eligibility, prerequisites, language evidence and any course-specific requirements.',
  },
  {
    title: 'Gather your documents',
    description: 'Collect transcripts, certificates and any supporting material each institution requests.',
  },
  {
    title: 'Prepare your application',
    description: 'Write a genuine statement of purpose where required, and organise your CV and references if requested.',
  },
  {
    title: 'Submit and follow up',
    description: 'Use the institution’s official application channel, save your confirmation and track any follow-up requests.',
  },
  {
    title: 'Review the decision',
    description: 'Read the outcome and conditions carefully, then check the institution’s instructions for your next steps.',
  },
];

const documentItems = [
  {
    id: 'transcripts',
    title: 'Academic transcripts',
    note: 'Current and previous academic records, in the requested format.',
    requirement: 'Commonly requested',
  },
  {
    id: 'certificates',
    title: 'Degree or school certificates',
    note: 'Completed qualification certificates or evidence of expected completion.',
    requirement: 'Commonly requested',
  },
  {
    id: 'statement',
    title: 'Statement of purpose',
    note: 'A personal explanation of your interests and plans, where required.',
    requirement: 'If requested',
  },
  {
    id: 'resume',
    title: 'CV or resume',
    note: 'A concise record of relevant study, experience and activities.',
    requirement: 'If requested',
  },
  {
    id: 'recommendations',
    title: 'Recommendation letters',
    note: 'Ask suitable referees early and follow each institution’s submission rules.',
    requirement: 'If requested',
  },
  {
    id: 'additional',
    title: 'Additional course materials',
    note: 'For example, language results, a portfolio or other supporting evidence.',
    requirement: 'Course-specific',
  },
];

const applicationFaqs = [
  {
    question: 'When should I start preparing my applications?',
    answer: 'Start by checking the official intake and course pages for every institution on your shortlist. Work backwards from each confirmed deadline, leaving time to request records, prepare any required materials and resolve questions. There is no single timeline that fits every destination or course.',
  },
  {
    question: 'Do all universities ask for the same documents?',
    answer: 'No. The required documents and accepted formats can vary by institution, course, applicant background and destination. Treat each official application checklist as the source of truth, and confirm any unclear requirement with the institution.',
  },
  {
    question: 'Does submitting an application guarantee admission?',
    answer: 'No. Each institution evaluates applications against its own admissions criteria and available places. An organised application can help you present accurate information, but it cannot guarantee an offer.',
  },
  {
    question: 'What should I do after submitting?',
    answer: 'Keep a copy of the submitted application and its acknowledgement, check the official portal and email you provided, and respond to requests by the stated deadline. Review any decision and conditions directly with the institution.',
  },
];

export default function ApplicationsAdmission() {
  const [checkedDocuments, setCheckedDocuments] = useState([]);
  const progress = Math.round((checkedDocuments.length / documentItems.length) * 100);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Applications & Admission | GlobalPath';
    if (description) {
      description.content = 'Plan your university applications with a clear process, a practical document checklist and institution-specific deadline reminders.';
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) description.content = previousDescription;
    };
  }, []);

  function toggleDocument(documentId) {
    setCheckedDocuments((current) => (
      current.includes(documentId)
        ? current.filter((id) => id !== documentId)
        : [...current, documentId]
    ));
  }

  function clearChecklist() {
    setCheckedDocuments([]);
  }

  return (
    <main className="bg-white text-navy-900">
      <section aria-labelledby="applications-title" className="relative overflow-hidden bg-[#f5f2e9]">
        <div className="absolute -left-36 -top-32 h-96 w-96 rounded-full border border-gold-500/20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-7 sm:px-8 lg:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs text-slate-600 sm:mb-14">
            <Link to="/" className="hover:text-gold-600">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link to="/services" className="hover:text-gold-600">Services</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span aria-current="page" className="font-semibold text-navy-900">Applications &amp; Admission</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-600">
                <GraduationCap size={16} aria-hidden="true" />
                Applications &amp; admission
              </p>
              <h1 id="applications-title" className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                Make every application a <span className="font-serif font-medium italic text-gold-600">considered next step.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Move from a thoughtful shortlist to a carefully prepared submission with a clear view of your documents, requirements and deadlines.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
                  Ask about your application <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#process" className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/20 bg-white/60 px-5 py-3.5 text-sm font-bold text-navy-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
                  Explore the steps <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-slate-500">
                Requirements, decisions and timelines belong to each institution. Always verify details through its official channels.
              </p>
            </div>

            <figure className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-[2rem] bg-gold-400" aria-hidden="true" />
              <img
                src={`${import.meta.env.BASE_URL}images/services/counselling-planning.jpg`}
                alt="A student and adviser reviewing study documents together"
                width="1000"
                height="1500"
                fetchPriority="high"
                className="relative aspect-[4/4.5] w-full rounded-t-[8rem] rounded-b-2xl object-cover object-center shadow-xl sm:aspect-[5/4]"
              />
              <figcaption className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/60 bg-white/90 p-4 text-sm font-semibold text-navy-900 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-xs">
                One clear checklist. A more confident next step.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="process" aria-labelledby="process-title" className="scroll-mt-24 bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">A route you can revisit</p>
            <h2 id="process-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Six practical steps from shortlist to decision.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">
              Each course may add its own requirements. Use this sequence as a planning guide, then confirm the details with every university.
            </p>
            <Link to="/universities" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold-400 underline decoration-gold-400/50 underline-offset-4 hover:text-gold-300">
              Revisit university shortlisting <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <ol className="relative space-y-0 before:absolute before:bottom-6 before:left-[19px] before:top-6 before:w-px before:bg-navy-700">
            {applicationSteps.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 border-b border-navy-800 py-6 first:pt-0 last:border-0 last:pb-0 sm:gap-7">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/70 bg-navy-900 font-mono text-sm font-bold text-gold-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="pb-1">
                  <h3 className="text-lg font-bold sm:text-xl">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="documents-title" className="bg-[#f6f7fa]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
              <ClipboardCheck size={16} aria-hidden="true" /> Your working checklist
            </p>
            <h2 id="documents-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Gather what your chosen course asks for.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Use this interactive list to keep track of common application materials. It is a planning aid, not a universal or official document list.
            </p>
            <div className="mt-8 rounded-2xl bg-navy-900 p-6 text-white shadow-lg">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-400">Your progress</p>
                  <p className="mt-2 text-2xl font-bold">{checkedDocuments.length}<span className="text-slate-400"> / {documentItems.length}</span></p>
                  <p className="mt-1 text-sm text-slate-300">items checked off</p>
                </div>
                <ListChecks className="text-gold-400" size={30} aria-hidden="true" />
              </div>
              <div
                className="mt-5 h-2 overflow-hidden rounded-full bg-navy-700"
                role="progressbar"
                aria-label="Document checklist progress"
                aria-valuemin={0}
                aria-valuemax={documentItems.length}
                aria-valuenow={checkedDocuments.length}
                aria-valuetext={`${checkedDocuments.length} of ${documentItems.length} items checked`}
              >
                <div className="h-full rounded-full bg-gold-400 transition-[width] duration-300" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-300">Only check an item when you have reviewed the version and format your institution requests.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-600"><FileText size={20} aria-hidden="true" /></span>
                <div>
                  <h3 className="font-bold">Application materials</h3>
                  <p className="text-xs text-slate-500">Mark items as you prepare them</p>
                </div>
              </div>
              {checkedDocuments.length > 0 && (
                <button type="button" onClick={clearChecklist} className="text-xs font-bold text-navy-700 underline underline-offset-4 hover:text-gold-600 focus-visible:outline-2 focus-visible:outline-gold-600">
                  Clear checklist
                </button>
              )}
            </div>
            <ul className="divide-y divide-slate-100">
              {documentItems.map((item) => {
                const isChecked = checkedDocuments.includes(item.id);
                const inputId = `document-${item.id}`;
                return (
                  <li key={item.id} className="py-4 first:pt-0 last:pb-0">
                    <label htmlFor={inputId} className="flex cursor-pointer items-start gap-4 rounded-lg focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-gold-500">
                      <input
                        id={inputId}
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDocument(item.id)}
                        className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
                      />
                      <span className="min-w-0 flex-1">
                        <span className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-bold ${isChecked ? 'text-slate-500 line-through decoration-slate-400' : 'text-navy-900'}`}>
                          {item.title}
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600 no-underline">{item.requirement}</span>
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-500">{item.note}</span>
                      </span>
                      {isChecked && <Check size={18} className="mt-1 shrink-0 text-emerald-700" aria-label="Checked" />}
                    </label>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
              Do not send sensitive identity or financial documents through this page. Follow the university’s secure submission instructions.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="strong-application-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Your story, clearly told</p>
          <h2 id="strong-application-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A strong application is accurate, considered and your own.</h2>
          <p className="mt-5 leading-relaxed text-slate-600">Bring your documents and written materials together so they give a consistent, honest picture of your preparation and interests.</p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <figure className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/services/test-preparation-study.jpg`}
                alt="A student working carefully at a laptop in a study space"
                width="1400"
                height="900"
                loading="lazy"
                className="aspect-[5/4] w-full rounded-2xl object-cover shadow-md"
              />
              <figcaption className="mt-3 text-xs text-slate-500">Illustrative student study photograph.</figcaption>
            </figure>
            <div className="md:pl-3">
              <span className="font-mono text-sm font-bold text-gold-600">01 / Make the evidence connect</span>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Let your academic record and course choice make sense together.</h3>
              <p className="mt-4 leading-relaxed text-slate-600">Check that names, dates and qualification details are consistent across your forms and records. Explain relevant interests with specific examples, and ask referees well ahead of any stated deadline if letters are needed.</p>
              <p className="mt-4 border-l-2 border-gold-400 pl-4 text-sm leading-relaxed text-slate-600">A CV, references or supporting evidence should be included only when the institution or course asks for them.</p>
            </div>
          </article>

          <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <figure className="md:order-2">
              <img
                src={`${import.meta.env.BASE_URL}images/services/counselling-conversation.jpg`}
                alt="A student discussing study plans with an adviser"
                width="1200"
                height="800"
                loading="lazy"
                className="aspect-[5/4] w-full rounded-2xl object-cover shadow-md"
              />
              <figcaption className="mt-3 text-xs text-slate-500">Illustrative advising conversation.</figcaption>
            </figure>
            <div className="md:order-1 md:pr-3">
              <span className="font-mono text-sm font-bold text-gold-600">02 / Keep your writing authentic</span>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Use your own voice in every statement.</h3>
              <p className="mt-4 leading-relaxed text-slate-600">Where a statement of purpose is required, connect your interests to the programme with truthful examples from your own experience. Review for clarity and accuracy, but do not copy someone else’s essay or claim achievements that are not yours.</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900 underline decoration-gold-400 underline-offset-4 hover:text-gold-600">
                Talk through your next step <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="planning-title" className="border-y border-gold-400/30 bg-gold-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
              <CalendarDays size={16} aria-hidden="true" /> Plan around the details
            </p>
            <h2 id="planning-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">One intake. Different requirements. Your own timeline.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Deadlines and application steps can differ between institutions, courses and destinations. Start with confirmed information and build in room for the parts that take time.</p>
            <Link to="/universities" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900 underline decoration-gold-500 underline-offset-4 hover:text-gold-600">
              Return to university research <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-2xl border border-gold-400/50 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold">Build a reliable plan</h3>
            <ol className="mt-5 divide-y divide-slate-100">
              <li className="flex gap-4 py-4 first:pt-0">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">1</span>
                <p className="text-sm leading-relaxed text-slate-600"><strong className="text-navy-900">Record each official deadline.</strong> Note the intake, time zone and how the institution expects an application to be submitted.</p>
              </li>
              <li className="flex gap-4 py-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">2</span>
                <p className="text-sm leading-relaxed text-slate-600"><strong className="text-navy-900">Work backwards from the date.</strong> Allow time for transcripts, references, translations or other requested material.</p>
              </li>
              <li className="flex gap-4 py-4 last:pb-0">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">3</span>
                <p className="text-sm leading-relaxed text-slate-600"><strong className="text-navy-900">Recheck before you submit.</strong> Requirements may change; verify the latest course instructions and keep proof of submission.</p>
              </li>
            </ol>
            <p className="mt-5 flex items-start gap-2 rounded-xl bg-gold-50 p-4 text-xs leading-relaxed text-slate-600">
              <CircleCheck size={16} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
              There is no universal deadline calendar. The institution’s published information takes precedence.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Good questions, clear next steps</p>
          <h2 id="faq-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Application questions.</h2>
          <p className="mt-5 leading-relaxed text-slate-600">Your chosen institution is the best source for official requirements and status updates.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900 underline decoration-gold-400 underline-offset-4 hover:text-gold-600">
            Ask a question <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="space-y-3">
          {applicationFaqs.map((faq, index) => (
            <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5 open:border-gold-400/70 open:shadow-sm sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-bold text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 [&::-webkit-details-marker]:hidden">
                <span className="flex gap-3"><span className="font-mono text-xs text-gold-600">0{index + 1}</span>{faq.question}</span>
                <span className="mt-0.5 text-xl leading-none text-gold-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 border-l-2 border-gold-400 pl-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="enquiry-title" className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute -right-20 -top-36 h-96 w-96 rounded-full border border-gold-400/20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-400"><MailCheck size={16} aria-hidden="true" /> Start with a question</p>
            <h2 id="enquiry-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Let’s make your application plan feel manageable.</h2>
            <p className="mt-4 leading-relaxed text-slate-300">Share what you are considering and explore the available contact options. The contact page explains what happens before you enter any details.</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-gold-400 px-6 py-4 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Explore contact options <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section aria-label="Continue your study abroad research" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm sm:px-8">
        <p className="text-slate-600">Keep your research moving, one informed decision at a time.</p>
        <Link to="/services/country-university-selection" className="inline-flex items-center gap-2 font-bold text-navy-900 hover:text-gold-600">
          Explore universities <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
