import React from 'react';
import { motion } from 'framer-motion';
import './FarmerPartnerships.css';

const FarmerPartnerships = () => {
  return (
    <section className="farmer-section ">
      <div className="farmer-content">
        <div 
          className="text-block"
         
         
         
         
        >
          <h2 className="section-heading">Generational Farming</h2>
          <p className="farmer-intro">
            True quality cannot be rushed. We partner exclusively with multigenerational farming families who understand the delicate rhythm of the harvest.
          </p>
        </div>

        <div className="farmer-grid">
          <div 
            className="farmer-image"
           
           
           
           
          >
            {/* Placeholder for farmer image */}
          </div>

          <div 
            className="farmer-text-content"
           
           
           
           
          >
            <h3>Ethical Sourcing</h3>
            <p>We pay a premium far above market rates to ensure our farmers can maintain sustainable practices and support their local communities without compromising on quality.</p>
            
            <h3>Hand-Selected Perfection</h3>
            <p>Every single mango is inspected by hand. Only fruits that have reached absolute peak ripeness on the branch are permitted into our cold-press facility.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerPartnerships;
