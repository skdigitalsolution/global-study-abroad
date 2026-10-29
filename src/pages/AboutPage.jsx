import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Plane, 
  Award, 
  Target, 
  Compass, 
  HeartHandshake, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Utensils,
  Shirt,
  Heart,
  Trees
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { IIAMLearningEnvironment, IIAMPracticalPhotos, IIAMStudentLife } from '../components/about/IIAMImageSections';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('management');

  const specializations = [
    { name: "Human Resource (HR)", desc: "Talent acquisition, corporate culture & HR consultancy" },
    { name: "Financial Management", desc: "Corporate finance, banking & investment analysis" },
    { name: "Operations & Supply Chain", desc: "Logistics, supply chain & operational workflow" },
    { name: "Information Technology (IT)", desc: "Enterprise IT solutions & business analytics" },
    { name: "Marketing Management", desc: "Digital branding, consumer behavior & market growth" },
    { name: "Aviation & Airport Handling", desc: "Airlines, ground handling & airport operations" },
    { name: "Hospitality & Hotel Chains", desc: "Five-star hotel administration & guest relations" },
    { name: "Travel, Tourism & Cruise", desc: "Global tourism networks & cruise management" },
    { name: "Event Management", desc: "Corporate conferences, luxury galas & expositions" }
  ];

  const trustInitiatives = [
    {
      icon: BookOpen,
      title: "Education for Underprivileged",
      desc: "Providing quality education, study kits, and scholarships to disadvantaged students."
    },
    {
      icon: Utensils,
      title: "Food & Nutrition Support",
      desc: "Distributing nutritious meals and essential provisions to underprivileged children and families."
    },
    {
      icon: Shirt,
      title: "Clothing & Basic Necessities",
      desc: "Delivering clothing and vital personal items to marginalized community members."
    },
    {
      icon: Heart,
      title: "Care for the Elderly",
      desc: "Supporting old age homes to provide compassionate care and enhance the quality of life of senior citizens."
    },
    {
      icon: Trees,
      title: "Swachh Bharat Abhiyan",
      desc: "Active participation in community sanitation drives aiming for an open defecation-free India."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Header */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-navy-900">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-semibold">About Us</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gold-100 text-gold-600 border border-gold-200 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            Registered Under Trust Act 1950, Maharashtra
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-tight">
            Empowering Society Through Quality Education & Professional Excellence
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded under the visionary auspices of <strong>JAYSHREE CHARITABLE TRUST</strong>, we cultivate industry-ready leaders in Business Management, Aviation, and Hospitality through our two premier institutes.
          </p>
        </div>

        <IIAMLearningEnvironment />

        {/* Jayshree Charitable Trust Spotlight Card */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white rounded-3xl p-8 sm:p-12 border border-navy-700 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-2">
                Philanthropic Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                JAYSHREE CHARITABLE TRUST
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                <strong>“JAYSHREE CHARITABLE TRUST”</strong> is registered under the <em>Trust Act 1950 in Maharashtra</em> with a holistic vision of serving society in diverse humanitarian ways. We believe that societal progress is driven equally by compassionate social welfare and rigorous professional education.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Through our two renowned flagship institutes — <strong>Imperial Institute of Advanced Management</strong> and <strong>Imperial Institute of Aviation and Management</strong> — we are dedicated to transforming ambitious youth into competent, ethical, and industry-ready professionals.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs bg-navy-800/80 border border-navy-600 px-3 py-1.5 rounded-lg text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-gold-400" /> Reg. Trust Act 1950
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-navy-800/80 border border-navy-600 px-3 py-1.5 rounded-lg text-slate-200">
                  <Award className="w-4 h-4 text-gold-400" /> 2 Premier Academic Institutes
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-navy-800/80 border border-navy-600 px-3 py-1.5 rounded-lg text-slate-200">
                  <HeartHandshake className="w-4 h-4 text-gold-400" /> Swachh Bharat Abhiyan Partner
                </span>
              </div>
            </div>

            {/* Trust Social Welfare Pillars */}
            <div className="lg:col-span-5 bg-navy-900/80 p-6 rounded-2xl border border-navy-700">
              <h3 className="text-sm font-bold text-gold-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" /> Community Welfare Causes
              </h3>
              <div className="space-y-3.5">
                {trustInitiatives.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <div className="w-7 h-7 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-slate-400 text-[11px] mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Vision & Mission Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-gold-400 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gold-50 text-gold-600 flex items-center justify-center mb-6 shadow-sm">
              <Compass className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
              Guiding Principle
            </span>
            <h3 className="text-2xl font-black text-navy-900 mb-3">Our Vision</h3>
            <p className="text-base text-slate-700 font-medium leading-relaxed">
              “To be the largest source of education & career handling for management professionals in India.”
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>National Career Empowerment Leader</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-navy-700 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-sm">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-navy-700 uppercase tracking-wider block mb-1">
              Core Purpose
            </span>
            <h3 className="text-2xl font-black text-navy-900 mb-3">Our Mission</h3>
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                <span>To produce competent, disciplined, and qualified professionals for the benefit of society globally.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                <span>To strive for a productive partnership between the industry and the institute.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dual Institutes Presentation Section */}
        <div className="mb-16">
          <SectionTitle
            badge="Two Renowned Institutes"
            title="Centres of Academic & Industry Excellence"
            subtitle="Explore how our dual institutes prepare students with cutting-edge theoretical rigor and direct corporate access."
            align="center"
          />

          {/* Institute Tab Selector */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-col sm:flex-row bg-slate-200/80 p-1.5 rounded-2xl gap-2">
              <button
                onClick={() => setActiveTab('management')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'management'
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'text-slate-700 hover:text-navy-900'
                }`}
              >
                <Building2 className="w-4 h-4 text-gold-400" />
                IIAM — Advanced Management
              </button>
              <button
                onClick={() => setActiveTab('aviation')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'aviation'
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'text-slate-700 hover:text-navy-900'
                }`}
              >
                <Plane className="w-4 h-4 text-gold-400" />
                IIAM — Aviation & Management
              </button>
            </div>
          </div>

          {/* Tab 1: Imperial Institute of Advanced Management */}
          {activeTab === 'management' && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
                    Postgraduate & Undergraduate Management
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy-900 mt-1">
                    Imperial Institute of Advanced Management (IIAM)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-navy-50 text-navy-900 border border-navy-200 text-xs font-bold px-3 py-1.5 rounded-full">
                    Industry-Ready Graduates
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm text-slate-600 leading-relaxed">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-base font-bold text-navy-900">
                    Fostering Academic Excellence & Global Business Competence
                  </h4>
                  <p>
                    The mission of the IIAM is to foster academic excellence by imparting quality education at the Postgraduate & undergraduate level, and research opportunities at graduate levels with empowered faculty and staff.
                  </p>
                  <p>
                    Students are provided with a strong academic foundation in business and are prepared to become global citizens who are productive, competent, environmentally conscious, ethical professionals with social responsibility.
                  </p>
                  <p>
                    The IIAM cultivates a highly interactive, student-centric, and conducive learning environment that is embedded with state-of-the-art instructional methodologies and the development of leadership and lifelong learning skills in its students.
                  </p>
                  <p className="font-semibold text-navy-900">
                    IIAM is one of the most desired institutes in India which graduates industry-ready professionals. We have been a strategic alliance partner with various MNCs, airlines, hotels, travel, cruise, and event management companies to offer internship and placement assistance to the students.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                    Infrastructure & Campus Facilities
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Audio-Visual Classrooms:</strong> State-of-the-art instructional technology.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Comprehensive Library:</strong> Extensive management books, journals & digital archives.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>In-House Placement Cell:</strong> Direct access to top MNC job openings & internships.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Corporate Training Division:</strong> HR consultancy for top multinational companies.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Modern Pantry & Amenities:</strong> Comfortable spaces for peer discussion & relaxation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Imperial Institute of Aviation and Management */}
          {activeTab === 'aviation' && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
                    Aviation, Airport Handling & Hospitality
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy-900 mt-1">
                    Imperial Institute of Aviation and Management (IIAM)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-gold-50 text-gold-700 border border-gold-200 text-xs font-bold px-3 py-1.5 rounded-full">
                    Aviation Alliances
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm text-slate-600 leading-relaxed">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-base font-bold text-navy-900">
                    Entering the Service Industry with a Decisive Competitive Edge
                  </h4>
                  <p>
                    IIAM is a leading institute that focuses on providing world-class education to its students and enables them to enter the service industry with an edge. We have been enhancing the skill set of our students to offer them a successful career by offering <strong>Certification Courses, Undergraduate and Postgraduate Courses</strong>.
                  </p>
                  <p>
                    Students at IIAM get the benefit of experience and knowledge from a team of experts who have contributed substantial content and knowledge to the courses to provide the students with best practices in <strong>Airline, Airport, Hotel, Travel & Tourism, and Event industries</strong>.
                  </p>
                  <p>
                    We are successfully building and maintaining good, respectable relationships with Airlines, prominent ground handling agencies, leading Hotel chains, and other key organizations in Aviation, Hospitality, and allied sectors.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                    Service Sector Alliances & Pathways
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Commercial Airlines:</strong> Direct cabin crew and ground staff pipelines.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Ground Handling Agencies:</strong> Airport terminal management & flight dispatch.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Luxury Hotel Chains:</strong> Front office, guest relations & F&B operations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Travel, Cruise & Events:</strong> Global itinerary planning & gala management.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <IIAMPracticalPhotos />
            </div>
          )}
        </div>

        <IIAMStudentLife />

        {/* Specializations Grid */}
        <div className="mb-16">
          <SectionTitle
            badge="Diverse Disciplines"
            title="Key Specializations Offered at IIAM"
            subtitle="Equipping students with industry-relevant competencies across high-growth domestic and international sectors."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-gold-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {spec.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2 pl-11">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Location & Contact Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Campus Info */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block">
                Official Campus Headquarters
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-navy-900">
                Imperial Institute of Advanced Management
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with our admissions and administrative office for program inquiries, campus walkthroughs, and enrollment guidance.
              </p>

              <div className="space-y-4 text-xs text-slate-700 border-t border-slate-100 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-900">Campus Address:</strong>
                    <span>Admin Building, Ideal College Campus, Bhal Malang Road Kalyan (E), Thane, Maharashtra - 421306</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <div>
                    <strong className="block text-navy-900">Direct Helpline:</strong>
                    <div className="flex flex-wrap gap-2">
                      <a href="tel:+919326632584" className="text-navy-900 hover:text-gold-600 font-semibold">+91 9326632584</a>
                      <span>|</span>
                      <a href="tel:+919326775718" className="text-navy-900 hover:text-gold-600 font-semibold">+91 9326775718</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <div>
                    <strong className="block text-navy-900">Email Inquiries:</strong>
                    <a href="mailto:admin@iiamedu.com" className="text-navy-900 hover:text-gold-600 font-semibold">admin@iiamedu.com</a>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="https://goo.gl/maps/DFMJp93L47G2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" size="md" className="font-bold">
                    <MapPin className="w-4 h-4" /> Open in Google Maps <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </a>
                <Link to="/book-counselling">
                  <Button variant="outline" size="md" className="font-bold">
                    Book an Admission Counseling Session
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Location Showcase Banner */}
            <div className="lg:col-span-5 bg-gradient-to-tr from-navy-950 to-navy-800 text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-2">
                  Student Life & Infrastructure
                </span>
                <h4 className="text-xl font-bold text-white mb-4">
                  Industry-Aligned Campus Environment
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Equipped with audio-visual smart classrooms, digital seminar rooms, resource-rich management libraries, and dedicated mock interview cabins.
                </p>

                <div className="space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" />
                    <span>State-of-the-Art Ideal College Campus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" />
                    <span>In-House Placement Assistance Cell</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" />
                    <span>Experienced Faculty with Decades of Industry Service</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-navy-700/80 text-[11px] text-slate-400">
                “We look forward to your association in our journey of being industry ready.”
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
