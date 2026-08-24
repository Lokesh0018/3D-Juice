import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import ExtractionProcess from '../components/ExtractionProcess';
import MangoTimeline from '../components/MangoTimeline';
import Footer from '../components/Footer';
import '../App.css';

const ProcessPage = () => {
  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <Navbar />
      <PageHeader 
        title="The Process" 
        subtitle="Our meticulous workflow from harvest to the finished golden juice." 
      />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <ExtractionProcess />
        <div style={{ margin: '8rem 0' }}></div>
        <MangoTimeline />
      </div>
      <Footer />
    </div>
  );
};

export default ProcessPage;
