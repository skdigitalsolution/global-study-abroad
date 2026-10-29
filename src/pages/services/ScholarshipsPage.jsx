import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  CircleHelp,
  FileCheck2,
  GraduationCap,
  Landmark,
  Search,
  Wallet,
} from 'lucide-react';

const scholarshipCategories = [
  {
    number: '01',
    title: 'Merit-based',
    description: 'May recognise academic achievement, leadership, creative work, sport or other accomplishments. Selection criteria differ by provider.',
    icon: GraduationCap,
  },
  {
    number: '02',
    title: 'Need-based financial aid',
    description: 'May consider a student’s financial circumstances alongside other eligibility criteria. Providers explain what evidence is needed.',
    icon: Wallet,
  },
  {
    number: '03',
    title: 'University-funded',
    description: 'Offered by individual institutions, sometimes for a particular course, level of study, applicant group or intake.',
    icon: Landmark,
  },
  {
    number: '04',
    title: 'Government-funded',
    description: 'Supported by a government or public programme. Nationality, destination and study-level rules can apply.',
    icon: BookOpenCheck,
  },
  {
    number: '05',
    title: 'Subject-specific awards',
    description: 'Connected to a subject, research area or professional field. Some are open only to students on specified programmes.',
    icon: FileCheck2,
  },
];

const sampleOpportunities = [
  {
    id: 'merit-undergraduate',
    title: 'Academic achievement award',
    category: 'Merit-based',
    destination: 'United Kingdom',
    level: 'Undergraduate',
    description: 'Illustrative example: a provider may consider prior academic performance when assessing an eligible applicant.',
  },
  {
    id: 'need-postgraduate',
    title: 'Financial-need support',
    category: 'Need-based financial aid',
    destination: 'Canada',
    level: 'Postgraduate',
    description: 'Illustrative example: an award may request financial information and supporting evidence as part of its criteria.',
  },
  {
    id: 'university-postgraduate',
    title: 'Institutional course award',
    category: 'University-funded',
    destination: 'United States',
    level: 'Postgraduate',
    description: 'Illustrative example: a university may have funding connected to a specific programme or applicant profile.',
  },
  {
    id: 'government-postgraduate',
    title: 'Public study programme',
    category: 'Government-funded',
    destination: 'Australia',
    level: 'Postgraduate',
    description: 'Illustrative example: a public funding programme may define eligible nationalities, study areas and destinations.',
  },
  {
    id: 'subject-postgraduate',
    title: 'Subject-focused award',
    category: 'Subject-specific awards',
    destination: 'Ireland',
    level: 'Postgraduate',
    description: 'Illustrative example: a scholarship may be limited to applicants pursuing a specified subject or research area.',
  },
  {
    id: 'need-undergraduate',
    title: 'Student-access grant',
    category: 'Need-based financial aid',
    destination: 'United Kingdom',
    level: 'Undergraduate',
    description: 'Illustrative example: an organisation may consider financial need under its own published eligibility rules.',
  },
];

const scholarshipDocuments = [
  { id: 'transcripts', title: 'Academic transcripts and certificates', required: 'Often requested' },
  { id: 'statement', title: 'Personal statement or scholarship essay', required: 'If requested' },
  { id: 'recommendations', title: 'Recommendation letters', required: 'If requested' },
  { id: 'resume', title: 'CV or resume', required: 'If requested' },
  { id: 'language', title: 'English-language test results', required: 'If applicable' },
  { id: 'financial', title: 'Financial or other supporting evidence', required: 'Provider-specific' },
];

const scholarshipSteps = [
  'Research funding options that align with your course, destination and study level.',
  'Check the provider’s eligibility rules, required evidence and official instructions.',
  'Prepare supporting documents in the format requested for that opportunity.',
  'Write and review your application so it is accurate, specific and in your own voice.',
  'Submit through the official channel before the published deadline.',
  'Track updates from the provider and respond to any requests through its official process.',
];

