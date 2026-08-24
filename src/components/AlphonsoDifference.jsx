import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AlphonsoDifference.css';

const AlphonsoDifference = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Heading opacity: visible from 0 to 0.9, then fades out
  const headingOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  // Feature 1: enters LEFT, stays LEFT, exits LEFT
  const f1X = useTransform(scrollYProgress, [0.0, 0.15, 0.3, 0.4], ['-100vw', '0vw', '0vw', '-100vw']);
  const f1Opacity = useTransform(scrollYProgress, [0.0, 0.15, 0.3, 0.4], [0, 1, 1, 0]);
  const f1Scale = useTransform(scrollYProgress, [0.0, 0.15, 0.3, 0.4], [0.85, 1, 1, 0.85]);

  // Feature 2: enters RIGHT, stays RIGHT, exits RIGHT
  const f2X = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], ['100vw', '0vw', '0vw', '100vw']);
  const f2Opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], [0, 1, 1, 0]);
  const f2Scale = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], [0.85, 1, 1, 0.85]);

  // Feature 3: enters LEFT, stays LEFT, exits LEFT
  const f3X = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1.0], ['-100vw', '0vw', '0vw', '-100vw']);
  const f3Opacity = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1.0], [0, 1, 1, 0]);
  const f3Scale = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1.0], [0.85, 1, 1, 0.85]);

  return (
    <div ref={containerRef} className="difference-container" id="difference">
      <div className="difference-sticky">
        <motion.div className="difference-heading-wrapper" style={{ opacity: headingOpacity }}>
          <h2 className="section-heading">The Alphonso Difference</h2>
          <p>Made from India's finest Alphonso mangoes, cold-pressed to preserve their naturally rich flavor.</p>
        </motion.div>

        <motion.div className="difference-feature feature-left" style={{ x: f1X, opacity: f1Opacity }}>
          <div className="glow-orb" />
          <motion.h3 style={{ scale: f1Scale }}>01 &mdash; Handpicked</motion.h3>
          <p>Only the ripest, golden fruits are selected from our heritage orchards.</p>
        </motion.div>

        <motion.div className="difference-feature feature-right" style={{ x: f2X, opacity: f2Opacity }}>
          <div className="glow-orb" />
          <motion.h3 style={{ scale: f2Scale }}>02 &mdash; Cold Pressed</motion.h3>
          <p>Gentle extraction preserves the vibrant color and vital nutrients.</p>
        </motion.div>

        <motion.div className="difference-feature feature-left" style={{ x: f3X, opacity: f3Opacity }}>
          <div className="glow-orb" />
          <motion.h3 style={{ scale: f3Scale }}>03 &mdash; Bottled Fresh</motion.h3>
          <p>Sealed instantly to lock in the flavor of a perfectly ripe mango.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AlphonsoDifference;
