import React from 'react';
import { motion } from 'framer-motion';
import './HealthBenefits.css';

const HealthBenefits = () => {
  return (
    <section className="health-section section-container">
      <div className="health-content">
        <h2 className="section-heading text-center" style={{ marginBottom: '3rem' }}>Nutritional Brilliance</h2>
        
        <div className="benefits-grid">
          <motion.div 
            className="benefit-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="benefit-icon">🌿</div>
            <h3>100% Organic</h3>
            <p>Sourced exclusively from certified organic orchards, completely free from synthetic pesticides and fertilizers.</p>
          </motion.div>

          <motion.div 
            className="benefit-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="benefit-icon">🚫</div>
            <h3>No Added Sugar</h3>
            <p>We rely solely on the natural, rich sweetness of the Alphonso mango. Zero refined sugars or artificial sweeteners.</p>
          </motion.div>

          <motion.div 
            className="benefit-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="benefit-icon">🛡️</div>
            <h3>Immunity Boost</h3>
            <p>Packed with naturally occurring Vitamin C and antioxidants that support a healthy immune system.</p>
          </motion.div>

          <motion.div 
            className="benefit-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="benefit-icon">👁️</div>
            <h3>Vision Health</h3>
            <p>Exceptionally rich in Vitamin A and Beta-Carotene, essential nutrients for maintaining optimal eye health.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
