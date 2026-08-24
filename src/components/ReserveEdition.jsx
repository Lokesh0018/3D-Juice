import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import './ReserveEdition.css';

const ReserveEdition = () => {
  return (
    <section className="reserve-section section-container">
      <div className="reserve-content">
        <motion.div 
          className="reserve-text-block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge">Coming Soon</div>
          <h2 className="section-heading">The First Harvest Reserve</h2>
          <p className="reserve-intro">
            An ultra-limited batch crafted exclusively from the very first mangoes of the season. 
            The First Harvest Reserve offers an intensely concentrated flavor profile and an ethereal golden hue. 
            Only 500 bottles will be produced.
          </p>
          <Magnetic>
            <button className="notify-btn">Join the Waitlist</button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default ReserveEdition;
