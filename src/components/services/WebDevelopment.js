'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomHeroSection from '@/components/CommonHeroSection';
import { Rocket, Users, Zap, TrendingUp, ShieldCheck, Lightbulb } from 'lucide-react';

export default function WebDevelopment() {
  const valuePoints = [
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: 'Measurable Business Growth',
      desc: 'Our projects are designed with ROI in mind, helping you increase leads, conversions, and revenue.',
    },
    {
      icon: <Rocket className="w-10 h-10 text-primary" />,
      title: 'Faster Time-to-Market',
      desc: 'We use streamlined processes and agile development to get your product live without delays.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: 'Reliable & Secure',
      desc: 'Security and performance are built into every line of code, giving you peace of mind.',
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: 'User-Centric Experiences',
      desc: 'We craft interfaces that keep your users engaged and coming back.',
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      title: 'Strategic Guidance',
      desc: 'Beyond coding, we help you make smart decisions for scaling and evolving your product.',
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: 'Future-Proof Solutions',
      desc: 'We build with modern, scalable architectures to grow with your business.',
    },
  ];

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <CustomHeroSection
        title="Web Development Services"
        desc="We don’t just build websites — we create high-performing, scalable digital experiences that help you grow, engage customers, and stay ahead in a competitive market."
        img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
        ctcBtn
      />

      {/* What We Can Do */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What We Can Do for You
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Custom Website Development',
              desc: 'From concept to launch, we create tailored websites that align perfectly with your business goals and brand identity.',
              img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
            },
            {
              title: 'High-Performance E-Commerce',
              desc: 'We build secure, fast, and scalable online stores that convert visitors into loyal customers.',
              img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
            },
            {
              title: 'Scalable Web Applications',
              desc: 'Interactive, data-driven applications with intuitive interfaces and robust backends for SaaS, dashboards, and portals.',
              img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800',
            },
            {
              title: 'Responsive & Mobile-First Design',
              desc: 'Your site will look and perform flawlessly on all devices, from smartphones to large desktops.',
              img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
            },
            {
              title: 'SEO & Speed Optimization',
              desc: 'Optimized architecture, clean code, and fast loading times for better rankings and improved user experience.',
              img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800',
            },
            {
              title: 'Ongoing Maintenance & Support',
              desc: 'We keep your site secure, updated, and performing at its best long after launch.',
              img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
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

      {/* Value Proposition */}
      <section className="py-20 bg-background2">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            className="text-3xl md:text-4xl font-extrabold text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            The Value We Bring
          </motion.div>
          <motion.div
            className="text-base md:text-xl max-w-3xl mx-auto mt-4 text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We’re more than developers — we’re strategic partners who help you launch, grow, and scale digital products that truly make an impact.
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {valuePoints.map((item, i) => (
              <motion.div
                key={i}
                className="bg-background rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
