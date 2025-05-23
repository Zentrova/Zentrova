// components/HomeProjects.js

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ThemeButton from './themeButton';

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
        <section className="py-20 px-6 md:px-20 bg-white dark:bg-[#0f0f0f]">
            <div className="text-center mb-24 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-primary"
                >
                    Our Featured Work
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mt-4"
                >
                    Handpicked projects that represent our creativity, tech, and strategy.
                </motion.p>
            </div>



            <div className="space-y-24">
                {mockProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
                    >
                        <div className="lg:w-1/2 w-full relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover rounded-xl"
                                unoptimized
                            />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <p className="text-sm uppercase text-primary font-semibold mb-2">
                                {project.category}
                            </p>
                            <h3 className="text-3xl font-semibold mb-4">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                {project.description}
                            </p>
                            <Link href={`/projects/${project.slug}`}>
                                  <ThemeButton text="View Case Study"/>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-20">
                <Link href="/projects">
                    <button className="px-8 py-3 text-lg bg-gray-900 text-white rounded-xl hover:bg-gray-800">
                        Explore More Projects →
                    </button>
                </Link>
            </div>
        </section>
    );
}
