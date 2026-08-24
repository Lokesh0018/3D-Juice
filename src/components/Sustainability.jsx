import React from 'react';
import { motion } from 'framer-motion';
import './Sustainability.css';

const Sustainability = () => {
  return (
    <div className="sustainability-container ">
      <div className="sus-grid">
        <div 
          className="sus-card"
         
         
         
         
        >
          <div className="sus-icon">♻️</div>
          <h3>Zero Waste Packaging</h3>
          <p>Our bottles are made from 100% recycled glass, completely eliminating single-use plastics from our supply chain.</p>
        </div>
        
        <div 
          className="sus-card"
         
         
         
         
        >
          <div className="sus-icon">💧</div>
          <h3>Water Conservation</h3>
          <p>We utilize advanced drip irrigation techniques in our orchards, saving millions of gallons of water annually.</p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
