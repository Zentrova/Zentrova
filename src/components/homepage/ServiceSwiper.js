"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const services = [
    {
        title: "UI/UX Design",
        description: "Designing intuitive user interfaces and experiences.",
        image: "https://source.unsplash.com/800x600/?ui,design",
    },
    {
        title: "Web Development",
        description: "Creating fast, responsive, and modern websites.",
        image: "https://source.unsplash.com/800x600/?web,code",
    },
    {
        title: "Mobile Apps",
        description: "Building cross-platform mobile applications.",
        image: "https://source.unsplash.com/800x600/?mobile,app",
    },
    {
        title: "Branding",
        description: "Developing memorable visual brand identities.",
        image: "https://source.unsplash.com/800x600/?branding,logo",
    },
    {
        title: "SEO Optimization",
        description: "Improving visibility across search engines.",
        image: "https://source.unsplash.com/800x600/?seo,analytics",
    },
    {
        title: "Digital Marketing",
        description: "Creating targeted campaigns that convert.",
        image: "https://source.unsplash.com/800x600/?digital,marketing",
    },
    {
        title: "Content Creation",
        description: "Producing engaging content across platforms.",
        image: "https://source.unsplash.com/800x600/?content,writing",
    },
    {
        title: "Maintenance & Support",
        description: "Ensuring reliability and performance post-launch.",
        image: "https://source.unsplash.com/800x600/?support,maintenance",
    },
];

export default function ServiceSwiper() {
    return (
        <section className="py-5 md:py-20 ">
            <div className="text-center mb-12 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
                    What We Offer at <span className="text-primary">Xentrova</span>
                </h2>
                <p className="text-sm sm:text-base md:text-xl max-w-xl mx-auto mt-3 text-gray-600 dark:text-gray-300"
                >
                    Explore the full range of services we provide to elevate your digital presence.
                </p>
            </div>
            <div className="px-10 md:px-20">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    allowTouchMove={false}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="px-4"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border  hover:border-primary h-full flex flex-col mb-10 min-h-[300px] md:min-h-[280px]">
                                <div className="relative h-52 w-full shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        priority={index === 0}
                                        unoptimized
                                    />
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {service.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
