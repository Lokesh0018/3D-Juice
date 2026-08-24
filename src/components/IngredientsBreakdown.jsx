import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './IngredientsBreakdown.css';

const IngredientsBreakdown = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate opacity for 3 distinct phases based on scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 0.9, 1], [0, 1, 1, 0]);

  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [50, 0, -50]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [50, 0, -50]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [50, 0, -50]);

  return (
    <section ref={containerRef} className="ingredients-container">
      <div className="sticky-content">
        <h2 className="section-heading sticky-title">The Anatomy of Perfection</h2>
        
        <div className="ingredients-stack">
          <motion.div className="ingredient-card" style={{ opacity: opacity1, y: y1 }}>
            <span className="ingredient-number">01</span>
            <h3>Pure Alphonso Nectar</h3>
            <p>98% of what you taste is nothing but hand-picked, cold-pressed Alphonso mangoes. No purees, no concentrates.</p>
          </motion.div>

          <motion.div className="ingredient-card" style={{ opacity: opacity2, y: y2 }}>
            <span className="ingredient-number">02</span>
            <h3>Artesian Spring Water</h3>
            <p>Just a splash of reverse-osmosis purified spring water to achieve the perfect, velvety drinking consistency.</p>
          </motion.div>

          <motion.div className="ingredient-card" style={{ opacity: opacity3, y: y3 }}>
            <span className="ingredient-number">03</span>
            <h3>Organic Blue Agave</h3>
            <p>A single drop of low-glycemic blue agave to balance the natural acidity of the fruit, rounding out the flavor profile.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsBreakdown;
