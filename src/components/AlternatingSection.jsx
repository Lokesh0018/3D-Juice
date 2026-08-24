import React from 'react';
import { motion } from 'framer-motion';
import './AlternatingSection.css';

export const childVariants = {
  hidden: { opacity: 0, x: 'var(--horizontal-offset)' },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AlternatingSection = ({ alignment = 'left', children }) => {
  const isLeft = alignment === 'left';
  
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? '-20vw' : '20vw' 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  return (
    <div 
      className={`alternating-wrapper ${isLeft ? 'align-left' : 'align-right'}`}
      style={{ '--horizontal-offset': isLeft ? '-50px' : '50px' }}
    >
      <motion.div
        className="alternating-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AlternatingSection;
