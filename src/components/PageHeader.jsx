import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div style={{
      width: '100%',
      minHeight: '40vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: '100px',
      marginBottom: '4rem'
    }}>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ color: 'var(--theme-primary, #F5A623)', fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ color: '#fff', fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6' }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default PageHeader;
