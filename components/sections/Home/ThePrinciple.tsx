"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function ThePrinciple() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) directly to frame numbers (1 to 300)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 300]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Helper to format the frame name matching your folder structure
    const getFrameUrl = (index: number) => {
      const paddedIndex = String(index).padStart(3, "0");
      return `/videos/principle/theprincipleVideo/ezgif-frame-${paddedIndex}.jpg`;
    };

    // Preload images into memory for zero lag during scroll
    const images: HTMLImageElement[] = [];
    const totalFrames = 300;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      images.push(img);
    }

    // Draw the image on the canvas and scale it to mimic "object-cover"
    const drawImage = (img: HTMLImageElement) => {
      if (!img.complete) return;
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let dWidth = canvasWidth;
      let dHeight = canvasHeight;
      let dx = 0;
      let dy = 0;

      if (imgRatio > canvasRatio) {
        dWidth = canvasHeight * imgRatio;
        dx = (canvasWidth - dWidth) / 2;
      } else {
        dHeight = canvasWidth / imgRatio;
        dy = (canvasHeight - dHeight) / 2;
      }

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, dx, dy, dWidth, dHeight);
    };

    // Resize canvas to match screen resolution (handling retina displays)
    const handleResize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Re-draw current frame on resize
      const currentFrame = Math.round(frameIndex.get());
      const img = images[currentFrame - 1];
      if (img) drawImage(img);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Listen to Framer Motion's frame update value and draw it instantly
    const unsubscribe = frameIndex.on("change", (latest) => {
      const currentFrame = Math.round(latest);
      const img = images[currentFrame - 1];
      if (img) {
        if (img.complete) {
          drawImage(img);
        } else {
          img.onload = () => drawImage(img);
        }
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [frameIndex]);

  return (
    /* 
      We make the parent container 'h-[300vh]' to give the user enough scroll track 
      to appreciate the frames. 'sticky' keeps the visual viewport locked at full screen 
      while they scroll.
    */
    <div ref={sectionRef} className="relative h-[300vh] bg-black w-full">
      <section className="sticky top-0 h-[100vh] flex flex-col items-center justify-center overflow-hidden w-full">
        
        {/* High performance Canvas instead of a slow React Image component */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-130 origin-center"
        />
        
        <motion.div 
          className="relative z-20 flex flex-col items-center text-center w-full px-4 max-w-[1290px] mx-auto mt-0 sm:mt-[-50px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.span 
            variants={itemVariants}
            className="uppercase text-white mb-2 sm:mb-[16px]"
            style={{ 
              fontFamily: "'IBM Plex Sans', sans-serif", 
              fontWeight: 500, 
              fontSize: "20px", 
              lineHeight: "1.2"
            }}
          >
            The Principle
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="uppercase text-white mb-6 sm:mb-[47px]"
            style={{ 
              fontFamily: "'IBM Plex Sans', sans-serif", 
              fontWeight: 500, 
              fontSize: "clamp(32px, 5vw, 64px)", 
              lineHeight: "1.1",
              textShadow: "0px 11px 19px rgba(255, 0, 0, 0.5)"
            }}
          >
            Clarity Before Commitment
          </motion.h2>
          
          <motion.h3 
            variants={itemVariants}
            className="uppercase text-white mb-4 sm:mb-[16px]"
            style={{ 
              fontFamily: "'IBM Plex Sans', sans-serif", 
              fontWeight: 700, 
              fontSize: "clamp(18px, 3vw, 24px)", 
              lineHeight: "1.2",
              textShadow: "0px 9px 51px #F5333F"
            }}
          >
            Accountability at every level.
          </motion.h3>
          
          <motion.p 
            variants={itemVariants}
            className="text-white max-w-[650px] mx-auto"
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 500, 
              fontSize: "clamp(16px, 2vw, 20px)", 
              lineHeight: "1.5",
              textShadow: "0px 5px 51px #F5333F"
            }}
          >
            Every engagement begins with a clear understanding of scope,
            objectives and responsibilities. Strong outcomes are built on
            strong foundations.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}