'use client';
import React from 'react';
import Image from 'next/image';
import { Users, Lightbulb, Code2, Heart, ArrowRight } from 'lucide-react';
import CustomHeroSection from '@/components/CommonHeroSection';
import KpiCard from '@/components/KpiCards';


const founders = [
  {
    name: 'Yashpal Singh',
    role: 'Co-founder & Head of Design',
    experience: '3.5 yrs',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80',
    brand: 'Zentrova',
  },
  {
    name: 'Ravi Sharma',
    role: 'Co-founder & API Architect',
    experience: '4 yrs',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80',
    brand: 'Zentrova',
  },
  {
    name: 'Priya Mehta',
    role: 'Co-founder & Backend Lead',
    experience: '3 yrs',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    brand: 'Zentrova',
  },
  {
    name: 'Arjun Patel',
    role: 'Co-founder & Product Strategist',
    experience: '3.5 yrs',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    brand: 'Zentrova',
  },
];

const employees = [
  {
    name: 'Sneha Roy',
    role: 'Brand Designer',
    experience: '2.5 yrs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Karan Verma',
    role: 'Fullstack Engineer',
    experience: '2.2 yrs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
  },
  {
    name: 'Ananya Das',
    role: 'Content Strategist',
    experience: '1.8 yrs',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80',
  },
  {
    name: 'Deepak Kumar',
    role: 'DevOps Engineer',
    experience: '2.9 yrs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Tanya Bhatia',
    role: 'UI Designer',
    experience: '1.5 yrs',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1071&q=80',
  },
  {
    name: 'Farhan Khan',
    role: 'Cloud Engineer',
    experience: '3 yrs',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
  },
  {
    name: 'Rohit Singh',
    role: 'Frontend Developer',
    experience: '2.1 yrs',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
  },
  {
    name: 'Meera Shah',
    role: 'QA Engineer',
    experience: '1.9 yrs',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80',
  },
];


const teamStats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: 4,
    label: 'Core Members',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    value: 20,
    label: 'Combined Projects',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    value: 10,
    label: 'Tech Stacks',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    value: 100,
    label: 'Team Synergy',
  }
];


export default function TeamSection() {
  return (
    <div className="">
      <CustomHeroSection
        title='The Zentrova Family'
        desc="We're a diverse group of passionate individuals united by our mission to build 
              exceptional digital experiences."
      />
      <div className='py-10 px-6 bg-white dark:bg-zinc-950 transition-colors'>
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20 max-w-7xl mx-auto">
              {teamStats.map((stat, i) => (
                <KpiCard
                  key={i}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  subLabel={stat.subLabel}
                />
              ))}
            </div>
          </div>

          {/* Founders */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Our Founders</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                The visionaries who started it all and continue to drive our mission forward.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      layout="fill"
                      objectFit="cover"
                      unoptimized
                      className="grayscale group-hover:grayscale-0 transition duration-500 rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 p-6 text-zinc-100">
                      <h4 className="text-xl font-semibold">{founder.name}</h4>
                      <p className="text-sm text-primary font-medium">{founder.role}</p>
                      <p className="text-xs text-zinc-400">@{founder.brand}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        <span>{founder.experience} experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Our Team</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                The talented individuals who bring our vision to life every day.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {employees.map((member, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="grayscale group-hover:grayscale-0 transition duration-500 rounded-xl"
                      unoptimized
                    />
                    <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full p-3 text-zinc-100">
                      <p className="text-sm font-semibold">{member.name}</p>
                      <p className="text-xs text-primary font-medium">{member.role}</p>
                      <p className="text-xs">{member.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-12 text-zinc-100">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference.
              Come build the future with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-zinc-100 transition-colors"
                aria-label="View open positions at Zentrova"
              >
                View Open Positions <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
