import React from 'react';
import { motion } from 'framer-motion';
import './CommunityImpact.css';

const CommunityImpact = () => {
  return (
    <section className="impact-section section-container">
      <div className="impact-content">
        <motion.div 
          className="impact-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Empowering Ratnagiri</h2>
          <p>
            Luxury is meaningless without responsibility. For every bottle of Alphonso Reserve sold, 5% of our profits go directly toward building modern educational facilities and clean water infrastructure in the rural farming communities of Maharashtra.
          </p>
          <p>
            When you sip our nectar, you aren't just tasting the finest mango on earth—you are actively investing in the families who made it possible.
          </p>
          
          <div className="impact-stats">
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Schools Built</span>
            </div>
            <div className="stat">
              <span className="stat-number">12k</span>
              <span className="stat-label">Liters of Clean Water</span>
            </div>
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Farming Families Supported</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="impact-image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="impact-img-placeholder"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityImpact;
