"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomHeroSection from "@/components/CommonHeroSection";
import {
    Zap,
    HardDrive,
    Smartphone,
    RefreshCw,
    Settings,
    Scale,
} from "lucide-react";
import LogoGrid from "../LogoGrid";
import { appDev } from "@/ServiceData/service";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Extended Support",
        description: "Benefit from the tools and tricks that ecosystems provide",
    },
    {
        icon: <HardDrive className="w-8 h-8 text-primary" />,
        title: "Hardware Management",
        description:
            "Manage your app's features and hardware resources to the optimal level",
    },
    {
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        title: "Improved UX",
        description:
            "Integrate UX with the OS for a unified presentation with the device",
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-primary" />,
        title: "Easier Compatibility",
        description:
            "Native apps are inherently compatible for easier integration and error management",
    },
    {
        icon: <Settings className="w-8 h-8 text-primary" />,
        title: "Expert Resources",
        description:
            "Skilled developers for one platform make the process smooth and efficient",
    },
    {
        icon: <Scale className="w-8 h-8 text-primary" />,
        title: "Enhanced Stability",
        description:
            "Native apps have fewer chances to crash, offering maximum stability",
    },
];

export default function AppDevelopment() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero */}
            <CustomHeroSection
                title="Tailored Native App Solutions"
                desc="Xentrova delivers bespoke mobile experiences that fully leverage the unique strengths of iOS and Android ecosystems."
                img="/native.jpg"
                ctcBtn
            />

            {/* Intro Section */}
            {/* App Development Overview */}
            <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">
                        <span className="text-primary">Innovative Apps</span> – From Idea to Launch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We specialize in creating mobile and web applications that are fast, reliable, and user-friendly.
                        Our approach combines beautiful design with robust development, ensuring your app is both functional and engaging.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        From MVPs for startups to enterprise-level platforms, we work with technologies like React Native, Flutter, and Swift
                        to bring your vision into the hands of your users.
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop"
                        alt="App Development Team"
                        width={500}
                        height={350}
                        className="rounded-xl shadow-lg w-full h-auto"
                        unoptimized
                    />
                </motion.div>
            </section>

            {/* Native App Features */}
            <section className="py-20 bg-background2">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        className="text-3xl md:text-4xl font-extrabold text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        viewport={{ once: true }}
                    >
                        Native App <span className="text-primary">Features</span>
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="bg-background rounded-xl shadow-md p-8 text-center border border-gray-200 dark:border-gray-800"
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeUp}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Development Overview */}
            <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">
                        <span className="text-primary">Your Vision</span> – Our App Development Expertise
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We build high-performance mobile and web applications tailored to your business goals.
                        From ideation to launch, our team delivers seamless user experiences with modern, scalable technology.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        Whether it’s a startup MVP or an enterprise-grade solution, we use
                        frameworks like React Native, Flutter, and Next.js to bring your ideas to life — fast, secure, and future-proof.
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="App Development - Smartphone and Code"
                        width={500}
                        height={350}
                        className="rounded-xl shadow-lg w-full h-auto"
                        unoptimized
                    />
                </motion.div>
            </section>

            {/* Custom App Solutions */}
            <section className="py-20 bg-background2">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                            alt="Custom App Solutions"
                            width={500}
                            height={350}
                            className="rounded-xl shadow-lg w-full h-auto"
                            unoptimized
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-primary mb-4">
                            Custom-Built for Your Needs
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            No cookie-cutter apps here. We design and develop applications
                            that align perfectly with your brand, workflow, and user expectations.
                            Our agile process ensures faster delivery and ongoing improvements.
                        </p>
                    </motion.div>

                </div>
            </section>


            <LogoGrid logos={appDev} />
        </div>
    );
}
