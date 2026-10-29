// Add only company-confirmed vacancies here, with an approved application URL.
// Shape: { id, title, department, location, employmentType, description, applicationUrl }.
export const jobs = [];

// Development previews only. These are never displayed as current openings.
export const sampleJobs = [
  { id: 'demo-advisor', title: 'Student Adviser (Sample)', department: 'Student Advisory', location: 'Demo office A', employmentType: 'Full-time (demo)', description: 'Illustrative role supporting course research and clear communication with students. Not an available position.', applicationUrl: '/contact' },
  { id: 'demo-operations', title: 'Application Coordinator (Sample)', department: 'Operations', location: 'Demo office B', employmentType: 'Full-time (demo)', description: 'Illustrative role organising application checklists and tracking preparation tasks. Not an available position.', applicationUrl: '/contact' },
  { id: 'demo-content', title: 'Education Content Assistant (Sample)', department: 'Digital Content', location: 'Demo office A', employmentType: 'Part-time (demo)', description: 'Illustrative role making study information easier to understand and navigate. Not an available position.', applicationUrl: '/contact' },
];

export const emptyJobFilters = { keyword: '', department: '', location: '', employmentType: '' };

export function filterJobs(records, filters) {
  const keyword = filters.keyword.trim().toLowerCase();
  return records.filter((job) => {
    const searchable = [job.title, job.department, job.description].join(' ').toLowerCase();
    return searchable.includes(keyword)
      && (!filters.department || job.department === filters.department)
      && (!filters.location || job.location === filters.location)
      && (!filters.employmentType || job.employmentType === filters.employmentType);
  });
}
