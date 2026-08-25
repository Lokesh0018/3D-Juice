import React from 'react';
import { motion } from 'framer-motion';
import './CinematicBackground.css';

const CinematicBackground = ({ theme = 'gold' }) => {
  // Unified elegant gold palette for all pages
  const activeColors = [
    'rgba(245, 166, 35, 0.15)', // Soft Mango Gold
    'rgba(212, 122, 17, 0.12)', // Deep Orange
    'rgba(255, 204, 0, 0.1)',   // Bright Yellow
  ];

  return (
    <div className="cinematic-bg-container">
      {/* Orb 1: Top Right, moving slowly */}
      <motion.div
        className="cinematic-orb"
        style={{ backgroundColor: activeColors[0], width: '600px', height: '600px', top: '-10%', right: '-10%' }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Orb 2: Bottom Left, moving differently */}
      <motion.div
        className="cinematic-orb"
        style={{ backgroundColor: activeColors[1], width: '800px', height: '800px', bottom: '-20%', left: '-20%' }}
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Orb 3: Center drifting */}
      <motion.div
        className="cinematic-orb"
        style={{ backgroundColor: activeColors[2], width: '500px', height: '500px', top: '30%', left: '40%' }}
        animate={{
          x: [0, -100, 150, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default CinematicBackground;
