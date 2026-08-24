import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import OurStory from '../components/OurStory';
import Founders from '../components/Founders';
import Footer from '../components/Footer';
import '../App.css';

const StoryPage = () => {
  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <Navbar />
      <PageHeader 
        title="Our Story" 
        subtitle="A journey of passion, dedication, and the relentless pursuit of the perfect mango." 
      />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <OurStory />
        <div style={{ margin: '8rem 0' }}></div>
        <Founders />
      </div>
      <Footer />
    </div>
  );
};

export default StoryPage;
