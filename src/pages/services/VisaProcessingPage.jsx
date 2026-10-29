import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleHelp,
  FileCheck2,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

const destinations = [
  {
    name: 'United Kingdom',
    image: 'images/discovery/uk.jpg',
    alt: 'Tower Bridge in London beside the River Thames',
    note: 'Confirm the appropriate study route, current instructions and application channel with the UK government’s official immigration information.',
  },
  {
    name: 'United States',
    image: 'images/services/test-preparation-study.jpg',
    alt: 'A student preparing for an international study destination',
    note: 'Check the relevant U.S. government visa information and your institution’s guidance for your individual study plans.',
  },
  {
    name: 'Canada',
    image: 'images/discovery/canada.jpg',
    alt: 'Toronto waterfront and city skyline',
    note: 'Use the Government of Canada’s official immigration information and verify the current process for your circumstances.',
  },
  {
    name: 'Australia',
    image: 'images/discovery/australia.jpg',
    alt: 'Sydney Harbour and the city skyline',
    note: 'Consult the Australian government’s official immigration website for current student visa guidance and application steps.',
  },
  {
    name: 'New Zealand',
    image: 'images/services/counselling-planning.jpg',
    alt: 'A student and adviser reviewing study plans',
    note: 'Check Immigration New Zealand’s official information for the correct category and the latest requirements.',
  },
  {
    name: 'European destinations',
    image: 'images/discovery/ireland.jpg',
    alt: 'A European cityscape used as an illustrative destination image',
    note: 'Visa processes are country-specific. Identify your destination country and use that government’s official immigration or visa website.',
  },
];

const preparationReasons = [
  ['Destination-specific rules', 'Start with the rules for the country where you plan to study; do not assume one country’s process applies elsewhere.'],
  ['Admission and enrolment records', 'Check which institution documents you may need and whether any step depends on your enrolment status.'],
  ['Financial evidence', 'Some processes ask for evidence about funds. Follow the relevant authority’s current instructions and submit accurate records.'],
  ['Health and biometrics', 'Insurance, medical checks, biometrics or interviews may apply in some circumstances. Confirm what is relevant to your route.'],
  ['Official timelines', 'Plan around the current instructions published by the relevant authority; timelines and procedures can change.'],
];

const journeySteps = [
  ['Confirm destination and category', 'Identify the country and check which study-related visa category fits your circumstances.'],
  ['Read official government requirements', 'Use the relevant immigration or visa authority’s current instructions as your source of truth.'],
  ['Gather admission and identity records', 'Prepare the documents requested for your application, in the formats specified.'],
  ['Prepare financial and supporting evidence', 'Include funds, health or other evidence only as required, ensuring every record is accurate.'],
  ['Complete the official application', 'Use the authority’s official application channel and review answers before submitting.'],
  ['Arrange biometrics or an interview', 'Follow the appointment instructions if biometrics, a medical check or an interview is required.'],
  ['Submit and monitor updates', 'Keep confirmation details and check the official channel for notices or additional requests.'],
  ['Review the decision and conditions', 'Read the decision carefully and understand the conditions set by the relevant authority.'],
];

const checklistItems = [
  { id: 'passport', label: 'Valid passport', note: 'Check its validity and any instructions from the relevant authority.' },
  { id: 'admission', label: 'Admission or enrolment documents', note: 'Where required for your destination and application stage.' },
  { id: 'application', label: 'Official application form and confirmation', note: 'Use the official process and keep a copy of your submission.' },
  { id: 'financial', label: 'Financial evidence', note: 'If required; follow the current official rules and evidence format.' },
  { id: 'academic', label: 'Academic records', note: 'Include the records requested for your circumstances.' },
  { id: 'biometrics', label: 'Photograph or biometrics information', note: 'Where applicable; check official specifications and appointment guidance.' },
  { id: 'health', label: 'Health insurance or medical documents', note: 'Where applicable to your destination or application.' },
  { id: 'travel', label: 'Accommodation or travel information', note: 'Only where requested by the relevant authority.' },
];

const interviewTips = [
  'Review the information in your application and make sure you understand what you submitted.',
  'Keep documents accurate and consistent; correct mistakes rather than trying to explain them away.',
  'Be ready to describe your course and study plans truthfully in your own words.',
  'If an interview is required, answer clearly and honestly. Do not invent details or evidence.',
  'Follow official appointment, biometrics and submission instructions carefully.',
  'Keep copies of relevant documents and official correspondence in a safe place.',
];

