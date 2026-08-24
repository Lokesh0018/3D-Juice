import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './WhySpecial.css';

const WhySpecial = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Heading opacity: visible from 0 to 0.85, then fades out by 0.95
  const headingOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  // Container 01 (Sugar): enters LEFT, stays LEFT, exits LEFT
  const f1X = useTransform(scrollYProgress, [0.0, 0.15, 0.3, 0.4], ['-100vw', '0vw', '0vw', '-100vw']);
  const f1Opacity = useTransform(scrollYProgress, [0.0, 0.15, 0.3, 0.4], [0, 1, 1, 0]);

  // Container 02 (Pulp): enters RIGHT, stays RIGHT, exits RIGHT
  const f2X = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], ['100vw', '0vw', '0vw', '100vw']);
  const f2Opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], [0, 1, 1, 0]);

  // Container 03 (Water): enters LEFT, stays LEFT, exits LEFT
  const f3X = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1.0], ['-100vw', '0vw', '0vw', '-100vw']);
  const f3Opacity = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1.0], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="special-container" id="why-special">
      <div className="special-sticky">
        <motion.div className="special-heading-wrapper" style={{ opacity: headingOpacity }}>
          <h2 className="section-heading">Why It’s Special</h2>
          <p className="special-bullets">
            <span>&bull; Rich in Vitamin C</span>
            <span>&bull; No preservatives</span>
            <span>&bull; 100% fruit</span>
          </p>
        </motion.div>

        <motion.div className="special-feature feature-left" style={{ x: f1X, opacity: f1Opacity }}>
          <h3>Sugar</h3>
          <h4>0g</h4>
        </motion.div>

        <motion.div className="special-feature feature-right" style={{ x: f2X, opacity: f2Opacity }}>
          <h3>Pulp</h3>
          <h4>100%</h4>
        </motion.div>

        <motion.div className="special-feature feature-left" style={{ x: f3X, opacity: f3Opacity }}>
          <h3>Water</h3>
          <h4>0%</h4>
        </motion.div>
      </div>
    </div>
  );
};

export default WhySpecial;
