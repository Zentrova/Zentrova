'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Code2, Heart } from 'lucide-react';
import CustomHeroSection from '@/components/CommonHeroSection';
import KpiCard from '@/components/KpiCards';
import CtcBtn from '@/components/homepage/ctcBtn';
import Link from 'next/link';

import { httpRequest } from '@/utils/httpRequest';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  })
};



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



export default function TeamSection() {


  const [teamData, setTeamData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await httpRequest({
        url: "team",
        method: "GET",
      });

      if (response.success) {
        setTeamData(response.data.data);
        console.log("data fetched successfully", response);
      } else {
        console.warn("Data was not fetched successfully");
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div>
        <CustomHeroSection
          title={teamData?.heroSection?.title}
          desc={teamData?.heroSection?.subTitle}
          img={teamData?.heroSection?.image}
        />
      </div>

      <div className="py-10 px-6 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-7xl mx-auto">

          {/* Stats */}
          <div className="max-w-6xl mx-auto px-4 mb-10 md:mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <KpiCard
                icon={<Users className="w-6 h-6" />}
                value={teamData?.heroSection?.coreMember}
                label='Core Members'
              />
              <KpiCard
                icon={<Lightbulb className="w-6 h-6" />}
                value={teamData?.heroSection?.projects}
                label='Combined Projects'
              />
              <KpiCard
                icon={<Code2 className="w-6 h-6" />}
                value={teamData?.heroSection?.tech}
                label='Tech Stacks'
              />
              <KpiCard
                icon={<Heart className="w-6 h-6" />}
                value={teamData?.heroSection?.teamSynergy}
                label='Team Synergy'
              />

            </div>
          </div>

          <div>

          </div>

          {/* Founders */}
          <section className='mb-20'>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-extrabold text-primary mb-2">{teamData?.founders?.title}</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {teamData?.founders?.subTitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
              {teamData?.founders?.members.map((founder, i) => (
                <motion.div
                  key={i}
                  className="relative group overflow-hidden rounded-xl shadow-md"
                  whileHover={{ scale: 1.03 }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={founder?.image}
                      alt={founder.name}
                      fill
                      className="object-cover rounded-xl transition duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 p-4 text-zinc-100">
                      <h4 className="text-sm font-semibold">{founder?.name}</h4>
                      <p className="text-xs text-primary font-medium capitalize">{founder?.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>


          {/* Team */}
          <section className="mb-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-4xl font-extrabold text-primary mb-2">{teamData?.teams?.title}</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {teamData?.teams?.subTitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {employees.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-md"
                  whileHover={{ scale: 1.03 }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index}
                >
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                      unoptimized
                    />
                    <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full p-3 text-zinc-100">
                      <p className="text-sm font-semibold">{member.name}</p>
                      <p className="text-xs text-primary font-medium">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.section
            className="text-center rounded-2xl p-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary">Ready to Work With Us?</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Collaborate with a dedicated team of professionals who bring creativity, code, and strategy together. Let's turn your ideas into impactful digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <CtcBtn text="Hire Us" />
              </Link>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
