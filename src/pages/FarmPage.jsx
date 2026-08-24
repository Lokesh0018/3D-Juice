import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import OrchardOrigins from '../components/OrchardOrigins';
import FarmerPartnerships from '../components/FarmerPartnerships';
import Footer from '../components/Footer';
import '../App.css';

const FarmPage = () => {
  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <Navbar />
      <PageHeader 
        title="Our Farm" 
        subtitle="Discover the rich soil and perfect climate that nurtures our Alphonso mangoes." 
      />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <OrchardOrigins />
        <div style={{ margin: '8rem 0' }}></div>
        <FarmerPartnerships />
      </div>
      <Footer />
    </div>
  );
};

export default FarmPage;
