"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { newsData } from "@/data/news.data";
import Image from "next/image";

export default function NewsSection() {
  // Use news items specifically added for the news page (index 4 onwards)
  const pageNews = newsData.slice(4);
  const [activeNews, setActiveNews] = useState(pageNews[0] || newsData[0]);

  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Panel - Active News */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNews.id}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full flex flex-col gap-8"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/10] rounded-sm overflow-hidden bg-zinc-900 group shadow-lg">
                  <Image
                    src={activeNews.image}
                    alt={activeNews.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  
                  {/* Content over image */}
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md">
                        {activeNews.tag}
                      </span>
                    </div>
                    <div className="max-w-3xl">
                      <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight"
                      >
                        {activeNews.title}
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-zinc-300 text-sm md:text-base font-medium"
                      >
                        {activeNews.date}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-6 lg:pr-8">
                  {activeNews.detailedHeadline && (
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black leading-snug tracking-tight"
                    >
                      {activeNews.detailedHeadline}
                    </motion.h3>
                  )}
                  {activeNews.content ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="flex flex-col gap-5 text-zinc-600 leading-relaxed text-base md:text-lg"
                    >
                      {activeNews.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </motion.div>
                  ) : (
                    <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                      Full article content coming soon...
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Panel - Scrollable List */}
          <div className="lg:col-span-5 flex flex-col h-full lg:border-l border-zinc-300 lg:pl-10">
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #e4e4e7;
                border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #d4d4d8;
              }
            `}</style>
            
            <div className="overflow-y-auto overscroll-contain w-full max-h-[800px] flex flex-col gap-6 pr-4 custom-scrollbar lg:-mr-4 sticky top-32">
              {pageNews.map((newsItem, index) => {
                const isActive = activeNews.id === newsItem.id;
                
                return (
                  <motion.div
                    key={newsItem.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveNews(newsItem)}
                    className="flex items-start gap-5 cursor-pointer group pb-6 md:pb-10 border-b border-zinc-300 last:border-b-0 transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-zinc-100 rounded-sm overflow-hidden transition-all duration-300 border-2 ${isActive ? 'border-black' : 'border-transparent group-hover:shadow-md'}`}>
                      <Image
                        src={newsItem.image}
                        alt={newsItem.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'group-hover:scale-110'}`}
                      />
                    </div>
                    {/* Details */}
                    <div className="flex flex-col pt-1">
                      <p className="text-xs md:text-sm text-zinc-500 mb-2 font-medium">{newsItem.date}</p>
                      <h4 className={`text-sm md:text-base leading-snug transition-colors duration-300 ${isActive ? 'text-black font-bold' : 'text-zinc-700 font-medium group-hover:text-black'}`}>
                        {newsItem.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
