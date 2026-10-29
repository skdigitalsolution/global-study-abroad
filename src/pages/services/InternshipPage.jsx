import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleHelp,
  Compass,
  FileText,
  Globe2,
  Handshake,
  Lightbulb,
  MapPin,
  MessageSquareText,
} from 'lucide-react';
import { internshipOpportunities } from '../../data/internshipOpportunities';

const industries = ['All industries', 'Technology', 'Business', 'Marketing', 'Design', 'Research'];
const workModes = ['All work modes', 'Remote', 'On-site', 'Hybrid'];

const benefits = [
  {
    title: 'Practical exposure',
    description: 'See how concepts from your studies can be used in a real or simulated work setting.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Professional communication',
    description: 'Practise sharing ideas, asking questions and adapting your communication to a team.',
    icon: MessageSquareText,
  },
  {
    title: 'Teamwork and collaboration',
    description: 'Learn how people coordinate responsibilities and contribute to shared work.',
    icon: Handshake,
  },
  {
    title: 'Industry context',
    description: 'Build a clearer picture of workplace expectations in an area that interests you.',
    icon: Globe2,
  },
  {
    title: 'Relevant CV evidence',
    description: 'Reflect on skills and examples you can describe accurately in future applications.',
    icon: FileText,
  },
];

const preparationSteps = [
  ['01', 'Identify your interests', 'Think about the subjects, tasks and work settings you want to explore.'],
  ['02', 'Research roles and eligibility', 'Check the role description, student-status requirements, location and any conditions.'],
  ['03', 'Prepare a tailored CV and letter', 'Use accurate examples that connect your experience with the opportunity.'],
  ['04', 'Gather academic details', 'Have relevant course information and any requested records ready to review.'],
  ['05', 'Apply through official channels', 'Follow the employer’s own instructions and retain a copy of what you submit.'],
  ['06', 'Prepare and follow up', 'Practise talking about your interests, then follow up professionally when appropriate.'],
];

const readinessItems = [
  { id: 'cv', label: 'CV or resume updated' },
  { id: 'skills', label: 'Skills and projects documented' },
  { id: 'cover-letter', label: 'Cover letter draft prepared, if required' },
  { id: 'academics', label: 'Academic details ready' },
  { id: 'portfolio', label: 'Portfolio or GitHub links checked, where relevant' },
  { id: 'introduction', label: 'Interview introduction practised' },
];

const considerations = [
  {
    label: 'Eligibility and student status',
    text: 'Check the role’s requirements and whether your current study status affects eligibility.',
  },
  {
    label: 'Work authorisation',
    text: 'Rules can depend on destination, activity and individual circumstances. Confirm current conditions with official government guidance.',
  },
  {
    label: 'Duration and location',
    text: 'Understand the expected dates, hours, location and any in-person attendance before applying.',
  },
  {
    label: 'Paid or unpaid arrangement',
    text: 'Ask the employer for written details about payment and conditions. Applicable rules may vary by location.',
  },
  {
    label: 'Academic credit',
    text: 'If you hope to receive course credit, confirm requirements with your education provider before accepting a role.',
  },
  {
    label: 'Employer requirements',
    text: 'Review requested skills, documents, screening steps and any other conditions directly with the employer.',
  },
];

const internshipFaqs = [
  {
    question: 'What is an internship?',
    answer: 'An internship is a time-limited work or learning experience where someone can explore tasks in a professional setting. The structure, supervision, payment and learning outcomes depend on the host organisation and arrangement.',
  },
  {
    question: 'Can international students apply for internships?',
    answer: 'Some opportunities may be open to international students, but eligibility and work authorisation conditions vary by destination, role and personal circumstances. Check current government rules and the employer’s requirements before applying.',
  },
  {
    question: 'Do internships always offer a stipend?',
    answer: 'No. Payment arrangements differ. Ask the employer for clear written information and check the applicable rules in the location where the work takes place.',
  },
  {
    question: 'What documents might be required?',
    answer: 'An employer may request a CV, cover letter, academic details, references, portfolio or other information. Requirements vary, so follow the specific role’s instructions.',
  },
  {
    question: 'Can an internship lead to a full-time job?',
    answer: 'An internship may help you learn about an organisation and develop experience, but it does not guarantee a job offer or future employment.',
  },
  {
    question: 'Does GlobalPath guarantee an internship placement?',
    answer: 'No. GlobalPath does not guarantee an internship placement, work authorisation or employment outcome. The employer makes its own selection decisions.',
  },
];

