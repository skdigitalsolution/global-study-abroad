import React from 'react';
import { Award, Globe2, Building2, UserCheck } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    {
      id: 1,
      icon: Globe2,
      number: "15+",
      label: "Study Destinations",
      detail: "UK, USA, Canada, Germany & more"
    },
    {
      id: 2,
      icon: Building2,
      number: "500+",
      label: "Partner Institutions",
      detail: "Curated university directories"
    },
    {
      id: 3,
      icon: Award,
      number: "98.4%",
      label: "Visa Guidance Accuracy",
      detail: "Procedural document quality score"
    },
    {
      id: 4,
      icon: UserCheck,
      number: "25k+",
      label: "Students Mentored",
      detail: "Personalized study roadmaps"
    }
  ];

  return (
    <section className="bg-slate-100/70 border-y border-slate-200/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-extrabold tracking-widest uppercase text-navy-900 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
            Demonstration Metrics & Global Reach
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-gold-400 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-50 to-amber-100 border border-gold-200 text-gold-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-3xl sm:text-4.5xl font-black text-navy-950 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
