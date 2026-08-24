import React, { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

const AnimationScrubber = ({ lenisRef }) => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setProgress(latest * 100);
    });
  }, [scrollYProgress]);

  const handleScrub = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (lenisRef) {
      const targetScroll = (newProgress / 100) * (document.documentElement.scrollHeight - window.innerHeight);
      // Fast duration for scrubbing
      lenisRef.scrollTo(targetScroll, { duration: 0.1, immediate: true });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '300px',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(10, 10, 10, 0.6)',
      padding: '15px 20px',
      borderRadius: '24px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
        Scrub Timeline
      </span>
      <input 
        type="range" 
        min="0" 
        max="100" 
        step="0.1" 
        value={progress}
        onChange={handleScrub}
        style={{
          width: '100%',
          cursor: 'pointer',
          accentColor: 'var(--theme-primary, #F5A623)'
        }}
      />
    </div>
  );
};

export default AnimationScrubber;
