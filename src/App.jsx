import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import EnquiryModal from './components/common/EnquiryModal';

// All Pages
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import CountryDetailPage from './pages/CountryDetailPage';
import UniversitiesPage from './pages/UniversitiesPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookCounsellingPage from './pages/BookCounsellingPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Auto-opening Enquiry Modal on website open with quick reopen tab */}
      <EnquiryModal />
      
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/:countrySlug" element={<CountryDetailPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
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
