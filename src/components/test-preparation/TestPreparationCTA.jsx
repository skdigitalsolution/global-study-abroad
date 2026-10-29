import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function TestPreparationCTA() {
  return (
    <section id="enquiry" aria-labelledby="test-consultation-title" className="max-w-7xl mx-auto px-5 sm:px-8 pt-3 pb-20 scroll-mt-28">
      <div className="bg-gold-100 border border-gold-400/40 rounded-3xl p-7 sm:p-10 lg:p-12 grid lg:grid-cols-[1fr_auto] items-center gap-8">
        <div>
          <MessageCircle size={28} className="text-navy-700 mb-5" aria-hidden="true" />
          <p className="text-xs uppercase tracking-widest font-bold text-gold-600">Bring your questions into focus</p>
          <h2 id="test-consultation-title" className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 max-w-2xl">Not sure which exam belongs in your plan?</h2>
          <p className="text-sm text-slate-600 mt-5 leading-relaxed max-w-2xl">Prepare a counselling enquiry with your target programmes, the requirements you have found and the questions you would like to discuss.</p>
        </div>
        <div className="max-w-sm">
          <Link to="/services/counselling#enquiry" className="inline-flex items-center justify-center gap-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white px-6 py-4 text-sm font-bold focus-visible:outline-2 focus-visible:outline-gold-600">Prepare a consultation enquiry <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <p className="text-xs text-slate-600 leading-relaxed mt-4">The linked form prepares an unsent draft only. It does not book a session or confirm coaching availability.</p>
        </div>
      </div>
    </section>
  );
}
