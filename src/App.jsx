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
import CustomCursor from './components/CustomCursor';
import ParallaxWrapper from './components/ParallaxWrapper';
import Magnetic from './components/Magnetic';
import RippleEffect from './components/RippleEffect';
import FAQ from './components/FAQ';
import StickyCartBar from './components/StickyCartBar';
import Spotlight from './components/Spotlight';
import ScrollToTop from './components/ScrollToTop';
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
    <div className="app-container" id="home">
      <div className="noise-overlay" />
      <Spotlight />
      <RippleEffect />
      <StickyCartBar product={currentProduct} />
      <ScrollToTop color={currentProduct.themeColor} />
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
          
          <ParallaxWrapper>
            <div id="flavors">
              <BentoGrid product={currentProduct} />
            </div>

            <div className="content-sections" id="process">
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
                    <Magnetic>
                      <button className="add-to-cart-btn" style={{ color: currentProduct.themeColor }}>
                        Order Now
                      </button>
                    </Magnetic>
                </motion.div>
              </section>
            </div>
          </ParallaxWrapper>

          <div id="faq">
            <FAQ />
          </div>

        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
