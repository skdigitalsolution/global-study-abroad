import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  CalendarClock,
  Check,
  ChevronRight,
  CircleHelp,
  FileCheck2,
  Landmark,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';

const loanConcepts = [
  {
    title: 'What costs may be covered?',
    description: 'A loan may cover tuition and, depending on the lender and product, certain living or study-related expenses. Confirm which costs qualify before planning around them.',
    icon: Banknote,
  },
  {
    title: 'Secured or unsecured',
    description: 'A secured loan may require collateral. An unsecured loan may not, but other eligibility conditions can apply. The lender defines the terms.',
    icon: ShieldCheck,
  },
  {
    title: 'Co-applicants and guarantors',
    description: 'Some lenders may require a co-applicant or guarantor and assess their financial details as part of the application.',
    icon: Landmark,
  },
  {
    title: 'Interest and other charges',
    description: 'Understand whether a rate is fixed or floating, how it may change, and which processing or other charges may apply.',
    icon: WalletCards,
  },
  {
    title: 'Repayment and moratorium',
    description: 'Check the repayment start date, any moratorium conditions, repayment schedule and loan tenure in the written terms.',
    icon: CalendarClock,
  },
];

const comparisonPoints = [
  ['Total borrowing cost', 'Compare interest over time together with fees and charges, not just the advertised rate.'],
  ['Rate type', 'Ask whether the interest rate is fixed or floating and how rate changes affect the amount owed.'],
  ['Collateral and co-applicants', 'Understand what security, co-applicant or guarantor conditions apply to your application.'],
  ['Repayment schedule', 'Check when repayment starts, the tenure, any moratorium and what happens if payments are delayed.'],
  ['Eligible expenses and disbursement', 'Confirm which costs qualify, who receives the funds and when payments are released.'],
  ['Currency and destination', 'For overseas study, understand the loan currency, exchange-rate exposure and destination-specific conditions.'],
];

const eligibilityFactors = [
  'Admission offer or proof of admission, if required by the lender',
  'Course, institution and destination eligibility',
  'Academic history and previous qualifications',
  'Applicant and co-applicant financial profile',
  'Credit history, where applicable',
  'Collateral requirements, where applicable',
  'Identity, address and financial documents requested by the lender',
];

const loanDocuments = [
  { id: 'identity', title: 'Identity and address documents', note: 'For the applicant and co-applicant, if requested.' },
  { id: 'academic', title: 'Academic transcripts and certificates', note: 'Include the records and formats requested by the lender.' },
  { id: 'admission', title: 'Admission letter', note: 'If available or required for the application stage.' },
  { id: 'costs', title: 'Tuition and study-cost estimates', note: 'Use current information from the institution.' },
  { id: 'income', title: 'Applicant or co-applicant income documents', note: 'If required by the lender or loan product.' },
  { id: 'bank', title: 'Bank statements', note: 'If requested; check the required period and format.' },
  { id: 'collateral', title: 'Collateral documents', note: 'Only where the selected loan requires collateral.' },
];

const loanSteps = [
  ['Estimate costs', 'List tuition, living expenses and other study costs using reliable, current sources.'],
  ['Explore funding options', 'Consider savings, funding awards and the loan amount you may need to investigate.'],
  ['Compare lender terms', 'Review the complete written costs, rate type, repayment schedule and conditions.'],
  ['Check eligibility and documents', 'Confirm the lender’s criteria and prepare the documents it specifically requests.'],
  ['Apply through official channels', 'Submit information securely using the lender’s verified application process.'],
  ['Review the sanction letter', 'Read the approved amount, costs, conditions and obligations before accepting.'],
  ['Complete formalities and disbursement', 'Follow the lender’s instructions and confirm how and when funds will be released.'],
];

const repaymentQuestions = [
  ['When does repayment begin?', 'Find the exact repayment start date and read how any moratorium works.'],
  ['What could monthly payments look like?', 'Ask the lender for a repayment schedule based on its written terms and your approved loan.'],
  ['How does tenure affect total cost?', 'A longer repayment period may change both instalments and total interest. Compare the full schedule.'],
  ['What if circumstances change?', 'Understand the lender’s process for payment difficulties, deferment requests or other changes before signing.'],
];

const loanFaqs = [
  {
    question: 'Can an education loan cover living expenses?',
    answer: 'Some loan products may include eligible living or study-related expenses, while others may limit what they cover. Ask the lender for its eligible-expense list and confirm the disbursement process.',
  },
  {
    question: 'Is collateral always required?',
    answer: 'No single rule applies to every loan. Some products may require collateral, while others may not. Requirements depend on the lender, product and applicant profile.',
  },
  {
    question: 'Can I apply before receiving admission?',
    answer: 'Some lenders may allow an early enquiry or conditional application; others may require an admission offer. Check the lender’s process and eligibility rules directly.',
  },
  {
    question: 'Who can be a co-applicant?',
    answer: 'The lender determines who may act as a co-applicant or guarantor and what financial or relationship criteria apply. Confirm its current requirements before sharing documents.',
  },
  {
    question: 'When does repayment usually begin?',
    answer: 'The repayment start date and any moratorium depend on the loan agreement. Read the lender’s written schedule carefully; do not assume repayment begins only after graduation.',
  },
  {
    question: 'Does GlobalPath guarantee loan approval?',
    answer: 'No. GlobalPath cannot guarantee loan approval or funding. The lender assesses the application and makes the decision under its own criteria.',
  },
];

