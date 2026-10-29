import { Link } from 'react-router-dom';
import { MapPin, ChevronDown, SearchX, SlidersHorizontal } from 'lucide-react';
import Button from '../common/Button';
import UniversityFilters from './UniversityFilters';
import { destinations } from '../../data/universities';

export default function UniversityDirectory({ results, filters, onChange, onClear }) {
  const filterCount = ['country', 'subject', 'studyLevel'].filter((key) => filters[key]).length;

  return (
    <section id="university-results" aria-labelledby="directory-title" className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20 scroll-mt-28">
      <div className="border-t border-slate-200 pt-10 mb-8">
        <p className="text-xs text-gold-600 font-bold uppercase tracking-widest">A directory to explore</p>
        <h2 id="directory-title" tabIndex={-1} className="text-3xl font-bold mt-3">Find a direction worth researching.</h2>
        <p className="mt-3 text-sm text-slate-600">Illustrative demo data: all institutions and subject groupings below are fictional. Photographs show destinations, not university campuses.</p>
      </div>

      <div className="grid lg:grid-cols-[240px_minmax(0,1fr)] gap-8 items-start">
        <aside aria-label="University filters" className="hidden lg:block rounded-2xl bg-white border border-slate-200 p-5 sticky top-28">
          <h3 className="text-lg font-bold mb-5 flex items-center gap-2"><SlidersHorizontal size={18} aria-hidden="true" /> Refine your search</h3>
          <UniversityFilters filters={filters} onChange={onChange} onClear={onClear} />
        </aside>

        <div className="min-w-0">
          <details className="lg:hidden group rounded-xl bg-white border border-slate-300 mb-6">
            <summary className="flex items-center justify-between gap-3 p-4 font-bold text-sm cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="flex gap-2 items-center"><SlidersHorizontal size={18} aria-hidden="true" />Filters {filterCount > 0 && `(${filterCount} active)`}</span>
              <ChevronDown size={18} className="group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="p-4 border-t border-slate-200"><UniversityFilters filters={filters} onChange={onChange} onClear={onClear} /></div>
          </details>

          <p role="status" className="text-sm text-slate-600 mb-5">
            {results.length} demo {results.length === 1 ? 'university' : 'universities'} found
            {filters.country && ` in ${filters.country}`}
            {filters.query.trim() && ` matching "${filters.query.trim()}"`}
            {filters.subject && ` / ${filters.subject}`}
            {filters.studyLevel && ` / ${filters.studyLevel}`}
          </p>

          {results.length === 0 ? (
            <div className="rounded-2xl bg-white border border-dashed border-slate-300 text-center py-14 px-6">
              <SearchX className="mx-auto text-gold-600 mb-5" size={36} aria-hidden="true" />
              <h3 className="text-xl font-bold">No demo matches yet.</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mt-3 mb-6">Try a broader subject, a shorter university name or fewer filters. An empty demo result does not mean real study options are unavailable.</p>
              <Button onClick={onClear}>Reset your search</Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {results.map((university) => {
                const destination = destinations.find((item) => item.country === university.country);
                return (
                  <article key={university.id} aria-labelledby={`university-${university.id}`} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                    <div className="relative">
                      <img src={`${import.meta.env.BASE_URL}${university.image}`} alt={destination.alt} width="640" height="400" loading="lazy" className="w-full aspect-[16/9] object-cover" />
                      <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">Fictional demo</span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-slate-500 flex items-center gap-1.5"><MapPin size={13} aria-hidden="true" />{university.city}, {university.country}</p>
                      <h3 id={`university-${university.id}`} className="text-xl font-bold mt-3">{university.name}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-3">{university.shortDescription}</p>
                      <ul aria-label="Example subjects" className="flex flex-wrap gap-2 mt-5">
                        {university.subjects.map((subject) => <li key={subject} className="rounded-full bg-navy-50 px-3 py-1 text-xs text-navy-700">{subject}</li>)}
                      </ul>
                      <p className="mt-4 text-xs text-slate-500">Sample levels: {university.studyLevels.join(' / ')}</p>
                      <details className="mt-5 border-t border-slate-200 pt-4 group">
                        <summary className="flex items-center justify-between gap-3 text-sm font-bold cursor-pointer list-none [&::-webkit-details-marker]:hidden">Explore demo profile <ChevronDown size={16} className="group-open:rotate-180" aria-hidden="true" /></summary>
                        <div className="mt-4 text-sm text-slate-600 leading-relaxed">
                          <p>This is a fictional example, not an institution accepting applications. For a real shortlist, compare course modules, entry requirements, full costs and the learning environment on official institution websites.</p>
                          <p className="text-xs mt-3">Destination photograph: <a href={destination.source} target="_blank" rel="noopener noreferrer" className="underline">Pexels source (new tab)</a></p>
                          <Link to="/services/counselling#enquiry" className="inline-block mt-4 font-bold text-navy-900 underline underline-offset-4">Prepare shortlisting questions</Link>
                        </div>
                      </details>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
