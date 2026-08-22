import React from 'react';
import { motion } from 'framer-motion';
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

        {/* Stat Cards */}
        {product.stats.map((stat, i) => (
          <motion.div 
             key={i}
             className="bento-card stat-card"
             variants={{
               hidden: { opacity: 0, scale: 0.9 },
               visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
             }}
          >
             <h4>{stat.label}</h4>
             <p className="stat-val" style={{ color: product.themeColor }}>{stat.val}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BentoGrid;