const scholarshipFaqs = [
  {
    question: 'Can international students apply for scholarships?',
    answer: 'Some scholarships are open to international students, while others are restricted by nationality, residence, course or destination. Check the provider’s current eligibility rules before investing time in an application.',
  },
  {
    question: 'Are fully funded scholarships available?',
    answer: 'Some providers offer awards that may cover multiple study costs, but availability, coverage and eligibility vary. Read the official award terms carefully and plan for costs that may not be covered.',
  },
  {
    question: 'When should I start looking for scholarships?',
    answer: 'Begin research as you compare courses and destinations. Scholarship timelines may be different from admission deadlines, and you may need time to request references or prepare supporting documents. Confirm dates directly with each provider.',
  },
  {
    question: 'Can I apply for more than one scholarship?',
    answer: 'Often you can explore several opportunities, but each provider sets its own rules. Check whether awards can be combined, whether separate applications are needed and if any conditions apply.',
  },
  {
    question: 'What documents might be required?',
    answer: 'Providers may ask for transcripts, a personal statement, references, a CV, language results or financial evidence. The exact list and accepted formats depend on the scholarship, so follow its official application instructions.',
  },
  {
    question: 'Does GlobalPath guarantee scholarship approval?',
    answer: 'No. GlobalPath cannot guarantee scholarship approval or funding. Scholarship providers set their criteria, assess applications and make award decisions.',
  },
];

const categoryFilters = ['All types', ...scholarshipCategories.map((category) => category.title)];
const destinationFilters = ['All destinations', 'United Kingdom', 'United States', 'Canada', 'Australia', 'Ireland'];
const studyLevelFilters = ['All study levels', 'Undergraduate', 'Postgraduate'];

