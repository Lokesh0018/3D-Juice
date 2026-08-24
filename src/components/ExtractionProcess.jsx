import React from 'react';
import { motion } from 'framer-motion';
import './ExtractionProcess.css';

const ExtractionProcess = () => {
  return (
    <section className="extraction-section section-container">
      <div className="extraction-content">
        <motion.div 
          className="text-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">The Science of Cold-Pressed</h2>
          <p className="extraction-intro">
            Traditional juicing uses spinning blades that generate heat, destroying vital enzymes and oxidizing the fruit. 
            We do things differently.
          </p>
        </motion.div>

        <div className="extraction-grid">
          <motion.div 
            className="extract-step"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="extract-number">01</div>
            <h3>Hydraulic Pressure</h3>
            <p>We apply thousands of pounds of pressure to gently squeeze every drop of liquid from the Alphonso flesh, leaving only dry pulp behind.</p>
          </motion.div>

          <motion.div 
            className="extract-step"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="extract-number">02</div>
            <h3>Zero Heat Applied</h3>
            <p>By completely eliminating heat from the extraction process, the juice retains its brilliant golden color and raw, farm-fresh flavor profile.</p>
          </motion.div>

          <motion.div 
            className="extract-step full-width"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="extract-number">03</div>
            <h3>Nutrient Locked</h3>
            <p>The result is a juice that is biochemically identical to eating a freshly picked mango, teeming with living enzymes and vitamins that your body absorbs instantly.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExtractionProcess;
