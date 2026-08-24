import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import ProductBottleScroll from '../components/ProductBottleScroll';
import HeroIntro from '../components/HeroIntro';
import StickyCartBar from '../components/StickyCartBar';
import ScrollToTop from '../components/ScrollToTop';
import CartDrawer from '../components/CartDrawer';
import JourneySection from '../components/JourneySection';
import { journeyStages } from '../data/journeyStages';
import '../App.css'; // Using the global App.css for now

function JourneyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lenisRef, setLenisRef] = useState(null);
  const currentProduct = products[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.style.setProperty('--product-gradient', currentProduct.gradient);
  }, [currentIndex, currentProduct]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenisRef(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef) {
      lenisRef.start();
    }
  }, [lenisRef]);

  return (
    <div className="app-container" id="home">
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        product={currentProduct}
        themeColor={currentProduct.themeColor}
      />
      <div className="noise-overlay" />
      <StickyCartBar product={currentProduct} onOpenCart={() => setIsCartOpen(true)} />
      <ScrollToTop color={currentProduct.themeColor} />

      <HeroIntro isLoaded={true} />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={currentProduct.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProductBottleScroll product={currentProduct} />

          <div className="content-overlay">
            <div style={{ height: '100vh' }}>
              {/* This is the initial landing page section height, pushing the journey down */}
            </div>
            
            {journeyStages.map((stage, index) => (
              <JourneySection key={stage.id} stage={stage} index={index} />
            ))}
            
            {/* Added extra scroll padding at the bottom if necessary */}
            <div style={{ height: '50vh' }}></div>
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default JourneyPage;
