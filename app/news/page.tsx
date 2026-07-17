import Hero from "@/components/sections/reusable/Hero";
import NewsSection from "@/components/sections/News/News";
import SocialCard from "@/components/sections/News/SocialCard";
import SubscribeNow from "@/components/sections/Home/SubscribeNow";
import { newsHeroSlidesData } from "@/data/hero.data";

export default function NewsPage() {
  return (
    <main>
      <Hero
        slides={newsHeroSlidesData}
        showDots={false}
      />
      <NewsSection />
      <SocialCard />
      <SubscribeNow />
    </main>
  );
}
