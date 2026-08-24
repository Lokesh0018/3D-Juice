import React from 'react';
import { motion } from 'framer-motion';
import './JourneySection.css';

const JourneySection = ({ stage }) => {
  return (
    <div className="journey-section">
      <div className="journey-content-wrapper">
        
        {/* Left Area - Story Content */}
        <div className="journey-side journey-left">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="journey-story-panel"
          >
            <h2 className="journey-stage-title">{stage.title}</h2>
            <h3 className="journey-left-title">{stage.leftTitle}</h3>
            <p className="journey-left-desc">{stage.leftDesc}</p>
          </motion.div>
        </div>

        {/* Center Area - Transparent for 3D Animation */}
        <div className="journey-center">
          {/* This area is strictly reserved for the background mango transformation animation */}
        </div>

        {/* Right Area - Information Cards */}
        <div className="journey-side journey-right">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            className="journey-info-panel"
          >
            {stage.rightItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="journey-info-card"
              >
                {item.title}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default JourneySection;
