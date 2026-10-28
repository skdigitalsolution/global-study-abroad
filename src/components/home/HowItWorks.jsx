import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { UserCheck, Search, FileCheck, Plane } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: UserCheck,
      title: "Profile Assessment",
      description: "We review your academic scores, budget, language proficiency, and career goals to identify target countries."
    },
    {
      step: "02",
      icon: Search,
      title: "Course & University Match",
      description: "Receive a tailored list of ambitious, moderate, and safe universities with high visa approval records."
    },
    {
      step: "03",
      icon: FileCheck,
      title: "Applications & SOP Polish",
      description: "Our editorial team refines your essays, resumes, and Letters of Recommendation to secure unconditional offers."
    },
    {
      step: "04",
      icon: Plane,
      title: "Visa, Forex & Takeoff",
      description: "Complete financial scrutiny, mock embassy interviews, flight bookings, and pre-departure alumni briefing."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Structured Roadmap"
          title="Your 4-Step Journey to Global Classrooms"
          subtitle="We eliminate paperwork ambiguity with a clear, step-by-step roadmap from consultation to arrival."
          align="center"
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative bg-navy-800/60 border border-navy-700 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-gold-400 font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center text-gold-400">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

