import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import ServiceHero from './ServiceHero';
import ServiceBenefits from './ServiceBenefits';
import ServiceFocus from './ServiceFocus';
import ProcessSteps from './ProcessSteps';
import ServiceFAQ from './ServiceFAQ';
import EnquiryCTA from './EnquiryCTA';

export default function ServicePageLayout({ service }) {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = `${service.name} | GlobalPath`;
    if (description) description.content = service.description;
    return () => { document.title = previousTitle; if (description) description.content = previousDescription; };
  }, [service]);
  return <main className="bg-slate-50 text-navy-900">
    <ServiceHero service={service} />
    <ServiceBenefits service={service} />
    {service.variant === 'reverse' && <ProcessSteps service={service} />}
    <ServiceFocus service={service} />
    {service.variant !== 'reverse' && <ProcessSteps service={service} />}
    <ServiceFAQ service={service} />
    <EnquiryCTA key={service.slug} service={service} />
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12" aria-label="Explore other services">
      <h2 className="text-xl font-bold mb-5">Keep exploring your path</h2>
      <div className="flex flex-wrap gap-3">{services.filter((item) => item.slug !== service.slug).map((item) => <Link key={item.slug} to={`/services/${item.slug}`} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm hover:border-gold-500 hover:bg-gold-50">{item.name}</Link>)}</div>
    </section>
  </main>;
}
