import React from 'react';
import { motion } from 'framer-motion';
import './OrchardOrigins.css';

const OrchardOrigins = () => {
  return (
    <section className="orchard-section ">
      <div className="orchard-content">
        <div 
          className="text-block"
         
         
         
         
        >
          <h2 className="section-heading">The Ratnagiri Terroir</h2>
          <p className="orchard-intro">
            Not all mangoes are created equal. The undeniable superiority of our juice begins in the volcanic soils of Ratnagiri, India.
          </p>
        </div>

        <div className="orchard-grid">
          <div 
            className="orchard-card"
           
           
           
           
          >
            <div className="orchard-icon">🌋</div>
            <h3>Volcanic Soil</h3>
            <p>The mineral-rich laterite soil of the Konkan coast imparts a uniquely complex, deeply sweet flavor profile that cannot be replicated anywhere else on Earth.</p>
          </div>

          <div 
            className="orchard-card"
           
           
           
           
          >
            <div className="orchard-icon">🌊</div>
            <h3>Coastal Climate</h3>
            <p>The perfect symphony of Arabian Sea breezes, intense tropical sun, and heavy monsoon rains create the ultimate microclimate for the "King of Mangoes."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrchardOrigins;
