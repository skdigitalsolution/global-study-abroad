import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Search, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center py-20 px-4 text-center bg-slate-50">
      <div className="w-20 h-20 rounded-2xl bg-gold-100 text-gold-600 flex items-center justify-center mb-6 shadow-sm">
        <Compass className="w-10 h-10 animate-spin" />
      </div>

      <span className="text-xs font-extrabold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-200 mb-3">
        Error 404
      </span>

      <h1 className="text-4xl sm:text-5xl font-black text-navy-900 tracking-tight">
        Lost in Transit?
      </h1>

      <p className="mt-3 text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
        Even the best study abroad journeys encounter brief detours. The page you are looking for has been relocated or doesn't exist.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link to="/">
          <Button variant="primary" size="md" className="font-bold">
            <Home className="w-4 h-4" /> Return to Homepage
          </Button>
        </Link>
        <Link to="/universities">
          <Button variant="outline" size="md">
            <Search className="w-4 h-4" /> Browse Universities
          </Button>
        </Link>
      </div>
    </div>
  );
}

