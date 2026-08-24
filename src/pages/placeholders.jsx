import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const PageLayout = ({ title, children }) => (
  <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', paddingTop: '100px' }}>
    <Navbar />
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: 'var(--theme-primary, #F5A623)', fontSize: '3rem', marginBottom: '2rem' }}>{title}</h1>
      {children}
    </div>
  </div>
);

export const FarmPage = () => <PageLayout title="Our Farm"><p>Details about the farm, growing environment, and mango cultivation.</p></PageLayout>;
export const ProcessPage = () => <PageLayout title="The Process"><p>The complete processing pipeline from harvest to bottling.</p></PageLayout>;
export const QualityPage = () => <PageLayout title="Quality"><p>Our commitment to quality selection and freshness.</p></PageLayout>;
export const TraceabilityPage = () => <PageLayout title="Traceability"><p>Trace your juice from our farm to your bottle.</p></PageLayout>;
export const ProductPage = () => <PageLayout title="Our Product"><p>Discover the finished Alphonso Mango Juice.</p></PageLayout>;
export const StoryPage = () => <PageLayout title="Our Story"><p>Learn about our beginning and our vision.</p></PageLayout>;
export const ContactPage = () => <PageLayout title="Contact Us"><p>Get in touch with us.</p></PageLayout>;
