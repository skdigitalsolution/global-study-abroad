import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, BookOpen, HeartHandshake, Users, Laptop, Compass, Globe2, ShieldCheck, GraduationCap, Lightbulb } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import CareerOpportunities from '../components/careers/CareerOpportunities';

const culture = [
  [BookOpen, 'Learning and Professional Growth', 'We aim to make space for asking questions, sharing knowledge and developing a deeper understanding of international education.'],
  [HeartHandshake, 'Meaningful Student Impact', 'We value clear communication that helps students understand their choices and decide what to research next.'],
  [Users, 'Team Collaboration', 'Our goal is a working culture where colleagues share context, listen carefully and solve problems together.'],
  [Laptop, 'Innovation and Technology', 'We aim to use thoughtful digital tools to organise information and make student journeys easier to navigate.'],
  [Compass, 'Ownership and Responsibility', 'We value people who follow through, acknowledge uncertainty and take care with the information they share.'],
  [Globe2, 'International Education Exposure', 'We want curiosity about different education systems to shape how we learn and support informed decisions.'],
];
const values = [
  [ShieldCheck, 'Integrity', 'Be accurate, transparent and honest about what is known and what still needs checking.'],
  [GraduationCap, 'Student First', 'Listen to each student\u0027s priorities and respect their ability to make their own choices.'],
  [Users, 'Collaboration', 'Share useful context and make room for different perspectives.'],
  [Lightbulb, 'Continuous Learning', 'Keep questioning assumptions and improving how information is understood.'],
];

