export function SectionHeading({ eyebrow, title, children, id, light = false }) {
  return <div className="max-w-2xl">
    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? 'text-gold-400' : 'text-gold-600'}`}>{eyebrow}</p>
    <h2 id={id} className={`mt-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
    {children && <p className={`mt-5 text-base leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>{children}</p>}
  </div>;
}

export function CounsellingPhoto({ photo, className = '', eager = false }) {
  return <figure className={className}>
    <img src={`${import.meta.env.BASE_URL}${photo.path || `images/services/${photo.file}`}`} alt={photo.alt} width={photo.width || (eager ? 1200 : 1000)} height={photo.height || (eager ? 800 : 1500)} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" className={`w-full object-cover object-center rounded-3xl shadow-sm ${eager ? 'aspect-[4/3]' : 'aspect-[16/10] max-h-[560px]'}`} />
    <figcaption className="mt-3 text-[11px] text-slate-500">{photo.caption || 'Illustrative photograph.'} <a href={photo.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gold-600">{photo.credit}</a></figcaption>
  </figure>;
}
