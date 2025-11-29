'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomHeroSection from '@/components/CommonHeroSection';
import { ShieldCheck, RefreshCw, Wrench, Zap, Users, TrendingUp } from 'lucide-react';
import HowItWorks from '../homepage/howItWorks';
import LogoGrid from '../LogoGrid';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function MaintenanceSupport() {
    const features = [
        {
            icon: <ShieldCheck className="w-10 h-10 text-primary" />,
            title: 'Security Monitoring',
            desc: 'Continuous security checks, vulnerability scans, and proactive fixes to keep your systems safe.',
        },
        {
            icon: <RefreshCw className="w-10 h-10 text-primary" />,
            title: 'Regular Updates',
            desc: 'Keep your software, plugins, and integrations up-to-date for maximum stability.',
        },
        {
            icon: <Wrench className="w-10 h-10 text-primary" />,
            title: 'Bug Fixing & Issue Resolution',
            desc: 'Fast and efficient problem-solving to minimize downtime and keep operations running.',
        },
        {
            icon: <Zap className="w-10 h-10 text-primary" />,
            title: 'Performance Optimization',
            desc: 'Speed improvements, database cleanup, and resource optimization for peak performance.',
        },
        {
            icon: <Users className="w-10 h-10 text-primary" />,
            title: 'Dedicated Support Team',
            desc: 'A responsive, skilled support team available to assist whenever you need.',
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-primary" />,
            title: 'Proactive Enhancements',
            desc: 'We recommend and implement improvements to keep your platform ahead of the curve.',
        },
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <CustomHeroSection
                title="Maintenance & Support Services"
                desc="Reliable, proactive, and ongoing support to keep your digital products secure, fast, and future-ready."
                img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ctcBtn
            />

            {/* Intro Section */}
            <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        <span className="text-primary">Peace of Mind</span> with Continuous Care
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Our Maintenance & Support services ensure your systems remain secure, stable, and optimized around the clock.
                        We handle everything from bug fixes to performance tuning, letting you focus on growing your business.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        Whether it’s a website, mobile app, or custom platform, our team provides end-to-end support, ensuring minimal downtime and maximum efficiency.
                    </p>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
                    <Image
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200"
                        alt="Maintenance & Support"
                        width={500}
                        height={350}
                        className="rounded-xl shadow-lg w-full h-auto"
                        unoptimized
                    />
                </motion.div>
            </section>

            {/* Features */}
            <section className="py-20 bg-background2">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        viewport={{ once: true }}
                    >
                        Our <span className="text-primary">Core Services</span>
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {features.map((item, i) => (
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

            {/* Why Choose Us */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-primary text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                >
                    Why Choose Our Maintenance & Support
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Proactive Monitoring',
                            desc: 'We prevent issues before they happen, saving you time and money.',
                            img: 'https://plus.unsplash.com/premium_photo-1724634778253-f4a6390656c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        },
                        {
                            title: '24/7 Availability',
                            desc: 'Round-the-clock support to keep your business running without interruptions.',
                            img: 'https://plus.unsplash.com/premium_photo-1674169166921-322a3fdb9f8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        },
                        {
                            title: 'Scalable Solutions',
                            desc: 'Our services grow with your needs, from startups to enterprise-level operations.',
                            img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                                style={{ width: '100%', height: 'auto', maxHeight: '224px', objectFit: 'cover' }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
