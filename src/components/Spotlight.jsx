import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Spotlight.css';

const Spotlight = () => {
  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="global-spotlight"
      animate={{
        x: mousePosition.x - 300, // offset by half width
        y: mousePosition.y - 300, // offset by half height
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
    />
  );
};

export default Spotlight;
