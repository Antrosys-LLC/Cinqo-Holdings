"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SocialCard() {
  return (
    <section className="container mb-[40px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#F2F2F2] p-8 md:p-10 border border-black/10 rounded-[3px]"
      >
        <h3 className="text-[26px] md:text-[32px] font-bold text-ink mb-6 tracking-tight leading-tight">
          Follow us to stay updated with the latest news from our Group
        </h3>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="text-muted text-[14px] md:text-[15px] leading-relaxed max-w-2xl font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
          
          <div className="flex items-center gap-6 shrink-0">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ink hover:opacity-70 transition-opacity">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-ink hover:opacity-70 transition-opacity">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-ink hover:opacity-70 transition-opacity">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768"/>
              </svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-ink hover:opacity-70 transition-opacity">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
