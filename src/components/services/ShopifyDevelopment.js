'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomHeroSection from '@/components/CommonHeroSection';
import { ShoppingCart, Globe, Layers, ShieldCheck, TrendingUp, Zap } from 'lucide-react';
import HowItWorks from '../homepage/howItWorks';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const shopifySections = [
  {
    id: 1,
    title: "Build & Scale with Shopify",
    highlight: "Build & Scale",
    description1:
      "We design, develop, and optimize Shopify stores to deliver a seamless shopping experience that drives conversions. From premium theme customization to bespoke UI/UX, we ensure your store reflects your brand perfectly.",
    description2:
      "Whether launching a new store or upgrading an existing one, we manage everything—design, setup, optimization, and mobile responsiveness.",
    image:
      "/services/shopify.png",
    alt: "Shopify store development",
    reverse: false,
  },
  {
    id: 2,
    title: "Custom Shopify Integrations",
    highlight: "Custom Integrations",
    description1:
      "Enhance your store’s functionality with secure and scalable integrations. We handle payment gateways, inventory systems, CRM, analytics, and more.",
    description2:
      "From third-party apps to custom-built Shopify apps, we ensure smooth, reliable connections to your essential tools.",
    image:
      "/services/shopify-2.jpg",
    alt: "Shopify integrations",
    reverse: true,
  },
];

export default function ShopifyDevelopment() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <CustomHeroSection
        title="Shopify Development Services"
        desc="Custom, scalable, and high-converting Shopify stores tailored for your business."
        img="https://images.unsplash.com/photo-1502951682449-e5b93545d46e?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ctcBtn
      />

      {shopifySections.map((section) => (
        <section
          key={section.id}
          className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {section.reverse && (
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <Image
                src={section.image}
                alt={section.alt}
                width={500}
                height={350}
                className="rounded-xl shadow-lg w-full h-auto"
                unoptimized
              />
            </motion.div>
          )}
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-primary">{section.highlight}</span> {section.title.replace(section.highlight, "")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{section.description1}</p>
            <p className="text-gray-600 dark:text-gray-300">{section.description2}</p>
          </motion.div>
          {!section.reverse && (
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <Image
                src={section.image}
                alt={section.alt}
                width={500}
                height={350}
                className="rounded-xl shadow-lg w-full h-auto"
                unoptimized
              />
            </motion.div>
          )}
        </section>
      ))}

      {/* Features */}
      <section className="py-20 bg-background2">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <ShoppingCart size={40} />, title: "Custom Store Design", desc: "Branded, high-converting Shopify store designs." },
            { icon: <Layers size={40} />, title: "App Integrations", desc: "Power up your store with premium Shopify apps." },
            { icon: <TrendingUp size={40} />, title: "SEO & Performance", desc: "Optimized for speed, SEO, and better rankings." },
            { icon: <ShieldCheck size={40} />, title: "Secure Payments", desc: "Seamless, reliable payment gateway setups." },
            { icon: <Globe size={40} />, title: "Global Reach", desc: "Multi-currency & multi-language store configurations." },
            { icon: <Zap size={40} />, title: "Ongoing Support", desc: "Continuous updates & technical support." }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4 text-primary">{feature.icon}</div>
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <HowItWorks />
    </div>
  );
}
