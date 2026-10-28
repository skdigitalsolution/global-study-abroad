import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Banknote, Calendar } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { destinationsData } from '../../data/destinationsData';

export default function DestinationSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionTitle
            badge="Top Study Destinations"
            title="Explore Premier Countries For Higher Education"
            subtitle="Compare post-study work permits, estimated tuition fees, and admission intakes across leading global education hubs."
            align="left"
            className="mb-0"
          />
          <Link to="/destinations" className="mt-4 md:mt-0 flex-shrink-0">
            <Button variant="outline" size="md">
              View All Countries <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.slice(0, 6).map((dest) => (
            <div 
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-gold-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src={dest.image} 
                  alt={`Study in ${dest.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />
                
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-950 shadow-md flex items-center gap-1.5 border border-slate-100">
                  <span className="text-base">{dest.flag}</span>
                  <span>{dest.name}</span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-xs font-bold text-gold-300 drop-shadow line-clamp-1">
                  {dest.badge}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
                    {dest.tagline}
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Banknote className="w-4 h-4 text-gold-500" /> Avg Tuition:
                      </span>
                      <span className="font-bold text-navy-950">{dest.avgCost}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-gold-500" /> Post-Study Visa:
                      </span>
                      <span className="font-bold text-navy-950">{dest.stayBack}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-gold-500" /> Intakes:
                      </span>
                      <span className="font-bold text-navy-950">{dest.intakes}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    to={`/destinations/${dest.slug}`}
                    className="text-xs font-bold text-navy-950 hover:text-gold-600 flex items-center gap-1 transition-colors"
                  >
                    View Country Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to={`/book-counselling?country=${dest.slug}`}>
                    <span className="text-xs font-bold text-gold-600 hover:text-gold-700 bg-gold-50 hover:bg-gold-100 px-2.5 py-1 rounded-lg border border-gold-200 transition-colors">
                      Apply Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
