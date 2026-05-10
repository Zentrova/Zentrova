'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CtcBtn from './ctcBtn';

export default function HomeProjects() {
    const mockProjects = [
        {
            id: '1',
            title: 'Tourato: Crafting a Global Travel & Tourism Brand',
            image: '/projects/Touratu.png',
            category: 'Branding & Full-Stack Development',
            description:
                "From a futuristic logo and comprehensive brand guidelines to a seamless full-stack website, we built Tourato's entire brand identity. Our work has positioned this travel and tourism tech brand for success on the global stage.",
            slug: 'tourato-travel-agency',
        },
        {
            id: '2',
            title: 'BiBiHealth: Driving Growth for a Mental Health Clinic',
            image: '/projects/BiBiHealth.png',
            category: 'Digital Marketing & SEO Strategy',
            description:
                'We developed a robust digital marketing and SEO strategy for BiBiHealth, a mental health clinic. Our focus on user-friendly design and targeted content led to increased appointment bookings and a stronger online presence.',
            slug: 'clinic-appointment-app',
        },
        {
            id: '3',
            title: 'MedStream: Connecting Doctors and Sellers',
            image: '/projects/MedStream.png',
            category: 'Full-Stack Platform Development',
            description:
                'We engineered a high-impact social platform for MedStream, connecting doctors with medical sellers. The platform includes secure appointment scheduling, integrated payments, and real-time chat features to facilitate seamless coordination.',
            slug: 'medstream-healthcare-communication-platform',
        },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 md:px-20">
            <div className="text-center mb-12 px-2">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary"
                >
                    Our Featured Work
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-base md:text-xl max-w-xl mx-auto mt-3 text-gray-600 dark:text-gray-300"
                >
                    Handpicked projects that represent our creativity, tech, and strategy.
                </motion.p>
            </div>

            <div className="space-y-10 sm:space-y-16 md:space-y-28">
                {mockProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 border border-primaryLight p-3 sm:p-4 rounded-xl md:border-none md:p-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
                    >
                        <div className="lg:w-1/2 w-full relative h-48 sm:h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover rounded-xl"
                                unoptimized
                            />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <p className="text-xs sm:text-sm uppercase text-primary font-semibold mb-2">
                                {project.category}
                            </p>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
                                {project.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <Link href={`/projects/${project.slug}`}>
                                <CtcBtn text="View Case Study" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12 sm:mt-14 mx-auto w-fit">
                <Link href="/projects">
                    <CtcBtn text="Explore More Projects" />
                </Link>
            </div>
        </section>
    );
}
