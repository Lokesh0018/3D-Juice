import React, { useEffect, useState } from 'react';
import Magnetic from './Magnetic';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-area">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#paint0_linear)"/>
             <defs>
                <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#f97316"/>
                   <stop offset="1" stopColor="#ec4899"/>
                </linearGradient>
             </defs>
          </svg>
          <span className="logo-text">Nano Banana</span>
        </div>
        <div className="nav-actions">
          <Magnetic>
            <button className="order-btn">Order Now</button>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
