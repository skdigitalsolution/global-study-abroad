import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-wide';

  const variants = {
    // Premium Metallic Golden Orange / Yellow-Gold Gradient
    primary: 'bg-gradient-to-r from-amber-500 via-gold-500 to-amber-600 hover:from-amber-600 hover:to-gold-600 text-navy-950 shadow-md hover:shadow-xl hover:shadow-gold-500/25 border border-gold-400/40 focus:ring-gold-500 active:scale-[0.98]',
    
    // Deep Midnight Navy Gradient with Gold Hover
    secondary: 'bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 hover:from-navy-900 hover:to-navy-700 text-white shadow-md hover:shadow-xl hover:shadow-navy-900/30 border border-navy-700/60 focus:ring-navy-800 active:scale-[0.98]',
    
    // Crisp White Card Button
    white: 'bg-white hover:bg-slate-50 text-navy-900 shadow-sm hover:shadow-md border border-slate-200 focus:ring-slate-300 active:scale-[0.98]',
    
    // Elegant Golden Border Outline
    outlineGold: 'border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 hover:shadow-lg hover:shadow-gold-500/20 focus:ring-gold-500 active:scale-[0.98]',
    
    // Dark Navy Border Outline
    outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white focus:ring-navy-900 active:scale-[0.98]',
    
    // Ghost
    ghost: 'text-slate-700 hover:text-navy-950 hover:bg-slate-100/80 focus:ring-slate-300',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
