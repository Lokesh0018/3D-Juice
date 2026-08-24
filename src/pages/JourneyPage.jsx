import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import ProductBottleScroll from '../components/ProductBottleScroll';
import HeroIntro from '../components/HeroIntro';
import ScrollToTop from '../components/ScrollToTop';
import JourneySection from '../components/JourneySection';
import JourneyProgress from '../components/JourneyProgress';
import AnimationScrubber from '../components/AnimationScrubber';
import Footer from '../components/Footer';
import { journeyStages } from '../data/journeyStages';
import '../App.css'; // Using the global App.css for now

function JourneyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ['#0a0f0a', '#1a1f10', '#1f1a0d', '#1a130a'] // Earthy green to warm yellow/gold
  );

  return (
    <div className="app-container" id="home">
      {/* Hidden SVG for Gooey Filters */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />
          <feBlend in="SourceGraphic" in2="gooey" />
        </filter>
      </svg>

      <motion.div 
        style={{ 
          backgroundColor, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: -10,
          pointerEvents: 'none'
        }} 
      />
      
      <JourneyProgress stages={journeyStages} lenisRef={lenisRef} />
      <AnimationScrubber lenisRef={lenisRef} />
      
      <div className="noise-overlay" />
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
          <div style={{ position: 'relative' }}>
            {/* Sticky container for the bottle canvas */}
            <div style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 0 }}>
              <ProductBottleScroll product={currentProduct} />
            </div>

            <div className="content-overlay" style={{ marginTop: '-100vh', position: 'relative', zIndex: 1 }}>
              <div style={{ height: '100vh' }}>
                {/* This is the initial landing page section height, pushing the journey down */}
              </div>
              
              {journeyStages.map((stage, index) => (
                <JourneySection key={stage.id} stage={stage} index={index} />
              ))}
              
              {/* Added extra scroll padding at the bottom if necessary */}
              <div style={{ height: '20vh' }}></div>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default JourneyPage;
