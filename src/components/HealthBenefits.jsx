import React from 'react';
import { motion } from 'framer-motion';
import './HealthBenefits.css';

const HealthBenefits = () => {
  return (
    <section className="health-section ">
      <div className="health-content">
        <h2 className="section-heading text-center" style={{ marginBottom: '3rem' }}>Nutritional Brilliance</h2>
        
        <div className="benefits-grid">
          <div 
            className="benefit-card"
           
           
           
           
          >
            <div className="benefit-icon">🌿</div>
            <h3>100% Organic</h3>
            <p>Sourced exclusively from certified organic orchards, completely free from synthetic pesticides and fertilizers.</p>
          </div>

          <div 
            className="benefit-card"
           
           
           
           
          >
            <div className="benefit-icon">🚫</div>
            <h3>No Added Sugar</h3>
            <p>We rely solely on the natural, rich sweetness of the Alphonso mango. Zero refined sugars or artificial sweeteners.</p>
          </div>

          <div 
            className="benefit-card"
           
           
           
           
          >
            <div className="benefit-icon">🛡️</div>
            <h3>Immunity Boost</h3>
            <p>Packed with naturally occurring Vitamin C and antioxidants that support a healthy immune system.</p>
          </div>

          <div 
            className="benefit-card"
           
           
           
           
          >
            <div className="benefit-icon">👁️</div>
            <h3>Vision Health</h3>
            <p>Exceptionally rich in Vitamin A and Beta-Carotene, essential nutrients for maintaining optimal eye health.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
