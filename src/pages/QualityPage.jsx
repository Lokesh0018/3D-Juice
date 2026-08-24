import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import QualityControl from '../components/QualityControl';
import Sustainability from '../components/Sustainability';
import Footer from '../components/Footer';
import '../App.css';

const QualityPage = () => {
  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <Navbar />
      <PageHeader 
        title="Quality & Sustainability" 
        subtitle="Our commitment to maintaining the natural character of the fruit while protecting the environment." 
      />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <QualityControl />
        <div style={{ margin: '8rem 0' }}></div>
        <Sustainability />
      </div>
      <Footer />
    </div>
  );
};

export default QualityPage;
