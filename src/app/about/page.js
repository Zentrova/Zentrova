'use client';
import CustomHeroSection from '@/components/CommonHeroSection';
import FAQ from '@/components/FAQ';
import HowItWorks from '@/components/homepage/howItWorks';
import ServiceSwiper from '@/components/homepage/ServiceSwiper';
import KpiCard from '@/components/KpiCards';
import { Code, Rocket, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const stats = [
  { icon: <Rocket className="w-6 h-6" />, value: 50, label: 'Active Projects' },
  { icon: <Users className="w-6 h-6" />, value: 250, label: 'Clients' },
  { icon: <Code className="w-6 h-6" />, value: 100000, label: 'Lines of Code' },
  { icon: <Trophy className="w-6 h-6" />, value: 15, label: 'Awards & Features' },
];

const awards = [
  '/logos/clutch.png',
  '/logos/manifest.png',
  '/logos/aws.png',
  '/logos/gcp.png',
  '/logos/iso.png',
];

const AboutUs = () => (
  <div className="min-h-screen">

    {/* Hero Section */}
    <CustomHeroSection
      title="Driven by Design. Built for Impact."
      desc="Xentrova is a team of passionate creators delivering tailored web and mobile solutions that combine strategy, design, and technology."
    />

    {/* Stats Section */}
    <div className="bg-background2 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <KpiCard
              key={i}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Who Are We Section */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12 max-w-7xl mx-auto">
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          Who are we
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Xentrova is a multidisciplinary digital solutions team specializing in UI/UX design,
          frontend development, and scalable web and mobile platforms. We collaborate with startups,
          agencies, and enterprises to turn bold ideas into polished, high-performing products.
          <br /><br />
          At Xentrova, we follow a quality-first approach—ensuring each solution we deliver is tailored,
          future-ready, and aligned with the client’s business goals. With a deep understanding of design,
          code, and user experience, we bridge creativity and technology to craft digital excellence.
        </p>
        <div className="mt-6 h-1 w-24 mx-auto md:mx-0 bg-primary rounded-full" />
      </div>
      <div className="md:w-1/2 w-full">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIK_dzjnmoFopN-Tti8pDSgDA3R8NvHYnAg&s"
          alt="About Us"
          width={800}
          height={600}
          unoptimized
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>

    {/* Services */}
    <div className="bg-background2">
      <ServiceSwiper />
    </div>

    {/* How It Works */}
    <div>
      <HowItWorks />
    </div>

    {/* FAQ */}
    <div className="bg-background2">
      <FAQ bgColor="background" />
    </div>

  </div>
);

export default AboutUs;
