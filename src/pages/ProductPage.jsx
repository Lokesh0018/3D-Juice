import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import TasteProfile from '../components/TasteProfile';
import IngredientsBreakdown from '../components/IngredientsBreakdown';
import HealthBenefits from '../components/HealthBenefits';
import Footer from '../components/Footer';
import '../App.css';
import './ProductPage.css';

const ProductPage = () => {
  useEffect(() => {
    const lenis = new Lenis({
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="product-page-wrapper">
      <Navbar />
      <PageHeader 
        title="Our Product" 
        subtitle="Experience the pure taste of Alphonso Mango Juice, crafted without compromise." 
      />
      <div className="product-content-container">
        <TasteProfile />
        <IngredientsBreakdown />
        <HealthBenefits />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
