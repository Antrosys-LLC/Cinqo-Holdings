import Hero from "@/components/sections/Projects/Hero";
import Text from "@/components/sections/Projects/Text";
import Stack from "@/components/sections/Projects/Stack";
import OG from "@/components/sections/Projects/OGProjects";
import CP from "@/components/sections/Projects/CPProjects";
import SubscribeNow from "@/components/sections/Home/SubscribeNow";


export default function AboutPage() {
  return (
    <main>
    <Hero />
     <Text/>
     <Stack/> 
     <CP/>
     <OG/>
     <SubscribeNow />

    </main>
    
  );
}
