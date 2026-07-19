import Hero from "@/components/sections/reusable/Hero";
import { contactHeroSlidesData } from "@/data/hero.data";

export default function ContactHero() {
  return (
    <Hero
      slides={contactHeroSlidesData}
      showDots={false}
      variant="compact"
    />
  );
}
