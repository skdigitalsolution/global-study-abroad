import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Har route transition par window ko top par reset karta hai
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

