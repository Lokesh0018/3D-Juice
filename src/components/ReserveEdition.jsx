import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import './ReserveEdition.css';

const ReserveEdition = () => {
  return (
    <section className="reserve-section ">
      <div className="reserve-content">
        <div 
          className="reserve-text-block"
         
         
         
         
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
        </div>
      </div>
    </section>
  );
};

export default ReserveEdition;
