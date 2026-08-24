import React from 'react';
import { motion } from 'framer-motion';
import './Founders.css';

const Founders = () => {
  return (
    <section className="founders-section section-container">
      <div className="founders-content">
        <motion.div 
          className="founders-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Placeholder for founders image */}
          <div className="founders-img-placeholder"></div>
        </motion.div>

        <motion.div 
          className="founders-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-heading">The Founders' Vision</h2>
          <h3 className="founders-subtitle">A relentless pursuit of perfection.</h3>
          <p>
            "We spent five years traveling across the Indian subcontinent, tasting over 40 varieties of mangoes, before discovering the unparalleled magic of Ratnagiri's Alphonso. We realized the world had never truly tasted a mango in its purest, liquid form."
          </p>
          <p>
            "Our mission became singular: to capture the exact essence of biting into a perfectly ripe, golden Alphonso mango, and bottle it without compromise."
          </p>
          <div className="signature">
            <span className="name">Arjun & Maya</span>
            <span className="title">Founders, The Alphonso Reserve</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
