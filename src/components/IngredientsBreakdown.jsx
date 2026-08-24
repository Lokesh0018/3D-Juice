import React from 'react';
import { motion } from 'framer-motion';
import { childVariants } from './AlternatingSection';
import './IngredientsBreakdown.css';

const IngredientsBreakdown = () => {
  return (
    <section className="ingredients-container">
      <div className="sticky-content">
        <h2 className="section-heading sticky-title">The Anatomy of Perfection</h2>
        
        <motion.div 
          className="ingredients-stack"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          <motion.div className="ingredient-card" variants={childVariants}>
            <span className="ingredient-number">01</span>
            <h3>Pure Alphonso Nectar</h3>
            <p>98% of what you taste is nothing but hand-picked, cold-pressed Alphonso mangoes. No purees, no concentrates.</p>
          </motion.div>

          <motion.div className="ingredient-card" variants={childVariants}>
            <span className="ingredient-number">02</span>
            <h3>Artesian Spring Water</h3>
            <p>Just a splash of reverse-osmosis purified spring water to achieve the perfect, velvety drinking consistency.</p>
          </motion.div>

          <motion.div className="ingredient-card" variants={childVariants}>
            <span className="ingredient-number">03</span>
            <h3>Organic Blue Agave</h3>
            <p>A single drop of low-glycemic blue agave to balance the natural acidity of the fruit, rounding out the flavor profile.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IngredientsBreakdown;
