'use client';
import React from 'react';
import {
  ShoppingCart,
  BarChart3,
  Shield,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import CustomHeroSection from '@/components/CommonHeroSection';
import KpiCard from '@/components/KpiCards';
import HowItWorks from '@/components/homepage/howItWorks';
import CtcBtn from '@/components/homepage/ctcBtn';
import Link from 'next/link';

export default function EcommerceServicePage() {
  const stats = [
    { label: 'Sites Built', value: 250 },
    { label: 'Revenue Generated', value: 50, suffix: 'M+' },
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'Support Available', value: '24/7' }
  ];

  const technologies = [
    'Next.js',
    'React',
    'Stripe',
    'Shopify API',
    'MongoDB',
    'Tailwind CSS'
  ];

  const audience = [
    'Startups launching online stores',
    'Fashion & apparel brands',
    'D2C (Direct to Consumer) businesses',
    'Retailers migrating to digital',
    'Dropshipping entrepreneurs'
  ];


  const features = [
  {
    title: 'Custom Storefronts That Drive Sales',
    image: 'https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png',
    alt: 'Custom Storefront',
    paragraphs: [
      'We craft storefronts that are not only visually stunning but also strategically designed to convert. Every pixel is aligned with your brand’s identity, user journey, and business goals.',
      'From mobile responsiveness to intuitive navigation and personalized shopping experiences, we ensure your digital storefront becomes a true reflection of your brand while maximizing engagement and conversions.',
    ],
    reverse: false,
  },
  {
    title: 'Secure Payment Integration',
    image: 'https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png',
    alt: 'Secure Payments',
    paragraphs: [
      'Security is at the heart of every transaction. We integrate trusted payment gateways like Stripe, Razorpay, and PayPal with full PCI-DSS compliance.',
      'Build customer trust with seamless, secure checkout experiences — featuring fraud protection, tokenization, and easy refunds.',
    ],
    reverse: true,
  },
  {
    title: 'Real-Time Inventory Management',
    image: 'https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png',
    alt: 'Inventory Management',
    paragraphs: [
      'Stay on top of your stock levels, automatically update product availability, and never miss a sale due to out-of-stock errors.',
      'Our dashboard ensures full control over stock, SKUs, low-inventory alerts, and multi-warehouse syncing to scale your operations.',
    ],
    reverse: false,
  },
];


  return (
    <div className="min-h-screen bg-background2 text-foreground">
      {/* Hero Section */}
      <CustomHeroSection
        title="E-commerce Website"
        desc="Build modern, scalable, and secure e-commerce solutions to boost your online business."
        img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
        ctcBtn
      />

      {/* Stats Section */}
      <section className="p-12 bg-background">
        <div className="md:max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <KpiCard key={idx} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </section>

  

      {/* Detailed Offerings */}
       <section className="p-24">
      <div className="mx-auto px-6 space-y-28">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${item.reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl"
              unoptimized
            />
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              {item.paragraphs.map((text, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4 last:mb-0">
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
      {/* Workflow Timeline */}
      <section className="bg-background">
        <HowItWorks />
      </section>

      {/* Technologies */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white dark:bg-transparent rounded-full border shadow text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">This Service is Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audience.map((group, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-transparent p-5 rounded-xl shadow border"
              >
                ✅ {group}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-background2">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Online Business?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Partner with us to craft a powerful, modern e-commerce solution.
          </p>
          <div className='flex justify-center items-center'>
            <Link href='/contact'>
          <CtcBtn text='Book a Free Consultation'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
