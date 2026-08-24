import React from 'react';
import { motion } from 'framer-motion';
import './Founders.css';

const Founders = () => {
  return (
    <section className="founders-section ">
      <div className="founders-content">
        <div 
          className="founders-image-container"
         
         
         
         
        >
          {/* Placeholder for founders image */}
          <div className="founders-img-placeholder"></div>
        </div>

        <div 
          className="founders-text"
         
         
         
         
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
        </div>
      </div>
    </section>
  );
};

export default Founders;
