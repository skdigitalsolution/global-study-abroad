import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Banknote, Clock, ArrowRight, Sparkles } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { destinationsData } from '../data/destinationsData';

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinationsData.filter((dest) => {
    return dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           dest.popularCourses.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Header */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-navy-900">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-semibold">Study Destinations</span>
        </div>

        <SectionTitle
          badge="Global Footprint"
          title="Choose Your Ideal Study Destination"
          subtitle="Explore post-study work visa rights, living expenses, average tuition fees, and admission intakes across premier countries."
          align="center"
        />

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by country or course (e.g. Data Science, UK, Canada)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              />
            </div>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-500 hover:text-navy-900 underline cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Showing {filteredDestinations.length} of {destinationsData.length} destinations</span>
          <span className="text-gold-600 font-semibold">Sample Demonstration Data</span>
        </div>

        {/* Countries Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div 
                key={dest.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-52 overflow-hidden bg-slate-200">
                  <img
                    src={dest.image}
                    alt={`Study in ${dest.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-900 shadow flex items-center gap-2">
                    <span className="text-lg">{dest.flag}</span>
                    <span>{dest.name}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-xs text-gold-300 font-semibold">
                    {dest.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {dest.tagline}
                    </p>

                    <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <Banknote className="w-3.5 h-3.5 text-slate-400" /> Avg Tuition:
                        </span>
                        <span className="font-semibold text-navy-900">{dest.avgCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> Post-Study Visa:
                        </span>
                        <span className="font-semibold text-navy-900">{dest.stayBack}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Popular Courses:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.popularCourses.slice(0, 3).map((c, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                      to={`/destinations/${dest.slug}`}
                      className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1 transition-colors"
                    >
                      View Complete Guide <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link to={`/book-counselling?country=${dest.slug}`}>
                      <span className="text-xs font-semibold text-gold-600 hover:underline">
                        Apply Now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-lg font-bold text-navy-900">No destinations found</h3>
            <p className="text-sm text-slate-500 mt-1">Try modifying your search keywords.</p>
            <Button variant="primary" size="sm" onClick={() => setSearchQuery('')} className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}

