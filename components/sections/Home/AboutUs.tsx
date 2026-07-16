"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a spring physics configuration for butter-smooth scroll sync
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Maps the scroll progress to scale (now peaks significantly higher at 1.25)
  const textScale = useTransform(smoothProgress, [0, 0.45, 0.8], [0.92, 1.09, 0.98]);
  const textOpacity = useTransform(smoothProgress, [0, 0.2, 0.7, 0.9], [0.4, 1, 1, 0.4]);

  // Swapped inline-block to inline & added z-index adjustments on hover to prevent overlapping artifacts
  const hoverSpanClass = 
    "inline relative z-0 transition-all duration-300 hover:z-10 hover:font-bold hover:italic hover:scale-105 cursor-default origin-center";

  return (
    <section 
      ref={containerRef} 
      className="w-full pb-20 pt-8 md:pt-16 px-4 bg-white flex flex-col items-center overflow-hidden"
    >
      <div className="w-full flex flex-col items-center max-w-6xl">
        
        {/* Section Heading */}
        <h2 className="text-black font-semibold text-[24px] mb-8 tracking-wide font-[var(--font-ibm-plex)]">
          About Us
        </h2>

        {/* Hero Typography with Scroll-Sync Animation */}
        <motion.div 
          style={{ scale: textScale, opacity: textOpacity }}
          className="text-center text-[32px] leading-[1.6] font-light text-[#737373] mb-20 w-full tracking-tight font-['Inter',_sans-serif]"
        >
          <span className={hoverSpanClass}>With a team of over</span>{" "}
          <span className={`${hoverSpanClass} text-black font-normal`}>600 employees</span>{" "}
          <span className={hoverSpanClass}>and a portfolio of specialized</span>{" "}
          <br className="hidden md:block" />
          <span className={hoverSpanClass}>industries,</span>{" "}
          <span className={`${hoverSpanClass} text-black font-normal`}>
            Cinqo is recognized for delivering industry
          </span>
          
          {/* Inline Pill Image */}
          <span className="inline-block align-middle mx-3 w-[140px] h-[52px] relative rounded-[40px] overflow-hidden shadow-sm -mt-2 transition-transform duration-300 hover:scale-110">
            <Image
              src="/images/about/image_7a5798.png"
              alt="Cinqo Facility"
              fill
              className="object-cover"
              priority
            />
          </span>
          
          <span className={hoverSpanClass}>leading</span>{" "}
          <br className="hidden md:block" />
          <span className={hoverSpanClass}>solutions, exceptional service and sustained value across</span>{" "}
          <span className={`${hoverSpanClass} text-black font-normal`}>
            public and private sectors
          </span>
        </motion.div>

        {/* Vision & Mission with Scroll-Sync Animation */}
        <motion.div 
          style={{ scale: textScale, opacity: textOpacity }}
          className="w-full text-center space-y-12 max-w-4xl"
        >

          {/* Mission Block */}
          <div className="group">
            <h3 className="font-bold text-black text-[20px] mb-4 tracking-[0.12em] uppercase font-['Inter',_sans-serif] transition-colors duration-300 group-hover:text-neutral-700">
              Mission
            </h3>
            <p className="text-black/85 text-[clamp(13px,2.2vw,20px)] leading-[1.7] font-[var(--font-ibm-plex)] whitespace-nowrap">
              To build a group of enduring businesses recognized for performance, trust and sustainable growth.
            </p>
          </div>

          {/* Vision Block */}
          <div className="group">
            <h3 className="font-bold text-black text-[22px] mb-4 tracking-[0.12em] uppercase font-[var(--font-ibm-plex)] transition-colors duration-300 group-hover:text-neutral-700">
              Vision
            </h3>
            <p className="text-black/85 text-[20px] leading-[1.8] font-[var(--font-ibm-plex)] max-w-3xl mx-auto">
              <span className={hoverSpanClass}>To build a group</span>{" "}
              <span className={hoverSpanClass}>of enduring businesses</span>{" "}
              <span className={hoverSpanClass}>recognized for performance,</span>{" "}
              <span className={hoverSpanClass}>trust and sustainable growth.</span>
            </p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}