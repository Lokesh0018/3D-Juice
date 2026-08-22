import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { products } from './data/products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductBottleScroll from './components/ProductBottleScroll';
import ProductTextOverlays from './components/ProductTextOverlays';
import HeroIntro from './components/HeroIntro';
import BentoGrid from './components/BentoGrid';
import MarqueeText from './components/MarqueeText';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.style.setProperty('--product-gradient', currentProduct.gradient);
  }, [currentIndex, currentProduct]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="app-container">
      <HeroIntro />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentProduct.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="product-main"
        >
          <div className="scroll-experience">
            <ProductTextOverlays product={currentProduct} />
            <ProductBottleScroll product={currentProduct} />
          </div>

          <MarqueeText text={currentProduct.features.join(' • ') + ' • 100% ORGANIC'} />
          <BentoGrid product={currentProduct} />

          <div className="content-sections">
            <section className="product-details section-container">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-block"
              >
                  <h2>{currentProduct.detailsSection.title}</h2>
                  <p>{currentProduct.detailsSection.description}</p>
              </motion.div>
            </section>

            <section className="product-freshness section-container">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-block"
              >
                <h2>{currentProduct.freshnessSection.title}</h2>
                <p>{currentProduct.freshnessSection.description}</p>
              </motion.div>
            </section>

            <section className="buy-now-section section-container">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="buy-card"
              >
                  <div className="buy-info">
                    <h2>{currentProduct.name}</h2>
                    <p className="price-tag">{currentProduct.buyNowSection.price} <span>{currentProduct.buyNowSection.unit}</span></p>
                    <ul className="params-list">
                      {currentProduct.buyNowSection.processingParams.map(p => <li key={p}>{p}</li>)}
                    </ul>
                    <p className="delivery">{currentProduct.buyNowSection.deliveryPromise}</p>
                  </div>
                  <button className="add-to-cart-btn" style={{ color: currentProduct.themeColor }}>
                    Order Now
                  </button>
              </motion.div>
            </section>
          </div>

          <div className="next-flavor-container">
             <button onClick={handleNext} className="next-flavor-btn" style={{ background: currentProduct.themeColor }}>
                <span>Next Flavor</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
             </button>
          </div>
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* Fixed Navigation Arrows & Menu */}
      <div className="fixed-nav-arrows">
         <button onClick={handlePrev} className="arrow-btn left">←</button>
         <button onClick={handleNext} className="arrow-btn right">→</button>
      </div>

      <div className="fixed-bottom-menu">
         <div className="pill-menu">
            {products.map((p, idx) => (
              <button 
                key={p.id} 
                onClick={() => setCurrentIndex(idx)}
                className={`pill-btn ${idx === currentIndex ? 'active' : ''}`}
                style={{ 
                  backgroundColor: idx === currentIndex ? p.themeColor : 'rgba(255,255,255,0.1)',
                  color: idx === currentIndex ? '#000' : '#fff'
                }}
              >
                {p.name.split(' ')[1] || p.name}
              </button>
            ))}
         </div>
      </div>
    </div>
  );
}

export default App;
