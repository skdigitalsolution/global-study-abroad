import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import { Link } from 'react-router-dom';

// All Pages
import TestPreparationPage from './pages/services/TestPreparationPage';
import CountryUniversitySelectionPage from './pages/services/CountryUniversitySelectionPage';
import ApplicationsAdmissionPage from './pages/services/ApplicationsAdmissionPage';
import ScholarshipsPage from './pages/services/ScholarshipsPage';
import InternshipPage from './pages/services/InternshipPage';
import EducationLoanPage from './pages/services/EducationLoanPage';
import VisaProcessingPage from './pages/services/VisaProcessingPage';
import AlliedServicesPage from './pages/services/AlliedServicesPage';
import CounsellingPage from './pages/services/CounsellingPage';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import CountryDetailPage from './pages/CountryDetailPage';
import NewZealandPage from './pages/NewZealandPage';
import EuropePage from './pages/EuropePage';
import AsiaPage from './pages/AsiaPage';
import UniversitiesPage from './pages/UniversitiesPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BookCounsellingPage from './pages/BookCounsellingPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Link to="/services/counselling#enquiry" className="fixed bottom-5 right-5 z-30 rounded-full bg-gold-400 px-5 py-3 text-sm font-bold text-navy-950 shadow-lg hover:bg-gold-300">Plan your next step</Link>
      
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/new-zealand" element={<NewZealandPage />} />
            <Route path="/destinations/europe" element={<EuropePage />} />
            <Route path="/destinations/asia" element={<AsiaPage />} />
            <Route path="/destinations/:countrySlug" element={<CountryDetailPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/counselling" element={<CounsellingPage />} />
            <Route path="/services/test-preparation" element={<TestPreparationPage />} />
            <Route path="/services/country-university-selection" element={<CountryUniversitySelectionPage />} />
            <Route path="/services/applications-admission" element={<ApplicationsAdmissionPage />} />
            <Route path="/services/scholarships" element={<ScholarshipsPage />} />
            <Route path="/services/internship" element={<InternshipPage />} />
            <Route path="/services/education-loan" element={<EducationLoanPage />} />
            <Route path="/services/visa-processing" element={<VisaProcessingPage />} />
            <Route path="/services/allied-services" element={<AlliedServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-counselling" element={<BookCounsellingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
