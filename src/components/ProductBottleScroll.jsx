import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import manifest from '../data/framesManifest.json';
import './ProductBottleScroll.css';

const ProductBottleScroll = ({ product }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const [isReady, setIsReady] = useState(false);
  const { scrollYProgress } = useScroll();

  const totalFrames = manifest.length;
  const scrollSpeedMultiplier = 1; // Maps perfectly across the entire long page using all 2,600 frames!
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames * scrollSpeedMultiplier]);

  useEffect(() => {
    if (totalFrames === 0) return;
    
    // Initialize the array
    imagesRef.current = new Array(totalFrames).fill(null);
    
    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = manifest[0];
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      setIsReady(true);
      
      // Load remaining frames asynchronously so we don't block the initial render
      for (let i = 1; i < totalFrames; i++) {
        const img = new Image();
        img.src = manifest[i];
        img.onload = () => {
          imagesRef.current[i] = img;
        };
      }
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;
    
    const renderFrame = (index) => {
      if (!canvasRef.current) return;
      
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;
      
      // Find the closest loaded image if the requested one is not loaded yet
      let drawIndex = index;
      while (drawIndex >= 0 && !imagesRef.current[drawIndex]) {
        drawIndex--;
      }
      
      if (drawIndex < 0) return;
      
      const img = imagesRef.current[drawIndex];
      const canvas = canvasRef.current;
      
      // Keep canvas resolution high
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Calculate object-fit: cover logic
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;  
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
         img, 
         0, 0, img.width, img.height,
         centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    renderFrame(0); // initial render (frame 1)

    const unsubscribe = frameIndex.on("change", (latest) => {
      let index = Math.min(Math.floor(latest), totalFrames - 1);
      if (index < 0) index = 0;
      requestAnimationFrame(() => renderFrame(index));
    });

    return () => unsubscribe();
  }, [isReady, frameIndex, totalFrames]);

  return (
    <div className="scroll-container">
      <motion.div className="sticky-canvas-wrapper">
        <canvas ref={canvasRef} className="bottle-canvas" />
      </motion.div>
    </div>
  );
};

export default ProductBottleScroll;
