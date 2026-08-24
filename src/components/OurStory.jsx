import React from 'react';
import { motion } from 'framer-motion';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className="our-story-container section-container">
      <motion.div 
        className="story-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-heading">Our Heritage</h2>
        <p className="story-text">
          Deeply rooted in the fertile soils of Ratnagiri, our orchards have been nurturing the King of Mangoes for over three generations. 
        </p>
        <p className="story-text">
          We believe in a harmony between tradition and modern cold-press technology, ensuring that every bottle captures the exact essence of a sun-ripened Alphonso, just as nature intended.
        </p>
      </motion.div>
    </div>
  );
};

export default OurStory;
