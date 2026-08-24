import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import './Subscription.css';

const Subscription = () => {
  return (
    <section className="subscription-section section-container">
      <div className="subscription-content">
        <motion.div 
          className="subscription-text-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">The Alphonso Club</h2>
          <p className="subscription-intro">
            Never run out of sunshine. Join our exclusive monthly delivery club to ensure a constant supply of the world's finest mango nectar, delivered straight to your door.
          </p>
          
          <ul className="perks-list">
            <li>✨ 15% Off Every Order</li>
            <li>✨ Free Cold-Packed Shipping</li>
            <li>✨ Early Access to Reserve Batches</li>
          </ul>

          <Magnetic>
            <button className="subscribe-btn">Subscribe & Save</button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscription;
