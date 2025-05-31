import HeroSection from "@/components/homepage/herosection";
import HomeProjects from "@/components/homepage/HomeProjects";
import HomeServices from "@/components/homepage/HomeServices";
import HowWeConnect from "@/components/homepage/howWeConnect";
import TeamSection from "@/components/homepage/teamSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HomeServices/>
      <div className="bg-background2">
        <HomeProjects />
      </div>
      <HowWeConnect />
      <div className="bg-background2">
        <TeamSection />
      </div>
    </div>
  );
}
