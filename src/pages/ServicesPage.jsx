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
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Compass,
  GraduationCap,
  FileEdit,
  BadgeDollarSign,
  ShieldCheck,
  PlaneTakeoff
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-navy-900">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-semibold">Services</span>
        </div>

        <SectionTitle
          badge="End-to-End Solutions"
          title="Personalized Advisory for Global Education"
          subtitle="From your first exploratory call to touchdown on campus, we handle admissions, essays, scholarships, and visa processing."
          align="center"
        />

        {/* Detailed Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Compass;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STEP 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    What's Included:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100">
                  <Link to={`/book-counselling?service=${service.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Book Session for this Service <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Proposition Strip */}
        <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white border border-navy-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
              Zero Hidden Charges
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Initial Profile Assessment is Always 100% Free
            </h3>
            <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
              Speak directly with a senior overseas education counsellor. Receive an honest appraisal of your university admissibility and scholarship prospects.
            </p>
          </div>
          <Link to="/book-counselling">
            <Button variant="primary" size="lg" className="font-bold flex-shrink-0">
              Schedule Free Assessment
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

