'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomHeroSection from '@/components/CommonHeroSection';
import { Search, BarChart, Megaphone, TrendingUp, Globe, Users } from 'lucide-react';
import HowItWorks from '../homepage/howItWorks';
import LogoGrid from '../LogoGrid';
import { digitalMarketingSEO } from '@/ServiceData/service';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const marketingSections = [
    {
        id: 1,
        title: "Boost Your Online Visibility",
        highlight: "Boost Visibility",
        description1:
            "We craft tailored SEO strategies to ensure your brand ranks higher in search results, driving consistent organic traffic.",
        description2:
            "From keyword research to on-page optimization and link building, we cover every aspect to maximize your visibility.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "SEO strategy planning",
        reverse: false,
    },
    {
        id: 2,
        title: "Engage with Targeted Campaigns",
        highlight: "Engage",
        description1:
            "Our digital marketing campaigns are built around your audience, delivering the right message at the right time.",
        description2:
            "We manage PPC ads, social media promotions, and remarketing to keep your brand front of mind.",
        image: "https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Digital marketing campaign",
        reverse: true,
    },
    {
        id: 3,
        title: "Data-Driven Growth",
        highlight: "Data-Driven",
        description1:
            "We track, measure, and refine strategies based on analytics to ensure continuous growth and maximum ROI.",
        description2:
            "Our reports give you clear insights into what’s working and where to improve.",
        image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Marketing analytics",
        reverse: false,
    },
];

export default function DigitalMarketingSEO() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <CustomHeroSection
                title="Digital Marketing & SEO Services"
                desc="Drive traffic, boost conversions, and grow your brand with our data-driven marketing strategies."
                img="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1200&auto=format&fit=crop"
                ctcBtn
            />

            {/* Features First */}
            <section className="py-20 bg-background2">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
                    {[
                        { icon: <Search size={40} />, title: "SEO Optimization", desc: "Improve rankings with proven SEO tactics." },
                        { icon: <BarChart size={40} />, title: "PPC Campaigns", desc: "Maximize ROI with targeted paid ads." },
                        { icon: <Megaphone size={40} />, title: "Social Media Marketing", desc: "Engage and grow your audience online." },
                        { icon: <TrendingUp size={40} />, title: "Analytics & Reporting", desc: "Track performance and refine strategies." },
                        { icon: <Globe size={40} />, title: "Global Reach", desc: "Expand your presence across international markets." },
                        { icon: <Users size={40} />, title: "Audience Targeting", desc: "Reach the right people at the right time." }
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

            {/* Service Sections */}
            {marketingSections.map((section) => (
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

        </div>
    );
}
