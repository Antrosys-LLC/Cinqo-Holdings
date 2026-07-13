import Hero from "@/components/sections/reusable/Hero";
import { homeHeroSlidesData } from "@/data/hero.data";

export default function HomeHero() {
  return (
    <Hero
      slides={homeHeroSlidesData}
      headline={
        <>
          BUILT ON COMMITMENT.
          <br />
          DRIVEN BY PERFORMANCE.
        </>
      }
      subtitle="Built on over two decades of operational excellence, Cinqo Holding is a diversified Bahrain-based group operating across construction, technical distribution, specialist coatings, facilities management, interior fit-out and strategic investments."
      cta={{ href: "#about", text: "Get in Touch >" }}
    />
  );
}
