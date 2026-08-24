import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import '../App.css';
import '../components/MangoTimeline.css'; // Reuse timeline styles

const TraceabilityPage = () => {
  const steps = [
    { title: "The Farm", desc: "Our journey begins at the Ratnagiri orchards, where each tree is geo-tagged." },
    { title: "Mango Tree", desc: "Natural cultivation methods are used, with no artificial growth hormones." },
    { title: "Harvest", desc: "Hand-picked at dawn to preserve the maximum natural sweetness and aroma." },
    { title: "Processing", desc: "Washed and sorted within 4 hours of harvest to lock in freshness." },
    { title: "Pulp", desc: "Cold-extracted into a rich, golden pulp in a zero-oxygen environment." },
    { title: "Juice", desc: "Blended with pure water to create the perfect consistency." },
    { title: "Bottle", desc: "Sealed in UV-protected glass bottles to maintain nutrients and flavor." }
  ];

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <Navbar />
      <PageHeader 
        title="Traceability" 
        subtitle="Follow the exact path of your juice from our farm directly to your bottle." 
      />
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', paddingBottom: '8rem' }}>
        <section className="timeline-container" style={{ margin: 0, padding: 0 }}>
          <div className="timeline-sticky">
            <motion.div 
              className="timeline-track-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {}
              }}
            >
              <div className="timeline-line-bg"></div>
              <div className="timeline-line-active" style={{ height: '100%' }}></div>

              <div className="timeline-items">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3 style={{ color: 'var(--theme-primary, #F5A623)', marginBottom: '0.5rem' }}>{step.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TraceabilityPage;
