"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects.data";

export default function ProjectHighlights() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  
  // Track the exact sequence of all 4 images for the current project.
  // Index 0 is the Main Hero Box. Indexes 1, 2, and 3 are the thumbnails.
  const [orderedImages, setOrderedImages] = useState<string[]>([]);
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromise = useRef<Promise<void> | null>(null);

  const project = projectsData[activeProjectIndex];
  const totalProjects = projectsData.length;

  // Initialize or reset the sequence of images when the project changes
  useEffect(() => {
    if (project) {
      setOrderedImages([
        project.heroImage,
        ...project.gallery.map((img) => img.src),
      ]);
    }
  }, [activeProjectIndex, project]);

  const goToProject = (index: number) => {
    const next = (index + totalProjects) % totalProjects;
    setActiveProjectIndex(next);
  };

  // Shift logic: Clickey thumb index moves to position 0. All preceding items shift right.
  const handleThumbClick = (clickedIndex: number) => {
    if (clickedIndex === 0) return; // Already the main image

    setOrderedImages((prev) => {
      const nextOrder = [...prev];
      const clickedItem = nextOrder[clickedIndex];

      // Shift elements to the right up to the clicked position
      for (let i = clickedIndex; i > 0; i--) {
        nextOrder[i] = nextOrder[i - 1];
      }
      // Place the clicked item in the main spotlight slot (position 0)
      nextOrder[0] = clickedItem;

      return nextOrder;
    });
  };

  const handleMouseEnter = () => {
    setHovering(true);
    if (videoRef.current) {
      playPromise.current = videoRef.current.play();
      if (playPromise.current !== undefined) {
        playPromise.current.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setHovering(false);
    if (videoRef.current) {
      if (playPromise.current !== undefined && playPromise.current !== null) {
        playPromise.current
          .then(() => {
            videoRef.current?.pause();
          })
          .catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  if (orderedImages.length === 0) return null;

  return (
    <section className="section bg-white py-16 md:py-24" id="projects">
      <div className="container grid gap-12 items-center min-[900px]:grid-cols-[1fr_1fr]">
        
        {/* Left Side: Main Large Box */}
        <div
          className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Framer Motion layoutId handles the smooth layout transition */}
          <motion.div
            layoutId={`img-${orderedImages[0]}`}
            className="absolute inset-0 z-10"
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
          >
            <Image
              src={orderedImages[0]}
              alt={project.name}
              fill
              className={`object-cover ${hovering && project.heroVideo ? "opacity-0" : ""}`}
              priority
            />
          </motion.div>

          {project.heroVideo && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-700 ease-out ${hovering ? "opacity-100" : "opacity-0"}`}
              src={project.heroVideo}
              muted
              loop
              playsInline
            />
          )}
        </div>

        {/* Right Side: Text & Interactive Elements */}
        <div className="flex flex-col h-full justify-between py-2">
          
          {/* Title and Description */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              Project Highlights
            </h2>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeProjectIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-zinc-600 max-w-[480px] text-base leading-relaxed"
              >
                A portfolio of projects that demonstrates our commitment to
                excellence, innovation and successful delivery across diverse
                sectors.
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Bottom alignment area for Thumbnails and Navigation Arrows */}
          <div className="flex items-end justify-between mt-12 md:mt-20">
            
            {/* Gallery Thumbnails */}
            <div className="flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeProjectIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-semibold text-zinc-900"
                >
                  {project.name}
                </motion.span>
              </AnimatePresence>

              <div className="flex items-center gap-3">
                {/* 
                  Render positions 1, 2, and 3 as the small boxes.
                  Clicking one triggers the smooth physical layout swap.
                */}
                {orderedImages.slice(1).map((src, sliceIdx) => {
                  const actualIdx = sliceIdx + 1;
                  return (
                    <button
                      key={src}
                      className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden opacity-60 hover:opacity-100 scale-95 active:scale-90 transition-all duration-300"
                      onClick={() => handleThumbClick(actualIdx)}
                      aria-label={`Show image ${actualIdx}`}
                    >
                      <motion.div
                        layoutId={`img-${src}`}
                        className="absolute inset-0"
                        transition={{ type: "spring", stiffness: 180, damping: 25 }}
                      >
                        <Image src={src} alt="" fill className="object-cover" />
                      </motion.div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              {/* Previous Button */}
              <button
                onClick={() => goToProject(activeProjectIndex - 1)}
                className="w-10 h-10 rounded-full bg-[#333333] text-white flex items-center justify-center hover:bg-black transition-colors duration-200"
                aria-label="Previous project"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              
              {/* Next Button */}
              <button
                onClick={() => goToProject(activeProjectIndex + 1)}
                className="w-16 h-10 rounded-full bg-[#333333] text-white flex items-center justify-center hover:bg-black transition-colors duration-200"
                aria-label="Next project"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}