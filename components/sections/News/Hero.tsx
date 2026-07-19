import Hero from "@/components/sections/reusable/Hero";
import { newsHeroSlidesData } from "@/data/hero.data";

export default function NewsHero() {
  return (
    <Hero
      slides={newsHeroSlidesData}
      showDots={false}
      variant="compact"
    />
  );
}
