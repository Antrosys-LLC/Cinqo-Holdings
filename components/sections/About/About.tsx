import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-12 min-h-[600px] overflow-hidden">
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
  );
}
