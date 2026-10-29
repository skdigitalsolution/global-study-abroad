import { useEffect } from 'react';
import { testPreparation, preparationSteps } from '../../data/testPreparation';
import TestPreparationHero from '../../components/test-preparation/TestPreparationHero';
import ExamDiscovery from '../../components/test-preparation/ExamDiscovery';
import PreparationPlan from '../../components/test-preparation/PreparationPlan';
import TestPreparationCTA from '../../components/test-preparation/TestPreparationCTA';
import ServiceFAQ from '../../components/services/ServiceFAQ';

export default function TestPreparationPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Test Preparation: Explore Your Exam | GlobalPath';
    if (description) description.content = testPreparation.description;
    return () => {
      document.title = previousTitle;
      if (description) description.content = previousDescription;
    };
  }, []);

  return (
    <main className="bg-slate-50 text-navy-900">
      <TestPreparationHero service={testPreparation} />
      <ExamDiscovery />
      <PreparationPlan steps={preparationSteps} />
      <ServiceFAQ service={testPreparation} />
      <TestPreparationCTA />
    </main>
  );
}
