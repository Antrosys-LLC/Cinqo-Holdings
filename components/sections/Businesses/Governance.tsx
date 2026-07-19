"use client";

import Image from "next/image";
import { useRef } from "react";
import { Inter } from "next/font/google";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const governanceItems = [
  {
    heading: "COMMERCIAL DUE DILIGENCE",
    description:
      "Assessment of market opportunity, competitive positioning and commercial viability.",
  },
  {
    heading: "OPERATIONAL EVALUATION",
    description:
      "Review of management capability, operational efficiency and scalability.",
  },
  {
    heading: "FINANCIAL ANALYSIS",
    description:
      "Evaluation of cash flow, capital requirements, return expectations and downside protection.",
  },
  {
    heading: "RISK ASSESSMENT",
    description:
      "Analysis of regulatory, operational and commercial risks affecting long-term sustainability.",
  },
  {
    heading: "GOVERNANCE ALIGNMENT",
    description:
      "Assessment of compatibility with the Group’s governance, reporting and financial control standards.",
  },
  {
    heading: "STRATEGIC FIT",
    description:
      "Evaluation of long-term relevance, potential synergies and contribution to the Group’s portfolio.",
  },
] as const;

const investmentCards = [
  {
    id: "ilium",
    name: "ilium composites",
    image: null as string | null,
  },
  {
    id: "procural",
    name: "Procural",
    image: "/images/investments/procural.png",
  },
  {
    id: "arooj",
    name: "AROOJ development company",
    image: "/images/investments/arooj.png",
  },
  {
    id: "al-rashid",
    name: "Al Rashid Health Center",
    image: null as string | null,
  },
  {
    id: "tsma",
    name: "ETSMA",
    image: "/images/investments/tsma.png",
  },
] as const;

export default function Governance() {
  const listRef = useRef<HTMLUListElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.35"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      className={`${inter.className} bg-white px-6 pb-10 pt-8`}
      aria-labelledby="governance-oversight-heading"
    >
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center">
        <h2
          id="governance-oversight-heading"
          className="mb-[36px] mt-[46px] text-center text-[18px] md:text-[20px] font-bold uppercase tracking-[2px] text-[#222222]"
        >
          Governance &amp; Oversight
        </h2>

        <ul
          ref={listRef}
          className="relative flex w-full max-w-[600px] flex-col gap-[22px]"
        >
          {/* Track line */}
          <span
            aria-hidden="true"
            className="absolute bottom-[8px] left-[5px] top-[8px] w-px bg-[#E5E5E5]"
          />
          {/* Scroll-fill line */}
          <motion.span
            aria-hidden="true"
            className="absolute left-[5px] top-[8px] bottom-[8px] w-px origin-top bg-coral-600"
            style={{ scaleY: lineScale }}
          />

          {governanceItems.map((item) => (
            <li key={item.heading} className="relative flex items-start gap-4">
              <span
                aria-hidden="true"
                className="relative z-10 mt-[4px] h-3 w-3 shrink-0 rotate-45 bg-[#C0392B]"
              />
              <div className="flex min-w-0 flex-col gap-1.5">
                <h3 className="text-[14px] font-bold uppercase leading-none text-[#333333]">
                  {item.heading}
                </h3>
                <p className="max-w-[520px] text-[14px] font-normal leading-[1.6] text-[#666666]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-20 w-full">
          <h2 className="mb-[36px] text-center text-[18px] md:text-[20px] font-bold uppercase tracking-[2px] text-[#333333]">
            Investments
          </h2>

          <ul className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-6 pb-20">
            {investmentCards.map(({ id, name, image }, idx) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }}
                className="relative flex h-[220px] w-[260px] flex-col items-center justify-center rounded-[4px] bg-[#CFCFCF] p-6 text-center cursor-default"
              >
                <div className="relative mb-5 flex h-[70px] w-full items-center justify-center">
                  {image ? (
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="260px"
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-[20px] font-bold leading-tight text-black">
                      {name === "Al Rashid Health Center" ? (
                        <>
                          Al Rashid <br /> Health Center
                        </>
                      ) : name === "ilium composites" ? (
                        <>
                          ilium <br /> composites
                        </>
                      ) : (
                        name
                      )}
                    </span>
                  )}
                </div>
                
                <p className="max-w-[200px] text-[11px] font-medium leading-[1.4] text-[#555555]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
