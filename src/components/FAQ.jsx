import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqs = [
  { q: "Is the juice 100% natural?", a: "Yes! We use absolutely zero preservatives, added sugars, or artificial colors." },
  { q: "How long does it stay fresh?", a: "Thanks to our HPP process, it stays fresh in the fridge for up to 30 days unopened." },
  { q: "Do you ship nationwide?", a: "Currently we ship to all major metro cities with next-day chilled delivery." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section section-container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`faq-item ${openIndex === idx ? 'open' : ''}`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="faq-question">
              <h4>{faq.q}</h4>
              <span className="faq-icon">{openIndex === idx ? '-' : '+'}</span>
            </div>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="faq-answer-wrapper"
                >
                  <p className="faq-answer">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
