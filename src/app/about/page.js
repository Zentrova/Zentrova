'use client';
import CustomHeroSection from '@/components/CommonHeroSection';
import FAQ from '@/components/FAQ';
import HowItWorks from '@/components/homepage/howItWorks';
import ServiceSwiper from '@/components/homepage/ServiceSwiper';
import KpiCard from '@/components/KpiCards';
import AwardsGrid from '@/components/AwardsGrid'; // Import the new component
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

// Team data
const team = [
  {
    name: "John Doe",
    role: "Lead Developer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Sam Wilson",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
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

    {/* Who Are We & Our Mission Section */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12 max-w-7xl mx-auto">
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          Who Are We
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Xentrova is a multidisciplinary digital solutions team specializing in UI/UX design,
          frontend development, and scalable web and mobile platforms. We collaborate with startups,
          agencies, and enterprises to turn bold ideas into polished, high-performing products.
        </p>
        <div className="mt-6 h-1 w-24 mx-auto md:mx-0 bg-primary rounded-full" />
        
        <h3 className="text-2xl font-bold mt-8 mb-4">Our Mission</h3>
        <p className="text-base md:text-lg text-gray-600">
          At Xentrova, our mission is to bridge creativity and technology. We follow a quality-first approach, ensuring each solution is tailored, future-ready, and perfectly aligned with our client’s business goals.
        </p>

      </div>
      <div className="md:w-1/2 w-full">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Our Team"
          width={800}
          height={600}
          unoptimized
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>

    {/* Recognized By Section */}
    {/* <div className="bg-background2">
      <AwardsGrid logos={awards} title="Recognized By" />
    </div>
    
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="text-center">
            <Image
              src={member.avatar}
              alt={member.name}
              width={120}
              height={120}
              unoptimized
              className="rounded-full mx-auto mb-4 shadow-md"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section> */}

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
