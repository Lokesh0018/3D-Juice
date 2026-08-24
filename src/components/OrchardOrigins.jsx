import React from 'react';
import { motion } from 'framer-motion';
import './OrchardOrigins.css';

const OrchardOrigins = () => {
  return (
    <section className="orchard-section section-container">
      <div className="orchard-content">
        <motion.div 
          className="text-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">The Ratnagiri Terroir</h2>
          <p className="orchard-intro">
            Not all mangoes are created equal. The undeniable superiority of our juice begins in the volcanic soils of Ratnagiri, India.
          </p>
        </motion.div>

        <div className="orchard-grid">
          <motion.div 
            className="orchard-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="orchard-icon">🌋</div>
            <h3>Volcanic Soil</h3>
            <p>The mineral-rich laterite soil of the Konkan coast imparts a uniquely complex, deeply sweet flavor profile that cannot be replicated anywhere else on Earth.</p>
          </motion.div>

          <motion.div 
            className="orchard-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="orchard-icon">🌊</div>
            <h3>Coastal Climate</h3>
            <p>The perfect symphony of Arabian Sea breezes, intense tropical sun, and heavy monsoon rains create the ultimate microclimate for the "King of Mangoes."</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrchardOrigins;
