"use client";
import Image from "next/image";
import { logosData } from "@/data/logos.data";

export default function TrustedBySection() {
  return (
    <section 
      className="bg-white py-6 flex flex-col items-center w-full px-4 md:px-10 overflow-hidden"
      aria-labelledby="trusted-by-heading"
    >
      {/* 1. Header Text Container */}
      <div className="w-full max-w-[1400px] flex flex-col items-start mb-3 px-2">
        <div className="relative">
          <p id="trusted-by-heading" className="text-md font-light text-slate-900">
            Exclusive and authorized representation of leading global manufacturers, delivering world-class technical solutions across coatings, chemicals, and infrastructure.
          </p>
        </div>
      </div>

      {/* Reduced container height to keep the loop concise */}
      <div 
        className="relative w-full max-w-[1400px] h-[180px] md:h-[220px] overflow-hidden rounded-[10px] flex flex-col justify-center"
        style={{
          backgroundImage: `url('/images/logobg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dull White Opacity Layer */}
        <div className="absolute inset-0 bg-white/5 z-0 pointer-events-none rounded-[10px]" />

        {/* Row: Smooth Marquee */}
        <div 
          className="relative z-10 flex overflow-x-hidden group w-full"
          role="region" 
          aria-label="Scrolling brand logos"
        >
          <div className="animate-marquee flex whitespace-nowrap gap-12 md:gap-16 items-center">
            {[...logosData, ...logosData, ...logosData].map((logoItem, i) => (
              <div 
                key={`logo-${logoItem.id}-${i}`} 
                className="mx-2 relative h-8 md:h-12 w-28 md:w-40 flex-shrink-0"
              >
                <Image 
                  src={logoItem.logo} 
                  alt={`${logoItem.name} logo`}
                  fill
                  sizes="(max-width: 768px) 112px, 160px"
                  className="object-contain" 
                  priority={i < logosData.length}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Ring Overlay */}
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[10px] z-20"></div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: no-preference) {
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            overflow-x: auto;
            white-space: normal;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}