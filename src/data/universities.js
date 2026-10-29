// Fictional institutions and programme groupings for the discovery demo only.
// These are not real admissions listings or GlobalPath partners.
export const destinations = [
  { country: 'United Kingdom', image: 'images/discovery/uk.jpg', alt: 'Tower Bridge over the River Thames in London', source: 'https://www.pexels.com/photo/tower-bridge-london-1721593/' },
  { country: 'Canada', image: 'images/discovery/canada.jpg', alt: 'Toronto skyline and CN Tower across the waterfront', source: 'https://www.pexels.com/photo/the-toronto-skyline-14626447/' },
  { country: 'Australia', image: 'images/discovery/australia.jpg', alt: 'Sydney Opera House beside the harbour', source: 'https://www.pexels.com/photo/sydney-opera-house-21363471/' },
  { country: 'Ireland', image: 'images/discovery/ireland.jpg', alt: 'Ha\u0027penny Bridge over the River Liffey in Dublin', source: 'https://www.pexels.com/photo/beautiful-ha-penny-bridge-in-dublin-city-5459745/' },
];

export const universities = [
  { id: 'demo-1', name: 'Northbridge Example University', country: 'United Kingdom', city: 'London', subjects: ['Business', 'Computer Science'], studyLevels: ['Bachelors', 'Masters'], image: 'images/discovery/uk.jpg', shortDescription: 'An imagined urban study setting for comparing business and technology pathways.' },
  { id: 'demo-2', name: 'Riverside Example Institute', country: 'United Kingdom', city: 'London', subjects: ['Design', 'Engineering'], studyLevels: ['Bachelors'], image: 'images/discovery/uk.jpg', shortDescription: 'A fictional option for exploring creative and technical interests side by side.' },
  { id: 'demo-3', name: 'Maple Harbour Example University', country: 'Canada', city: 'Toronto', subjects: ['Computer Science', 'Engineering'], studyLevels: ['Bachelors', 'Masters'], image: 'images/discovery/canada.jpg', shortDescription: 'A sample profile to practise comparing technology-focused study options.' },
  { id: 'demo-4', name: 'Lakeside Example College', country: 'Canada', city: 'Toronto', subjects: ['Business', 'Health Sciences'], studyLevels: ['Bachelors', 'Diploma'], image: 'images/discovery/canada.jpg', shortDescription: 'An illustrative profile for considering different subject areas and qualification levels.' },
  { id: 'demo-5', name: 'Southern Harbour Example University', country: 'Australia', city: 'Sydney', subjects: ['Engineering', 'Health Sciences'], studyLevels: ['Bachelors', 'Masters'], image: 'images/discovery/australia.jpg', shortDescription: 'A fictional study profile for reflecting on practical subject interests and progression.' },
  { id: 'demo-6', name: 'Coastal Example School of Design', country: 'Australia', city: 'Sydney', subjects: ['Design', 'Business'], studyLevels: ['Diploma', 'Masters'], image: 'images/discovery/australia.jpg', shortDescription: 'An imagined creative study option for comparing design and business directions.' },
  { id: 'demo-7', name: 'Liffey Example University', country: 'Ireland', city: 'Dublin', subjects: ['Computer Science', 'Business'], studyLevels: ['Bachelors', 'Masters'], image: 'images/discovery/ireland.jpg', shortDescription: 'A demo profile for exploring the overlap between digital skills and business studies.' },
  { id: 'demo-8', name: 'Greenway Example Institute', country: 'Ireland', city: 'Dublin', subjects: ['Design', 'Engineering'], studyLevels: ['Diploma', 'Bachelors'], image: 'images/discovery/ireland.jpg', shortDescription: 'An illustrative option for practising a subject-led approach to shortlisting.' },
];

export const subjectOptions = [...new Set(universities.flatMap((item) => item.subjects))].sort();
export const studyLevelOptions = [...new Set(universities.flatMap((item) => item.studyLevels))].sort();
export const emptyFilters = { query: '', country: '', subject: '', studyLevel: '' };

// Search is case-insensitive. Active filters combine with AND.
export function filterUniversities(records, filters) {
  const query = filters.query.trim().toLowerCase();
  return records.filter((university) => {
    const searchableText = [university.name, ...university.subjects].join(' ').toLowerCase();
    return searchableText.includes(query)
      && (!filters.country || university.country === filters.country)
      && (!filters.subject || university.subjects.includes(filters.subject))
      && (!filters.studyLevel || university.studyLevels.includes(filters.studyLevel));
  });
}

export const selectionFAQ = {
  name: 'country and university selection',
  faqs: [
    { question: 'Are these real university listings?', answer: 'No. Every institution and subject grouping in this directory is fictional demo data. The destination photographs show cities, not campuses. No rankings, fees, partnerships or programme availability are asserted.' },
    { question: 'How should I research a real university?', answer: 'Use the institution\u0027s official course pages to check modules, prerequisites, current costs, teaching arrangements and application instructions. Record your sources and compare the same criteria across your shortlist.' },
    { question: 'Does finding a match confirm my eligibility?', answer: 'No. The filters only match the sample fields shown here. Institutions independently assess eligibility and admission. The counselling enquiry form prepares an unsent draft and does not book a session.' },
  ],
};
