import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const JourneyProgress = ({ stages, lenisRef }) => {
  const { scrollYProgress } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Find the stage whose scrollRange covers 'latest'
      const index = stages.findIndex(stage => latest >= stage.scrollRange[0] && latest <= stage.scrollRange[1]);
      if (index !== -1) {
        setActiveIndex(index);
      }
    });
  }, [scrollYProgress, stages]);

  const scrollToStage = (stage) => {
    if (lenisRef) {
      // scroll to the beginning of the stage's scroll range
      // scrollYProgress is 0-1, so target is percentage of document scroll height
      const targetScroll = stage.scrollRange[0] * (document.documentElement.scrollHeight - window.innerHeight);
      lenisRef.scrollTo(targetScroll, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      zIndex: 100,
      padding: '10px'
    }}>
      {stages.map((stage, index) => (
        <div 
          key={stage.id}
          onClick={() => scrollToStage(stage)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            cursor: 'pointer',
            gap: '10px',
            opacity: activeIndex === index ? 1 : 0.4,
            transition: 'opacity 0.3s'
          }}
        >
          {/* Tooltip on hover/active */}
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--theme-primary, #F5A623)',
            opacity: activeIndex === index ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
          }}>
            {stage.title.split('—')[1]?.trim() || stage.title}
          </span>
          <div style={{
            width: activeIndex === index ? '12px' : '8px',
            height: activeIndex === index ? '12px' : '8px',
            borderRadius: '50%',
            backgroundColor: activeIndex === index ? 'var(--theme-primary, #F5A623)' : '#fff',
            transition: 'all 0.3s ease'
          }}></div>
        </div>
      ))}
    </div>
  );
};

export default JourneyProgress;
