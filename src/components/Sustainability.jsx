import React from 'react';
import { motion } from 'framer-motion';
import './Sustainability.css';

const Sustainability = () => {
  return (
    <div className="sustainability-container section-container">
      <div className="sus-grid">
        <motion.div 
          className="sus-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <div className="sus-icon">♻️</div>
          <h3>Zero Waste Packaging</h3>
          <p>Our bottles are made from 100% recycled glass, completely eliminating single-use plastics from our supply chain.</p>
        </motion.div>
        
        <motion.div 
          className="sus-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="sus-icon">💧</div>
          <h3>Water Conservation</h3>
          <p>We utilize advanced drip irrigation techniques in our orchards, saving millions of gallons of water annually.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Sustainability;
