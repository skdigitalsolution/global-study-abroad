import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Banknote,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview & Courses' },
  { id: 'universities', label: 'Universities' },
  { id: 'visa', label: 'Visa Process' },
];

export default function DestinationGuidePage({ guide }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCountry, setSelectedCountry] = useState(guide.countryOptions?.[0]?.name);
  const selectedCountryDetails = guide.countryOptions?.find((country) => country.name === selectedCountry);
  const universities = selectedCountryDetails?.universities || guide.universities;
  const guideId = guide.name.toLowerCase().replaceAll(' ', '-');

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white lg:py-20">
        <div className="absolute inset-0 opacity-20">
          <img src={guide.image} alt={guide.imageAlt} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-2 text-xs text-slate-300">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/destinations" className="hover:text-white">Destinations</Link>
            <span>/</span>
            <span className="font-semibold text-gold-400">{guide.name}</span>
          </div>

          <div className="mb-2 flex items-center gap-3">
            <span className="text-4xl" aria-hidden="true">{guide.flag}</span>
            <span className="rounded-full border border-gold-500/30 bg-gold-500/20 px-3 py-1 text-xs font-bold text-gold-300">{guide.badge}</span>
          </div>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">Study in {guide.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{guide.tagline} {guide.overview}</p>

          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {guide.metrics.map(([label, value], index) => {
              const MetricIcon = [Banknote, Clock, Calendar][index];
              return (
                <div key={label} className="rounded-xl border border-navy-700 bg-navy-800/80 p-4">
                  <span className="mb-1 flex items-center gap-1.5 text-xs text-slate-300">
                    <MetricIcon className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" /> {label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">{value}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-slate-400">
            {guide.imageCredit} · <a href={guide.imageSource} target="_blank" rel="noreferrer" className="underline hover:text-white">Image details</a> · displayed cropped
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            <div className="flex gap-5 overflow-x-auto border-b border-slate-200 text-sm font-semibold" role="tablist" aria-label={`${guide.name} guide sections`}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`${guideId}-${tab.id}-tab`}
                  aria-selected={activeTab === tab.id}
                  tabIndex={activeTab === tab.id ? 0 : -1}
                  aria-controls={`${guideId}-${tab.id}-panel`}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(event) => {
                    const index = tabs.findIndex((item) => item.id === tab.id);
                    const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length
                      : event.key === 'ArrowLeft' ? (index + tabs.length - 1) % tabs.length
                      : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : -1;
                    if (next < 0) return;
                    event.preventDefault();
                    setActiveTab(tabs[next].id);
                    document.getElementById(`${guideId}-${tabs[next].id}-tab`)?.focus();
                  }}
                  className={`shrink-0 border-b-2 pb-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600 ${
                    activeTab === tab.id ? 'border-gold-500 font-bold text-navy-900' : 'border-transparent text-slate-500 hover:text-navy-900'
                  }`}
                >
                  {tab.id === 'universities' ? `Universities (${universities.length})` : tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'overview' && (
              <section id={`${guideId}-overview-panel`} role="tabpanel" tabIndex={0} aria-labelledby={`${guideId}-overview-tab`} className="space-y-8">
                <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  <h2 className="mb-4 text-xl font-bold text-navy-900">Why Choose {guide.name} for Your Higher Education?</h2>
                  <p className="text-sm leading-relaxed text-slate-600">{guide.overview}</p>
                  <h3 className="mb-3 mt-6 text-sm font-bold text-navy-900">Study Fields to Explore:</h3>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {guide.courses.map((course) => (
                      <div key={course} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold-500" aria-hidden="true" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </article>

                {guide.countryOptions && (
                  <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-navy-900">Explore countries within {guide.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Choose a country to see university examples and a relevant official study information source.</p>
                    <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={`Choose a country in ${guide.name}`}>
                      {guide.countryOptions.map((country) => (
                        <button
                          key={country.name}
                          type="button"
                          aria-pressed={selectedCountry === country.name}
                          onClick={() => setSelectedCountry(country.name)}
                          className={`rounded-full border px-4 py-2 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600 ${
                            selectedCountry === country.name ? 'border-navy-900 bg-navy-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-navy-900'
                          }`}
                        >
                          {country.name}
                        </button>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600" aria-live="polite">{selectedCountryDetails.note}</p>
                    <a href={selectedCountryDetails.officialSource.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-navy-900 underline decoration-gold-500 underline-offset-4 hover:text-amber-800">
                      {selectedCountryDetails.officialSource.label}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </article>
                )}

                <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  <h2 className="mb-4 text-xl font-bold text-navy-900">Admission Requirements to Check</h2>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {guide.admission.map((item, index) => {
                      const AdmissionIcon = [GraduationCap, FileText, ShieldCheck, Calendar][index];
                      return (
                        <li key={item} className="flex items-start gap-2.5">
                          <AdmissionIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </section>
            )}

            {activeTab === 'universities' && (
              <section id={`${guideId}-universities-panel`} role="tabpanel" tabIndex={0} aria-labelledby={`${guideId}-universities-tab`} className="space-y-5">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <div>
                    <h2 className="text-xl font-bold text-navy-900">Universities to Explore in {guide.name}</h2>
                    {selectedCountryDetails && <p className="mt-1 text-sm text-slate-500">Examples in {selectedCountryDetails.name}</p>}
                  </div>
                  {guide.countryOptions && (
                    <label className="text-xs font-semibold text-slate-600">
                      Filter by country
                      <select value={selectedCountry} onChange={(event) => setSelectedCountry(event.target.value)} className="ml-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-navy-900 focus:border-amber-600 focus:outline-none">
                        {guide.countryOptions.map((country) => <option key={country.name} value={country.name}>{country.name}</option>)}
                      </select>
                    </label>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {universities.map((university) => (
                    <article key={university.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                      <span className="rounded bg-gold-50 px-2 py-0.5 text-xs font-bold text-gold-600">
                        University Guide
                      </span>
                      <h3 className="mt-2 text-base font-bold text-navy-900">{university.name}</h3>
                      {university.location && <p className="mt-0.5 text-xs text-slate-500">{university.location}</p>}
                      <p className="mt-3 text-xs font-semibold text-slate-700">Tuition: Check official course fees</p>
                      <Link to={`/universities?country=${guideId}&q=${encodeURIComponent(university.name)}`} className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-gold-600 hover:underline">
                        View Program Details <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </article>
                  ))}
                </div>
                <p className="text-xs leading-5 text-slate-500">Examples are not a ranking or recommendation. Confirm courses, admissions, and current details with each institution.</p>
              </section>
            )}

            {activeTab === 'visa' && (
              <section id={`${guideId}-visa-panel`} role="tabpanel" tabIndex={0} aria-labelledby={`${guideId}-visa-tab`} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="mb-3 text-xl font-bold text-navy-900">{guide.visaTitle}</h2>
                <p className="mb-6 text-sm leading-relaxed text-slate-600" aria-live="polite">
                  {selectedCountryDetails ? `${guide.visaIntro} ${selectedCountryDetails.note}` : guide.visaIntro}
                </p>
                {guide.countryOptions && (
                  <div className="mb-5">
                    <label htmlFor={`${guide.name}-visa-country`} className="mb-2 block text-xs font-bold text-slate-700">Select country for official information</label>
                    <select id={`${guide.name}-visa-country`} value={selectedCountry} onChange={(event) => setSelectedCountry(event.target.value)} className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-navy-900 focus:border-amber-600 focus:outline-none sm:max-w-sm">
                      {guide.countryOptions.map((country) => <option key={country.name} value={country.name}>{country.name}</option>)}
                    </select>
                  </div>
                )}
                <div className="space-y-4">
                  {guide.visaSteps.map((step, index) => (
                    <div key={step} className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">{index + 1}</div>
                      <p className="pt-1 text-sm text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>
                <a href={selectedCountryDetails?.visaUrl || guide.officialSource.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-4 py-3 text-sm font-bold text-white hover:bg-navy-800">
                  {selectedCountryDetails?.visaLabel || guide.officialSource.label}<ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="mt-4 text-xs leading-5 text-slate-500">{guide.guidanceNote} The relevant authority makes visa decisions; approval is not guaranteed.</p>
              </section>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl lg:sticky lg:top-24">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-gold-600">Study guidance</span>
              <h2 className="text-xl font-bold text-navy-900">Planning to study in {guide.name}?</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{guide.guidanceNote}</p>
              <div className="mt-5 space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" /><span>Compare course and institution options</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" /><span>Review requirements with official sources</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" /><span>Plan next steps for your chosen destination</span></div>
              </div>
              <Link to="/services/counselling#enquiry" className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-center text-sm font-bold text-navy-950 shadow-md hover:from-amber-600 hover:to-gold-600">
                  Plan Your Studies in {guide.name} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <p className="mt-3 text-center text-xs text-slate-500">Guidance is not an admission or visa guarantee.</p>
            </div>
          </aside>
        </div>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-navy-900">Frequently asked questions</h2>
          <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
            {guide.faqs.map(([question, answer]) => (
              <details key={question} className="py-4">
                <summary className="cursor-pointer font-bold text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
