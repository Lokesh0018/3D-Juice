import React from 'react';
import { motion } from 'framer-motion';

const KineticText = ({ text, className, delay = 0 }) => {
  // Split text into words, then words into characters
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-100px' }}
      style={{ display: 'inline-block' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}>
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={childVariants}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export default KineticText;
