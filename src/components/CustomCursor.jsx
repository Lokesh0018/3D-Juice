import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Move } from 'lucide-react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'drag'

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const mouseOver = e => {
      const dragEl = e.target.closest('[data-cursor-type="drag"]');
      if (dragEl) {
        setCursorState('drag');
        return;
      }
      
      const hoverEl = e.target.closest('button, a, input, textarea');
      if (hoverEl) {
        setCursorState('hover');
        return;
      }

      setCursorState('default');
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, []);

  return (
    <div className="custom-cursor-container">
      {/* Outer Ring */}
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: cursorState === 'hover' ? 1.5 : cursorState === 'drag' ? 2 : 1,
          backgroundColor: cursorState === 'hover' ? 'rgba(255,255,255,1)' : cursorState === 'drag' ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0)',
          mixBlendMode: cursorState === 'hover' ? 'difference' : 'normal'
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <AnimatePresence>
          {cursorState === 'drag' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="cursor-icon"
            >
              <Move size={12} color="#000" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/* Inner Dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorState === 'default' ? 1 : 0
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
    </div>
  );
};

export default CustomCursor;