const visaFaqs = [
  {
    question: 'When should I begin visa preparation?',
    answer: 'Begin by checking the official immigration or visa information for your destination and the instructions from your institution. Application steps, appointment availability and timelines can change, so use current official guidance and allow time for the process that applies to you.',
  },
  {
    question: 'Which documents are commonly requested?',
    answer: 'Requirements depend on destination, visa category and individual circumstances. Identity, admission, financial, academic, health or other documents may be requested. This page’s checklist is general only; follow the official list for your application.',
  },
  {
    question: 'Is a visa interview always required?',
    answer: 'No single process applies everywhere. An interview, biometrics or other appointment may be required in some cases. Check the current instructions from the authority handling your application.',
  },
  {
    question: 'How can I check current visa requirements?',
    answer: 'Use the official government immigration or visa website for your destination and application category. Confirm that information is current and follow any official instructions provided by your institution.',
  },
  {
    question: 'Can GlobalPath guarantee visa approval?',
    answer: 'No. GlobalPath cannot guarantee visa approval. The relevant immigration authority reviews the application and makes the decision.',
  },
  {
    question: 'What should I do if the authority requests more documents?',
    answer: 'Read the request carefully, note the stated deadline and submit only the information requested through the official channel. If anything is unclear, contact the authority using its official contact method.',
  },
];

