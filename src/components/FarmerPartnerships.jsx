import React from 'react';
import { motion } from 'framer-motion';
import './FarmerPartnerships.css';

const FarmerPartnerships = () => {
  return (
    <section className="farmer-section section-container">
      <div className="farmer-content">
        <motion.div 
          className="text-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Generational Farming</h2>
          <p className="farmer-intro">
            True quality cannot be rushed. We partner exclusively with multigenerational farming families who understand the delicate rhythm of the harvest.
          </p>
        </motion.div>

        <div className="farmer-grid">
          <motion.div 
            className="farmer-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Placeholder for farmer image */}
          </motion.div>

          <motion.div 
            className="farmer-text-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Ethical Sourcing</h3>
            <p>We pay a premium far above market rates to ensure our farmers can maintain sustainable practices and support their local communities without compromising on quality.</p>
            
            <h3>Hand-Selected Perfection</h3>
            <p>Every single mango is inspected by hand. Only fruits that have reached absolute peak ripeness on the branch are permitted into our cold-press facility.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FarmerPartnerships;
