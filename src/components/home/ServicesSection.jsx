import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  GraduationCap, 
  FileEdit, 
  BadgeDollarSign, 
  ShieldCheck, 
  PlaneTakeoff,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { servicesData } from '../../data/servicesData';

const iconMap = {
  Compass,
  GraduationCap,
  FileEdit,
  BadgeDollarSign,
  ShieldCheck,
  PlaneTakeoff
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="End-to-End Solutions"
          title="Comprehensive Services For Every Step Of Your Journey"
          subtitle="From initial career aptitude mapping to final student visa stamping and accommodation, we provide structured guidance."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Compass;
            return (
              <div 
                key={service.id}
                className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 hover:border-gold-400 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md border border-navy-800">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/80">
                  <Link 
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 group-hover:text-gold-600 transition-colors"
                  >
                    Learn More About Service <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner (Dark Navy + Golden Accents) */}
        <div className="mt-16 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 text-white border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
              Zero Hidden Charges
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Not sure where to begin?</h3>
            <p className="text-slate-300 text-sm mt-1.5 max-w-xl font-normal leading-relaxed">
              Take our free 15-minute profile assessment with a senior counsellor and receive a personalized university roadmap.
            </p>
          </div>
          <Link to="/book-counselling" className="flex-shrink-0">
            <Button variant="primary" size="lg">
              Book Free Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
