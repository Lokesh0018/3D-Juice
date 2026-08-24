import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './MangoTimeline.css';

const MangoTimeline = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the height of the glowing line
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  // Calculate opacities for the 4 timeline items
  const op1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0.3]);
  const op2 = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [0, 1, 0.3]);
  const op3 = useTransform(scrollYProgress, [0.45, 0.65, 0.75], [0, 1, 0.3]);
  const op4 = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 1]);

  const x1 = useTransform(scrollYProgress, [0, 0.15], [-50, 0]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  const x3 = useTransform(scrollYProgress, [0.45, 0.65], [-50, 0]);
  const x4 = useTransform(scrollYProgress, [0.7, 0.9], [50, 0]);

  return (
    <section ref={containerRef} className="timeline-container">
      <div className="timeline-sticky">
        <h2 className="section-heading text-center" style={{ marginBottom: '2rem' }}>Seed to Sip</h2>
        
        <div className="timeline-track-wrapper">
          {/* Background faint line */}
          <div className="timeline-line-bg"></div>
          {/* Glowing active line */}
          <motion.div className="timeline-line-active" style={{ height: lineHeight }}></motion.div>

          <div className="timeline-items">
            <motion.div className="timeline-item left" style={{ opacity: op1, x: x1 }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Monsoon Planting</h3>
                <p>Planted exactly during the first monsoon showers to ensure deep root integration with the volcanic soil.</p>
              </div>
            </motion.div>

            <motion.div className="timeline-item right" style={{ opacity: op2, x: x2 }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Golden Blossom</h3>
                <p>Winter brings the fragrant golden blossoms. Only the strongest flowers survive the coastal sea breeze.</p>
              </div>
            </motion.div>

            <motion.div className="timeline-item left" style={{ opacity: op3, x: x3 }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Dawn Harvest</h3>
                <p>Hand-picked precisely at dawn when the fruit's sugar content is at its absolute peak concentration.</p>
              </div>
            </motion.div>

            <motion.div className="timeline-item right" style={{ opacity: op4, x: x4 }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Cold Press</h3>
                <p>Pressed within 4 hours of harvesting in a zero-oxygen environment to lock in the vibrant color and nutrients.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MangoTimeline;
