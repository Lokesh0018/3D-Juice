import React from 'react';
import './MarqueeText.css';

const MarqueeText = ({ text }) => {
  // Duplicate the text multiple times to ensure seamless infinite scrolling
  const marqueeContent = Array(10).fill(text).join(' • ');

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span className="marquee-text">{marqueeContent}</span>
        <span className="marquee-text">{marqueeContent}</span>
      </div>
    </div>
  );
};

export default MarqueeText;
