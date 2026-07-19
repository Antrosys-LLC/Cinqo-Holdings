import Hero from "@/components/sections/reusable/Hero";
import {projectsHeroSlidesData } from "@/data/hero.data";

export default function ProjectsHero() {
  return (
    <Hero
      slides={projectsHeroSlidesData}
      showDots={false}
      variant="compact"
    />
  );
}
