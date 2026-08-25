import React from 'react';
import { motion } from 'framer-motion';
import './QualityControl.css';

const QualityControl = () => {
  return (
    <section className="quality-section ">
      <div className="quality-content">
        <h2 className="section-heading text-center" style={{ marginBottom: '4rem' }}>The Glass Standard</h2>

        <div className="quality-grid">
          <motion.div 
            className="quality-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="quality-icon">🔬</div>
            <h3>Purity Preserved</h3>
            <p>Plastic leaches micro-toxins and alters flavor. Our heavy-weight, UV-protected glass ensures the nectar touches nothing but purity.</p>
          </motion.div>

          <motion.div 
            className="quality-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="quality-icon">♻️</div>
            <h3>Infinite Recycling</h3>
            <p>True luxury doesn't cost the Earth. Our glass bottles are 100% infinitely recyclable, maintaining the highest standard of sustainability.</p>
          </motion.div>

          <motion.div 
            className="quality-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="quality-icon">❄️</div>
            <h3>Thermal Stability</h3>
            <p>Glass maintains the perfect chill significantly longer than plastic, delivering an icy, refreshing experience from the first pour to the last drop.</p>
          </motion.div>

          <motion.div 
            className="quality-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="quality-icon">♻️</div>
            <h3>Zero Waste Packaging</h3>
            <p>Our bottles are made from 100% recycled glass, completely eliminating single-use plastics from our supply chain.</p>
          </motion.div>
          
          <motion.div 
            className="quality-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="quality-icon">💧</div>
            <h3>Water Conservation</h3>
            <p>We utilize advanced drip irrigation techniques in our orchards, saving millions of gallons of water annually.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
