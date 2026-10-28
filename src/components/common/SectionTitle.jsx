import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-3.5 shadow-sm ${
          light 
            ? 'bg-gradient-to-r from-gold-500/20 to-amber-500/20 text-gold-300 border border-gold-400/40 backdrop-blur-sm' 
            : 'bg-gradient-to-r from-gold-100 to-amber-50 text-gold-600 border border-gold-200/80'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-4.5xl font-black tracking-tight leading-tight ${
        light ? 'text-white' : 'text-navy-950'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
