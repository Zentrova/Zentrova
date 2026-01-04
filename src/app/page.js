'use client';
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/homepage/herosection";
import HomeProjects from "@/components/homepage/HomeProjects";
import HomeServices from "@/components/homepage/HomeServices";
import HowItWorks from "@/components/homepage/howItWorks";
import ServiceSwiper from "@/components/homepage/ServiceSwiper";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <Loader/> */}
      <div className="bg-background">
        <ServiceSwiper />
        <HomeServices />
      <div className="bg-background2">
        <HomeProjects />
      </div>
      <HowItWorks />
      {/* <div className="bg-background2">
        <TeamSection />
      </div> */}
      <FAQ />
    </div>
  </div >
  );
}
