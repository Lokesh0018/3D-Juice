import React from 'react';
import { motion } from 'framer-motion';
import './TasteProfile.css';

const TasteProfile = () => {
  return (
    <section className="taste-section section-container">
      <div className="taste-content">
        <motion.div 
          className="text-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">The Sensory Experience</h2>
          <p className="taste-intro">
            Drinking our cold-pressed nectar is not just consumption; it is an immersive sensory journey.
          </p>
        </motion.div>

        <div className="taste-grid">
          <motion.div 
            className="taste-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="taste-number">01</div>
            <h3>Aroma</h3>
            <p>A mesmerizingly sweet, floral fragrance that bursts with underlying hints of ripe apricot, peach, and tropical sunshine.</p>
          </motion.div>

          <motion.div 
            className="taste-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="taste-number">02</div>
            <h3>Texture</h3>
            <p>Luxuriously thick and velvety. Never watered down or diluted, it coats the palate like liquid gold.</p>
          </motion.div>

          <motion.div 
            className="taste-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="taste-number">03</div>
            <h3>Taste</h3>
            <p>Intensely, perfectly sweet with a delicately balanced, subtle tartness that leaves a refreshing, enduring finish.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TasteProfile;
