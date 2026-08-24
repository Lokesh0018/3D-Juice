import React from 'react';
import { motion } from 'framer-motion';
import './ServingSuggestions.css';

const ServingSuggestions = () => {
  return (
    <section className="serving-section ">
      <div className="serving-content">
        <div 
          className="text-block"
         
         
         
         
        >
          <h2 className="section-heading">The Perfect Pour</h2>
          <p className="serving-intro">
            Elevate your experience. While extraordinary on its own, our Alphonso nectar serves as the ultimate foundation for culinary creativity.
          </p>
        </div>

        <div className="serving-grid">
          <div 
            className="serve-card"
           
           
           
           
          >
            <div className="serve-img ice"></div>
            <h3>On The Rocks</h3>
            <p>Serve chilled over a single large ice cube. Allow the chill to unlock the vibrant top notes of the Alphonso.</p>
          </div>

          <div 
            className="serve-card"
           
           
           
           
          >
            <div className="serve-img cocktail"></div>
            <h3>Premium Mixer</h3>
            <p>The perfect companion for white rum or premium vodka, creating an unparalleled tropical cocktail experience.</p>
          </div>

          <div 
            className="serve-card"
           
           
           
           
          >
            <div className="serve-img smoothie"></div>
            <h3>Morning Blend</h3>
            <p>Blend with Greek yogurt, chia seeds, and a splash of coconut water for a luxurious, nutrient-dense breakfast.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServingSuggestions;