export default function InternshipPage() {
  const [filters, setFilters] = useState({ industry: 'All industries', workMode: 'All work modes' });
  const [checkedItems, setCheckedItems] = useState([]);

  const matchingOpportunities = internshipOpportunities.filter((opportunity) => (
    (filters.industry === 'All industries' || opportunity.industry === filters.industry)
    && (filters.workMode === 'All work modes' || opportunity.workMode === filters.workMode)
  ));

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Internship Pathways | GlobalPath';
    if (description) {
      description.content = 'Explore internship pathways, prepare your application and consider practical requirements with GlobalPath.';
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
    setFilters({ industry: 'All industries', workMode: 'All work modes' });
  }

  function toggleReadinessItem(itemId) {
    setCheckedItems((current) => (
      current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId]
    ));
  }

  return (
    <main className="bg-white text-navy-900">
      <section aria-labelledby="internship-title" className="overflow-hidden bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-7 sm:px-8 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs text-slate-300 sm:mb-14">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link to="/services" className="hover:text-gold-400">Services</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span aria-current="page" className="font-semibold text-gold-400">Internship</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                <Compass size={17} aria-hidden="true" /> Learning beyond the lecture hall
              </p>
              <h1 id="internship-title" className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                Turn Your Global Education Into <span className="font-serif font-medium italic text-gold-400">Career Opportunities</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Explore internship pathways that connect your interests with practical experience. Build skills, learn about professional settings and make informed choices as you plan your next step.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#opportunity-explorer" className="inline-flex items-center gap-3 bg-gold-400 px-6 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Explore opportunities <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a href="#roadmap" className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-white underline decoration-gold-400 underline-offset-4 hover:text-gold-300">
                  Prepare your next step <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-6 max-w-lg text-xs leading-relaxed text-slate-400">
                An internship can offer experience, but placement, work authorisation and employment outcomes are not guaranteed.
              </p>
            </div>

            <figure className="relative lg:ml-auto lg:max-w-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/services/test-preparation-study.jpg`}
                alt="A student developing digital skills at a laptop in a shared study space"
                width="1400"
                height="900"
                fetchPriority="high"
                className="aspect-[5/4] w-full object-cover object-center"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7">
                <span className="max-w-xs text-sm font-semibold leading-relaxed text-white sm:text-base">Learn by contributing, asking questions and reflecting on your work.</span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-400 text-gold-400"><ArrowUpRight size={21} aria-hidden="true" /></span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="benefits-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Experience with perspective</p>
            <h2 id="benefits-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">What can an internship help you explore?</h2>
            <p className="mt-5 leading-relaxed text-slate-600">A well-considered experience can help you connect study with a workplace context and reflect on the skills you are developing.</p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="grid gap-3 py-5 sm:grid-cols-[3rem_2rem_0.7fr_1.3fr] sm:items-center sm:gap-5">
                  <span className="font-mono text-xs text-gold-600">0{index + 1}</span>
                  <Icon size={20} className="text-navy-700" aria-hidden="true" />
                  <h3 className="font-bold">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
        <p className="mt-7 border-l-2 border-gold-400 pl-4 text-xs leading-relaxed text-slate-500">
          Benefits depend on the role, employer and internship arrangement. Review the learning, supervision and work conditions before you commit.
        </p>
      </section>

      <section id="opportunity-explorer" aria-labelledby="opportunities-title" className="scroll-mt-24 bg-[#f3f5f8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Explore by interest</p>
              <h2 id="opportunities-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A starting point for your search.</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-slate-600">Filter these made-up examples to explore different industries and work modes. They are for practice and are not job openings.</p>
            </div>
            <p className="border-l-2 border-gold-400 pl-4 text-xs leading-relaxed text-slate-500">
              All listings below are fictional: <strong className="text-navy-900">Illustrative demo opportunity — not a live vacancy.</strong> No employer, salary, deadline or application link is represented.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-end gap-4 border-y border-slate-300 py-5">
            <label htmlFor="internship-industry" className="min-w-[13rem] flex-1 text-xs font-bold text-navy-900">
              Industry
              <select id="internship-industry" name="industry" value={filters.industry} onChange={updateFilter} className="mt-2 block w-full border border-slate-300 bg-white px-3 py-3 text-sm font-normal text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold-600">
                {industries.map((industry) => <option key={industry} value={industry}>{industry}</option>)}
              </select>
            </label>
            <label htmlFor="internship-work-mode" className="min-w-[13rem] flex-1 text-xs font-bold text-navy-900">
              Internship type
              <select id="internship-work-mode" name="workMode" value={filters.workMode} onChange={updateFilter} className="mt-2 block w-full border border-slate-300 bg-white px-3 py-3 text-sm font-normal text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold-600">
                {workModes.map((mode) => <option key={mode} value={mode}>{mode}</option>)}
              </select>
            </label>
            <button type="button" onClick={clearFilters} className="border border-navy-900 px-5 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
              Clear filters
            </button>
          </div>

          <p aria-live="polite" className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-500">
            {matchingOpportunities.length} {matchingOpportunities.length === 1 ? 'demo example' : 'demo examples'}
          </p>
          {matchingOpportunities.length > 0 ? (
            <ul className="mt-3 divide-y divide-slate-300 border-y border-slate-300">
              {matchingOpportunities.map((opportunity) => (
                <li key={opportunity.id} className="grid gap-4 py-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-lg font-bold">{opportunity.title}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600">{opportunity.industry}</span>
                    </div>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{opportunity.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                    <span className="inline-flex items-center gap-1.5 border border-slate-300 px-3 py-2 text-xs text-slate-600"><MapPin size={13} aria-hidden="true" />{opportunity.workMode}</span>
                    <span className="max-w-64 border border-gold-400/70 bg-gold-50 px-3 py-2 text-[10px] font-semibold leading-relaxed text-navy-800">Illustrative demo opportunity — not a live vacancy</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div role="status" className="mt-4 border-y border-slate-300 bg-white px-6 py-10 text-center">
              <CircleHelp className="mx-auto text-gold-600" size={28} aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold">No demo examples match those filters.</h3>
              <p className="mt-2 text-sm text-slate-600">Choose a different industry or work mode to explore another combination.</p>
              <button type="button" onClick={clearFilters} className="mt-5 text-sm font-bold text-navy-900 underline decoration-gold-400 underline-offset-4 hover:text-gold-600">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="roadmap" aria-labelledby="roadmap-title" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">From interest to application</p>
            <h2 id="roadmap-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Prepare with a purposeful plan.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Take time to understand the opportunity and prepare materials that reflect your experience accurately.</p>
          </div>
          <ol className="relative border-l border-gold-400/70 pl-6 sm:pl-9">
            {preparationSteps.map(([number, title, description], index) => (
              <li key={number} className={`relative pb-9 last:pb-0 ${index === 0 ? 'pt-0' : ''}`}>
                <span className="absolute -left-[2.05rem] top-0 flex h-10 w-10 items-center justify-center border border-gold-400 bg-white font-mono text-xs font-bold text-navy-900 sm:-left-[2.8rem]">{number}</span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="readiness-title" className="bg-[#f3f5f8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><Check size={16} aria-hidden="true" /> Get application-ready</p>
            <h2 id="readiness-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A simple readiness check.</h2>
            <p className="mt-4 leading-relaxed text-slate-600">Use this checklist to organise your preparation. Some items may not apply to every role.</p>
            <p className="mt-8 border-l-2 border-gold-400 pl-4 text-sm text-slate-600">
              <strong className="text-navy-900">{checkedItems.length} of {readinessItems.length}</strong> items checked
            </p>
          </div>
          <div className="border-y border-slate-300 bg-white px-5 sm:px-7">
            {readinessItems.map((item) => {
              const isChecked = checkedItems.includes(item.id);
              return (
                <label key={item.id} htmlFor={`internship-readiness-${item.id}`} className="flex cursor-pointer items-start gap-4 border-b border-slate-200 py-5 last:border-0 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold-500">
                  <input
                    id={`internship-readiness-${item.id}`}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleReadinessItem(item.id)}
                    className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
                  />
                  <span className={`flex-1 text-sm font-semibold leading-relaxed ${isChecked ? 'text-slate-500 line-through decoration-slate-400' : 'text-navy-900'}`}>{item.label}</span>
                  {isChecked && <Check size={17} className="mt-0.5 shrink-0 text-emerald-700" aria-label="Checked" />}
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="considerations-title" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Before you accept</p>
          <h2 id="considerations-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">International internship details worth checking.</h2>
          <p className="mt-5 leading-relaxed text-slate-600">Requirements vary by destination, employer and individual circumstances. Confirm current information through official government or employer sources.</p>
          <figure className="mt-8">
            <img
              src={`${import.meta.env.BASE_URL}images/services/counselling-conversation.jpg`}
              alt="A student discussing study and career plans with an adviser"
              width="1200"
              height="800"
              loading="lazy"
              className="aspect-[5/3] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs text-slate-500">Consider the practical details before making a decision.</figcaption>
          </figure>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {considerations.map((item, index) => (
            <article key={item.label} className="grid gap-2 py-5 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:gap-5">
              <span className="font-mono text-xs text-gold-600">0{index + 1}</span>
              <h3 className="font-bold">{item.label}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
          <p className="flex gap-3 bg-gold-50 px-4 py-4 text-xs leading-relaxed text-slate-600">
            <Lightbulb size={17} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
            This page offers general planning guidance, not legal or immigration advice. Do not rely on assumptions about permission to work.
          </p>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-400"><CircleHelp size={16} aria-hidden="true" /> Useful to know</p>
            <h2 id="faq-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Internship questions.</h2>
            <p className="mt-5 leading-relaxed text-slate-300">Check specific role details with the employer and applicable requirements with official sources.</p>
          </div>
          <div className="divide-y divide-navy-700 border-y border-navy-700">
            {internshipFaqs.map((faq, index) => (
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

      <section aria-labelledby="internship-cta-title" className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Plan with perspective</p>
          <h2 id="internship-cta-title" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Connect your education with the career questions on your mind.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Discuss your study and career goals, and make a list of questions to explore with universities and employers.</p>
        </div>
        <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 bg-navy-900 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
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
