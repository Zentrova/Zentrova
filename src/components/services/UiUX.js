'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomHeroSection from '@/components/CommonHeroSection';
import LogoGrid from '../LogoGrid';
import { UiUX } from '@/ServiceData/service';

export default function UiUx() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <CustomHeroSection
        title="UI/UX Design"
        desc="We craft meaningful digital experiences that go beyond visual appeal — balancing aesthetics, usability, and business goals. Our UI/UX design process ensures every interaction is purposeful, seamless, and enjoyable."
        img="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ctcBtn
      />

      {/* Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Why Choose Our UI/UX Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'User-Centric Approach',
              desc: 'We design with empathy, ensuring every screen feels intuitive and every interaction has purpose. Through deep user research and journey mapping, we create experiences that not only look great but also meet user expectations and solve real problems.',
              img: 'https://plus.unsplash.com/premium_photo-1705178701080-1e0eae873f7e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              title: 'Pixel-Perfect Design',
              desc: 'From typography to spacing, our attention to detail ensures flawless visual consistency. We believe every pixel matters, and our designs maintain brand integrity while enhancing usability across all devices.',
              img: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800',
            },
            {
              title: 'Conversion-Focused Layouts',
              desc: 'We merge beautiful visuals with strategic thinking. By guiding users toward key actions through thoughtful layouts, we help you achieve measurable business outcomes while delivering memorable experiences.',
              img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-background2 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={350}
                unoptimized
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '224px',
                  objectFit: 'cover',
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-background2">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {[
            {
              title: 'User Research & Persona Building',
              desc: 'We begin every project with a thorough understanding of your audience — conducting interviews, surveys, and competitor analysis to uncover motivations, pain points, and behavior patterns. These insights shape realistic personas that guide our design decisions from concept to delivery.',
              img: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              title: 'Wireframing & Prototyping',
              desc: 'Our process emphasizes clarity before polish. Low-fidelity wireframes map functionality, while high-fidelity prototypes bring the vision to life for stakeholder feedback and user testing. This approach minimizes costly revisions during development.',
              img: 'https://images.unsplash.com/photo-1648109941110-d30f859426ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              title: 'Responsive & Accessible Design',
              desc: 'We ensure your product works beautifully for everyone, everywhere. By following WCAG guidelines and applying responsive design best practices, we create experiences that are inclusive, adaptable, and consistent across devices and screen sizes.',
              img: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={350}
                  unoptimized
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '350px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Toolkit */}
    

        <LogoGrid logos={UiUX} />

    </div>
  );
}
