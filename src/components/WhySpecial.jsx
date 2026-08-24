import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './WhySpecial.css';

const WhySpecial = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Heading opacity: visible from 0 to 0.85, then fades out by 0.95
  const headingOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  // --- Container 01 (SUGAR) ---
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

  // --- Container 02 (PULP) ---
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

  // --- Container 03 (WATER) ---
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
    <div ref={containerRef} className="special-container" id="why-special">
      <div className="special-sticky">
        <div className="cinematic-overlay" />

        <motion.div className="special-heading-wrapper" style={{ opacity: headingOpacity }}>
          <h2 className="section-heading">Why It’s Special</h2>
          <p className="special-bullets">
            <span>&bull; Rich in Vitamin C</span>
            <span>&bull; No preservatives</span>
            <span>&bull; 100% fruit</span>
          </p>
        </motion.div>

        <motion.div 
          className="special-feature feature-left" 
          style={{ x: f1X, y: f1Y, opacity: f1Opacity, border: f1Border, boxShadow: f1Shadow }}
        >
          <span className="editorial-number">01</span>
          <h4 className="editorial-label">SUGAR</h4>
          <h3 className="editorial-stat">0g</h3>
        </motion.div>

        <motion.div 
          className="special-feature feature-right" 
          style={{ x: f2X, y: f2Y, opacity: f2Opacity, border: f2Border, boxShadow: f2Shadow }}
        >
          <span className="editorial-number">02</span>
          <h4 className="editorial-label">PULP</h4>
          <h3 className="editorial-stat">100%</h3>
        </motion.div>

        <motion.div 
          className="special-feature feature-left" 
          style={{ x: f3X, y: f3Y, opacity: f3Opacity, border: f3Border, boxShadow: f3Shadow }}
        >
          <span className="editorial-number">03</span>
          <h4 className="editorial-label">WATER</h4>
          <h3 className="editorial-stat">0%</h3>
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

export default WhySpecial;
