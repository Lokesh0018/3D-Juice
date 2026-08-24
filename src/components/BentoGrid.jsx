import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { childVariants } from './AlternatingSection';
import './BentoGrid.css';

const BentoGrid = ({ product }) => {
  return (
    <section className="bento-section">
      <motion.div 
        className="bento-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {}
        }}
      >
        {/* Large Feature Card */}
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
          <motion.div 
             className="bento-card large feature-card"
             variants={childVariants}
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
               variants={childVariants}
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

            </motion.div>
        </Tilt>

        {/* Stat Cards */}
        {product.stats.map((stat, i) => (
          <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
            <motion.div 
               className="bento-card stat-card"
               variants={childVariants}
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
