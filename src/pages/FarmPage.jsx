import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import OrchardOrigins from '../components/OrchardOrigins';
import FarmerPartnerships from '../components/FarmerPartnerships';
import Footer from '../components/Footer';
import '../App.css';
import './FarmPage.css';

const FarmPage = () => {
  useEffect(() => {
    // Slower smooth scroll for a relaxed reading experience
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
    <div className="farm-page-wrapper">
      <Navbar />
      <PageHeader 
        title="Our Farm" 
        subtitle="Discover the rich soil and perfect climate that nurtures our Alphonso mangoes." 
      />
      <div className="farm-content-container">
        <OrchardOrigins />
        <FarmerPartnerships />
      </div>
      <Footer />
    </div>
  );
};

export default FarmPage;
