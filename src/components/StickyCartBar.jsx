import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './StickyCartBar.css';

const StickyCartBar = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartState, setCartState] = useState('idle'); // idle, loading, success

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 100vh
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    if (cartState !== 'idle') return;
    
    // Haptic feedback
    if (navigator.vibrate) navigator.vibrate(50);
    
    setCartState('loading');
    setTimeout(() => {
      setCartState('success');
      setTimeout(() => setCartState('idle'), 2000);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="sticky-cart-bar"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="cart-bar-content">
            <div className="cart-product-info">
              <span className="cart-title">{product.name}</span>
              <span className="cart-price">
                ₹{parseInt(product.price.replace('₹', '')) * quantity}
              </span>
            </div>
            
            <div className="cart-actions">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              
              <button 
                className={`sticky-buy-btn ${cartState}`}
                style={{ backgroundColor: product.themeColor }}
                onClick={handleAddToCart}
              >
                {cartState === 'idle' && 'Add to Cart'}
                {cartState === 'loading' && <span className="spinner" />}
                {cartState === 'success' && '✓ Added'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCartBar;