export default function EducationLoanPage() {
  const [checkedDocuments, setCheckedDocuments] = useState([]);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Education Loan Planning | GlobalPath';
    if (description) {
      description.content = 'Understand education loan terms, compare borrowing costs and prepare questions before speaking with a lender.';
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
      <section aria-labelledby="education-loan-title" className="bg-[#f5f3ed]">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-7 sm:px-8 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs text-slate-600 sm:mb-14">
            <Link to="/" className="hover:text-gold-600">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link to="/services" className="hover:text-gold-600">Services</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span aria-current="page" className="font-semibold text-navy-900">Education Loan</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Make sense of the numbers</p>
              <h1 id="education-loan-title" className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                Plan Your Study Abroad Finances <span className="font-serif font-medium italic text-gold-600">With Confidence</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Understand how education loans work, which terms to compare and what questions to take to a lender before you make a financial commitment.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#loan-guidance" className="inline-flex items-center gap-3 bg-navy-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
                  Explore loan guidance <ArrowDown size={17} aria-hidden="true" />
                </a>
                <span className="text-xs text-slate-500">General information, not a lender offer.</span>
              </div>
              <p className="mt-7 max-w-lg border-l-2 border-gold-400 pl-4 text-xs leading-relaxed text-slate-500">
                Lenders set the terms and decide applications. GlobalPath does not guarantee loan approval, funding or any specific rate.
              </p>
            </div>

            <figure className="relative lg:ml-auto lg:max-w-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/services/counselling-planning.jpg`}
                alt="A student and adviser reviewing study costs and documents"
                width="1000"
                height="1500"
                fetchPriority="high"
                className="aspect-[5/4] w-full object-cover object-center shadow-md sm:aspect-[6/5]"
              />
              <figcaption className="absolute bottom-0 left-0 max-w-[88%] border-t-2 border-gold-400 bg-white px-5 py-4 text-sm leading-relaxed text-navy-900 sm:px-7">
                A careful funding plan starts with the full cost—not just the first number you see.
              </figcaption>
              <span aria-hidden="true" className="absolute -bottom-4 -right-4 -z-0 h-20 w-20 border-b-2 border-r-2 border-gold-500 sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28" />
            </figure>
          </div>
        </div>
      </section>

      <section id="loan-guidance" aria-labelledby="loan-concepts-title" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Understand the building blocks</p>
              <h2 id="loan-concepts-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Education loan terms, in plain language.</h2>
              <p className="mt-5 leading-relaxed text-slate-600">Read the details carefully and ask the lender to explain anything unclear. Conditions differ by lender, loan product and applicant profile.</p>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {loanConcepts.map((concept) => {
                const Icon = concept.icon;
                return (
                  <article key={concept.title} className="grid gap-3 py-5 sm:grid-cols-[2rem_0.75fr_1.25fr] sm:items-start sm:gap-5">
                    <Icon size={20} className="mt-0.5 text-gold-600" aria-hidden="true" />
                    <h3 className="font-bold">{concept.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{concept.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <p className="mt-7 text-xs leading-relaxed text-slate-500">
            Terms such as interest rate, charges, moratorium, collateral and eligible expenses can have specific meanings in a loan agreement. Refer to the lender’s current written information.
          </p>
        </div>
      </section>

      <section aria-labelledby="comparison-title" className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Look beyond the headline rate</p>
              <h2 id="comparison-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A framework for comparing lenders.</h2>
            </div>
            <p className="max-w-2xl leading-relaxed text-slate-300">Use the same questions when reviewing each lender’s official terms. No sample rates or offers are shown here.</p>
          </div>

          <div className="mt-10 border-y border-navy-700">
            {comparisonPoints.map(([title, description], index) => (
              <article key={title} className="grid gap-3 border-b border-navy-700 py-5 last:border-0 sm:grid-cols-[3.5rem_0.7fr_1.3fr] sm:items-start sm:gap-6">
                <span className="font-mono text-sm text-gold-400">0{index + 1}</span>
                <h3 className="font-bold">{title}</h3>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-slate-400">For overseas study, also check how funds are disbursed and whether currency conversion or international payment rules affect the amount received.</p>
        </div>
      </section>

      <section aria-labelledby="eligibility-title" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="self-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Know what may be reviewed</p>
          <h2 id="eligibility-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Eligibility is specific to the lender and product.</h2>
          <p className="mt-5 leading-relaxed text-slate-600">A lender may assess some or all of these factors. This is general guidance, not an eligibility decision or approval prediction.</p>
          <ul className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
            {eligibilityFactors.map((factor, index) => (
              <li key={factor} className="flex gap-4 py-4">
                <span className="font-mono text-xs text-gold-600">0{index + 1}</span>
                <span className="text-sm leading-relaxed text-slate-700">{factor}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-slate-500">Requirements vary by lender, loan product, destination and applicant profile. Confirm the current criteria directly with the lender.</p>
        </div>
        <figure>
          <img
            src={`${import.meta.env.BASE_URL}images/services/counselling-conversation.jpg`}
            alt="A student discussing education plans and funding questions with an adviser"
            width="1200"
            height="800"
            loading="lazy"
            className="aspect-[5/4] w-full object-cover"
          />
          <figcaption className="mt-3 text-xs text-slate-500">Prepare questions before discussing options with a lender.</figcaption>
        </figure>
      </section>

      <section aria-labelledby="documents-title" className="bg-[#f3f5f8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><FileCheck2 size={16} aria-hidden="true" /> Prepare thoughtfully</p>
            <h2 id="documents-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A general document checklist.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Tick off items as you organise them. This is a preparation aid, not a universal lender requirement list.</p>
            <p className="mt-8 inline-flex items-baseline gap-2 border-b-2 border-gold-400 pb-2">
              <span className="text-4xl font-bold tabular-nums" aria-live="polite">{checkedDocuments.length}</span>
              <span className="text-sm text-slate-600">of {loanDocuments.length} items prepared</span>
            </p>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">Share financial or identity documents only through the lender’s verified secure channel.</p>
          </div>

          <div className="border-y border-slate-300 bg-white px-5 sm:px-8">
            {loanDocuments.map((item) => {
              const isChecked = checkedDocuments.includes(item.id);
              return (
                <label key={item.id} htmlFor={`loan-document-${item.id}`} className="flex cursor-pointer items-start gap-4 border-b border-slate-200 py-5 last:border-0 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold-500">
                  <input
                    id={`loan-document-${item.id}`}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleDocument(item.id)}
                    className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
                  />
                  <span className="min-w-0 flex-1">
                    <span className={`block font-bold ${isChecked ? 'text-slate-500 line-through decoration-slate-400' : 'text-navy-900'}`}>{item.title}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-500">{item.note}</span>
                  </span>
                  {isChecked && <Check size={17} className="mt-1 shrink-0 text-emerald-700" aria-label="Prepared" />}
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="journey-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">From estimate to disbursement</p>
            <h2 id="journey-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">A careful loan application journey.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Each lender has its own process. Follow its official steps and take time to review the written terms at every decision point.</p>
          </div>
          <ol className="divide-y divide-slate-200 border-y border-slate-200">
            {loanSteps.map(([title, description], index) => (
              <li key={title} className="grid gap-3 py-5 sm:grid-cols-[3.5rem_0.7fr_1.3fr] sm:gap-6">
                <span className="font-serif text-2xl text-gold-600">0{index + 1}</span>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="repayment-title" className="border-y border-gold-400/40 bg-gold-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600"><CalendarClock size={16} aria-hidden="true" /> Plan for repayment too</p>
            <h2 id="repayment-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Borrowing is also a future repayment plan.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">Before accepting a loan, make sure you understand the schedule and can discuss realistic scenarios with the lender.</p>
            <p className="mt-6 border-l-2 border-gold-500 pl-4 text-xs leading-relaxed text-slate-600">This page does not calculate instalments or provide personalised financial advice. Ask the lender for figures based on the actual written terms.</p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {repaymentQuestions.map(([title, description], index) => (
              <article key={title} className="border-t border-gold-400/60 py-5">
                <p className="font-mono text-xs text-gold-600">0{index + 1}</p>
                <h3 className="mt-2 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-400"><CircleHelp size={16} aria-hidden="true" /> Helpful to know</p>
            <h2 id="faq-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Education loan questions.</h2>
            <p className="mt-5 leading-relaxed text-slate-300">Loan products and decisions are set by lenders. Confirm current details directly before applying.</p>
          </div>
          <div className="divide-y divide-navy-700 border-y border-navy-700">
            {loanFaqs.map((faq, index) => (
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

      <section aria-labelledby="loan-cta-title" className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Plan with perspective</p>
          <h2 id="loan-cta-title" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Discuss your study plans and explore potential funding pathways.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Prepare your questions, understand your costs and speak directly with lenders about their current terms.</p>
        </div>
        <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 bg-navy-900 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">
          Explore contact options <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section aria-label="Continue your study abroad research" className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm sm:px-8">
          <p className="text-slate-600">Continue planning your study abroad journey.</p>
          <Link to="/services/scholarships" className="inline-flex items-center gap-2 font-bold text-navy-900 hover:text-gold-600">
            Explore Scholarships <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
