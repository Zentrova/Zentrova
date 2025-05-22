'use client';
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Play, CheckCircle, Clock, Users, FileText, Rocket } from "lucide-react";

const steps = [
    {
        title: "Initial Contact",
        description: "Our journey begins by attentively listening to your unique project needs and goals, ensuring we fully understand your vision before moving forward.",
        icon: Users,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        textColor: "text-blue-600",
        metaphor: "THE SPARK",
        subtitle: "Where ideas ignite"
    },
    {
        title: "Proposal & Agreement",
        description: "We craft a comprehensive proposal tailored to your requirements, accompanied by a clear agreement to establish transparency and mutual trust.",
        icon: FileText,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        textColor: "text-purple-600",
        metaphor: "THE BLUEPRINT",
        subtitle: "Crafting the foundation"
    },
    {
        title: "Project Planning",
        description: "Our team meticulously breaks down the project into achievable milestones and realistic timelines, laying the foundation for seamless execution.",
        icon: Clock,
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
        metaphor: "THE STRATEGY",
        subtitle: "Mapping the journey"
    },
    {
        title: "Development & Feedback",
        description: "We bring your vision to life through iterative development, actively involving you to gather feedback and refine the solution every step of the way.",
        icon: Play,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        textColor: "text-green-600",
        metaphor: "THE CREATION",
        subtitle: "Building dreams into reality"
    },
    {
        title: "Documentation & Delivery",
        description: "We finalize the project with detailed documentation and thorough testing, ensuring a polished and reliable product ready for launch.",
        icon: Rocket,
        color: "from-indigo-500 to-blue-600",
        bgColor: "bg-indigo-50",
        textColor: "text-indigo-600",
        metaphor: "THE LAUNCH",
        subtitle: "Ready for takeoff"
    },
];

export default function CreativeWorkflow() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef(null);

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                    Our Creative Journey
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Every project is a unique adventure. Here's how we transform your vision into reality.
                </p>
            </div>

            <div className="relative" ref={containerRef}>
                {/* Base vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>

                {/* Animated vertical progress line */}
                <motion.div
                    className="absolute left-1/2 top-0 w-1 bg-primary transform -translate-x-1/2 origin-top"
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.min(((activeStep + 1) / steps.length) * 100, 100)}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                <div className="space-y-1 relative">
                    {steps.map((step, index) => (
                        <div key={index}>
                            <StepTrigger index={index} setActiveStep={setActiveStep} />
                            <StepCard key={index} step={step} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
function StepTrigger({ index, setActiveStep }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    useEffect(() => {
        if (isInView) setActiveStep(index);
    }, [isInView, index, setActiveStep]);

    return <div ref={ref} className="h-1" />; // Acts as scroll trigger
}

function StepCard({ step, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const Icon = step.icon;
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className="relative">
            {/* Circle on the timeline */}
            <div className="absolute left-8 md:left-1/2 top-16 w-16 h-16 rounded-full bg-background border-4 border-primary transform -translate-x-1/2 flex items-center justify-center z-10">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Card */}
            <motion.div
                initial={isEven ? { opacity: 0, x: -50 } : { opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : (isEven ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 })}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`ml-20 md:ml-0 ${isEven ? 'md:mr-auto md:pr-10 md:pl-0' : 'md:ml-auto md:pl-10 md:pr-0'} 
                           ${isEven ? 'md:text-right' : 'md:text-left'} md:w-5/12 relative`}
            >
                <div className={`${step.bgColor} rounded-lg p-6 shadow-lg`}>
                    {/* Step number badge */}
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full  shadow-sm text-primary font-bold mb-3">
                        {index + 1}
                    </div>

                    {/* Metaphor */}
                    <div className={`${step.textColor} text-sm font-bold uppercase tracking-wider mb-2`}>
                        {step.metaphor}
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold ${step.textColor} mb-2`}>
                        {step.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-gray-600 italic mb-4">
                        {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-700">
                        {step.description}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-1 bg-gray-200 rounded-full mt-6 overflow-hidden">
                        <motion.div
                            className={`h-full bg-gradient-to-r ${step.color}`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "100%" } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}