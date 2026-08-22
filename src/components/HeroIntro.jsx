import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Magnetic from './Magnetic';
import './HeroIntro.css';

const HeroIntro = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const splashX = useTransform(mouseX, [-1, 1], [-30, 30]);
  const splashY = useTransform(mouseY, [-1, 1], [-30, 30]);
  const leafX = useTransform(mouseX, [-1, 1], [20, -20]);
  const leafY = useTransform(mouseY, [-1, 1], [20, -20]);
  const sliceX = useTransform(mouseX, [-1, 1], [40, -40]);
  const sliceY = useTransform(mouseY, [-1, 1], [40, -40]);

  const words = ["Pure.", "Premium.", "Pressed."];

  return (
    <motion.div 
      className="hero-intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-orb" />

      {/* Out of focus aesthetic elements with mouse parallax */}
      <motion.div style={{ position: 'absolute', top: '10%', right: '5%', zIndex: 1, x: splashX, y: splashY }}>
        <motion.img 
          src="/assets/splash.png" 
          alt="Juice Splash"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 0, y: [0, -20, 0] }}
          transition={{ duration: 1.5, ease: "easeOut", y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          style={{ width: '400px', filter: 'blur(8px) drop-shadow(0 20px 20px rgba(0,0,0,0.5))' }}
        />
      </motion.div>

      <motion.div style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 2, x: leafX, y: leafY }}>
        <motion.img 
          src="/assets/leaf.png" 
          alt="Leaf"
          initial={{ opacity: 0, y: 100, rotate: 45 }}
          animate={{ opacity: 0.8, y: 0, rotate: 15, x: [0, -15, 0] }}
          transition={{ duration: 1.2, delay: 0.3, x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
          style={{ width: '150px', filter: 'blur(4px)' }}
        />
      </motion.div>

      <motion.div style={{ position: 'absolute', top: '20%', left: '5%', zIndex: 2, x: sliceX, y: sliceY }}>
        <motion.img 
          src="/assets/slice1.png" 
          alt="Mango Slice"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.7, x: 0, rotate: -20, y: [0, 15, 0] }}
          transition={{ duration: 1.4, delay: 0.5, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.4 } }}
          style={{ width: '200px', filter: 'blur(6px)' }}
        />
      </motion.div>

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
            <button className="hero-cta-primary">Shop Mango Juice &rarr;</button>
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
    </motion.div>
  );
};

export default HeroIntro;
