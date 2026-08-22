import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroIntro.css';

const HeroIntro = () => {
  return (
    <motion.div 
      className="hero-intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Out of focus aesthetic elements */}
      <motion.img 
        src="/assets/splash.png" 
        alt="Juice Splash"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', filter: 'blur(8px) drop-shadow(0 20px 20px rgba(0,0,0,0.5))', zIndex: 1 }}
      />
      <motion.img 
        src="/assets/leaf.png" 
        alt="Leaf"
        initial={{ opacity: 0, y: 100, rotate: 45 }}
        animate={{ opacity: 0.8, y: 0, rotate: 15 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{ position: 'absolute', bottom: '15%', left: '10%', width: '150px', filter: 'blur(4px)', zIndex: 2 }}
      />
      <motion.img 
        src="/assets/slice1.png" 
        alt="Mango Slice"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.7, x: 0, rotate: -20 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        style={{ position: 'absolute', top: '20%', left: '5%', width: '200px', filter: 'blur(6px)', zIndex: 2 }}
      />
      <motion.h1 
         initial={{ y: 50, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         whileHover={{ scale: 1.05, skewX: -5, skewY: 2, letterSpacing: "5px" }}
         transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
      >
         Pure. Premium. Pressed.
      </motion.h1>
    </motion.div>
  );
};

export default HeroIntro;
