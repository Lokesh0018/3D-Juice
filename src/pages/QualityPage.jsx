import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import QualityControl from '../components/QualityControl';
import Footer from '../components/Footer';
import '../App.css';
import './QualityPage.css';

const QualityPage = () => {
  useEffect(() => {
    // Slower smooth scroll for a cinematic feel
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
    <div className="quality-page-wrapper">
      <Navbar />
      <PageHeader 
        title="Quality & Sustainability" 
        subtitle="Our commitment to maintaining the natural character of the fruit while protecting the environment." 
      />
      <div className="quality-content-container">
        <QualityControl />
      </div>
      <Footer />
    </div>
  );
};

export default QualityPage;
