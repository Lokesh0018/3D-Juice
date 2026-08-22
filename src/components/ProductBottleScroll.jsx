import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProductBottleScroll.css';

const ProductBottleScroll = ({ product }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const totalFrames = 296;
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const paddedNum = i.toString().padStart(3, '0');
      img.src = `/assets/ezgif-1953cb71ee1524d4-jpg/ezgif-frame-${paddedNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
           setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, [product.folderPath]);

  useEffect(() => {
    if (images.length === 0) return;
    
    const renderFrame = (index) => {
      if (!canvasRef.current || !images[index]) return;
      
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;
      
      const img = images[index];
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
      const index = Math.min(Math.floor(latest) - 1, totalFrames - 1);
      requestAnimationFrame(() => renderFrame(Math.max(0, index)));
    });

    return () => unsubscribe();
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="scroll-container">
      <motion.div className="sticky-canvas-wrapper">
        <canvas ref={canvasRef} className="bottle-canvas" />
      </motion.div>
    </div>
  );
};

export default ProductBottleScroll;
