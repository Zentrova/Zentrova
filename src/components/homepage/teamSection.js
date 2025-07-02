'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { httpRequest } from '@/utils/httpRequest';

const teamMembers = [
  {
    name: "Yashpal",
    role: "Design & Visuals",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80",
    brand: "Xentrova",
    experience: "2+ yrs"
  },
  {
    name: "Prabhjot",
    role: "API Developer",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
    brand: "Xentrova",
    experience: "1.5 yrs"
  },
  {
    name: "Sumit",
    role: "Backend Specialist",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80",
    brand: "Xentrova",
    experience: "2 yrs"
  },
  {
    name: "Raktinder",
    role: "UI/UX Expert",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    brand: "Xentrova",
    experience: "1 yr"
  },
];

// Framer Motion Variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

export default function TeamSection() {



   const [teamData, setTeamData] = useState(null)
  
    const fetchData = async () => {
      try {
        const response = await httpRequest({
          url: "team",
          method: "GET",
        });
  
        if (response.success) {
          setTeamData(response.data.data);
          console.log("data fetched successfully", response);
        } else {
          console.warn("Data was not fetched successfully");
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  



  return (
    <div className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">{teamData?.founders?.title}</h2>
        <p className="text-base md:text-xl text-zinc-500 mt-4 max-w-2xl mx-auto">
        {teamData?.founders?.subTitle}
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamData?.founders?.members.map((member, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md bg-white/10 dark:bg-black/20"
            whileHover={{ scale: 1.02 }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index}
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={member?.image}
                alt={member?.name}
                fill
                className="object-cover transition duration-500 rounded-2xl"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 p-6 text-white z-10">
                <h4 className="text-xl font-semibold">{member?.name}</h4>
                <p className="text-sm text-primary font-medium capitalize">{member?.role}</p>
                {/* <p className="text-xs text-zinc-400">@{member.brand}</p>
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>{member.experience || "Experience NA"}</span>
                </div> */}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
