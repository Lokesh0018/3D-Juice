import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import confetti from 'canvas-confetti';
import './HeroIntro.css';

const HeroIntro = ({ isLoaded }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [bgPhase, setBgPhase] = useState(0);

  const transitionVideoRef = React.useRef(null);

  useEffect(() => {
    // Pre-warm the video to force the browser to buffer it fully
    if (transitionVideoRef.current) {
      transitionVideoRef.current.load();
    }
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      if (!isLoaded) return;
      
      setBgPhase((prevPhase) => {
        if (prevPhase === 0) {
          // Play instantly bypassing React's render cycle delay
          if (transitionVideoRef.current) {
            transitionVideoRef.current.style.opacity = '1';
            transitionVideoRef.current.play().catch(e => console.log(e));
          }
          const nightVid = document.getElementById('night-video');
          if (nightVid) nightVid.style.display = 'none';

          document.body.classList.add('theme-day');
          return 1;
        }
        return prevPhase;
      });
    };

    const handleMouseMove = (e) => {
      if (!isLoaded) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
      handleInteraction();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [isLoaded]);

  useEffect(() => {
    if (bgPhase < 2) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [bgPhase]);



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
      {bgPhase === 0 && (
        <video
          id="night-video"
          className="hero-bg-video"
          src="/mango assets/landing-night.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      
      <video
        ref={transitionVideoRef}
        className="hero-bg-video"
        src="/mango assets/landing-transition.mp4"
        muted
        playsInline
        preload="auto"
        onEnded={() => setBgPhase(2)}
        style={{ 
          opacity: bgPhase === 1 ? 1 : 0, 
          pointerEvents: 'none', 
          zIndex: -2,
          display: bgPhase < 2 ? 'block' : 'none' 
        }}
      />
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
