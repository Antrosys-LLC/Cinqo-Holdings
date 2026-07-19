"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { principlesData } from "@/data/principles.data";

const cardImages = [
  "/images/principles/1.png",
  "/images/principles/2.jpg",
  "/images/principles/3.jpg",
  "/images/principles/4.jpg",
  "/images/principles/5.png",
  "/images/principles/6.jpeg",
];

export default function GuidingPrinciples() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".principle-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 80, // Increased from 30 for a more dramatic rise
          duration: 1.4, // Slightly longer for a premium feel
          delay: i * 0.1, // Increased stagger slightly
          ease: "power3.out", // Smoother corporate-style easing
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Starts a bit earlier so it rises into view naturally
            toggleActions: "play none none reverse",
          },
        });
      });

      if (svgRef.current) {
        gsap.to(svgRef.current, {
          rotate: 360,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="section text-ink text-center overflow-hidden relative"
      ref={sectionRef}
    >
      <div
        ref={svgRef}
        className="absolute inset-0 z-0 will-change-transform"
        aria-hidden
        style={{
          background: "linear-gradient(to right, #F5333F, transparent)",
          WebkitMaskImage: 'url("/")',
          WebkitMaskSize: "65%",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: 'url("/pattern.svg")',
          maskSize: "45%",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          opacity: 0.5,
        }}
      />

      <div className="container">
        <div className="relative z-10 max-w-[640px] mx-auto mb-12">
          <h2>Guiding Principles</h2>
          <p className="text-muted">
            The principles that guide our decisions, shape our culture and
            define how we create lasting value for our clients, partners and
            stakeholders.
          </p>
        </div>

        <div className="relative z-10 grid gap-6 text-left min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {principlesData.map((principle, i) => (
            <div
              key={principle.id}
              className={`principle-card group relative overflow-hidden rounded-md h-[500px] isolate glass-frost-hover cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] ${
                i % 3 === 1 ? "mt-0 min-[1100px]:mt-6" : ""
              }`}
            >
              <Image
                src={cardImages[i] || principle.image}
                alt={principle.title}
                fill
                className="object-cover -z-20 transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy-950/10 to-navy-950/90 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                <h4 className="text-white uppercase text-base tracking-[0.04em]">
                  {principle.title}
                </h4>
                <p className="text-white/70 text-sm transition-colors duration-500 group-hover:text-white/95">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}