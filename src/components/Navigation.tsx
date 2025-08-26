import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`nav-container${!isVisible ? ' hidden' : ''}`}>
      <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>Home</Link>
      <Link to="/quiz" className={`nav-link${location.pathname === '/quiz' ? ' active' : ''}`}>Quiz</Link>
      <Link to="/journal" className={`nav-link${location.pathname === '/journal' ? ' active' : ''}`}>Journal</Link>
    </nav>
  );
}
