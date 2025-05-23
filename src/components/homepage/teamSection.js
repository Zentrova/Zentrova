'use client';
import Image from "next/image";
import { motion } from 'framer-motion';


const teamMembers = [
    {
        name: "Yashpal",
        role: "Design & Visuals",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80",
        brand: "Zentrova",
    },
    {
        name: "Prabhjot",
        role: "API Developer",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
        brand: "Zentrova",
    },
    {
        name: "Sumit",
        role: "Backend Specialist",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80",
        brand: "Zentrova",
    },
    {
        name: "Raktinder",
        role: "UI/UX Expert",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
        brand: "Zentrova",
    },
];

export default function TeamSection() {
    return (
        <div className="py-12 px-6 ">
            <div className="text-center mb-12 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center"
                >
                    Meet Our Team
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4 text-center"
                >
                    A group of passionate experts dedicated to crafting exceptional digital experiences.
                </motion.p>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl shadow-md">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={500}
                            height={600}
                            className="w-full h-full object-cover sm:grayscale group-hover:grayscale-0 transition duration-500"
                            unoptimized
                        />
                        <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full p-4 text-white">
                            <p className="text-xl font-semibold">{member.name}</p>
                            <p className="text-sm text-primary">{member.role} @{member.brand}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
