import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import TasteProfile from '../components/TasteProfile';
import IngredientsBreakdown from '../components/IngredientsBreakdown';
import HealthBenefits from '../components/HealthBenefits';
import Footer from '../components/Footer';
import '../App.css';

const ProductPage = () => {
  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <Navbar />
      <PageHeader 
        title="Our Product" 
        subtitle="Experience the pure taste of Alphonso Mango Juice, crafted without compromise." 
      />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <TasteProfile />
        <div style={{ margin: '8rem 0' }}></div>
        <IngredientsBreakdown />
        <div style={{ margin: '8rem 0' }}></div>
        <HealthBenefits />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
