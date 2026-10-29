import { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function NavigationItems({ navLinks, onNavigate, mobile = false }) {
  const container = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const close = (event) => {
      if (event.type === 'keydown' && event.key !== 'Escape') return;
      if (event.type === 'pointerdown' && container.current?.contains(event.target)) return;
      container.current?.querySelectorAll('details[open]').forEach((item) => {
        item.open = false;
        if (event.type === 'keydown') item.querySelector('summary')?.focus();
      });
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', close);
    };
  }, []);

  const navigate = () => {
    container.current?.querySelectorAll('details[open]').forEach((item) => { item.open = false; });
    onNavigate?.();
  };
  const itemClass = 'flex items-center justify-between gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold whitespace-nowrap hover:bg-navy-800 hover:text-gold-400 focus-visible:outline focus-visible:outline-gold-400';

  return (
    <div ref={container} className={mobile ? 'flex flex-col gap-2' : 'flex items-center gap-1'}>
      {navLinks.map((link) => link.children ? (
        <details key={link.name} className="relative group" onToggle={(event) => {
          if (event.currentTarget.open) {
            const current = event.currentTarget;
            container.current?.querySelectorAll('details[open]').forEach((item) => { if (item !== current) item.open = false; });
          }
        }}>
          <summary className={`${itemClass} list-none cursor-pointer [&::-webkit-details-marker]:hidden ${link.children.some((child) => child.path?.split('#')[0] === location.pathname) ? 'text-gold-400 bg-navy-800' : 'text-slate-200'}`}>
            {link.name}<ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
          </summary>
          <div className={mobile ? 'mt-2 ml-3 flex flex-col gap-1 border-l border-navy-700 pl-2' : 'absolute left-0 top-full mt-2 w-72 rounded-xl border border-navy-700 bg-navy-950 p-2 shadow-2xl flex flex-col gap-1 max-h-[70vh] overflow-y-auto'}>
            {link.children.map((child) => child.path ? (
              <Link key={child.name} to={child.path} onClick={navigate} className={`${itemClass} whitespace-normal text-slate-200`}>{child.name}</Link>
            ) : (
              <span key={child.name} aria-disabled="true" className="px-3 py-2 text-sm text-slate-500 cursor-not-allowed" title="Page coming soon">{child.name}<span className="ml-2 text-[10px]">Coming soon</span></span>
            ))}
          </div>
        </details>
      ) : (
        <NavLink key={link.name} to={link.path} onClick={navigate} className={({ isActive }) => `${itemClass} ${isActive ? 'text-gold-400 bg-navy-800' : 'text-slate-200'}`}>{link.name}</NavLink>
      ))}
    </div>
  );
}
