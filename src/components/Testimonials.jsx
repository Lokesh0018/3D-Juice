import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const reviews = [
  { text: "The most authentic mango taste I've ever experienced from a bottle.", author: "Sarah J." },
  { text: "Pure luxury. It's like drinking a freshly picked Alphonso.", author: "Michael T." },
  { text: "Finally, a juice with no added sugar that actually tastes amazing.", author: "Priya R." }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container section-container">
      <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        What Connoisseurs Say
      </h2>
      <div className="test-grid">
        {reviews.map((rev, idx) => (
          <motion.div 
            key={idx}
            className="test-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="stars">★★★★★</div>
            <p className="test-text">"{rev.text}"</p>
            <p className="test-author">— {rev.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
