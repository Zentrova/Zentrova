import HeroSection from "@/components/homepage/herosection";
import HomeProjects from "@/components/homepage/HomeProjects";
import HowWeConnect from "@/components/homepage/howWeConnect";
import TeamSection from "@/components/homepage/teamSection";

export default function Home() {
  return (
    <div>
   <HeroSection/>
   <HomeProjects />
   {/* <HowWeConnect/> */}
   <TeamSection/>
    </div>
  );
}
