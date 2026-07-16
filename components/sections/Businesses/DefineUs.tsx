"use client";

import { motion } from "framer-motion";
import { BusinessData } from "@/data/businesses.data";

export default function DefineUs({ definesUs }: { definesUs: BusinessData["definesUs"] }) {
  if (!definesUs || definesUs.length === 0) return null;

  return (
    <section className="w-full py-24 md:py-28 bg-cream-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-12 md:mb-16 text-center [font-family:var(--font-display)] font-semibold text-[20px] md:text-[24px] tracking-[0.05em] text-ink uppercase">
            What Defines Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {definesUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -6,
                borderColor: "var(--color-coral-500)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
              }}
              className="bg-white border border-line rounded-sm px-5 pt-8 pb-6 flex flex-col justify-end h-full min-h-[380px] lg:min-h-[420px] cursor-default"
            >
              <div className="flex flex-col gap-3">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.1 }}
                  className="[font-family:var(--font-body)] font-semibold text-[14px] md:text-[15px] xl:text-[16px] leading-snug text-ink tracking-wide uppercase"
                >
                  {item.title}
                </motion.h3>
                <p className="[font-family:var(--font-body)] font-normal text-[13px] md:text-[14px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
