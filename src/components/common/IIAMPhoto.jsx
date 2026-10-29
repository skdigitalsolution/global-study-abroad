// The photo metadata keeps the description, dimensions and official credit together.
export default function IIAMPhoto({ photo, className = '', frameClassName = 'aspect-[4/3]', imageClassName = '', eager = false }) {
  return (
    <figure className={`min-w-0 ${className}`}>
      <div className={`overflow-hidden rounded-2xl bg-navy-50 ${frameClassName}`}>
        <img
          src={`${import.meta.env.BASE_URL}${photo.path}`}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`h-full w-full object-cover ${imageClassName}`}
          style={{ objectPosition: photo.position || 'center' }}
        />
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
        {photo.caption}{' '}
        <a href={photo.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gold-600 focus-visible:outline-2 focus-visible:outline-gold-500">
          Source: IIAM College<span className="sr-only"> (new tab)</span>
        </a>
      </figcaption>
    </figure>
  );
}
