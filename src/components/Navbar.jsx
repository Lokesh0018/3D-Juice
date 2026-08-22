import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Magnetic from './Magnetic';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
             <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm-1 14.5v-5H8.5L13 7v5h2.5L11 16.5z" fill="#f97316"/>
          </svg>
          <span className="logo-text">Alphonso Mango</span>
        </div>
        
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#difference" className="nav-link">Difference</a>
          <a href="#flavors" className="nav-link">Flavors</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>

        <div className="nav-actions">
          <Magnetic>
            <button className="order-btn">Order Now</button>
          </Magnetic>
        </div>
      </div>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
    </nav>
  );
};

export default Navbar;
