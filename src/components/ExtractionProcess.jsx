import React from 'react';
import { motion } from 'framer-motion';
import './ExtractionProcess.css';

const ExtractionProcess = () => {
  return (
    <section className="extraction-section ">
      <div className="extraction-content">
        <div 
          className="text-block"
         
         
         
         
        >
          <h2 className="section-heading">The Science of Cold-Pressed</h2>
          <p className="extraction-intro">
            Traditional juicing uses spinning blades that generate heat, destroying vital enzymes and oxidizing the fruit. 
            We do things differently.
          </p>
        </div>

        <div className="extraction-grid">
          <div 
            className="extract-step"
           
           
           
           
          >
            <div className="extract-number">01</div>
            <h3>Hydraulic Pressure</h3>
            <p>We apply thousands of pounds of pressure to gently squeeze every drop of liquid from the Alphonso flesh, leaving only dry pulp behind.</p>
          </div>

          <div 
            className="extract-step"
           
           
           
           
          >
            <div className="extract-number">02</div>
            <h3>Zero Heat Applied</h3>
            <p>By completely eliminating heat from the extraction process, the juice retains its brilliant golden color and raw, farm-fresh flavor profile.</p>
          </div>

          <div 
            className="extract-step full-width"
           
           
           
           
          >
            <div className="extract-number">03</div>
            <h3>Nutrient Locked</h3>
            <p>The result is a juice that is biochemically identical to eating a freshly picked mango, teeming with living enzymes and vitamins that your body absorbs instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtractionProcess;
