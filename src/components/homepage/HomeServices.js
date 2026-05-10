"use client";

import Image from "next/image";

export default function HomeServices() {
    const ourServices = [
  "Custom Software Solutions",
  "Website Development for Businesses",
  "Mobile App Development",
  "SaaS Platform Development",
  "Startup Product Development",
  "Business Automation Systems",
  "E-commerce Solutions",
  "School & Institute Management Systems",
  "Healthcare & Appointment Platforms",
  "CRM & ERP Solutions",
  "Dashboard & Admin Panel Development",
  "UI/UX Design for Better Conversions",
  "Scalable Web Applications",
  "API & System Integrations",
  "Cloud-Based Solutions",
  "Performance & Speed Optimization",
  "Ongoing Maintenance & Support",
  "Digital Growth & SEO",
  "Custom Solutions for Any Industry",
];

    const minSpeed = 3;
    const speed =  ourServices.length * minSpeed  ;

    return (
        <div className="space-y-4 py-7 ">
            {/* News Marquee */}
            <div className="relative overflow-hidden whitespace-nowrap text-marquee">
                <div
                    className="inline-flex hover:pause"
                    style={{
                        animation: `marquee ${speed}s linear infinite`
                    }}
                >
                    <div className="flex items-center gap-10 px-4">
                        {ourServices.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-3 transition"
                            >
                                <span className="text-xl mt-1 font-sniglet capitalize font-normal">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center space-x-8 px-4">
                        {ourServices.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center  gap-3  transition"
                            >
                                <span className="text-xl mt-1 capitalize font-sniglet">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
            @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
            }
            .hover\\:pause:hover {
            animation-play-state: paused;
            }
        `}</style>
        </div>
    );
}
