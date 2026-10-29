import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseBusiness, MapPin, Search } from 'lucide-react';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import { jobs, sampleJobs, emptyJobFilters, filterJobs } from '../../data/careers';

export default function CareerOpportunities() {
  const [demo, setDemo] = useState(false);
  const [filters, setFilters] = useState({ ...emptyJobFilters });
  const records = demo ? sampleJobs : jobs;
  const results = filterJobs(records, filters);
  const fields = [
    { key: 'department', label: 'Department' },
    { key: 'location', label: 'Location' },
    { key: 'employmentType', label: 'Employment type' },
  ];

  function update(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return (
    <section id="open-positions" aria-label="Career opportunities" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 scroll-mt-28">
      <SectionTitle badge="Career opportunities" title="Find Your Opportunity" subtitle="Explore confirmed vacancies when they are published. No company-confirmed openings are currently supplied to this website." align="left" />
      <label className="flex items-start gap-3 text-sm text-slate-600 mb-6">
        <input type="checkbox" checked={demo} onChange={(event) => { setDemo(event.target.checked); setFilters({ ...emptyJobFilters }); }} className="mt-1 h-4 w-4 accent-amber-600 shrink-0" />
        Preview sample roles for development — not live vacancies
      </label>
      {demo && <p className="mb-5 bg-gold-50 border border-gold-400 rounded-xl p-4 text-sm font-semibold">Sample mode: every role, location and employment type below is illustrative. No application is being accepted for these examples.</p>}

      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="career-keyword" className="block text-xs font-bold mb-2">Keyword search</label>
            <div className="relative"><Search size={16} aria-hidden="true" className="absolute left-3 top-3 text-slate-400" /><input id="career-keyword" type="search" value={filters.keyword} onChange={(event) => update('keyword', event.target.value)} placeholder="Role, skill or department" className="w-full min-w-0 border border-slate-300 rounded-lg py-2.5 pl-9 pr-3 text-sm focus:outline-2 focus:outline-gold-500" /></div>
          </div>
          {fields.map((field) => (
            <div key={field.key}>
              <label htmlFor={`career-${field.key}`} className="block text-xs font-bold mb-2">{field.label}</label>
              <select id={`career-${field.key}`} value={filters[field.key]} onChange={(event) => update(field.key, event.target.value)} className="w-full min-w-0 border border-slate-300 bg-white rounded-lg p-2.5 text-sm focus:outline-2 focus:outline-gold-500">
                <option value="">All {field.label.toLowerCase()}s</option>
                {[...new Set(records.map((job) => job[field.key]))].sort().map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => setFilters({ ...emptyJobFilters })} className="mt-4 text-sm font-semibold underline underline-offset-4 hover:text-gold-600">Clear search and filters</button>
      </div>
      <p role="status" className="text-sm text-slate-500 mt-6 mb-5">{results.length} {demo ? 'sample roles (not live)' : 'confirmed openings'} shown</p>

      {results.length ? (
        <div className="grid md:grid-cols-2 gap-5">
          {results.map((job) => (
            <article key={job.id} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold-600">{demo ? 'Illustrative sample — not a vacancy' : job.department}</p>
              <h3 className="text-xl font-bold mt-3">{job.title}</h3>
              <div className="flex flex-wrap gap-3 text-xs text-slate-500 mt-4"><span>{job.department}</span><span className="inline-flex gap-1 items-center"><MapPin size={13} aria-hidden="true" />{job.location}</span><span>{job.employmentType}</span></div>
              <p className="text-sm text-slate-600 leading-relaxed mt-4">{job.description}</p>
              {job.applicationUrl?.startsWith('/') && !job.applicationUrl.startsWith('//') ? (
                <Link to={job.applicationUrl} className="inline-block rounded-lg bg-gold-400 px-5 py-2.5 text-sm font-bold mt-5 hover:bg-gold-300">Apply Now<span className="sr-only"> for {job.title}{demo ? ' (demo: opens Contact Us only)' : ''}</span></Link>
              ) : /^https:\/\//.test(job.applicationUrl || '') ? (
                <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-gold-400 px-5 py-2.5 text-sm font-bold mt-5 hover:bg-gold-300">Apply Now<span className="sr-only"> for {job.title} (new tab)</span></a>
              ) : <Link to="/contact" className="inline-block text-sm font-bold underline mt-5">Ask about the application process</Link>}
              {demo && <p className="text-xs text-slate-500 mt-3">Demo action opens Contact Us only. No job application is sent.</p>}
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-white border border-dashed border-slate-300 py-12 px-6 text-center">
          <BriefcaseBusiness size={34} aria-hidden="true" className="text-gold-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold">{records.length === 0 ? 'No current openings listed' : 'No roles match these filters'}</h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-3 mb-6 max-w-xl mx-auto">{records.length === 0 ? 'We do not have confirmed vacancy information to publish yet. You can visit Contact Us to ask which channel should be used for career enquiries.' : 'Try a broader keyword or clear the filters. Sample roles are for testing the directory only.'}</p>
          <Button variant="outline" onClick={() => setFilters({ ...emptyJobFilters })}>Clear filters</Button>
          <Link to="/contact" className="inline-block ml-5 mt-3 text-sm font-bold underline underline-offset-4">Contact Us</Link>
        </div>
      )}
    </section>
  );
}
