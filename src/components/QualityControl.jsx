import React from 'react';
import { motion } from 'framer-motion';
import './QualityControl.css';

const QualityControl = () => {
  return (
    <section className="quality-section ">
      <div className="quality-content">
        <h2 className="section-heading text-center" style={{ marginBottom: '4rem' }}>The Glass Standard</h2>

        <div className="quality-grid">
          <div 
            className="quality-card"
           
           
           
           
          >
            <div className="quality-icon">🔬</div>
            <h3>Purity Preserved</h3>
            <p>Plastic leaches micro-toxins and alters flavor. Our heavy-weight, UV-protected glass ensures the nectar touches nothing but purity.</p>
          </div>

          <div 
            className="quality-card"
           
           
           
           
          >
            <div className="quality-icon">♻️</div>
            <h3>Infinite Recycling</h3>
            <p>True luxury doesn't cost the Earth. Our glass bottles are 100% infinitely recyclable, maintaining the highest standard of sustainability.</p>
          </div>

          <div 
            className="quality-card"
           
           
           
           
          >
            <div className="quality-icon">❄️</div>
            <h3>Thermal Stability</h3>
            <p>Glass maintains the perfect chill significantly longer than plastic, delivering an icy, refreshing experience from the first pour to the last drop.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
