import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Banknote, 
  SlidersHorizontal,
  X,
  ExternalLink,
  Award
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { universitiesData } from '../data/universitiesData';

export default function UniversitiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialCountry = searchParams.get('country') || '';
  const initialDegree = searchParams.get('degree') || '';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [selectedDegree, setSelectedDegree] = useState(initialDegree);
  const [sortBy, setSortBy] = useState('ranking');
  const [selectedUniModal, setSelectedUniModal] = useState(null);

  const filteredUniversities = useMemo(() => {
    return universitiesData
      .filter((uni) => {
        const matchesSearch = 
          uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          uni.programs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCountry = selectedCountry ? uni.country === selectedCountry : true;
        const matchesDegree = selectedDegree ? uni.studyLevels.includes(selectedDegree) : true;

        return matchesSearch && matchesCountry && matchesDegree;
      })
      .sort((a, b) => {
        if (sortBy === 'tuition-low') return a.tuitionNum - b.tuitionNum;
        if (sortBy === 'tuition-high') return b.tuitionNum - a.tuitionNum;
        return a.name.localeCompare(b.name);
      });
  }, [searchQuery, selectedCountry, selectedDegree, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCountry('');
    setSelectedDegree('');
    setSortBy('ranking');
    setSearchParams({});
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-navy-900">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-semibold">Universities</span>
        </div>

        <SectionTitle
          badge="Global Directory"
          title="Find Top International Universities"
          subtitle="Search and compare institutions by admission criteria, tuition fees, locations, and degree disciplines."
          align="center"
        />

        {/* Filter Controls Panel */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Keyword Search */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Keyword Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="University, city or program..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            {/* Country Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Destination</label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-gold-500"
              >
                <option value="">All Countries</option>
                <option value="uk">United Kingdom (UK)</option>
                <option value="usa">United States (USA)</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="ireland">Ireland</option>
              </select>
            </div>

            {/* Degree Level */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Study Level</label>
              <select
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-gold-500"
              >
                <option value="">All Degrees</option>
                <option value="Masters">Masters / Postgraduate</option>
                <option value="Bachelors">Bachelors / Undergraduate</option>
                <option value="Doctorate">PhD / Doctorate</option>
              </select>
            </div>

            {/* Sort order */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Sort Order</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-gold-500"
              >
                <option value="ranking">University Name (A-Z)</option>
                <option value="tuition-low">Tuition (Low to High)</option>
                <option value="tuition-high">Tuition (High to Low)</option>
              </select>
            </div>

          </div>

          {/* Reset Filters CTA */}
          {(searchQuery || selectedCountry || selectedDegree) && (
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Active filters applied</span>
              <button
                onClick={handleReset}
                className="text-xs text-rose-600 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" /> Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Counter */}
        <div className="mb-6 flex justify-between items-center text-xs text-slate-500">
          <span>Showing {filteredUniversities.length} institutions</span>
          <span className="bg-slate-200/80 px-2 py-0.5 rounded text-[11px] font-semibold">Demo Database</span>
        </div>

        {/* University Cards Grid */}
        {filteredUniversities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((uni) => (
              <div 
                key={uni.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={uni.image}
                    referrerPolicy="no-referrer"
                    alt={`Campus of ${uni.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {uni.imageCredit && (
                    <a href={uni.imageSource} target="_blank" rel="noopener noreferrer" className="absolute bottom-1 right-1 rounded bg-navy-950/80 px-2 py-1 text-[9px] text-white">
                      {uni.imageCredit}
                    </a>
                  )}
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-xs font-bold text-navy-900 shadow flex items-center gap-1.5">
                    <span>{uni.flag}</span>
                    <span>{uni.countryName}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-navy-900/90 text-gold-400 px-2.5 py-1 rounded-full text-[11px] font-bold shadow">
                    {uni.ranking}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">{uni.name}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {uni.city}
                    </p>

                    <div className="mt-4 space-y-2 text-xs border-t border-slate-100 pt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Tuition:</span>
                        <span className="font-semibold text-navy-900">{uni.tuitionRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Min. Requirements:</span>
                        <span className="font-semibold text-slate-800">{uni.ielts}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Sample Programs:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {uni.programs.slice(0, 2).map((prog, idx) => (
                          <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {prog}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedUniModal(uni)}
                      className="text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors cursor-pointer"
                    >
                      View Eligibility Details
                    </button>
                    <Link to={`/book-counselling?country=${uni.country}`}>
                      <Button variant="primary" size="sm">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-lg font-bold text-navy-900">No universities match your criteria</h3>
            <p className="text-sm text-slate-500 mt-1">Try selecting "All Countries" or clearing your search phrase.</p>
            <Button variant="primary" size="sm" onClick={handleReset} className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}

        {/* Modal for University Details */}
        {selectedUniModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{selectedUniModal.flag}</span>
                  <div>
                    <h4 className="text-base font-bold text-navy-900">{selectedUniModal.name}</h4>
                    <span className="text-xs text-slate-500">{selectedUniModal.city}, {selectedUniModal.countryName}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedUniModal(null)}
                  className="p-1 rounded-md text-slate-400 hover:text-navy-900 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-700">
                <p className="text-slate-600 leading-relaxed">{selectedUniModal.description}</p>
                <div className="p-3 bg-slate-50 rounded-xl space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Ranking:</span>
                    <span className="font-bold text-gold-600">{selectedUniModal.ranking}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Tuition Range:</span>
                    <span className="font-bold text-navy-900">{selectedUniModal.tuitionRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Academic Cutoff:</span>
                    <span className="font-bold text-slate-800">{selectedUniModal.minGpa}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">English Standard:</span>
                    <span className="font-bold text-slate-800">{selectedUniModal.ielts}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link to={`/book-counselling?country=${selectedUniModal.country}`} className="flex-1">
                  <Button variant="primary" size="md" className="w-full font-bold">
                    Apply to this University
                  </Button>
                </Link>
                <Button variant="outline" size="md" onClick={() => setSelectedUniModal(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

