import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import ExtractionProcess from '../components/ExtractionProcess';
import MangoTimeline from '../components/MangoTimeline';
import Footer from '../components/Footer';
import '../App.css';
import './ProcessPage.css';

const ProcessPage = () => {
  useEffect(() => {
    // Slower smooth scroll for a cinematic feel
    const lenis = new Lenis({
      duration: 2.2,
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="process-page-wrapper">
      <Navbar />
      <PageHeader 
        title="The Process" 
        subtitle="Our meticulous workflow from harvest to the finished golden juice." 
      />
      <div className="process-content-container">
        <ExtractionProcess />
        <MangoTimeline />
      </div>
      <Footer />
    </div>
  );
};

export default ProcessPage;
