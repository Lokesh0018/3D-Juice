import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm-1 14.5v-5H8.5L13 7v5h2.5L11 16.5z" style={{ fill: 'var(--theme-primary)', transition: 'fill 3s ease' }} />
          </svg>
          <span className="logo-text">Alphonso Mango</span>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link">Journey</Link>
          <Link to="/farm" className="nav-link">Farm</Link>
          <Link to="/process" className="nav-link">Process</Link>
          <Link to="/quality" className="nav-link">Quality</Link>
          <Link to="/product" className="nav-link">Product</Link>
          <Link to="/story" className="nav-link">Story</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
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
