"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfessionalHorizon() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-white py-10 md:py-12 overflow-hidden min-h-[60vh] flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[380px] md:h-[520px] rounded-[1rem] overflow-hidden"
          >
            <Image
              src="/images/careers/horizon.jpg"
              alt="Cinqo Holdings Skyscraper"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Content Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col justify-center py-2"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-black leading-[1.1] mb-6 tracking-tight"
            >
              The Professional <br className="hidden md:block" /> Framework
            </motion.h2>

            <div className="space-y-6">
              {/* Item 1 */}
              <motion.div variants={fadeUp}>
                <h3 className="text-[1.15rem] font-bold text-black mb-1">Direct Placement</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed">
                  Step immediately into active, high-exposure project roles across our
                  specialized subsidiaries, managing real-world engineering, construction, or
                  distribution challenges from day one.
                </p>
              </motion.div>

              {/* Item 2 */}
              <motion.div variants={fadeUp}>
                <h3 className="text-[1.15rem] font-bold text-black mb-1">Leadership Track</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed">
                  We actively identify and elevate high-performing professionals, equipping
                  them with the supervisory tools, technical training, and executive oversight
                  needed to lead divisions.
                </p>
              </motion.div>

              {/* Item 3 */}
              <motion.div variants={fadeUp}>
                <h3 className="text-[1.15rem] font-bold text-black mb-1">Cross-Divisional Exposure</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed">
                  Expand your career horizon by transferring technical capabilities across
                  diverse sectors—moving dynamically between large-scale contracting,
                  technical trading, and asset management.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
