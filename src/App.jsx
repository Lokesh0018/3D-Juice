import React from 'react';
import { Routes, Route } from 'react-router-dom';

import JourneyPage from './pages/JourneyPage';
import FarmPage from './pages/FarmPage';
import ProcessPage from './pages/ProcessPage';
import QualityPage from './pages/QualityPage';
import TraceabilityPage from './pages/TraceabilityPage';
import ProductPage from './pages/ProductPage';
import StoryPage from './pages/StoryPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<JourneyPage />} />
      <Route path="/journey" element={<JourneyPage />} />
      <Route path="/farm" element={<FarmPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/quality" element={<QualityPage />} />
      <Route path="/traceability" element={<TraceabilityPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
