import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, product, themeColor }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="cart-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="cart-header">
              <h2>Your Cart</h2>
              <button className="close-btn" onClick={onClose}><X size={24} /></button>
            </div>
            
            <div className="cart-items">
              <div className="empty-cart">
                <ShoppingBag size={48} opacity={0.2} style={{margin: '0 auto 1rem'}} />
                <p>Your cart is empty.</p>
                <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>Add {product.name} to get started!</p>
              </div>
            </div>

            <div className="cart-footer">
              <button className="checkout-btn" style={{ backgroundColor: themeColor }}>
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
