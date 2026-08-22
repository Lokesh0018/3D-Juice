import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './BentoGrid.css';

const BentoGrid = ({ product }) => {
  return (
    <section className="bento-section section-container">
      <motion.div 
        className="bento-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
      >
        {/* Large Feature Card */}
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
          <motion.div 
             className="bento-card large feature-card"
             variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
             }}
          >
             <h3>Why it's special</h3>
             <ul>
               {product.features.map((f, i) => (
                 <li key={i}>
                   <span className="check">✓</span> {f}
                 </li>
               ))}
             </ul>
          </motion.div>
        </Tilt>

        {/* Video Card */}
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
            <motion.div 
               className="bento-card feature-video"
               variants={{
                 hidden: { opacity: 0, scale: 0.9 },
                 visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
               }}
               style={{ padding: 0, position: 'relative', overflow: 'hidden' }}
            >
               <video 
                 src="/assets/Mango_juice_swirling.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
               />
               <img 
                 src="/assets/slice2.png" 
                 alt="Mango Slice Out of Focus" 
                 style={{
                   position: 'absolute',
                   bottom: '-30px',
                   right: '-30px',
                   width: '160px',
                   height: 'auto',
                   zIndex: 20,
                   filter: 'blur(6px) drop-shadow(0 15px 15px rgba(0,0,0,0.6))',
                   transform: 'rotate(-25deg) scale(1.1)',
                   pointerEvents: 'none'
                 }}
               />
            </motion.div>
        </Tilt>

        {/* Stat Cards */}
        {product.stats.map((stat, i) => (
          <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
            <motion.div 
               className="bento-card stat-card"
               variants={{
                 hidden: { opacity: 0, scale: 0.9 },
                 visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
               }}
            >
               <h4>{stat.label}</h4>
               <p className="stat-val" style={{ color: '#fff', textShadow: `0 0 10px ${product.themeColor}, 0 2px 4px rgba(0,0,0,0.5)` }}>{stat.val}</p>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </section>
  );
};

export default BentoGrid;