export default function VisaProcessingPage() {
  const [checkedDocuments, setCheckedDocuments] = useState([]);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Study Visa Preparation | GlobalPath';
    if (description) {
      description.content = 'Prepare for your study abroad visa journey with general planning guidance, a destination research guide and an interactive document checklist.';
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

  return (
    <main className="bg-white text-navy-900">
      <section aria-labelledby="visa-title" className="bg-[#f5f3ed]">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-7 sm:px-8 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs text-slate-600 sm:mb-14">
            <Link to="/" className="hover:text-gold-600">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link to="/services" className="hover:text-gold-600">Services</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span aria-current="page" className="font-semibold text-navy-900">Visa Processing</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                <Globe2 size={16} aria-hidden="true" /> Prepare with the right information
              </p>
              <h1 id="visa-title" className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                Prepare for Your Study Abroad <span className="font-serif font-medium italic text-gold-600">Visa Journey</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Organise your next steps with destination-specific research and accurate documents. Visa preparation depends on the country, institution and your individual circumstances.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#visa-checklist" className="inline-flex items-center gap-3 bg-navy-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
                  Start your visa checklist <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a href="#destination-guidance" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 underline decoration-gold-400 underline-offset-4 hover:text-gold-600">
                  Explore destinations <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-7 max-w-lg border-l-2 border-gold-400 pl-4 text-xs leading-relaxed text-slate-500">
                This page is general preparation guidance. Rules and official instructions differ by destination and may change.
              </p>
            </div>

            <figure className="relative lg:ml-auto lg:max-w-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/services/counselling-conversation.jpg`}
                alt="A student discussing study plans and paperwork with an adviser"
                width="1200"
                height="800"
                fetchPriority="high"
                className="aspect-[5/4] w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-0 left-0 max-w-[88%] border-l-4 border-gold-400 bg-white px-5 py-4 text-sm leading-relaxed text-navy-900 shadow-sm sm:px-7">
                Start with official instructions. Prepare one step at a time.
              </figcaption>
              <span aria-hidden="true" className="absolute -right-4 -top-4 -z-0 h-20 w-20 border-r-2 border-t-2 border-gold-500 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28" />
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="preparation-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Preparation makes room for clarity</p>
            <h2 id="preparation-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Know what applies before you assemble your documents.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Visa processes are set by the relevant authority. Start early enough to understand the current instructions and prepare information accurately.</p>
            <p className="mt-6 inline-flex items-center gap-2 border-b border-gold-400 pb-2 text-sm font-semibold text-navy-800">
              <ShieldCheck size={17} className="text-gold-600" aria-hidden="true" /> Verify every requirement at its official source
            </p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {preparationReasons.map(([title, description], index) => (
              <article key={title} className="grid gap-3 py-5 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:gap-5">
                <span className="font-mono text-xs text-gold-600">0{index + 1}</span>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-7 text-xs leading-relaxed text-slate-500">Requirements and procedures can change. Institution information can help you prepare, but the relevant government authority’s current instructions take precedence.</p>
      </section>

      <section id="destination-guidance" aria-labelledby="destinations-title" className="scroll-mt-24 bg-[#f3f5f8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Start with where you plan to study</p>
              <h2 id="destinations-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Visa research is destination-specific.</h2>
            </div>
            <p className="max-w-2xl leading-relaxed text-slate-600">These destination notes are starting points only. They are not visa checklists, legal advice or confirmation of current rules.</p>
          </div>

          <ul className="mt-10 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination, index) => (
              <li key={destination.name} className="border-t border-slate-300 py-5">
                <figure>
                  <img
                    src={`${import.meta.env.BASE_URL}${destination.image}`}
                    alt={destination.alt}
                    width="700"
                    height="500"
                    loading="lazy"
                    className="aspect-[7/4] w-full object-cover"
                  />
                </figure>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-gold-600">0{index + 1}</span>
                  <h3 className="text-lg font-bold">{destination.name}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{destination.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-l-2 border-gold-400 bg-white px-5 py-4 text-xs leading-relaxed text-slate-600 sm:px-6">
            To find authoritative information, visit the relevant destination government’s immigration or visa website directly. For European destinations, check the government site for the specific country you plan to study in. We do not link to unverified third-party visa information.
          </div>
        </div>
      </section>

      <section aria-labelledby="journey-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">A route through the preparation</p>
          <h2 id="journey-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Eight steps. One official source of truth.</h2>
          <p className="mt-5 leading-relaxed text-slate-600">The exact order and requirements depend on your application. Follow the destination authority’s process if it differs from this general overview.</p>
        </div>

        <ol className="grid gap-x-12 md:grid-cols-2">
          {journeySteps.map(([title, description], index) => (
            <li key={title} className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-slate-300 py-6">
              <span className="row-span-2 font-serif text-3xl leading-none text-gold-600">0{index + 1}</span>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="visa-checklist" aria-labelledby="checklist-title" className="scroll-mt-24 bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-400"><FileCheck2 size={16} aria-hidden="true" /> Your preparation list</p>
            <h2 id="checklist-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A general document checklist.</h2>
            <p className="mt-5 leading-relaxed text-slate-300">Mark items as you organise them. This is a general planning aid, not an official or universal list of documents.</p>
            <p className="mt-8 inline-flex items-baseline gap-2 border-b-2 border-gold-400 pb-2">
              <span className="text-4xl font-bold tabular-nums" aria-live="polite">{checkedDocuments.length}</span>
              <span className="text-sm text-slate-300">of {checklistItems.length} items checked</span>
            </p>
            <p className="mt-5 text-xs leading-relaxed text-slate-400">Check current document names, formats and requirements through the official authority for your destination.</p>
          </div>

          <div className="border-y border-navy-700 bg-navy-900 px-5 sm:px-8">
            {checklistItems.map((item) => {
              const isChecked = checkedDocuments.includes(item.id);
              return (
                <label key={item.id} htmlFor={`visa-document-${item.id}`} className="flex cursor-pointer items-start gap-4 border-b border-navy-700 py-5 last:border-0 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold-400">
                  <input
                    id={`visa-document-${item.id}`}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleDocument(item.id)}
                    className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
                  />
                  <span className="min-w-0 flex-1">
                    <span className={`block font-bold ${isChecked ? 'text-slate-400 line-through decoration-slate-500' : 'text-white'}`}>{item.label}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-400">{item.note}</span>
                  </span>
                  {isChecked && <Check size={17} className="mt-1 shrink-0 text-gold-400" aria-label="Checked" />}
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="interview-title" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Be prepared, be accurate</p>
          <h2 id="interview-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Application and interview preparation.</h2>
          <p className="mt-5 leading-relaxed text-slate-600">Not every application includes an interview. If one is required, follow the appointment instructions and answer truthfully.</p>
          <figure className="mt-8">
            <img
              src={`${import.meta.env.BASE_URL}images/services/counselling-planning.jpg`}
              alt="A student and adviser reviewing documents together"
              width="1000"
              height="1500"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover object-center"
            />
            <figcaption className="mt-3 text-xs text-slate-500">Keep your information complete, consistent and your own.</figcaption>
          </figure>
        </div>
        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {interviewTips.map((tip, index) => (
            <li key={tip} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
              <span className="font-mono text-xs text-gold-600">0{index + 1}</span>
              <p className="text-sm leading-relaxed text-slate-700">{tip}</p>
            </li>
          ))}
          <li className="border-t border-gold-400/60 bg-gold-50 px-4 py-4 text-xs leading-relaxed text-slate-600">
            Never fabricate financial evidence or misrepresent information. If a form or request is unclear, seek clarification from the relevant official authority.
          </li>
        </ul>
      </section>

      <section aria-labelledby="faq-title" className="bg-[#f3f5f8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><CircleHelp size={16} aria-hidden="true" /> Useful to know</p>
            <h2 id="faq-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Visa preparation questions.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">For current rules and decisions, refer to the relevant immigration authority.</p>
          </div>
          <div className="divide-y divide-slate-300 border-y border-slate-300">
            {visaFaqs.map((faq, index) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-bold text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 [&::-webkit-details-marker]:hidden">
                  <span className="flex gap-3"><span className="font-mono text-xs text-gold-600">0{index + 1}</span>{faq.question}</span>
                  <span aria-hidden="true" className="text-xl font-normal text-gold-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl pl-8 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="visa-cta-title" className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Start with your destination</p>
          <h2 id="visa-cta-title" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Discuss your study plans and visa-preparation questions.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Plan what to verify and where to find the current official guidance for your destination.</p>
        </div>
        <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 bg-navy-900 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
          Explore contact options <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section aria-label="Continue your study abroad research" className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm sm:px-8">
          <p className="text-slate-600">Continue planning your study abroad journey.</p>
          <Link to="/services/education-loan" className="inline-flex items-center gap-2 font-bold text-navy-900 hover:text-gold-600">
            Explore Education Loan planning <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