export default function CareersPage() {
  useEffect(() => {
    const oldTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const oldDescription = description?.content;
    document.title = 'Careers | GlobalPath Study Abroad';
    if (description) description.content = 'Explore GlobalPath career information, our cultural aspirations and company-confirmed opportunities when available.';
    return () => { document.title = oldTitle; if (description) description.content = oldDescription; };
  }, []);

  return (
    <main className="bg-slate-50 text-navy-900">
      <section className="bg-navy-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-7 pb-16 sm:pb-20">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-300 mb-12"><Link to="/" className="hover:text-gold-400">Home</Link><span className="mx-3">/</span><span aria-current="page">Careers</span></nav>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] font-bold text-gold-400">Purpose in the everyday</p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mt-5">Build Your Future With <span className="text-gold-400">GlobalPath</span></h1>
              <p className="text-slate-300 text-lg leading-relaxed mt-6">Help make international education choices easier to understand. Explore the possibility of work built around curiosity, thoughtful guidance and a respect for students' ambitions.</p>
              <div className="flex flex-wrap gap-3 mt-8"><a href="#open-positions" className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 rounded-xl px-5 py-3 text-sm font-bold text-navy-950">Explore Open Positions <ArrowDown size={17} aria-hidden="true" /></a><Link to="/contact" className="inline-flex items-center gap-2 border border-slate-500 rounded-xl px-5 py-3 text-sm font-bold hover:bg-navy-800">Send Your Resume <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
              <p className="text-xs text-slate-400 mt-5 leading-relaxed">Resume enquiries go to the existing Contact page. Ask how to share your resume; no upload service or hiring inbox is connected here, and the current contact form does not send messages.</p>
            </div>
            <figure className="min-w-0"><img src={`${import.meta.env.BASE_URL}images/services/counselling-conversation.jpg`} alt="Two professionals engaged in a thoughtful one-to-one discussion" width="1200" height="800" fetchPriority="high" className="w-full aspect-[4/3] rounded-3xl object-cover border border-navy-700" /><figcaption className="text-[11px] text-slate-400 mt-3">Illustrative workplace photograph, not GlobalPath employees. <a href="https://www.pexels.com/photo/a-professor-talking-to-her-student-5306437/" target="_blank" rel="noopener noreferrer" className="underline">Antoni Shkraba / Pexels</a></figcaption></figure>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16">
        <SectionTitle badge="About GlobalPath" title="Grow Your Career With GlobalPath" align="left" className="mb-0" />
        <div className="text-slate-600 leading-relaxed space-y-4"><p>Study-abroad decisions bring together personal goals and practical questions. A consultancy can help students explore destinations and universities, understand application steps and identify what needs to be checked with official sources.</p><p>That work can also involve organising research on scholarships, test preparation and visa guidance. Our aim is to build a team that approaches those conversations with care, clarity and a willingness to keep learning.</p><Link to="/about" className="inline-flex items-center gap-2 font-bold text-sm text-navy-900 underline underline-offset-4">Explore our story <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
      </section>

      <section className="bg-white border-y border-slate-200"><div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <SectionTitle badge="The culture we aim to build" title="Why Work With Us?" subtitle="These are our aspirations for how we work together, rather than a list of confirmed employee benefits." align="left" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{culture.map(([Icon, title, copy]) => <article key={title} className="rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm"><Icon className="text-gold-600 mb-5" size={26} aria-hidden="true" /><h3 className="text-lg font-bold">{title}</h3><p className="text-sm text-slate-600 leading-relaxed mt-3">{copy}</p></article>)}</div>
      </div></section>

      <section className="bg-navy-900 text-white"><div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <SectionTitle badge="What guides our choices" title="Our Core Values" subtitle="Principles we want to bring into every conversation and decision." light align="left" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">{values.map(([Icon,title,copy]) => <article key={title} className="border-t border-gold-400/50 pt-6"><Icon size={25} className="text-gold-400" aria-hidden="true" /><h3 className="text-xl font-bold mt-4">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mt-3">{copy}</p></article>)}</div>
      </div></section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-10 lg:gap-20">
        <SectionTitle badge="Perks and work culture" title="A place to contribute. A reason to keep learning." subtitle="Our culture goals start with the way people work together, not with unconfirmed benefit promises." align="left" className="mb-0" />
        <div className="space-y-5">{[['Learning through questions','We value time spent understanding a new education system, reviewing information and sharing useful insights.'],['Supportive teamwork','We aim for constructive feedback, respectful communication and recognition of careful, dependable work.'],['Professional development','We want continuous improvement to be a shared responsibility, shaped through reflection and collaboration.']].map(([title,copy]) => <article key={title} className="border-l-2 border-gold-400 pl-5"><h3 className="font-bold">{title}</h3><p className="text-sm text-slate-600 leading-relaxed mt-2">{copy}</p></article>)}<p className="text-xs text-slate-500">Any employment terms and benefits would need to be confirmed for a specific role.</p></div>
      </section>

      <CareerOpportunities />

      <section className="bg-white border-y border-slate-200"><div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <SectionTitle badge="A general guide" title="How Our Hiring Process Works" subtitle="An outline for future confirmed opportunities. Stages and timings would be agreed for each role." align="left" />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">{[['Explore Opportunities','Read a confirmed listing and consider the responsibilities and requirements.'],['Submit Your Application','Follow the approved application instructions provided for that vacancy.'],['Interview and Discussion','Discuss relevant experience, questions and expectations if shortlisted.'],['Hiring Decision','Receive the outcome through the agreed communication channel.']].map(([title,copy],index) => <li key={title} className="border-t-2 border-gold-400 pt-5"><span className="text-xs text-gold-600 font-mono">0{index+1}</span><h3 className="font-bold text-lg mt-3">{title}</h3><p className="mt-3 text-sm text-slate-600 leading-relaxed">{copy}</p></li>)}</ol>
      </div></section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <SectionTitle badge="Life at GlobalPath — our aspirations" title="Good work begins with listening." align="left" className="mb-0" />
        <div className="rounded-3xl bg-gold-50 border border-gold-400/30 p-7 sm:p-10"><p className="text-lg font-semibold leading-relaxed">The culture we want is one where a useful question matters as much as a quick answer.</p><p className="mt-4 text-sm text-slate-600 leading-relaxed">Sharing research, checking assumptions and helping a colleague understand a difficult question are small ways to make the work more thoughtful. Those habits can also help students navigate unfamiliar education choices.</p><p className="mt-5 text-xs text-slate-500">This is a statement of cultural intent, not an employee testimonial.</p></div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20"><div className="bg-navy-900 text-white rounded-3xl p-7 sm:p-12 flex flex-col lg:flex-row gap-8 lg:items-center justify-between"><div className="max-w-xl"><h2 className="text-3xl sm:text-4xl font-bold">Ready to Make an Impact?</h2><p className="mt-4 text-slate-300 leading-relaxed">Explore any confirmed opportunities listed above, or visit our existing contact page to ask how career enquiries should be directed.</p></div><div className="flex flex-wrap gap-3"><a href="#open-positions" className="rounded-xl bg-gold-400 hover:bg-gold-300 px-5 py-3 text-sm font-bold text-navy-950">Explore Open Positions</a><Link to="/contact" className="rounded-xl border border-slate-500 px-5 py-3 text-sm font-bold hover:bg-navy-800">Contact Us</Link></div></div></section>
    </main>
  );
}
