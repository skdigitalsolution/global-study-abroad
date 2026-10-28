import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  BookOpen, 
  Calendar,
  Sparkles,
  ShieldCheck,
  Star
} from 'lucide-react';
import Button from '../common/Button';

export default function HeroSection() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/universities?country=${selectedCountry}&degree=${selectedDegree}`);
  };

  return (
    <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white overflow-hidden py-16 lg:py-24 border-b border-navy-800/60">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-25">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-500 to-gold-600 blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-blue-600 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-gold-500/15 to-transparent border border-gold-400/30 text-gold-400 text-xs sm:text-sm font-bold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
              Empowering International Careers & Global Education
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Transform Your Study Vision Into A <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-200">
                World-Class Reality.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized mentorship, university selection, SOP refinement, and end-to-end student visa guidance for premier destinations across the UK, USA, Canada, Australia, and Europe.
            </p>

            {/* Benefit Checkmarks */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-200 font-medium">
              <div className="flex items-center gap-2 bg-navy-900/60 px-3 py-1.5 rounded-lg border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>100% Free Profile Assessment</span>
              </div>
              <div className="flex items-center gap-2 bg-navy-900/60 px-3 py-1.5 rounded-lg border border-navy-800">
                <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Certified Education Counselors</span>
              </div>
              <div className="flex items-center gap-2 bg-navy-900/60 px-3 py-1.5 rounded-lg border border-navy-800">
                <Star className="w-4 h-4 text-gold-400 flex-shrink-0 fill-current" />
                <span>Zero Hidden Charges</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/book-counselling" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full">
                  Book Free 1-on-1 Counselling
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/destinations" className="w-full sm:w-auto">
                <Button variant="outlineGold" size="lg" className="w-full">
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Quick Finder Card (Dark Navy + Gold Accents + Light Gray Selects) */}
          <div className="lg:col-span-5">
            <div className="bg-navy-950/90 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-gold-500/30 shadow-2xl shadow-navy-950/80">
              <div className="flex items-center justify-between pb-5 border-b border-navy-800">
                <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center">
                    <Search className="w-4 h-4" />
                  </div>
                  Quick Course Finder
                </h3>
                <span className="text-[11px] text-gold-400 font-bold bg-gold-400/10 border border-gold-400/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Live Search
                </span>
              </div>

              <form onSubmit={handleSearch} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" /> Target Destination
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full bg-navy-900 border border-navy-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 cursor-pointer"
                  >
                    <option value="">All Destinations (Any Country)</option>
                    <option value="uk">United Kingdom (UK)</option>
                    <option value="usa">United States (USA)</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="ireland">Ireland</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-gold-400" /> Degree Level
                  </label>
                  <select
                    value={selectedDegree}
                    onChange={(e) => setSelectedDegree(e.target.value)}
                    className="w-full bg-navy-900 border border-navy-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 cursor-pointer"
                  >
                    <option value="">All Study Levels</option>
                    <option value="Masters">Postgraduate / Masters (1-2 Yrs)</option>
                    <option value="Bachelors">Undergraduate / Bachelors (3-4 Yrs)</option>
                    <option value="Doctorate">PhD / Research</option>
                    <option value="Diploma">Post-Graduate Diploma</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" /> Preferred Intake
                  </label>
                  <select className="w-full bg-navy-900 border border-navy-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 cursor-pointer">
                    <option>Fall 2025 (August - October)</option>
                    <option>Spring 2026 (January - March)</option>
                    <option>Fall 2026 Priority</option>
                  </select>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-3">
                  <Search className="w-4 h-4" /> Find Matching Universities
                </Button>
              </form>

              <p className="mt-4 text-[11px] text-center text-slate-400">
                Explore curated international universities with verified tuition & requirements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
