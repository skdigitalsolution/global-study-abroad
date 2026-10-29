import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Search, ChevronRight } from 'lucide-react';
import Button from '../../components/common/Button';
import SectionTitle from '../../components/common/SectionTitle';
import UniversityDirectory from '../../components/discovery/UniversityDirectory';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import { universities, destinations, emptyFilters, filterUniversities, selectionFAQ } from '../../data/universities';

export default function CountryUniversitySelection() {
  const [filters, setFilters] = useState({ ...emptyFilters });
  const results = filterUniversities(universities, filters);

  useEffect(() => {
    const oldTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const oldDescription = description?.content;
    document.title = 'Country & University Discovery | GlobalPath';
    if (description) description.content = 'Explore a fictional university directory, compare destinations and practise building a thoughtful study shortlist with GlobalPath.';
    return () => { document.title = oldTitle; if (description) description.content = oldDescription; };
  }, []);

  function changeFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function clearFilters() {
    setFilters({ ...emptyFilters });
  }

  function showResults() {
    document.getElementById('university-results')?.scrollIntoView({ block: 'start', behavior: 'instant' });
    document.getElementById('directory-title')?.focus({ preventScroll: true });
  }

  function chooseDestination(country) {
    setFilters({ ...emptyFilters, country });
    showResults();
  }

  return (
    <main className="bg-slate-50 text-navy-900">
      <section aria-labelledby="discovery-title" className="relative bg-navy-950 text-white overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}images/discovery/uk.jpg`} alt="Tower Bridge and the River Thames in London, an example study destination" width="1400" height="1050" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover object-[center_65%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/35" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-7 pb-12 sm:pb-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-14">
            <Link to="/" className="hover:text-gold-400">Home</Link><ChevronRight size={12} aria-hidden="true" /><Link to="/services" className="hover:text-gold-400">Services</Link><ChevronRight size={12} aria-hidden="true" /><span aria-current="page">Country & University Selection</span>
          </nav>
          <p className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">The GlobalPath discovery atlas</p>
          <h1 id="discovery-title" className="mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-bold tracking-tight">Find your subject.<br />Explore your setting.<br /><span className="text-gold-400">Imagine what comes next.</span></h1>
          <p className="mt-6 max-w-xl text-slate-200 leading-relaxed text-base sm:text-lg">Bring your interests into focus. Explore destinations and practise comparing universities with a shortlist shaped around you.</p>

          <form role="search" onSubmit={(event) => { event.preventDefault(); showResults(); }} className="mt-10 max-w-3xl rounded-2xl bg-white p-3 sm:p-4 text-navy-900 shadow-xl">
            <label htmlFor="university-search" className="block text-xs font-bold mb-2 px-1">Search the demo directory by university name or subject</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 border border-slate-300 rounded-xl px-3 min-w-0 flex-1 focus-within:outline-2 focus-within:outline-gold-500">
                <Search size={19} aria-hidden="true" className="text-slate-400 shrink-0" />
                <input id="university-search" type="search" value={filters.query} onChange={(event) => changeFilter('query', event.target.value)} placeholder="Try Computer Science or Northbridge" className="min-w-0 w-full py-3 text-sm bg-transparent outline-none" />
              </div>
              <Button type="submit">Explore results <ArrowDown size={17} aria-hidden="true" /></Button>
            </div>
            <p className="text-[11px] text-slate-500 mt-3 px-1">Illustrative demo only. Search updates instantly; use Explore results to jump to the directory.</p>
          </form>
          <p className="mt-5 text-[10px] text-slate-300">London destination photograph, not a campus. <a href={destinations[0].source} target="_blank" rel="noopener noreferrer" className="underline">Kyle Lui / Pexels (new tab)</a></p>
        </div>
      </section>

      <section aria-label="Explore destination countries" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <SectionTitle badge="Choose a setting" title="Start with a place that sparks your curiosity." subtitle="Select a destination to start a fresh search in the demo directory. Your existing search and filters will reset." align="left" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {destinations.map((destination) => (
            <button key={destination.country} type="button" onClick={() => chooseDestination(destination.country)} aria-pressed={filters.country === destination.country} aria-controls="university-results" className={`relative overflow-hidden rounded-2xl text-left group border-2 focus-visible:outline-2 focus-visible:outline-gold-600 ${filters.country === destination.country ? 'border-gold-500' : 'border-transparent'}`}>
              <img src={`${import.meta.env.BASE_URL}${destination.image}`} alt={destination.alt} width="500" height="400" loading="lazy" className="w-full aspect-[5/4] object-cover transition-transform duration-300 motion-safe:group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/15 to-transparent" aria-hidden="true" />
              <span className="absolute inset-x-0 bottom-0 p-5 text-white"><span className="text-xl font-bold flex items-center justify-between gap-2">{destination.country}<ArrowUpRight size={20} aria-hidden="true" /></span><span className="block text-xs mt-2 text-slate-300">Explore demo profiles</span></span>
            </button>
          ))}
        </div>
      </section>

      <UniversityDirectory results={results} filters={filters} onChange={changeFilter} onClear={clearFilters} />

      <section id="process" aria-labelledby="shortlist-title" className="bg-navy-900 text-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
          <div><p className="text-gold-400 text-xs uppercase tracking-widest font-bold">The shortlist notebook</p><h2 id="shortlist-title" className="text-3xl sm:text-4xl font-bold leading-tight mt-4">Compare with purpose.<br />Choose with perspective.</h2><p className="mt-5 text-slate-300 leading-relaxed">A useful shortlist is a set of well-researched possibilities. Start with your priorities, then collect evidence that helps you compare.</p></div>
          <ol className="divide-y divide-navy-600">
            {[
              ['Start with the subject', 'Look at modules, assessment methods and prerequisites. A familiar course title can describe very different learning experiences.'],
              ['Build the complete picture', 'Research tuition and everyday costs, housing, learning support and your preferred setting. Separate confirmed information from estimates.'],
              ['Keep sources beside your notes', 'Check real programme details directly with each institution. Record deadlines and questions before moving toward an application.'],
            ].map(([title, description], index) => <li key={title} className="flex gap-5 py-6 first:pt-0"><span className="text-gold-400 font-mono text-sm pt-1">0{index + 1}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm text-slate-300 leading-relaxed">{description}</p></div></li>)}
          </ol>
        </div>
      </section>

      <ServiceFAQ service={selectionFAQ} />
      <section id="enquiry" aria-labelledby="selection-cta-title" className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 scroll-mt-28">
        <div className="rounded-3xl bg-gold-100 border border-gold-400/40 p-7 sm:p-12 flex flex-col lg:flex-row gap-8 justify-between lg:items-center">
          <div className="max-w-2xl"><p className="text-xs uppercase tracking-widest text-gold-600 font-bold">A little perspective helps</p><h2 id="selection-cta-title" className="text-3xl sm:text-4xl font-bold mt-4">Turn a list of options into better questions.</h2><p className="mt-4 text-sm text-slate-600 leading-relaxed">Prepare a counselling enquiry around your subjects, preferred destinations and priorities. The existing form makes an unsent draft; it does not book a session.</p></div>
          <Link to="/services/counselling#enquiry" className="inline-flex self-start lg:self-auto justify-center items-center gap-3 bg-navy-900 hover:bg-navy-800 text-white px-6 py-4 rounded-xl text-sm font-bold shrink-0">Prepare a counselling enquiry <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
