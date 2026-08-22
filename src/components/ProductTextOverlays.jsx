import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProductTextOverlays.css';

const ProductTextOverlays = ({ product }) => {
  const { scrollYProgress } = useScroll();

  // Opacity transforms for each section based on scroll progress (0 to 1 over the 500vh container)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 1.0], [0, 1, 1, 1]); // Stays visible until next section

  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [50, 0, -50]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.5, 0.7], [50, 0, -50]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.7], [50, 0]);

  return (
    <div className="text-overlays-container">
       <motion.div className="overlay-section" style={{ opacity: opacity1, y: y1 }}>
          <h1>{product.section1.title}</h1>
          <p>{product.section1.subtitle}</p>
       </motion.div>

       <motion.div className="overlay-section" style={{ opacity: opacity2, y: y2 }}>
          <h1>{product.section2.title}</h1>
          <p>{product.section2.subtitle}</p>
       </motion.div>

       <motion.div className="overlay-section" style={{ opacity: opacity3, y: y3 }}>
          <h1>{product.section3.title}</h1>
          <p>{product.section3.subtitle}</p>
       </motion.div>

       <motion.div className="overlay-section" style={{ opacity: opacity4, y: y4 }}>
          <h1>{product.section4.title}</h1>
          <p>{product.section4.subtitle}</p>
       </motion.div>
    </div>
  );
};

export default ProductTextOverlays;
