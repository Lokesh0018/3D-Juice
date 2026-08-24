import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: '100px',
      marginBottom: '4rem',
      backgroundImage: 'url("https://images.unsplash.com/photo-1590483864402-9a572a1a4de1?q=80&w=2000&auto=format&fit=crop")', // Beautiful vibrant mango farm
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay for text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,1) 100%)',
        zIndex: 1
      }}></div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 2, color: 'var(--theme-primary, #F5A623)', fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ position: 'relative', zIndex: 2, color: '#fff', fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6' }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default PageHeader;
