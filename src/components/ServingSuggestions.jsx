import React from 'react';
import { motion } from 'framer-motion';
import './ServingSuggestions.css';

const ServingSuggestions = () => {
  return (
    <section className="serving-section section-container">
      <div className="serving-content">
        <motion.div 
          className="text-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">The Perfect Pour</h2>
          <p className="serving-intro">
            Elevate your experience. While extraordinary on its own, our Alphonso nectar serves as the ultimate foundation for culinary creativity.
          </p>
        </motion.div>

        <div className="serving-grid">
          <motion.div 
            className="serve-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="serve-img ice"></div>
            <h3>On The Rocks</h3>
            <p>Serve chilled over a single large ice cube. Allow the chill to unlock the vibrant top notes of the Alphonso.</p>
          </motion.div>

          <motion.div 
            className="serve-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="serve-img cocktail"></div>
            <h3>Premium Mixer</h3>
            <p>The perfect companion for white rum or premium vodka, creating an unparalleled tropical cocktail experience.</p>
          </motion.div>

          <motion.div 
            className="serve-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="serve-img smoothie"></div>
            <h3>Morning Blend</h3>
            <p>Blend with Greek yogurt, chia seeds, and a splash of coconut water for a luxurious, nutrient-dense breakfast.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServingSuggestions;
