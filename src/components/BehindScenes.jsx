import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './BehindScenes.css';

const BehindScenes = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="behind-section section-container" ref={containerRef}>
      <div className="behind-header">
        <h2 className="section-heading">The Craft Distillery</h2>
        <p>A glimpse inside our zero-oxygen, cold-press facility.</p>
      </div>

      <div className="gallery-grid">
        <motion.div className="gallery-col" style={{ y: y1 }}>
          <div className="gallery-item item-tall"></div>
          <div className="gallery-item item-short"></div>
        </motion.div>
        
        <motion.div className="gallery-col" style={{ y: y2 }}>
          <div className="gallery-item item-short"></div>
          <div className="gallery-item item-tall"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindScenes;
