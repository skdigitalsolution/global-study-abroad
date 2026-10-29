export default function ProcessSteps({ service }) {
  return <section id="process" aria-labelledby="process-heading" className="bg-navy-50 py-16 scroll-mt-28">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <p className="text-xs uppercase tracking-widest font-bold text-gold-600">From questions to action</p>
      <h2 id="process-heading" className="text-3xl font-bold mt-3 mb-10">Your {service.name.toLowerCase()} roadmap</h2>
      <ol className={`grid gap-6 ${service.variant === 'editorial' ? 'md:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-4'}`}>
        {service.steps.map((step, index) => <li key={step.title} className="border-t-2 border-gold-400 pt-5">
          <span className="text-sm font-mono text-gold-600">0{index + 1}</span>
          <h3 className="text-xl font-bold my-3">{step.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
        </li>)}
      </ol>
    </div>
  </section>;
}
