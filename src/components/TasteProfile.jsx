import React from 'react';
import { motion } from 'framer-motion';
import './TasteProfile.css';

const TasteProfile = () => {
  return (
    <section className="taste-section ">
      <div className="taste-content">
        <div 
          className="text-block"
         
         
         
         
        >
          <h2 className="section-heading">The Sensory Experience</h2>
          <p className="taste-intro">
            Drinking our cold-pressed nectar is not just consumption; it is an immersive sensory journey.
          </p>
        </div>

        <div className="taste-grid">
          <div 
            className="taste-card"
           
           
           
           
          >
            <div className="taste-number">01</div>
            <h3>Aroma</h3>
            <p>A mesmerizingly sweet, floral fragrance that bursts with underlying hints of ripe apricot, peach, and tropical sunshine.</p>
          </div>

          <div 
            className="taste-card"
           
           
           
           
          >
            <div className="taste-number">02</div>
            <h3>Texture</h3>
            <p>Luxuriously thick and velvety. Never watered down or diluted, it coats the palate like liquid gold.</p>
          </div>

          <div 
            className="taste-card"
           
           
           
           
          >
            <div className="taste-number">03</div>
            <h3>Taste</h3>
            <p>Intensely, perfectly sweet with a delicately balanced, subtle tartness that leaves a refreshing, enduring finish.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasteProfile;
