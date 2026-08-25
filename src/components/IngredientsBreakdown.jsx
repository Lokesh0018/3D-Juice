import React from 'react';
import { motion } from 'framer-motion';
import './IngredientsBreakdown.css';

const IngredientsBreakdown = () => {
  return (
    <section className="ingredients-container">
      <div className="sticky-content">
        <h2 className="section-heading sticky-title">The Anatomy of Perfection</h2>
        
        <div className="ingredients-stack">
          <motion.div 
            className="ingredient-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="ingredient-number">01</span>
            <h3>Pure Alphonso Nectar</h3>
            <p>98% of what you taste is nothing but hand-picked, cold-pressed Alphonso mangoes. No purees, no concentrates.</p>
          </motion.div>

          <motion.div 
            className="ingredient-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="ingredient-number">02</span>
            <h3>Artesian Spring Water</h3>
            <p>Just a splash of reverse-osmosis purified spring water to achieve the perfect, velvety drinking consistency.</p>
          </motion.div>

          <motion.div 
            className="ingredient-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
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
