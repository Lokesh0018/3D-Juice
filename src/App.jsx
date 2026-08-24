import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { products } from './data/products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductBottleScroll from './components/ProductBottleScroll';
import HeroIntro from './components/HeroIntro';
import BentoGrid from './components/BentoGrid';
import MarqueeText from './components/MarqueeText';
import ParallaxWrapper from './components/ParallaxWrapper';
import Magnetic from './components/Magnetic';
import RippleEffect from './components/RippleEffect';
import confetti from 'canvas-confetti';
import FAQ from './components/FAQ';
import StickyCartBar from './components/StickyCartBar';
import Spotlight from './components/Spotlight';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
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
import CommunityImpact from './components/CommunityImpact';
import BehindScenes from './components/BehindScenes';
import IngredientsBreakdown from './components/IngredientsBreakdown';
import MangoTimeline from './components/MangoTimeline';
import Testimonials from './components/Testimonials';
import framesManifest from './data/framesManifest.json';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
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
      if (loading) {
        lenisRef.stop();
      } else {
        lenisRef.start();
      }
    }
  }, [loading, lenisRef]);

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
      
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        product={currentProduct} 
        themeColor={currentProduct.themeColor} 
      />
      <div className="noise-overlay" />
      <Spotlight />
      <RippleEffect />
      <StickyCartBar product={currentProduct} onOpenCart={() => setIsCartOpen(true)} />
      <ScrollToTop color={currentProduct.themeColor} />
      
      <HeroIntro isLoaded={!loading} />

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
          
            <div id="difference" className="alphonso-difference section-container">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-block"
              >
                <h2 className="section-heading">The Alphonso Difference</h2>
                <p className="section-subheading">Made from India's finest Alphonso mangoes, cold-pressed to preserve their naturally rich flavor.</p>
              </motion.div>

              <div className="process-wrapper">
                <div className="process-line-bg">
                  <motion.div 
                    className="process-line-fill" 
                  />
                </div>
                <div className="process-steps">
                  <motion.div className="step-card" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                    <h3>01 &mdash; Handpicked</h3>
                    <p>Only the ripest, golden fruits are selected from our heritage orchards.</p>
                  </motion.div>
                  <motion.div className="step-card" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                    <h3>02 &mdash; Cold Pressed</h3>
                    <p>Gentle extraction preserves the vibrant color and vital nutrients.</p>
                  </motion.div>
                  <motion.div className="step-card" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                    <h3>03 &mdash; Bottled Fresh</h3>
                    <p>Sealed instantly to lock in the flavor of a perfectly ripe mango.</p>
                  </motion.div>
                </div>
              </div>
            </div>

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
                      <button onClick={() => setIsCartOpen(true)} className="add-to-cart-btn" style={{ color: currentProduct.themeColor }}>
                        Order Now
                      </button>
                    </Magnetic>
                </motion.div>
              </section>
            </div>
          </ParallaxWrapper>

          <OurStory />
          <MangoTimeline />
          <Founders />
          <OrchardOrigins />
          <FarmerPartnerships />
          <TasteProfile />
          <IngredientsBreakdown />
          <ExtractionProcess />
          <BehindScenes />
          <QualityControl />
          <Sustainability />
          <HealthBenefits />
          <JuiceRecipes />
          <ServingSuggestions />
          <CommunityImpact />
          <Press />
          <ReserveEdition />
          <Testimonials />
          <Subscription />

          <div id="faq">
            <FAQ />
          </div>
          <Footer />
        </div>

        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
