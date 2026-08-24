import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const ContactPage = () => (
  <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', paddingTop: '100px' }}>
    <Navbar />
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: 'var(--theme-primary, #F5A623)', fontSize: '3rem', marginBottom: '2rem' }}>Contact Page</h1>
      <p>Placeholder content for Contact.</p>
    </div>
  </div>
);

export default ContactPage;
