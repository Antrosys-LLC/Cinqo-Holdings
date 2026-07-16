"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BusinessData } from "@/data/businesses.data";

export default function Capabilities({ capabilities }: { capabilities: BusinessData["capabilities"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!capabilities || capabilities.length === 0) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="mb-12 md:mb-16 text-center [font-family:var(--font-display)] font-semibold text-[18px] md:text-[20px] tracking-[0.05em] text-ink uppercase">
          Capabilities
        </h2>
        
        <div className="flex flex-col border-t border-gray-200">
          {capabilities.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-gray-200 overflow-hidden"
              >
                <div 
                  onClick={() => toggleAccordion(index)}
                  className="py-4 md:py-5 flex items-center justify-between cursor-pointer group"
                >
                  <h3 className="m-0 [font-family:var(--font-body)] font-bold text-[14px] md:text-[15px] xl:text-[16px] text-ink uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <div className="relative w-6 h-6 flex items-center justify-center text-ink/70 group-hover:text-ink transition-colors">
                    <motion.span 
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute text-3xl font-light leading-none flex items-center justify-center h-full w-full"
                    >
                      +
                    </motion.span>
                  </div>
                </div>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 pb-10 pt-2">
                        <div className="relative aspect-[3/2] w-full rounded-[4px] overflow-hidden bg-gray-100">
                          <Image 
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-end">
                          <p className="[font-family:var(--font-body)] text-[14px] md:text-[16px] text-ink/80 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
