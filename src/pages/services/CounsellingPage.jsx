import { useEffect } from 'react';
import { counselling } from '../../data/counselling';
import CounsellingHero from '../../components/counselling/CounsellingHero';
import CounsellingJourney from '../../components/counselling/CounsellingJourney';
import CounsellingBenefits from '../../components/counselling/CounsellingBenefits';
import ProfileAssessment from '../../components/counselling/ProfileAssessment';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import EnquiryCTA from '../../components/services/EnquiryCTA';

export default function CounsellingPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Study Abroad Counselling | GlobalPath';
    if (description) description.content = counselling.description;
    return () => { document.title = previousTitle; if (description) description.content = previousDescription; };
  }, []);

  return <main className="bg-slate-50 text-navy-900">
    <CounsellingHero service={counselling} />
    <CounsellingJourney steps={counselling.steps} />
    <CounsellingBenefits service={counselling} />
    <ProfileAssessment items={counselling.profile} />
    <ServiceFAQ service={counselling} />
    <EnquiryCTA service={counselling} />
  </main>;
}
