import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import './Subscription.css';

const Subscription = () => {
  return (
    <section className="subscription-section ">
      <div className="subscription-content">
        <div 
          className="subscription-text-block"
         
         
         
         
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
        </div>
      </div>
    </section>
  );
};

export default Subscription;
