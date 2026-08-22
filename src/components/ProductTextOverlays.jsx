import React from 'react';
import { motion } from 'framer-motion';
import './ProductTextOverlays.css';

const ProductTextOverlays = ({ product }) => {
  // Helper to split text into elegantly animated words
  const SplitText = ({ text, outlineIndex }) => {
    return text.split(' ').map((word, idx) => (
      <motion.span 
        key={idx}
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
        className={idx === outlineIndex ? 'text-outline' : ''}
        style={{ display: "inline-block", marginRight: "12px" }}
      >
        {word}
      </motion.span>
    ));
  };

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
          <h1><SplitText text={product.section1.title} outlineIndex={1} /></h1>
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
          <h1><SplitText text={product.section2.title} outlineIndex={2} /></h1>
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
          <h1><SplitText text={product.section3.title} outlineIndex={1} /></h1>
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
          <h1><SplitText text={product.section4.title} outlineIndex={3} /></h1>
          <p>{product.section4.subtitle}</p>
       </motion.div>
    </div>
  );
};

export default ProductTextOverlays;
