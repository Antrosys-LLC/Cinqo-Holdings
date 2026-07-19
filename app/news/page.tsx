import Hero from "@/components/sections/News/Hero";
import NewsPage from "@/components/sections/News/NewsPage";
import NewsFollow from "@/components/sections/News/NewsFollow";
import NewsGrid from "@/components/sections/News/NewsGrid";

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <NewsPage/>
      <NewsFollow/>
      <NewsGrid/>
    </main>
    
  );
}
