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
    name: "ilium",
    image: null as string | null,
  },
  {
    id: "procural",
    name: "Procural",
    image: "/images/investments/procural.png",
  },
  {
    id: "arooj",
    name: "AROOJ",
    image: "/images/investments/arooj.png",
  },
  {
    id: "tsma",
    name: "TSMA",
    image: "/images/investments/tsma.png",
  },
] as const;

function DiamondIcon() {
  return (
    <span
      aria-hidden="true"
      className="relative z-10 mt-[3px] h-2 w-2 shrink-0 rotate-45 bg-[#C0392B]"
    />
  );
}

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
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center">
        <h2
          id="governance-oversight-heading"
          className="mb-[22px] mt-[28px] text-center text-[10px] font-semibold uppercase tracking-[1.5px] text-[#222222]"
        >
          Governance &amp; Oversight
        </h2>

        <ul
          ref={listRef}
          className="relative flex w-full max-w-[560px] flex-col gap-[18px]"
        >
          {/* Track line */}
          <span
            aria-hidden="true"
            className="absolute bottom-[6px] left-[3px] top-[6px] w-px bg-[#E5E5E5]"
          />
          {/* Scroll-fill line */}
          <motion.span
            aria-hidden="true"
            className="absolute left-[3px] top-[6px] bottom-[6px] w-px origin-top bg-coral-600"
            style={{ scaleY: lineScale }}
          />

          {governanceItems.map((item) => (
            <li key={item.heading} className="relative flex items-start gap-3">
              <DiamondIcon />
              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="text-[11px] font-bold uppercase leading-none text-[#333333]">
                  {item.heading}
                </h3>
                <p className="max-w-[520px] text-[10px] font-normal leading-[1.5] text-[#777777]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 w-full">
          <h2 className="mb-[22px] text-center text-[10px] font-semibold uppercase tracking-[2px] text-[#333333]">
            Investments
          </h2>

          <ul className="mx-auto grid w-fit grid-cols-2 gap-5 md:gap-6">
            {investmentCards.map(({ id, name, image }) => (
              <li
                key={id}
                className="relative flex h-[140px] w-[184px] items-center justify-center overflow-hidden rounded-[2px] bg-black/30"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="184px"
                    className="object-contain p-3"
                  />
                ) : (
                  <span className="text-[22px] font-semibold lowercase tracking-tight text-white">
                    {name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
