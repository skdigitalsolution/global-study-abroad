import { useId } from 'react';
import Button from '../common/Button';
import { destinations, subjectOptions, studyLevelOptions } from '../../data/universities';

export default function UniversityFilters({ filters, onChange, onClear }) {
  const id = useId();
  const groups = [
    { key: 'country', label: 'Destination country', options: destinations.map((item) => item.country) },
    { key: 'subject', label: 'Subject', options: subjectOptions },
    { key: 'studyLevel', label: 'Study level', options: studyLevelOptions },
  ];

  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Filter the university directory</legend>
      {groups.map((group) => (
        <div key={group.key}>
          <label htmlFor={`${id}-${group.key}`} className="block text-sm font-bold">{group.label}</label>
          <select
            id={`${id}-${group.key}`} value={filters[group.key]}
            onChange={(event) => onChange(group.key, event.target.value)}
            className="mt-2 w-full min-w-0 rounded-lg border border-slate-300 bg-white p-3 text-sm focus:outline-2 focus:outline-gold-500"
          >
            <option value="">All {group.key === 'country' ? 'countries' : group.key === 'subject' ? 'subjects' : 'study levels'}</option>
            {group.options.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={onClear} className="w-full">Clear search and filters</Button>
      <p className="text-xs text-slate-500 leading-relaxed">Filters match fictional sample fields only. They do not assess admission eligibility.</p>
    </fieldset>
  );
}
