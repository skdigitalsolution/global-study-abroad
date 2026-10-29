import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BedDouble,
  Check,
  ChevronRight,
  CircleHelp,
  Compass,
  MapPinned,
  Plane,
  Search,
  ShieldCheck,
  Sun,
} from 'lucide-react';

const supportTopics = [
  {
    id: 'accommodation',
    title: 'Accommodation guidance',
    category: 'Accommodation guidance',
    anchor: '#accommodation',
    description: 'Compare university housing and private options. Review rent, deposits, location, tenancy terms and safety before making a commitment.',
  },
  {
    id: 'travel',
    title: 'Travel and pre-departure preparation',
    category: 'Travel and pre-departure',
    anchor: '#travel-preparation',
    description: 'Organise flights, travel documents, baggage, arrival details and essential contacts. Check entry requirements through official sources.',
  },
  {
    id: 'health',
    title: 'Health insurance and wellbeing information',
    category: 'Health and wellbeing',
    anchor: '#health-wellbeing',
    description: 'Check health and insurance rules with your institution and destination authorities. Requirements vary by location and individual circumstances.',
  },
  {
    id: 'arrival',
    title: 'Airport transfer and arrival planning',
    category: 'Arrival planning',
    anchor: '#arrival-planning',
    description: 'Research university transfer options or reputable local transport, then confirm safety details and booking arrangements independently.',
  },
  {
    id: 'money',
    title: 'Student banking and money preparation',
    category: 'Banking and money',
    anchor: '#money-preparation',
    description: 'Plan an initial budget, understand payment options and prepare access to funds and emergency money.',
  },
  {
    id: 'orientation',
    title: 'Pre-departure orientation',
    category: 'Pre-departure orientation',
    anchor: '#orientation',
    description: 'Prepare for cultural differences, academic expectations and local transport, and keep key documents easy to reach.',
  },
];

const supportCategories = ['All topics', ...supportTopics.map((topic) => topic.category)];

const checklistItems = [
  { id: 'passport', label: 'Check passport validity and required travel documents' },
  { id: 'admission', label: 'Confirm admission and enrolment instructions' },
  { id: 'housing', label: 'Research accommodation and confirm arrangements' },
  { id: 'health', label: 'Review destination-specific insurance and health requirements' },
  { id: 'transport', label: 'Plan arrival transport' },
  { id: 'budget', label: 'Prepare a realistic initial budget' },
  { id: 'contacts', label: 'Save emergency and university contacts' },
  { id: 'copies', label: 'Keep digital and physical copies of essential documents' },
  { id: 'baggage', label: 'Review baggage and airline requirements' },
];

const planningStages = [
  {
    stage: 'When your destination is selected',
    title: 'Start with the official information',
    description: 'Learn about the destination, locate the institution’s student guidance and note which practical questions you need to resolve.',
  },
  {
    stage: 'After receiving an offer',
    title: 'Confirm your study arrangements',
    description: 'Read admission and enrolment instructions and identify housing, health or travel information that applies to you.',
  },
  {
    stage: 'While preparing to travel',
    title: 'Compare options and make a plan',
    description: 'Research accommodation and transport, organise documents and check written terms before making payments or commitments.',
  },
  {
    stage: 'Shortly before departure',
    title: 'Review the practical details',
    description: 'Confirm travel arrangements, baggage rules, contact information and the official entry requirements relevant to your trip.',
  },
  {
    stage: 'On arrival',
    title: 'Keep essentials within reach',
    description: 'Use your arrival plan, follow local guidance and keep university and emergency contacts accessible.',
  },
];

