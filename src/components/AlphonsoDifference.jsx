import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AlphonsoDifference.css';

const AlphonsoDifference = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Heading opacity: visible from 0 to 0.85, then fades out by 0.95
  const headingOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  // --- Feature 01 (HANDPICKED) ---
  // enters 0.0 -> 0.15, stays 0.15 -> 0.3, exits 0.3 -> 0.4
  const f1X = useTransform(scrollYProgress, [0.0, 0.15, 0.3, 0.4], ['-100vw', '0vw', '0vw', '-100vw']);
  const f1Opacity = useTransform(scrollYProgress, [0.0, 0.15, 0.3, 0.4], [0, 1, 1, 0]);
  const f1Y = useTransform(scrollYProgress, [0.0, 0.15, 0.3, 0.4], ['0px', '-8px', '-8px', '0px']);
  const f1Border = useTransform(
    scrollYProgress, 
    [0.0, 0.15, 0.3, 0.4], 
    ['1px solid rgba(255, 184, 0, 0.0)', '1px solid rgba(255, 184, 0, 0.4)', '1px solid rgba(255, 184, 0, 0.4)', '1px solid rgba(255, 184, 0, 0.0)']
  );
  const f1Shadow = useTransform(
    scrollYProgress,
    [0.0, 0.15, 0.3, 0.4],
    ['inset 0 1px 0 rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.6)', 'inset 0 1px 0 rgba(255,255,255,0.15), 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255, 184, 0, 0.15)', 'inset 0 1px 0 rgba(255,255,255,0.15), 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255, 184, 0, 0.15)', 'inset 0 1px 0 rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.6)']
  );
  const f1Color = useTransform(scrollYProgress, [0.0, 0.15, 0.3, 0.4], ['rgba(255,255,255,0.3)', '#FFB800', '#FFB800', 'rgba(255,255,255,0.3)']);

  // --- Feature 02 (COLD PRESSED) ---
  // enters 0.3 -> 0.45, stays 0.45 -> 0.6, exits 0.6 -> 0.7
  const f2X = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], ['100vw', '0vw', '0vw', '100vw']);
  const f2Opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], [0, 1, 1, 0]);
  const f2Y = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], ['0px', '-8px', '-8px', '0px']);
  const f2Border = useTransform(
    scrollYProgress, 
    [0.3, 0.45, 0.6, 0.7], 
    ['1px solid rgba(255, 184, 0, 0.0)', '1px solid rgba(255, 184, 0, 0.4)', '1px solid rgba(255, 184, 0, 0.4)', '1px solid rgba(255, 184, 0, 0.0)']
  );
  const f2Shadow = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.6, 0.7],
    ['inset 0 1px 0 rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.6)', 'inset 0 1px 0 rgba(255,255,255,0.15), 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255, 184, 0, 0.15)', 'inset 0 1px 0 rgba(255,255,255,0.15), 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255, 184, 0, 0.15)', 'inset 0 1px 0 rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.6)']
  );
  const f2Color = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], ['rgba(255,255,255,0.3)', '#FFB800', '#FFB800', 'rgba(255,255,255,0.3)']);

  // --- Feature 03 (BOTTLED FRESH) ---
  // enters 0.6 -> 0.75, stays 0.75 -> 0.9, exits 0.9 -> 1.0
  const f3X = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1.0], ['-100vw', '0vw', '0vw', '-100vw']);
  const f3Opacity = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1.0], [0, 1, 1, 0]);
  const f3Y = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1.0], ['0px', '-8px', '-8px', '0px']);
  const f3Border = useTransform(
    scrollYProgress, 
    [0.6, 0.75, 0.9, 1.0], 
    ['1px solid rgba(255, 184, 0, 0.0)', '1px solid rgba(255, 184, 0, 0.4)', '1px solid rgba(255, 184, 0, 0.4)', '1px solid rgba(255, 184, 0, 0.0)']
  );
  const f3Shadow = useTransform(
    scrollYProgress,
    [0.6, 0.75, 0.9, 1.0],
    ['inset 0 1px 0 rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.6)', 'inset 0 1px 0 rgba(255,255,255,0.15), 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255, 184, 0, 0.15)', 'inset 0 1px 0 rgba(255,255,255,0.15), 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255, 184, 0, 0.15)', 'inset 0 1px 0 rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.6)']
  );
  const f3Color = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1.0], ['rgba(255,255,255,0.3)', '#FFB800', '#FFB800', 'rgba(255,255,255,0.3)']);

  return (
    <div ref={containerRef} className="difference-container" id="difference">
      <div className="difference-sticky">
        <div className="cinematic-overlay" />
        
        <motion.div className="difference-heading-wrapper" style={{ opacity: headingOpacity }}>
          <h2 className="section-heading">The Alphonso Difference</h2>
          <p>Made from India's finest Alphonso mangoes, cold-pressed to preserve their naturally rich flavor.</p>
        </motion.div>

        <motion.div 
          className="difference-feature feature-left" 
          style={{ x: f1X, y: f1Y, opacity: f1Opacity, border: f1Border, boxShadow: f1Shadow }}
        >
          <span className="editorial-number">01</span>
          <h3 className="editorial-title">HANDPICKED</h3>
          <hr className="gold-divider" />
          <p className="editorial-desc">Only the ripest, golden fruits are selected from our heritage orchards.</p>
        </motion.div>

        <motion.div 
          className="difference-feature feature-right" 
          style={{ x: f2X, y: f2Y, opacity: f2Opacity, border: f2Border, boxShadow: f2Shadow }}
        >
          <span className="editorial-number">02</span>
          <h3 className="editorial-title">COLD PRESSED</h3>
          <hr className="gold-divider" />
          <p className="editorial-desc">Gentle extraction preserves the vibrant color and vital nutrients.</p>
        </motion.div>

        <motion.div 
          className="difference-feature feature-left" 
          style={{ x: f3X, y: f3Y, opacity: f3Opacity, border: f3Border, boxShadow: f3Shadow }}
        >
          <span className="editorial-number">03</span>
          <h3 className="editorial-title">BOTTLED FRESH</h3>
          <hr className="gold-divider" />
          <p className="editorial-desc">Sealed instantly to lock in the flavor of a perfectly ripe mango.</p>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div className="scroll-progress-indicator" style={{ opacity: headingOpacity }}>
          <motion.span className="progress-step" style={{ color: f1Color }}>01</motion.span>
          <span className="progress-line" />
          <motion.span className="progress-step" style={{ color: f2Color }}>02</motion.span>
          <span className="progress-line" />
          <motion.span className="progress-step" style={{ color: f3Color }}>03</motion.span>
        </motion.div>

      </div>
    </div>
  );
};

export default AlphonsoDifference;
