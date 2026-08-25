import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollRestoration from './components/ScrollRestoration';

const JourneyPage = React.lazy(() => import('./pages/JourneyPage'));
const FarmPage = React.lazy(() => import('./pages/FarmPage'));
const ProcessPage = React.lazy(() => import('./pages/ProcessPage'));
const QualityPage = React.lazy(() => import('./pages/QualityPage'));
const TraceabilityPage = React.lazy(() => import('./pages/TraceabilityPage'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

import './App.css';

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0a0a0a', color: 'var(--theme-primary, #F5A623)' }}>
    <h2>Loading...</h2>
  </div>
);

function App() {
  return (
    <>
      <ScrollRestoration />
      <Suspense fallback={<PageLoader />}>
        <Routes>
        <Route path="/" element={<JourneyPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/farm" element={<FarmPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/quality" element={<QualityPage />} />
        <Route path="/traceability" element={<TraceabilityPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
