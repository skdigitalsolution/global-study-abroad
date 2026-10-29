import { extendedDestinationGuides } from './extendedDestinationGuides';
import { universityFeeRequirements, feeRequirementsReviewedOn } from './universityFeeRequirements';

const countryCodes = {
  Germany: 'germany', Ireland: 'ireland', Netherlands: 'netherlands',
  Singapore: 'singapore', Japan: 'japan', 'South Korea': 'south-korea', Malaysia: 'malaysia',
};

// Institution names and official links come from the existing destination guides.
// Costs, scores and rankings are intentionally not invented.
export const regionalUniversities = Object.entries(extendedDestinationGuides).flatMap(([region, guide]) => {
  const groups = guide.countryOptions || [{ name: guide.name, universities: guide.universities }];
  return groups.flatMap((group) => group.universities.map((university, index) => ({
    id: `${region}-${countryCodes[group.name] || group.name.toLowerCase().replaceAll(' ', '-')}-${index}`,
    name: university.name,
    country: countryCodes[group.name] || group.name.toLowerCase().replaceAll(' ', '-'),
    countryName: group.name,
    region,
    city: university.location,
    flag: group.name === 'New Zealand' ? 'NZ' : group.name.slice(0, 2).toUpperCase(),
    ranking: 'University guide',
    tuitionRange: 'Check official course fees',
    tuitionNum: null,
    studyLevels: ['Bachelors', 'Masters'],
    popularFields: guide.courses,
    programs: ['Explore the official course catalogue'],
    minGpa: 'Programme-specific criteria',
    ielts: 'Check course requirements',
    intakes: ['Confirm with institution'],
    image: guide.image,
    imageAlt: `${guide.imageAlt} - illustrative destination photo, not a campus`,
    imageCredit: 'Destination photo / Pexels',
    imageSource: guide.imageSource,
    officialUrl: university.url,
    planningOnly: true,
    description: `Explore ${university.name} through its official website. Confirm available programmes, qualification levels, entry criteria, fees and deadlines directly with the institution. The directory is a planning guide, not an admission assessment or partnership claim.`,
    ...universityFeeRequirements[university.name],
    requirementsReviewedOn: feeRequirementsReviewedOn,
  })));
});

export function matchesUniversityDestination(university, destination) {
  if (!destination) return true;
  if (destination === 'europe') return university.region === 'europe' || ['germany', 'ireland', 'netherlands'].includes(university.country);
  if (destination === 'asia') return university.region === 'asia' || ['singapore', 'japan', 'south-korea', 'malaysia'].includes(university.country);
  return university.country === destination;
}
