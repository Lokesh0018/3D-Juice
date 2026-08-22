import React from 'react';
import { motion } from 'framer-motion';
import './ProductTextOverlays.css';

const ProductTextOverlays = ({ product }) => {
  return (
    <div className="text-overlays-container">
       <motion.div 
         className="overlay-section"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -50 }}
         viewport={{ margin: "-20% 0px -20% 0px" }}
         transition={{ duration: 0.8 }}
       >
          <h1>{product.section1.title}</h1>
          <p>{product.section1.subtitle}</p>
       </motion.div>

       <motion.div 
         className="overlay-section"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -50 }}
         viewport={{ margin: "-20% 0px -20% 0px" }}
         transition={{ duration: 0.8 }}
       >
          <h1>{product.section2.title}</h1>
          <p>{product.section2.subtitle}</p>
       </motion.div>

       <motion.div 
         className="overlay-section"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -50 }}
         viewport={{ margin: "-20% 0px -20% 0px" }}
         transition={{ duration: 0.8 }}
       >
          <h1>{product.section3.title}</h1>
          <p>{product.section3.subtitle}</p>
       </motion.div>

       <motion.div 
         className="overlay-section"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -50 }}
         viewport={{ margin: "-20% 0px -20% 0px" }}
         transition={{ duration: 0.8 }}
       >
          <h1>{product.section4.title}</h1>
          <p>{product.section4.subtitle}</p>
       </motion.div>
    </div>
  );
};

export default ProductTextOverlays;
