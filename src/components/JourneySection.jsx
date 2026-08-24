import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './JourneySection.css';

const JourneySection = ({ stage }) => {
  const sectionRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax subtle translations
  const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yRight = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const toggleCard = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div className="journey-section" ref={sectionRef}>
      <div className="journey-content-wrapper">
        
        {/* Left Area - Story Content */}
        <div className="journey-side journey-left">
          <motion.div 
            style={{ y: yLeft }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
            style={{ y: yRight }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            className="journey-info-panel"
          >
            {stage.rightItems.map((item, index) => {
              if (item.title === "↓") {
                return <div key={index} style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', margin: '0.5rem 0' }}>↓</div>;
              }
              
              const isActive = activeCardIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  layout
                  onClick={() => toggleCard(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ layout: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 } }}
                  className={`journey-info-card ${isActive ? 'active' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  <motion.div layout className="journey-info-card-title">
                    {item.title}
                  </motion.div>
                  
                  <AnimatePresence>
                    {isActive && item.detail && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="journey-info-card-detail"
                        style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}
                      >
                        {item.detail}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default JourneySection;
