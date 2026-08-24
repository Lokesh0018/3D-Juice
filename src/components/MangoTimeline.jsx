import React from 'react';
import { motion } from 'framer-motion';
import { childVariants } from './AlternatingSection';
import './MangoTimeline.css';

const MangoTimeline = () => {
  return (
    <section className="timeline-container">
      <div className="timeline-sticky">
        <h2 className="section-heading text-center" style={{ marginBottom: '2rem' }}>Seed to Sip</h2>
        
        <motion.div 
          className="timeline-track-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {/* Background faint line */}
          <div className="timeline-line-bg"></div>
          {/* Glowing active line removed for horizontal refactoring to keep it simple, or statically rendered */}
          <div className="timeline-line-active" style={{ height: '100%' }}></div>

          <div className="timeline-items">
            <motion.div className="timeline-item left" variants={childVariants}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Monsoon Planting</h3>
                <p>Planted exactly during the first monsoon showers to ensure deep root integration with the volcanic soil.</p>
              </div>
            </motion.div>

            <motion.div className="timeline-item right" variants={childVariants}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Golden Blossom</h3>
                <p>Winter brings the fragrant golden blossoms. Only the strongest flowers survive the coastal sea breeze.</p>
              </div>
            </motion.div>

            <motion.div className="timeline-item left" variants={childVariants}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Dawn Harvest</h3>
                <p>Hand-picked precisely at dawn when the fruit's sugar content is at its absolute peak concentration.</p>
              </div>
            </motion.div>

            <motion.div className="timeline-item right" variants={childVariants}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Cold Press</h3>
                <p>Pressed within 4 hours of harvesting in a zero-oxygen environment to lock in the vibrant color and nutrients.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MangoTimeline;
