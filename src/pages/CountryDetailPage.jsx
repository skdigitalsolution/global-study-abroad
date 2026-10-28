import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Banknote, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  GraduationCap, 
  FileText, 
  ArrowRight, 
  ShieldCheck,
  AlertCircle 
} from 'lucide-react';
import Button from '../components/common/Button';
import { destinationsData } from '../data/destinationsData';
import { universitiesData } from '../data/universitiesData';

export default function CountryDetailPage() {
  const { countrySlug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const country = destinationsData.find(
    (d) => d.slug.toLowerCase() === countrySlug?.toLowerCase()
  );

  const countryUniversities = universitiesData.filter(
    (u) => u.country.toLowerCase() === countrySlug?.toLowerCase()
  );

  if (!country) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center bg-slate-50">
        <AlertCircle className="w-12 h-12 text-rose-500 mb-3" />
        <h1 className="text-2xl font-extrabold text-navy-900">Country Guide Not Found</h1>
        <p className="mt-2 text-slate-600 max-w-md text-sm">
          We could not find guide information for destination: <code className="bg-slate-200 px-1 py-0.5 rounded">{countrySlug}</code>.
        </p>
        <Link to="/destinations" className="mt-6">
          <Button variant="primary">Return to Destinations</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Country Hero Banner */}
      <section className="relative bg-navy-900 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/destinations" className="hover:text-white">Destinations</Link>
            <span>/</span>
            <span className="text-gold-400 font-semibold">{country.name}</span>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{country.flag}</span>
            <span className="bg-gold-500/20 text-gold-300 border border-gold-500/30 px-3 py-1 rounded-full text-xs font-bold">
              {country.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Study in {country.name}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {country.tagline} {country.overview}
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
            <div className="bg-navy-800/80 border border-navy-700 p-4 rounded-xl">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                <Banknote className="w-3.5 h-3.5 text-gold-400" /> Avg Tuition
              </span>
              <span className="font-bold text-white text-sm sm:text-base">{country.avgCost}</span>
            </div>
            <div className="bg-navy-800/80 border border-navy-700 p-4 rounded-xl">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-gold-400" /> Stay-Back Rights
              </span>
              <span className="font-bold text-white text-sm sm:text-base">{country.stayBack}</span>
            </div>
            <div className="bg-navy-800/80 border border-navy-700 p-4 rounded-xl col-span-2 md:col-span-1">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-gold-400" /> Next Intakes
              </span>
              <span className="font-bold text-white text-sm sm:text-base">{country.intakes}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky CTA Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Main Information Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Tab Navigation */}
            <div className="flex border-b border-slate-200 space-x-6 text-sm font-semibold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3 transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-gold-500 text-navy-900 font-bold'
                    : 'text-slate-500 hover:text-navy-900'
                }`}
              >
                Overview & Courses
              </button>
              <button
                onClick={() => setActiveTab('universities')}
                className={`pb-3 transition-colors cursor-pointer ${
                  activeTab === 'universities'
                    ? 'border-b-2 border-gold-500 text-navy-900 font-bold'
                    : 'text-slate-500 hover:text-navy-900'
                }`}
              >
                Universities ({countryUniversities.length})
              </button>
              <button
                onClick={() => setActiveTab('visa')}
                className={`pb-3 transition-colors cursor-pointer ${
                  activeTab === 'visa'
                    ? 'border-b-2 border-gold-500 text-navy-900 font-bold'
                    : 'text-slate-500 hover:text-navy-900'
                }`}
              >
                Visa Process
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">
                    Why Choose {country.name} for Your Higher Education?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {country.overview} Studying in {country.name} equips you with internationally accredited qualifications, high standard of living, and pathways to global career opportunities.
                  </p>

                  <h4 className="text-sm font-bold text-navy-900 mt-6 mb-3">
                    In-Demand Disciplines:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {country.popularCourses.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">
                    Standard Admission Requirements
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Academic Background:</strong> {country.admissionMin}.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Language Proficiency:</strong> {country.ieltsMin}.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Documentation:</strong> Statement of Purpose, 2 academic LORs, and updated CV.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 2: Universities */}
            {activeTab === 'universities' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-900">
                  Top Curated Universities in {country.name}
                </h3>
                {countryUniversities.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {countryUniversities.map((uni) => (
                      <div key={uni.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <span className="text-xs font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded">
                          {uni.ranking}
                        </span>
                        <h4 className="text-base font-bold text-navy-900 mt-2">{uni.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{uni.city}</p>
                        <p className="text-xs text-slate-700 font-semibold mt-3">Tuition: {uni.tuitionRange}</p>
                        <Link 
                          to={`/universities?country=${country.slug}`}
                          className="mt-4 inline-block text-xs font-bold text-gold-600 hover:underline"
                        >
                          View Program Details →
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">More institutions being updated for this destination.</p>
                )}
              </div>
            )}

            {/* Tab 3: Visa Process */}
            {activeTab === 'visa' && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-navy-900 mb-6">
                  {country.name} Student Visa Roadmap
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Offer Acceptance & Visa Papers", desc: "Accept university offer and secure CAS / I-20 / LOA." },
                    { title: "Financial Proof Verification", desc: "Verify required living cost deposits and tuition fee sponsorship." },
                    { title: "Visa Fee & Biometrics Appointment", desc: "Complete online visa petition, pay embassy fees, and schedule biometric fingerprinting." },
                    { title: "Passport Stamping & Arrival", desc: "Receive entry vignette and prepare travel insurance and accommodation." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy-900">{step.title}</h4>
                        <p className="text-xs text-slate-600 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Consultation Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white p-6 rounded-2xl border border-slate-200 shadow-xl">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
                Free Guidance
              </span>
              <h3 className="text-xl font-bold text-navy-900">
                Planning to Study in {country.name}?
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Schedule a 1-on-1 session with our country specialist to evaluate your profile eligibility and receive an intake roadmap.
              </p>

              <div className="mt-6 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Free eligibility assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Verified university shortlists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Visa filing & SOP assistance</span>
                </div>
              </div>

              <Link to={`/book-counselling?country=${country.slug}`} className="block mt-6">
                <Button variant="primary" size="md" className="w-full font-bold">
                  Book Counselling For {country.name}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

