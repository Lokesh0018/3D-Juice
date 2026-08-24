import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import '../App.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // In a real application, you would send this to an API
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <Navbar />
      <PageHeader 
        title="Get in Touch" 
        subtitle="Have a question or want to partner with us? We'd love to hear from you." 
      />
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', paddingBottom: '8rem' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--theme-primary, #F5A623)', marginBottom: '1.5rem' }}>Let's Connect</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            We're always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>hello@alphonsomango.com</p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>+1 (555) 123-4567</p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Farm Location</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Ratnagiri, Maharashtra, India</p>
          </div>
        </div>

        <div style={{ flex: '1 1 400px' }}>
          {submitted ? (
            <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', textAlign: 'center', border: '1px solid var(--theme-primary)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--theme-primary)', marginBottom: '1rem' }}>Thank You!</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Your message has been received. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>Message</label>
                <textarea 
                  required
                  rows="5"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', resize: 'vertical' }}
                ></textarea>
              </div>
              <button 
                type="submit" 
                style={{ padding: '1rem 2rem', background: 'var(--theme-primary, #F5A623)', color: '#000', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'opacity 0.3s' }}
                onMouseOver={e => e.currentTarget.style.opacity = 0.8}
                onMouseOut={e => e.currentTarget.style.opacity = 1}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
