import React from 'react';
import CenterSafeLayout from '../layouts/CenterSafeLayout';

const LandingPage = () => {
  return (
    <CenterSafeLayout
      leftContent={
        <div className="side-panel">
          <h1 className="side-title"><span className="accent">LandingPage</span>Left Side</h1>
          <p className="side-desc">Description for the left side of LandingPage.</p>
        </div>
      }
      rightContent={
        <div className="side-panel">
          <h1 className="side-title"><span className="accent">Info</span>Right Side</h1>
          <p className="side-desc">Description for the right side of LandingPage.</p>
        </div>
      }
    >
      <div style={{ height: '400vh' }}>
        {/* Scroll height to trigger 3D scene animation */}
      </div>
    </CenterSafeLayout>
  );
};

export default LandingPage;
