// components/AwardsGrid.jsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AwardsGrid({ logos, title }) {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6">
            <motion.h2
                className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
            >
                {title}
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center">
                {logos.map((logo, i) => (
                    <motion.div
                        key={i}
                        className="flex justify-center"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Image
                            src={logo}
                            alt="Award Logo"
                            width={120}
                            height={60}
                            unoptimized
                            className="object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