export default function ScholarshipsPage() {
  const [filters, setFilters] = useState({
    category: 'All types',
    destination: 'All destinations',
    level: 'All study levels',
  });
  const [checkedDocuments, setCheckedDocuments] = useState([]);

  const visibleOpportunities = sampleOpportunities.filter((opportunity) => (
    (filters.category === 'All types' || opportunity.category === filters.category)
    && (filters.destination === 'All destinations' || opportunity.destination === filters.destination)
    && (filters.level === 'All study levels' || opportunity.level === filters.level)
  ));

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Scholarships | GlobalPath';
    if (description) {
      description.content = 'Explore scholarship categories, understand common eligibility factors and prepare for funding applications with GlobalPath.';
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) description.content = previousDescription;
    };
  }, []);

  function updateFilter(event) {
    const { name, value } = event.target;
    setFilters((current) => ({ ...current, [name]: value }));
  }

  function toggleDocument(documentId) {
    setCheckedDocuments((current) => (
      current.includes(documentId)
        ? current.filter((id) => id !== documentId)
        : [...current, documentId]
    ));
  }

  function clearFilters() {
    setFilters({
      category: 'All types',
      destination: 'All destinations',
      level: 'All study levels',
    });
  }

  return (
    <main className="bg-white text-navy-900">
      <section aria-labelledby="scholarships-title" className="relative overflow-hidden bg-[#f7f5ef]">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-7 sm:px-8 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs text-slate-600 sm:mb-14">
            <Link to="/" className="hover:text-gold-600">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link to="/services" className="hover:text-gold-600">Services</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span aria-current="page" className="font-semibold text-navy-900">Scholarships</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Funding research, made clearer</p>
              <h1 id="scholarships-title" className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                Find scholarship options for your <span className="font-serif font-medium italic text-gold-600">study abroad journey.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Understand the kinds of funding that may be available, what providers can look for and how to prepare a thoughtful application.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#opportunities" className="inline-flex items-center gap-3 rounded-lg bg-navy-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
                  Explore scholarship options <ArrowDown size={17} aria-hidden="true" />
                </a>
                <span className="text-xs text-slate-500">Research guidance, not a live award directory.</span>
              </div>
              <p className="mt-7 max-w-lg border-l-2 border-gold-400 pl-4 text-xs leading-relaxed text-slate-500">
                Funding availability and decisions depend on each scholarship provider. Always confirm current terms through an official source.
              </p>
            </div>

            <figure className="relative lg:ml-auto lg:max-w-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/services/counselling-planning.jpg`}
                alt="A student and adviser reviewing study plans and documents"
                width="1000"
                height="1500"
                fetchPriority="high"
                className="aspect-[5/4] w-full object-cover object-center shadow-xl sm:aspect-[6/5]"
              />
              <figcaption className="absolute bottom-0 left-0 max-w-[85%] bg-white px-5 py-4 text-sm leading-relaxed text-slate-700 shadow-md sm:px-7">
                Thoughtful funding research starts with a clear picture of your plans.
              </figcaption>
              <span aria-hidden="true" className="absolute -right-3 -top-3 -z-0 h-20 w-20 border-r-2 border-t-2 border-gold-500 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28" />
            </figure>
          </div>
        </div>
      </section>

      <section id="categories" aria-labelledby="categories-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Understand the landscape</p>
            <h2 id="categories-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Different sources. Different criteria.</h2>
          </div>
          <p className="max-w-2xl leading-relaxed text-slate-600">
            A scholarship may be based on achievement, financial circumstances or a particular course. Not every opportunity is available in every country or university.
          </p>
        </div>

        <div className="mt-10 border-y border-slate-200">
          {scholarshipCategories.map((category) => {
            const Icon = category.icon;
            return (
              <article key={category.number} className="grid gap-4 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[5rem_2.5rem_0.8fr_1.2fr] sm:items-center sm:gap-5 sm:py-7">
                <span className="font-mono text-sm text-gold-600">{category.number}</span>
                <Icon size={22} className="text-navy-700" aria-hidden="true" />
                <h3 className="text-lg font-bold">{category.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-600">{category.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="opportunities" aria-labelledby="opportunities-title" className="scroll-mt-24 bg-[#f6f7f9]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                <Search size={15} aria-hidden="true" /> Guided discovery
              </p>
              <h2 id="opportunities-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Explore examples by fit.</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Use the filters to see how opportunity types can differ. These sample records are illustrative only—not verified live awards or application listings.
              </p>
            </div>
            <p className="max-w-sm border-l-2 border-gold-400 pl-4 text-xs leading-relaxed text-slate-500">
              No current deadlines, award amounts, eligibility guarantees or application links are represented here.
            </p>
          </div>

          <form onSubmit={(event) => event.preventDefault()} className="mt-8 grid gap-4 border-y border-slate-200 py-5 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-end">
            <label className="block text-xs font-bold text-navy-900" htmlFor="scholarship-category">
              Funding type
              <select id="scholarship-category" name="category" value={filters.category} onChange={updateFilter} className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm font-normal text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold-600">
                {categoryFilters.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
            </label>
            <label className="block text-xs font-bold text-navy-900" htmlFor="scholarship-destination">
              Destination
              <select id="scholarship-destination" name="destination" value={filters.destination} onChange={updateFilter} className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm font-normal text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold-600">
                {destinationFilters.map((destination) => <option key={destination} value={destination}>{destination}</option>)}
              </select>
            </label>
            <label className="block text-xs font-bold text-navy-900" htmlFor="scholarship-level">
              Study level
              <select id="scholarship-level" name="level" value={filters.level} onChange={updateFilter} className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm font-normal text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold-600">
                {studyLevelFilters.map((level) => <option key={level} value={level}>{level}</option>)}
              </select>
            </label>
            <button type="button" onClick={clearFilters} className="rounded-md border border-navy-900 px-4 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
              Reset filters
            </button>
          </form>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500" aria-live="polite">
            {visibleOpportunities.length} illustrative {visibleOpportunities.length === 1 ? 'example' : 'examples'}
          </p>
          {visibleOpportunities.length > 0 ? (
            <ul className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
              {visibleOpportunities.map((opportunity) => (
                <li key={opportunity.id} className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold-600">{opportunity.category}</p>
                    <h3 className="mt-1 text-lg font-bold">{opportunity.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{opportunity.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-600 sm:justify-end">
                    <span className="border border-slate-300 px-3 py-1.5">{opportunity.destination}</span>
                    <span className="border border-slate-300 px-3 py-1.5">{opportunity.level}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 border-y border-slate-200 bg-white px-6 py-10 text-center" role="status">
              <CircleHelp className="mx-auto text-gold-600" size={28} aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold">No illustrative examples match these filters.</h3>
              <p className="mt-2 text-sm text-slate-600">Try another combination or reset the filters to explore all examples.</p>
              <button type="button" onClick={clearFilters} className="mt-5 text-sm font-bold text-navy-900 underline decoration-gold-400 underline-offset-4 hover:text-gold-600">
                Reset filters
              </button>
            </div>
          )}
          <p className="mt-5 text-xs leading-relaxed text-slate-500">Examples are generic illustrations of funding categories. They are not actual scholarship programmes and are not an offer of funding.</p>
        </div>
      </section>

      <section aria-labelledby="eligibility-title" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure className="relative">
          <img
            src={`${import.meta.env.BASE_URL}images/services/test-preparation-study.jpg`}
            alt="A student focused on study at a laptop"
            width="1400"
            height="900"
            loading="lazy"
            className="aspect-[5/4] w-full object-cover"
          />
          <figcaption className="mt-3 text-xs text-slate-500">Keep your study goals and evidence organised as you research.</figcaption>
        </figure>
        <div className="self-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Before you apply</p>
          <h2 id="eligibility-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Understand what a provider may consider.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Scholarship providers set their own eligibility and selection criteria. Depending on the award, these factors may include:</p>
          <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {[
              ['Academic performance', 'Grades, prior qualifications or evidence of achievement.'],
              ['Course and destination', 'The programme, institution, location or intake you plan to pursue.'],
              ['Financial circumstances', 'Financial need and supporting information, where applicable.'],
              ['Language requirements', 'English-language evidence, if required by the provider or course.'],
              ['Written materials and references', 'A personal statement, essays, recommendations or other requested records.'],
            ].map(([title, description]) => (
              <li key={title} className="flex gap-4 py-4">
                <Check size={17} className="mt-1 shrink-0 text-gold-600" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-slate-600"><strong className="text-navy-900">{title}.</strong> {description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-slate-500">A factor listed here does not apply to every award. Confirm eligibility with the scholarship provider before applying.</p>
        </div>
      </section>

      <section aria-labelledby="roadmap-title" className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">A deliberate approach</p>
              <h2 id="roadmap-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">From research to follow-up.</h2>
            </div>
            <p className="max-w-2xl leading-relaxed text-slate-300">Use the provider’s instructions at every stage. Keep your own record of requirements, documents and correspondence.</p>
          </div>

          <ol className="mt-12 grid gap-x-10 md:grid-cols-2 xl:grid-cols-3">
            {scholarshipSteps.map((step, index) => (
              <li key={step} className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-navy-700 py-6">
                <span className="row-span-2 font-serif text-3xl text-gold-400">0{index + 1}</span>
                <h3 className="font-bold">{[
                  'Research opportunities',
                  'Check eligibility',
                  'Prepare supporting documents',
                  'Write and review',
                  'Submit on time',
                  'Track provider updates',
                ][index]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="checklist-title" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Get organised</p>
          <h2 id="checklist-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A working preparation checklist.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Tick off materials as you organise them. This checklist is a planning aid—no single award requires every item.</p>
          <div className="mt-7 inline-flex items-baseline gap-2 border-b-2 border-gold-400 pb-2">
            <span className="text-4xl font-bold tabular-nums" aria-live="polite">{checkedDocuments.length}</span>
            <span className="text-sm text-slate-600">of {scholarshipDocuments.length} items prepared</span>
          </div>
        </div>

        <div className="border-y border-slate-200">
          {scholarshipDocuments.map((item) => {
            const isChecked = checkedDocuments.includes(item.id);
            return (
              <label key={item.id} htmlFor={`scholarship-document-${item.id}`} className="flex cursor-pointer items-start gap-4 border-b border-slate-200 py-5 last:border-0 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold-500">
                <input
                  id={`scholarship-document-${item.id}`}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleDocument(item.id)}
                  className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
                />
                <span className="min-w-0 flex-1">
                  <span className={`block font-bold ${isChecked ? 'text-slate-500 line-through decoration-slate-400' : 'text-navy-900'}`}>{item.title}</span>
                  <span className="mt-1 block text-xs text-slate-500">{item.required}</span>
                </span>
                {isChecked && <Check size={18} className="mt-1 shrink-0 text-emerald-700" aria-label="Prepared" />}
              </label>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-[#f6f7f9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><CircleHelp size={15} aria-hidden="true" /> Clear answers</p>
            <h2 id="faq-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Scholarship questions.</h2>
            <p className="mt-4 leading-relaxed text-slate-600">Funding rules are set by individual scholarship providers. Always check their current guidance.</p>
          </div>
          <div className="divide-y divide-slate-300 border-y border-slate-300">
            {scholarshipFaqs.map((faq, index) => (
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

      <section aria-labelledby="scholarship-cta-title" className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Plan with perspective</p>
          <h2 id="scholarship-cta-title" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Explore funding options that may suit your study plans.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Discuss your next steps and prepare questions to take to the relevant scholarship provider.</p>
        </div>
        <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-navy-900 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
          Explore contact options <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section aria-label="Continue your study abroad research" className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm sm:px-8">
          <p className="text-slate-600">Continue planning your study abroad journey.</p>
          <Link to="/services/applications-admission" className="inline-flex items-center gap-2 font-bold text-navy-900 hover:text-gold-600">
            Explore Applications &amp; Admission <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
