"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { brandPortfolio } from "@/data/businesses.data";
import type { BrandPortfolioItem, BrandPortfolioCategory } from "@/data/businesses.data";

function ImageGrid({ layout }: { layout: "grid" | "wide" }) {
  if (layout === "wide") {
    return (
      <div className="relative w-full h-[250px] rounded-[10px] overflow-hidden shadow-sm">
        <Image
          src="/biz.jpg"
          alt="Business showcase"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-5">
      <div className="relative aspect-square rounded-[10px] overflow-hidden shadow-sm">
        <Image
          src="/biz.jpg"
          alt="Business showcase 1"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 30vw"
        />
      </div>
      <div className="relative aspect-square rounded-[10px] overflow-hidden shadow-sm">
        <Image
          src="/biz.jpg"
          alt="Business showcase 2"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 30vw"
        />
      </div>
    </div>
  );
}

function BrandCard({ item, index }: { item: BrandPortfolioItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-12 pb-11 mb-11 border-b border-[#ECECEC]"
    >
      <div className="w-full md:w-[45%] lg:w-[40%]">
        <p className="text-[13px] font-semibold text-[#222] uppercase mb-[18px]">
          {item.name}
        </p>
        <div className="relative h-[48px] md:h-[56px] mb-[30px]">
          <Image
            src={item.logo}
            alt={`${item.name} logo`}
            fill
            className="object-contain object-left"
          />
        </div>
        <h4 className="text-lg font-semibold text-[#111827] mb-2.5">
          {item.title}
        </h4>
        <p className="text-[15px] leading-[1.7] text-[#555] max-w-[340px]">
          {item.description}
        </p>
      </div>
      <div className="w-full md:w-[55%] lg:w-[60%]">
        <ImageGrid layout={item.layout} />
      </div>
    </motion.div>
  );
}

function CategorySection({ category }: { category: BrandPortfolioCategory }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#222] tracking-[0.08em] uppercase mt-14 mb-7">
        {category.category}
      </h3>
      <div className="w-full h-px bg-[#E5E7EB] mb-7" />
      {category.items.map((item, index) => (
        <BrandCard key={item.name} item={item} index={index} />
      ))}
    </div>
  );
}

export default function BrandPortfolio() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,64px)] pt-16 pb-20">
          <h2 className="text-center font-[var(--font-display)] font-medium text-lg tracking-[0.3em] uppercase text-[#111827] mb-12">
            BRAND PORTFOLIO
          </h2>
          {brandPortfolio.map((category) => (
            <CategorySection key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
