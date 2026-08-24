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
  const y1 = useTransform(scrollYProgress, [0, 1], [-150, 250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -350]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-50, 300]);
  const y5 = useTransform(scrollYProgress, [0, 1], [-200, 400]);
  const y6 = useTransform(scrollYProgress, [0, 1], [200, -300]);
  const y7 = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const y8 = useTransform(scrollYProgress, [0, 1], [-100, 150]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [20, 80]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [-20, -90]);
  const rotate5 = useTransform(scrollYProgress, [0, 1], [10, 120]);
  const rotate6 = useTransform(scrollYProgress, [0, 1], [-10, -60]);

  return (
    <div ref={ref} className="parallax-container">

      
      {children}
    </div>
  );
};

export default ParallaxWrapper;
