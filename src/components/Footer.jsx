import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="logo-area">
             <span className="logo-text">Alphonso Mango</span>
          </div>
          <p className="tagline">Future of Freshness</p>
        </div>
        <div className="footer-col">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">All Flavors</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Merch</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-col newsletter">
          <h3>Stay Fresh</h3>
          <p>Sign up for 10% off your first order.</p>
          <div className="subscribe-box">
             <input type="email" placeholder="Enter your email" />
             <button>→</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alphonso Mango. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
