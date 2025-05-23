'use client';
import { motion, useInView } from 'framer-motion';
import { Clock, FileText, Play, Rocket, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const steps = [
    {
        title: 'Initial Contact',
        description: 'Our journey begins by attentively listening to your unique project needs and goals...',
        icon: Users,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        metaphor: 'THE SPARK',
        subtitle: 'Where ideas ignite',
    },
    {
        title: 'Proposal & Agreement',
        description: 'We craft a comprehensive proposal tailored to your requirements...',
        icon: FileText,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50',
        textColor: 'text-purple-600',
        metaphor: 'THE BLUEPRINT',
        subtitle: 'Crafting the foundation',
    },
    {
        title: 'Project Planning',
        description: 'Our team meticulously breaks down the project into achievable milestones...',
        icon: Clock,
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-600',
        metaphor: 'THE STRATEGY',
        subtitle: 'Mapping the journey',
    },
    {
        title: 'Development & Feedback',
        description: 'We bring your vision to life through iterative development...',
        icon: Play,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-50',
        textColor: 'text-green-600',
        metaphor: 'THE CREATION',
        subtitle: 'Building dreams into reality',
    },
    {
        title: 'Documentation & Delivery',
        description: 'We finalize the project with detailed documentation and thorough testing...',
        icon: Rocket,
        color: 'from-indigo-500 to-blue-600',
        bgColor: 'bg-indigo-50',
        textColor: 'text-indigo-600',
        metaphor: 'THE LAUNCH',
        subtitle: 'Ready for takeoff',
    },
];

export default function CreativeWorkflow() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef(null);

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-24 px-4">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-900"
                >
                    Our Creative Journey
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4"
                >
                    Every project is a unique adventure. Here's how we transform your vision into reality.
                </motion.p>
            </div>


            <div className="relative" ref={containerRef}>
                {/* Base vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0" />

                {/* Animated progress line */}
                <motion.div
                    className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-primary to-purple-600 transform -translate-x-1/2 origin-top z-10"
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.min(((activeStep + 1) / steps.length) * 100, 100)}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                />

                <div className="space-y-16 relative z-20">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <StepTrigger index={index} setActiveStep={setActiveStep} />
                            <StepCard step={step} index={index} />
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

    return <div ref={ref} className="h-1" />;
}

function StepCard({ step, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const Icon = step.icon;
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''
                } md:justify-between md:gap-8`}
        >
            {/* Timeline point with icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full border-4 border-primary z-30 flex items-center justify-center shadow-lg">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <Icon className="text-white w-6 h-6" />
                </div>
            </div>

            {/* Card content */}
            <div
                className={`
          mt-16 md:mt-0 p-6 md:p-8 rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]
          ${step.bgColor} ${isEven ? 'md:ml-auto md:w-5/12' : 'md:mr-auto md:w-5/12'}
        `}
            >
                <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">
                    Step {index + 1}
                </div>
                <div className={`${step.textColor} text-sm font-bold uppercase tracking-wide mb-2`}>
                    {step.metaphor}
                </div>
                <h3 className={`text-2xl font-bold ${step.textColor} mb-2`}>{step.title}</h3>
                <p className="text-gray-500 italic mb-4">{step.subtitle}</p>
                <p className="text-gray-700">{step.description}</p>

                {/* Progress animation */}
                <div className="w-full h-1 bg-gray-200 rounded-full mt-6 overflow-hidden">
                    <motion.div
                        className={`h-full bg-gradient-to-r ${step.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
