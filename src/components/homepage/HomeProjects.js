'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CtcBtn from './ctcBtn';

export default function HomeProjects() {
    const mockProjects = [
        {
            id: '1',
            title: 'NeoTech Brand Identity',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
            category: 'Branding & Design',
            description:
                'We crafted a complete brand identity for NeoTech — including logo, visual system, brand guidelines, and digital assets. The result: a futuristic tech brand ready for global recognition.',
            slug: 'neotech-brand-identity',
        },
        {
            id: '2',
            title: 'E-commerce Web App',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
            category: 'Full Stack Development',
            description:
                'Built a robust, scalable, and visually appealing shopping platform with custom admin panel, payment integrations, and personalized shopping experiences.',
            slug: 'ecommerce-web-app',
        },
        {
            id: '3',
            title: 'Social Media Launch Campaign',
            image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80',
            category: 'Marketing & Design',
            description:
                'Designed and executed a high-impact social media campaign for a fashion startup. Includes storyboards, reels, and viral post design templates.',
            slug: 'social-campaign',
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
