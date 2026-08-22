import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroIntro.css';

const HeroIntro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="hero-intro-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             whileHover={{ scale: 1.05, skewX: -5, skewY: 2, letterSpacing: "5px" }}
             transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
             style={{ cursor: "none" }}
          >
             Pure. Premium. Pressed.
          </motion.h1>
          <motion.div 
             className="scroll-indicator"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
          >
             <p>Scroll to Explore</p>
             <motion.div 
                className="mouse-icon"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
             >
                <div className="wheel"></div>
             </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroIntro;
