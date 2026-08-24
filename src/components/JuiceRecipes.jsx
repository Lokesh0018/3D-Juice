import React from 'react';
import { motion } from 'framer-motion';
import './JuiceRecipes.css';

const JuiceRecipes = () => {
  return (
    <section className="recipes-section section-container">
      <div className="recipes-content">
        <h2 className="section-heading text-center" style={{ marginBottom: '4rem' }}>Culinary Versatility</h2>

        <div className="recipes-grid">
          <motion.div 
            className="recipe-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="recipe-img sorbet"></div>
            <div className="recipe-text">
              <h3>Mango Sorbet</h3>
              <p>Pour directly into an ice cream maker or freeze and blend for an instant, dairy-free, intensely flavorful sorbet dessert.</p>
            </div>
          </motion.div>

          <motion.div 
            className="recipe-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="recipe-img bowl"></div>
            <div className="recipe-text">
              <h3>Tropical Smoothie Bowl</h3>
              <p>Blend with frozen acai and top with fresh berries, coconut flakes, and granola for a vibrant, nutrient-dense breakfast.</p>
            </div>
          </motion.div>

          <motion.div 
            className="recipe-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="recipe-img glaze"></div>
            <div className="recipe-text">
              <h3>Spicy Mango Glaze</h3>
              <p>Reduce over low heat with chili flakes and ginger to create a sweet, spicy glaze perfect for grilled vegetables or protein.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JuiceRecipes;
