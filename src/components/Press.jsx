import React from 'react';
import { motion } from 'framer-motion';
import './Press.css';

const Press = () => {
  return (
    <section className="press-section section-container">
      <div className="press-content">
        <h2 className="section-heading text-center" style={{ marginBottom: '4rem' }}>Critical Acclaim</h2>
        
        <div className="press-grid">
          <motion.div 
            className="press-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="publication">VOGUE</div>
            <p className="quote">"The Dom Pérignon of fruit juices. It completely redefines luxury wellness."</p>
          </motion.div>

          <motion.div 
            className="press-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="publication">GQ</div>
            <p className="quote">"An intensely vibrant flavor profile that demands to be savored slowly."</p>
          </motion.div>

          <motion.div 
            className="press-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="publication">Bon Appétit</div>
            <p className="quote">"The absolute pinnacle of cold-pressed nectar. Nothing else comes close."</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Press;
