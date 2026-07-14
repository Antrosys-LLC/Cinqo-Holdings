"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const textContent =
  "While firmly rooted in Bahrain, Cinqo continues to expand its presence across the GCC through sustainable growth, strategic partnerships and opportunities aligned with its strengths and long-term vision.";

const words = textContent.split(/\s+/);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const wrap = imageWrapRef.current;
    if (!section || !wrap) return;

    const ctx = gsap.context(() => {
      const scaleX = window.innerWidth / wrap.offsetWidth;
      const scaleY = window.innerHeight / wrap.offsetHeight;
      const scale = Math.max(scaleX, scaleY) * 1.05;

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: `+=${window.innerHeight * 2}`,
          pin: true,
          scrub: 1,
        },
      })
      .to(wrap, { scale, duration: 0.5, ease: "none" })
      .to(wrap, { scale: 1, duration: 0.5, ease: "none" });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = textSectionRef.current;
    const spans = wordRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (!section || spans.length === 0) return;

    const ctx = gsap.context(() => {
      const stagger = 0.03;

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${window.innerHeight * 0.3}`,
          pin: true,
          scrub: 3,
        },
      })
      .to(spans, { fontWeight: 600, stagger, duration: stagger, ease: "power1.out" })
      .to(spans, { fontWeight: 400, stagger, duration: stagger, ease: "power1.in" }, stagger);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      <section className="relative pt-12 pb-2 min-h-[600px] overflow-hidden">
        <Image
          src="/images/about/a2.jpeg"
          alt="About Cinqo Holding"
          fill
          className="object-cover brightness-100 saturate-[0.5] contrast-[0.85]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/75" />
        <div className="absolute inset-0 z-10 flex items-center pt-10">
          <div className="ml-66 text-center font-[var(--font-ibm-plex)]">
            <h2 className="text-[124px] font-normal mb-[-24px] text-black">20+</h2>
            <p className="text-[30px] tracking-normal text-black font-bold pl-2">Years Of Deilvery</p>
          </div>
        </div>
        <div className="relative z-20 px-6 md:px-12 max-w-[1440px] mx-auto pt-10 flex justify-end">
          <div className="max-w-xl mr-4">
            <p className="text-xl leading-relaxed text-black/80">
              Since its inception, Cinqo Holding has evolved from a construction-focused business into a diversified group of more than 600 professionals serving clients across Bahrain&rsquo;s public and private sectors.
              <br />
              <br />
              The Group comprises five specialised operating companies operating under a unified framework of governance, financial oversight and strategic direction, enabling each business to maintain its technical focus while benefiting from shared leadership and systems.
              <br />
              <br />
              Growth is pursued selectively, guided by capability, operational readiness and long-term sustainability.
            </p>
          </div>
        </div>
      </section>
      <section ref={sectionRef} className="relative flex items-center justify-center min-h-[85vh] bg-white">
        <div
          ref={imageWrapRef}
          className="relative w-[75%] h-[500px] z-50"
        >
          <Image
            src="/images/about/a3.jpeg"
            alt="Cinqo Holding"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
      <section ref={textSectionRef} className="relative flex items-start justify-center bg-white px-6 pt-4">
        <p className="max-w-3xl text-center text-[2rem] leading-relaxed text-black/80">
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { wordRefs.current[i] = el; }}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </section>
    </div>
  );
}
