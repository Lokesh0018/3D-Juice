import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import confetti from 'canvas-confetti';
import './HeroIntro.css';

const HeroIntro = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [bgPhase, setBgPhase] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);

      setBgPhase((prevPhase) => {
        if (prevPhase === 0) {
          document.body.classList.add('theme-day');
          return 1;
        }
        return prevPhase;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);



  const words = ["Pure.", "Premium.", "Precise."];

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#8b5cf6', '#60a5fa']
    });
  };

  return (
    <section 
      className="hero-intro-container"
    >
      <img 
        className="hero-bg-video"
        src={bgPhase === 0 ? "/mango assets/landing-night.png" : "/mango assets/landing-day.png"} 
        alt="Background Fallback"
        style={{ zIndex: -3 }}
      />
      <AnimatePresence>
        {bgPhase === 0 && (
          <motion.video 
            key="night"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="hero-bg-video"
            src="/mango assets/landing-night.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        )}
        {bgPhase === 1 && (
          <motion.video 
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="hero-bg-video"
            src="/mango assets/landing-transition.mp4" 
            autoPlay 
            muted 
            playsInline
            onEnded={() => setBgPhase(2)}
          />
        )}
        {bgPhase === 2 && (
          <motion.img 
            key="day"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-bg-video"
            src="/mango assets/landing-day.png" 
            alt="Day Background"
          />
        )}
      </AnimatePresence>
      <div className="glass-orb" />

      <div className="hero-content">
        <h1 className="kinetic-heading">
          {words.map((word, idx) => (
            <span className="word-mask" key={idx}>
              <motion.span
                className="gradient-text-liquid"
                initial={{ y: "120%", rotate: 5 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "inline-block" }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
        
        <motion.p
           className="hero-subtitle"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
        >
          Experience the world's most vibrant Alphonso mango juice.
        </motion.p>

        <motion.div
           className="hero-cta-group"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Magnetic>
            <button onClick={triggerConfetti} className="hero-cta-primary">Shop Mango Juice &rarr;</button>
          </Magnetic>
          <Magnetic>
            <button className="hero-cta-secondary">Explore Flavors</button>
          </Magnetic>
        </motion.div>

        <motion.div 
           className="hero-social-proof"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 1.2 }}
        >
           <span className="premium-badge">✦ 100% Organic</span>
           <span className="premium-badge">🌱 No Added Sugar</span>
           <span className="premium-badge">🥭 Cold-Pressed</span>
        </motion.div>
      </div>

      <motion.div 
        className="glowing-scroll-line"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 80, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroIntro;