const alliedFaqs = [
  {
    question: 'What are allied services for international students?',
    answer: 'They are practical preparation topics alongside study planning, such as housing research, travel preparation, health information, arrival planning and budgeting. This page provides general guidance rather than a booking service.',
  },
  {
    question: 'Can GlobalPath arrange student accommodation?',
    answer: 'This page does not connect to a housing inventory or booking service. Research accommodation independently through your institution or providers you have verified, and review contracts, deposits and cancellation terms before committing.',
  },
  {
    question: 'Do I need health insurance before travelling?',
    answer: 'Health insurance and medical requirements vary by destination, institution and individual circumstances. Check current official government guidance and your institution’s instructions; this page is not medical advice.',
  },
  {
    question: 'How should I plan my airport transfer?',
    answer: 'First check whether your university publishes arrival or transfer guidance. Otherwise research reputable local transport, consider safety and arrival timing, and confirm any booking directly with the provider. No transfer is booked through this page.',
  },
  {
    question: 'What should I include in my pre-departure checklist?',
    answer: 'Include your travel and study documents, accommodation and arrival plan, important contacts, initial budget and airline baggage requirements. Checklists differ by destination; follow current official entry and institution instructions.',
  },
  {
    question: 'Are all allied services available for every destination?',
    answer: 'No. Services, requirements and suitable options can vary by destination and individual needs. This page offers general planning guidance and does not confirm service availability or provider relationships.',
  },
];

