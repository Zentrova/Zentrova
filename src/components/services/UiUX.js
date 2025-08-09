'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomHeroSection from '@/components/CommonHeroSection';

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
        img="https://images.unsplash.com/photo-1587614382346-ac5ce068fe85?w=800"
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
              img: 'https://images.unsplash.com/photo-1559027615-ce3b7b4d226d?w=800',
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
              img: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800',
            },
            {
              title: 'Wireframing & Prototyping',
              desc: 'Our process emphasizes clarity before polish. Low-fidelity wireframes map functionality, while high-fidelity prototypes bring the vision to life for stakeholder feedback and user testing. This approach minimizes costly revisions during development.',
              img: 'https://images.unsplash.com/photo-1581090700227-4c4f50b1c5d6?w=800',
            },
            {
              title: 'Responsive & Accessible Design',
              desc: 'We ensure your product works beautifully for everyone, everywhere. By following WCAG guidelines and applying responsive design best practices, we create experiences that are inclusive, adaptable, and consistent across devices and screen sizes.',
              img: 'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?w=800',
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
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Our Design Toolkit
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { name: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
            { name: "Adobe XD", img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
            { name: "Sketch", img: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg" },
            { name: "InVision", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/InVision-logo.svg" },
            { name: "Canva", img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Canva_Logo.svg" },
            { name: "Miro", img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Miro_logo.svg" },
            { name: "Zeplin", img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Zeplin-logo.svg" },
            { name: "Framer", img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Framer_logo.svg" }
          ].map((tool, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-4 bg-background2 p-6 rounded-lg shadow-md"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src={tool.img}
                alt={tool.name}
                width={60}
                height={60}
                unoptimized
                style={{
                  maxWidth: "60px",
                  maxHeight: "60px",
                  objectFit: "contain"
                }}
              />
              <p className="font-medium">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
