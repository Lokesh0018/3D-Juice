import React from 'react';
import { motion } from 'framer-motion';
import './Press.css';

const Press = () => {
  return (
    <section className="press-section ">
      <div className="press-content">
        <h2 className="section-heading text-center" style={{ marginBottom: '4rem' }}>Critical Acclaim</h2>
        
        <div className="press-grid">
          <div 
            className="press-card"
           
           
           
           
          >
            <div className="publication">VOGUE</div>
            <p className="quote">"The Dom Pérignon of fruit juices. It completely redefines luxury wellness."</p>
          </div>

          <div 
            className="press-card"
           
           
           
           
          >
            <div className="publication">GQ</div>
            <p className="quote">"An intensely vibrant flavor profile that demands to be savored slowly."</p>
          </div>

          <div 
            className="press-card"
           
           
           
           
          >
            <div className="publication">Bon Appétit</div>
            <p className="quote">"The absolute pinnacle of cold-pressed nectar. Nothing else comes close."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
