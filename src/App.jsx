import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { products } from './data/products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductBottleScroll from './components/ProductBottleScroll';
import HeroIntro from './components/HeroIntro';
import MarqueeText from './components/MarqueeText';
import ParallaxWrapper from './components/ParallaxWrapper';
import Magnetic from './components/Magnetic';
import confetti from 'canvas-confetti';
import FAQ from './components/FAQ';
import StickyCartBar from './components/StickyCartBar';
import ScrollToTop from './components/ScrollToTop';

import CartDrawer from './components/CartDrawer';
import OurStory from './components/OurStory';
import Sustainability from './components/Sustainability';
import OrchardOrigins from './components/OrchardOrigins';
import TasteProfile from './components/TasteProfile';
import JuiceRecipes from './components/JuiceRecipes';
import ExtractionProcess from './components/ExtractionProcess';
import HealthBenefits from './components/HealthBenefits';
import ServingSuggestions from './components/ServingSuggestions';
import FarmerPartnerships from './components/FarmerPartnerships';
import QualityControl from './components/QualityControl';
import ReserveEdition from './components/ReserveEdition';
import Subscription from './components/Subscription';
import Founders from './components/Founders';
import Press from './components/Press';
import AlphonsoDifference from './components/AlphonsoDifference';
import WhySpecial from './components/WhySpecial';
import CommunityImpact from './components/CommunityImpact';
import IngredientsBreakdown from './components/IngredientsBreakdown';
import MangoTimeline from './components/MangoTimeline';
import Testimonials from './components/Testimonials';
import AlternatingSection, { childVariants } from './components/AlternatingSection';
import framesManifest from './data/framesManifest.json';
import './App.css';

function App() {
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#8b5cf6', '#60a5fa']
    });
  };

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
          <section className="section-wrapper">
            <MarqueeText text={currentProduct.features.join(' • ') + ' • 100% ORGANIC'} />
          </section>
          
          <AlphonsoDifference />

          <WhySpecial />

          <div className="content-sections" id="process">
              <AlternatingSection alignment="left">
                <section className="product-details">
                  <div className="text-block">
                      <h2>{currentProduct.detailsSection.title}</h2>
                      <p>{currentProduct.detailsSection.description}</p>
                  </div>
                </section>
              </AlternatingSection>

              <AlternatingSection alignment="right">
                <section className="product-freshness">
                  <div className="text-block">
                    <h2>{currentProduct.freshnessSection.title}</h2>
                    <p>{currentProduct.freshnessSection.description}</p>
                  </div>
                </section>
              </AlternatingSection>

              <AlternatingSection alignment="left">
                <section className="buy-now-section">
                  <div className="buy-card">
                      <div className="buy-info">
                        <h2>{currentProduct.name}</h2>
                        <p className="price-tag">{currentProduct.buyNowSection.price} <span>{currentProduct.buyNowSection.unit}</span></p>
                        <ul className="params-list">
                          {currentProduct.buyNowSection.processingParams.map(p => <li key={p}>{p}</li>)}
                        </ul>
                        <p className="delivery">{currentProduct.buyNowSection.deliveryPromise}</p>
                      </div>
                      <Magnetic>
                        <button onClick={() => setIsCartOpen(true)} className="add-to-cart-btn" style={{ color: currentProduct.themeColor }}>
                          Order Now
                        </button>
                      </Magnetic>
                  </div>
                </section>
              </AlternatingSection>
            </div>


          <AlternatingSection alignment="right"><OurStory /></AlternatingSection>
          <AlternatingSection alignment="left"><MangoTimeline /></AlternatingSection>
          <AlternatingSection alignment="right"><Founders /></AlternatingSection>
          <AlternatingSection alignment="left"><OrchardOrigins /></AlternatingSection>
          <AlternatingSection alignment="right"><FarmerPartnerships /></AlternatingSection>
          <AlternatingSection alignment="left"><TasteProfile /></AlternatingSection>
          <AlternatingSection alignment="right"><IngredientsBreakdown /></AlternatingSection>
          <AlternatingSection alignment="left"><ExtractionProcess /></AlternatingSection>
          <AlternatingSection alignment="right"><QualityControl /></AlternatingSection>
          <AlternatingSection alignment="left"><Sustainability /></AlternatingSection>
          <AlternatingSection alignment="right"><HealthBenefits /></AlternatingSection>
          <AlternatingSection alignment="left"><JuiceRecipes /></AlternatingSection>
          <AlternatingSection alignment="right"><ServingSuggestions /></AlternatingSection>
          <AlternatingSection alignment="left"><CommunityImpact /></AlternatingSection>
          <AlternatingSection alignment="right"><Press /></AlternatingSection>
          <AlternatingSection alignment="left"><ReserveEdition /></AlternatingSection>
          <AlternatingSection alignment="right"><Testimonials /></AlternatingSection>
          <AlternatingSection alignment="left"><Subscription /></AlternatingSection>

          <AlternatingSection alignment="left">
            <div id="faq">
              <FAQ />
            </div>
          </AlternatingSection>
          <Footer />
        </div>

        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
