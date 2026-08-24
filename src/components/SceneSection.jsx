import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './SceneSection.css';

const SceneSection = ({ frames = [], children, minHeight = "200vh" }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const totalFrames = frames.length;
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);

  useEffect(() => {
    if (!frames || frames.length === 0) return;
    let loaded = 0;
    imagesRef.current = [];

    // Preload first frame immediately
    const firstImg = new Image();
    firstImg.src = frames[0];
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      loaded++;
      setIsReady(true);
      // Asynchronously load the rest
      frames.slice(1).forEach((src, idx) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          imagesRef.current[idx + 1] = img;
          loaded++;
        };
      });
    };
  }, [frames]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isReady || !canvasRef.current || !imagesRef.current.length) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const index = Math.min(Math.max(Math.floor(latest) - 1, 0), totalFrames - 1);
    const img = imagesRef.current[index];

    if (img && img.complete) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      
      const scale = Math.max(
        window.innerWidth / img.width,
        window.innerHeight / img.height
      );
      
      const x = (window.innerWidth / 2) - (img.width / 2) * scale;
      const y = (window.innerHeight / 2) - (img.height / 2) * scale;
      
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  });

  // Initial draw
  useEffect(() => {
    if (isReady && canvasRef.current && imagesRef.current[0]) {
      const img = imagesRef.current[0];
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      const ctx = canvasRef.current.getContext("2d");
      
      const scale = Math.max(
        window.innerWidth / img.width,
        window.innerHeight / img.height
      );
      
      const x = (window.innerWidth / 2) - (img.width / 2) * scale;
      const y = (window.innerHeight / 2) - (img.height / 2) * scale;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  }, [isReady]);

  return (
    <section ref={containerRef} className="scene-section" style={{ minHeight }}>
      <div className="scene-background">
        <canvas ref={canvasRef} className="scene-canvas" />
      </div>
      <div className="scene-content">
        {children}
      </div>
    </section>
  );
};

export default SceneSection;
