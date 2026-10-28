import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { Star, GraduationCap, MapPin, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "M.Sc. Data Science & AI",
      university: "University of Manchester",
      country: "United Kingdom",
      intake: "Fall 2024 (Sample Alumni Profile)",
      quote: "The SOP mentoring team transformed my technical background into a compelling story. I received an unconditional offer and complete visa guidance in record time."
    },
    {
      id: 2,
      name: "Rohan Varma",
      course: "M.S. in Computer Science",
      university: "Northeastern University",
      country: "United States",
      intake: "Spring 2024 (Sample Alumni Profile)",
      quote: "GlobalPath's mock visa interviews gave me the exact confidence needed for the F-1 interview. They helped me evaluate tuition versus post-study STEM OPT opportunities."
    },
    {
      id: 3,
      name: "Ananya Iyer",
      course: "Master of Management",
      university: "McGill University",
      country: "Canada",
      intake: "Fall 2024 (Sample Alumni Profile)",
      quote: "Navigating the Canadian study permit requirements was daunting. The team was prompt, transparent, and guided me seamlessly through the entire GIC and PAL process."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Student Success Stories"
          title="Illustrative Student Journeys & Feedback"
          subtitle="Read how structured guidance helps students gain admissions to universities worldwide."
          align="center"
        />

        <div className="text-center mb-8">
          <span className="inline-block bg-amber-50 text-amber-800 border border-amber-200 text-xs px-3 py-1 rounded-full font-medium">
            Note: All testimonials and profiles below are sample demonstration models.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between relative"
            >
              <div>
                <Quote className="w-8 h-8 text-gold-400/40 mb-4" />
                <div className="flex gap-1 text-gold-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <div className="font-bold text-navy-900">{item.name}</div>
                <div className="text-xs font-semibold text-gold-600 flex items-center gap-1 mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {item.course}
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {item.university}, {item.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

