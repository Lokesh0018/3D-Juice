import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxWrapper.css';

const ParallaxWrapper = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create subtle parallax movements for floating elements
  const y1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <div ref={ref} className="parallax-container">
      {/* Decorative Orbs / Shapes */}
      <motion.div 
         className="parallax-shape shape-1"
         style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div 
         className="parallax-shape shape-2"
         style={{ y: y2, rotate: rotate2 }}
      />
      {children}
    </div>
  );
};

export default ParallaxWrapper;