export default function AlliedServicesPage() {
  const [filters, setFilters] = useState({ category: 'All topics', query: '' });
  const [checkedItems, setCheckedItems] = useState([]);

  const matchingTopics = supportTopics.filter((topic) => {
    const matchesCategory = filters.category === 'All topics' || topic.category === filters.category;
    const searchText = `${topic.title} ${topic.description} ${topic.category}`.toLowerCase();
    const matchesQuery = searchText.includes(filters.query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  });

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Allied Services | GlobalPath';
    if (description) {
      description.content = 'Plan practical parts of student life abroad with general guidance for accommodation, travel, wellbeing, arrival and money preparation.';
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

  function clearFilters() {
    setFilters({ category: 'All topics', query: '' });
  }

  function toggleChecklistItem(itemId) {
    setCheckedItems((current) => (
      current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId]
    ));
  }

  return (
    <main className="bg-white text-navy-900">
      <section aria-labelledby="allied-title" className="relative overflow-hidden bg-[#f5f3ed]">
        <div aria-hidden="true" className="absolute -left-40 top-28 h-96 w-96 rounded-full border border-gold-400/30" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-7 sm:px-8 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs text-slate-600 sm:mb-14">
            <Link to="/" className="hover:text-gold-600">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link to="/services" className="hover:text-gold-600">Services</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span aria-current="page" className="font-semibold text-navy-900">Allied Services</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                <Compass size={16} aria-hidden="true" /> Your next chapter, beyond the classroom
              </p>
              <h1 id="allied-title" className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                Everything You Need for a <span className="font-serif font-medium italic text-gold-600">Smoother Study Abroad Journey</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Preparing for life abroad means thinking about more than your course. Explore practical topics that can help you plan for travel, arrival and everyday student life.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#support-explorer" className="inline-flex items-center gap-3 bg-navy-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
                  Explore student support <ArrowDown size={17} aria-hidden="true" />
                </a>
                <span className="text-xs text-slate-500">Practical guidance for planning ahead.</span>
              </div>
              <p className="mt-7 max-w-lg border-l-2 border-gold-400 pl-4 text-xs leading-relaxed text-slate-500">
                These topics are general guidance. Availability, suitability and requirements vary by destination and individual circumstances.
              </p>
            </div>

            <figure className="relative lg:ml-auto lg:max-w-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/services/counselling-conversation.jpg`}
                alt="A student talking with an adviser while planning for study abroad"
                width="1200"
                height="800"
                fetchPriority="high"
                className="aspect-[5/4] w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-0 right-0 max-w-[88%] border-t-2 border-gold-400 bg-white px-5 py-4 text-sm leading-relaxed text-navy-900 sm:px-7">
                Make room for the small practical decisions that help you feel prepared.
              </figcaption>
              <span aria-hidden="true" className="absolute -right-4 -top-4 -z-0 h-20 w-20 border-r-2 border-t-2 border-gold-500 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28" />
            </figure>
          </div>
        </div>
      </section>

      <section id="support-explorer" aria-labelledby="explorer-title" className="scroll-mt-24 bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Find a topic to explore</p>
              <h2 id="explorer-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Your student support finder.</h2>
            </div>
            <p className="max-w-2xl leading-relaxed text-slate-300">Filter by a support area or search a practical question. This finder shares guidance only; it does not display provider availability or bookings.</p>
          </div>

          <div className="mt-8 grid gap-4 border-y border-navy-700 py-5 sm:grid-cols-2 sm:items-end">
            <label htmlFor="support-category" className="text-xs font-bold text-white">
              Support area
              <select id="support-category" name="category" value={filters.category} onChange={updateFilter} className="mt-2 block w-full border border-navy-600 bg-navy-900 px-3 py-3 text-sm font-normal text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold-400">
                {supportCategories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
            </label>
            <label htmlFor="support-search" className="text-xs font-bold text-white">
              Search guidance
              <span className="mt-2 flex items-center gap-3 border border-navy-600 bg-navy-900 px-3 focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-gold-400">
                <Search size={17} className="shrink-0 text-gold-400" aria-hidden="true" />
                <input id="support-search" name="query" type="search" value={filters.query} onChange={updateFilter} placeholder="Try rent, arrival, insurance..." className="min-w-0 flex-1 bg-transparent py-3 text-sm font-normal text-white outline-none placeholder:text-slate-400" />
              </span>
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
              <p aria-live="polite" className="text-xs text-slate-300">{matchingTopics.length} {matchingTopics.length === 1 ? 'topic' : 'topics'} to explore</p>
              {(filters.category !== 'All topics' || filters.query) && (
                <button type="button" onClick={clearFilters} className="text-xs font-bold text-gold-400 underline underline-offset-4 hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400">
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {matchingTopics.length > 0 ? (
            <ul className="grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
              {matchingTopics.map((topic, index) => (
                <li key={topic.id} className="border-b border-navy-700 py-5">
                  <p className="font-mono text-xs text-gold-400">0{index + 1} / {topic.category}</p>
                  <h3 className="mt-2 text-lg font-bold">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{topic.description}</p>
                  <a href={topic.anchor} className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-gold-400 underline decoration-gold-400/50 underline-offset-4 hover:text-gold-300">
                    Go to guidance <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div role="status" className="mt-5 border-y border-navy-700 bg-navy-900 px-5 py-8 text-center">
              <CircleHelp className="mx-auto text-gold-400" size={26} aria-hidden="true" />
              <h3 className="mt-3 font-bold">No support topics match that search.</h3>
              <p className="mt-2 text-sm text-slate-300">Try another phrase or clear your filters to see all topics.</p>
              <button type="button" onClick={clearFilters} className="mt-4 text-sm font-bold text-gold-400 underline underline-offset-4 hover:text-gold-300">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="accommodation" aria-labelledby="accommodation-title" className="scroll-mt-24 mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
        <figure className="relative">
          <img
            src={`${import.meta.env.BASE_URL}images/discovery/australia.jpg`}
            alt="Sydney Harbour and city skyline as an example study destination"
            width="1000"
            height="650"
            loading="lazy"
            className="aspect-[5/3] w-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 bg-white px-4 py-3 text-xs text-slate-600">Illustrative destination image.</figcaption>
        </figure>
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><BedDouble size={16} aria-hidden="true" /> Find a place to land</p>
          <h2 id="accommodation-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Research accommodation with care.</h2>
          <p className="mt-5 leading-relaxed text-slate-600">Compare university housing information with private accommodation options you have independently checked. Think about your route to campus and what will make day-to-day life workable.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Rent and recurring costs', 'Deposits and payment terms', 'Location and local transport', 'Tenancy terms and cancellation', 'Safety and property verification'].map((item) => (
              <li key={item} className="flex gap-3 border-t border-slate-200 pt-3 text-sm text-slate-700">
                <Check size={16} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />{item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-slate-500">This page does not connect to a property inventory or accommodation booking service. Verify the provider and read all written terms before paying.</p>
        </div>
      </section>

      <section id="travel-preparation" aria-labelledby="travel-title" className="scroll-mt-24 bg-[#f3f5f8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><Plane size={16} aria-hidden="true" /> Before you set off</p>
            <h2 id="travel-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Make a travel plan you can actually use.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Keep your flight details, arrival address, essential documents and first-day contacts together. Before travelling, verify entry and travel requirements through official government sources and check baggage rules with your airline.</p>
            <Link to="/services/visa-processing" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900 underline decoration-gold-400 underline-offset-4 hover:text-gold-600">
              Review visa preparation guidance <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {[
              ['Travel documents', 'Check the documents you need and keep them accessible.'],
              ['Flight and baggage', 'Review itinerary details and your airline’s current baggage rules.'],
              ['Arrival information', 'Save the address, route and a backup plan for reaching it.'],
              ['Essential contacts', 'Keep university and emergency contact details available offline.'],
            ].map(([title, description], index) => (
              <article key={title} className={`min-h-40 border-t-2 border-gold-400 bg-white p-4 sm:p-6 ${index === 1 || index === 2 ? 'sm:translate-y-5' : ''}`}>
                <span className="font-mono text-xs text-gold-600">0{index + 1}</span>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-0 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2">
        <article id="health-wellbeing" className="scroll-mt-24 border-b border-slate-200 pb-10 md:border-b-0 md:border-r md:pb-0 md:pr-10">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><ShieldCheck size={16} aria-hidden="true" /> Health and wellbeing</p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Check what applies to you.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Insurance and health requirements vary by destination, institution and individual circumstances. Review official university and government guidance and speak with an appropriate qualified provider about personal health questions.</p>
          <p className="mt-5 border-l-2 border-gold-400 pl-4 text-xs leading-relaxed text-slate-500">This is not medical advice, and no policy is represented as meeting every country’s requirements.</p>
        </article>

        <article id="money-preparation" className="scroll-mt-24 border-t border-slate-200 pt-10 md:border-t-0 md:pt-0 md:pl-10">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><Banknote size={16} aria-hidden="true" /> Student banking and money</p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Prepare for everyday spending.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Build an initial budget around costs you can verify. Think through payment methods, how you will access money after arrival and a safe way to keep emergency funds available.</p>
          <p className="mt-5 border-l-2 border-gold-400 pl-4 text-xs leading-relaxed text-slate-500">This guide does not recommend a financial product or connect to a bank. Confirm current account terms and fees directly with providers.</p>
        </article>
      </section>

      <section id="arrival-planning" aria-labelledby="arrival-title" className="scroll-mt-24 bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-400"><MapPinned size={16} aria-hidden="true" /> The first journey after landing</p>
            <h2 id="arrival-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Plan your airport arrival before travel day.</h2>
            <p className="mt-5 leading-relaxed text-slate-300">Check whether your university publishes arrival or transfer guidance. If you arrange local transport independently, research reputable options, consider safety and timing, and confirm the booking directly with the provider.</p>
            <p className="mt-5 text-xs leading-relaxed text-slate-400">No transfer provider is listed and no service is booked through this page.</p>
          </div>
          <div className="border-y border-navy-700">
            {[
              ['Check the source', 'Use university information or research local providers you can independently verify.'],
              ['Confirm the details', 'Recheck pickup location, arrival time, booking confirmation and contact method.'],
              ['Keep a backup plan', 'Know another safe way to reach your destination if plans change.'],
            ].map(([title, description], index) => (
              <div key={title} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-navy-700 py-5 last:border-0">
                <span className="font-mono text-xs text-gold-400">0{index + 1}</span>
                <div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="orientation" aria-labelledby="orientation-title" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><Sun size={16} aria-hidden="true" /> Feel ready to begin</p>
            <h2 id="orientation-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Prepare for the everyday rhythms of student life.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Learn about cultural expectations and the academic environment through your institution’s guidance. Research local transport and make a simple plan for your first few days.</p>
            <ul className="mt-6 space-y-3">
              {[
                'Know where and when to attend your first university activities.',
                'Explore common local transport options before you need them.',
                'Keep important documents and contacts easy to access.',
              ].map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700"><Check size={17} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <figure className="order-1 lg:order-2">
            <img
              src={`${import.meta.env.BASE_URL}images/services/test-preparation-study.jpg`}
              alt="A student getting ready for study in an international classroom"
              width="1400"
              height="900"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs text-slate-500">A little preparation can make new routines easier to navigate.</figcaption>
          </figure>
        </div>
      </section>

      <section id="before-you-go" aria-labelledby="checklist-title" className="scroll-mt-24 bg-[#f3f5f8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Before-you-go list</p>
            <h2 id="checklist-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A useful checklist, at your own pace.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Tick off items as you plan. This checklist is a general planning aid, not an official destination-specific requirement list.</p>
            <p className="mt-8 inline-flex items-baseline gap-2 border-b-2 border-gold-400 pb-2">
              <span className="text-4xl font-bold tabular-nums" aria-live="polite">{checkedItems.length}</span>
              <span className="text-sm text-slate-600">of {checklistItems.length} items complete</span>
            </p>
          </div>
          <div className="border-y border-slate-300 bg-white px-5 sm:px-8">
            {checklistItems.map((item) => {
              const isChecked = checkedItems.includes(item.id);
              return (
                <label key={item.id} htmlFor={`departure-item-${item.id}`} className="flex cursor-pointer items-start gap-4 border-b border-slate-200 py-4 last:border-0 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold-500">
                  <input
                    id={`departure-item-${item.id}`}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleChecklistItem(item.id)}
                    className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
                  />
                  <span className={`flex-1 text-sm font-semibold leading-relaxed ${isChecked ? 'text-slate-500 line-through decoration-slate-400' : 'text-navy-900'}`}>{item.label}</span>
                  {isChecked && <Check size={17} className="mt-0.5 shrink-0 text-emerald-700" aria-label="Complete" />}
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="timeline-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Flexible stages, not fixed deadlines</p>
            <h2 id="timeline-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A timeline that follows your plans.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Use these stages as prompts. Check official requirements for your destination rather than relying on a universal schedule.</p>
          </div>
          <ol className="relative space-y-0 border-l border-gold-400/70 pl-6 sm:pl-9">
            {planningStages.map((stage, index) => (
              <li key={stage.stage} className="relative grid gap-2 border-b border-slate-200 pb-7 pt-1 last:border-0 last:pb-0 sm:grid-cols-[0.85fr_1.15fr] sm:gap-8">
                <span className="absolute -left-[2.05rem] top-0 flex h-10 w-10 items-center justify-center border border-gold-400 bg-white font-mono text-xs font-bold text-navy-900 sm:-left-[2.8rem]">0{index + 1}</span>
                <p className="pt-2 text-xs font-bold uppercase tracking-wide text-gold-600">{stage.stage}</p>
                <div><h3 className="font-bold">{stage.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{stage.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-400"><CircleHelp size={16} aria-hidden="true" /> Helpful to know</p>
            <h2 id="faq-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Student support questions.</h2>
            <p className="mt-5 leading-relaxed text-slate-300">Provider availability, requirements and suitable options vary. Check the relevant institution or provider directly.</p>
          </div>
          <div className="divide-y divide-navy-700 border-y border-navy-700">
            {alliedFaqs.map((faq, index) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 [&::-webkit-details-marker]:hidden">
                  <span className="flex gap-3"><span className="font-mono text-xs text-gold-400">0{index + 1}</span>{faq.question}</span>
                  <span aria-hidden="true" className="text-xl font-normal text-gold-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl pl-8 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="allied-cta-title" className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Your plans, your questions</p>
          <h2 id="allied-cta-title" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Discuss your destination and practical preparation needs.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Use the conversation to organise what to research and where to verify current information.</p>
        </div>
        <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 bg-navy-900 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
          Explore contact options <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section aria-label="Continue your study abroad research" className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm sm:px-8">
          <p className="text-slate-600">Keep planning the practical details of your journey.</p>
          <Link to="/services/visa-processing" className="inline-flex items-center gap-2 font-bold text-navy-900 hover:text-gold-600">
            Explore Visa Processing guidance <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
