// components/LogoGrid.jsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function LogoGrid({ logos }) {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6">
            <motion.h2
                className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
            >
                Our Tech Stack
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center text-center">
                {logos.map((tool, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col items-center gap-6 bg-white/15 p-6 rounded-lg shadow-md"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 flex items-center justify-center">
                            <Image
                                src={tool.img}
                                alt={tool.name}
                                width={60}
                                height={60}
                                unoptimized
                                className="object-contain"
                            />
                        </div>

                        <p className="font-medium">{tool.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
