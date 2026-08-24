import React from 'react';
import { motion } from 'framer-motion';
import './JuiceRecipes.css';

const JuiceRecipes = () => {
  return (
    <section className="recipes-section ">
      <div className="recipes-content">
        <h2 className="section-heading text-center" style={{ marginBottom: '4rem' }}>Culinary Versatility</h2>

        <div className="recipes-grid">
          <div 
            className="recipe-card"
           
           
           
           
          >
            <div className="recipe-img sorbet"></div>
            <div className="recipe-text">
              <h3>Mango Sorbet</h3>
              <p>Pour directly into an ice cream maker or freeze and blend for an instant, dairy-free, intensely flavorful sorbet dessert.</p>
            </div>
          </div>

          <div 
            className="recipe-card"
           
           
           
           
          >
            <div className="recipe-img bowl"></div>
            <div className="recipe-text">
              <h3>Tropical Smoothie Bowl</h3>
              <p>Blend with frozen acai and top with fresh berries, coconut flakes, and granola for a vibrant, nutrient-dense breakfast.</p>
            </div>
          </div>

          <div 
            className="recipe-card"
           
           
           
           
          >
            <div className="recipe-img glaze"></div>
            <div className="recipe-text">
              <h3>Spicy Mango Glaze</h3>
              <p>Reduce over low heat with chili flakes and ginger to create a sweet, spicy glaze perfect for grilled vegetables or protein.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuiceRecipes;
