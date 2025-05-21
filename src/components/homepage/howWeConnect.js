'use client';
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";


const steps = [
    {
        title: "Initial Contact",
        description: "Our journey begins by attentively listening to your unique project needs and goals, ensuring we fully understand your vision before moving forward.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Proposal & Agreement",
        description: "We craft a comprehensive proposal tailored to your requirements, accompanied by a clear agreement to establish transparency and mutual trust.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Project Planning",
        description: "Our team meticulously breaks down the project into achievable milestones and realistic timelines, laying the foundation for seamless execution.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Development & Feedback",
        description: "We bring your vision to life through iterative development, actively involving you to gather feedback and refine the solution every step of the way.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Documentation & Delivery",
        description: "We finalize the project with detailed documentation and thorough testing, ensuring a polished and reliable product ready for launch.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
]


export default function HowWeConnect() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-extrabold text-center mb-12 relative inline-block">
                How We Work
                <span className="block w-20 h-1 bg-primary mx-auto mt-2 rounded-full"></span>
            </h2>

            <div className="space-y-20">
                {steps.map((step, index) => (
                    <AnimatedStep step={step} index={index} key={step.title} />
                ))}
            </div>
        </section>
    );
}
function AnimatedStep({ step, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
    const fullyOutOfView = useInView(ref, { amount: 1.0 });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: index * 0.1 },
            });
        } else {
            controls.start({
                opacity: 0,
                y: 40,
                transition: { duration: 0.3 },
            });
        }
    }, [isInView, controls, index]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 40 }}
            className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 object-cover object-center"
                    loading="lazy"
                />
            </div>

            <div className="md:w-1/2 space-y-4 max-w-xl">
                <h3 className="text-3xl font-semibold text-primary">{step.title}</h3>
                <p className="text-lg">{step.description}</p>
            </div>
        </motion.div>
    );
}
