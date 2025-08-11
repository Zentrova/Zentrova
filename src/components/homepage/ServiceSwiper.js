"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Web Development",
        description: "Creating fast, responsive, and modern websites.",
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
        href: "web-development"
    },
    {
        title: "UI/UX Development",
        description: "Designing intuitive user interfaces and experiences.",
        image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "ui-ux-development"
    },
    {
        title: "App Development",
        description: "Building cross-platform mobile applications.",
        image: "/native.jpg",
        href: "app-development"
    },
    {
        title: "Shopify Development",
        description: "Custom Shopify stores tailored for your brand.",
        image: "https://images.unsplash.com/photo-1502951682449-e5b93545d46e?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "shopify-development"
    },
    {
        title: "Maintenance & Support",
        description: "Ensuring reliability and performance post-launch.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "maintenance-support"

    },
    {
        title: "Digital Marketing & SEO",
        description: "Creating targeted campaigns that convert and improve SEO.",
        image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1200&auto=format&fit=crop",
        href: "digital-marketing-seo"
    },

];

export default function ServiceSwiper() {
    return (
        <section className="pt-5 md:pt-20 ">
            <div className="text-center mb-12 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
                    What We Offer at <span className="text-primary">Xentrova</span>
                </h2>
                <p className="text-sm sm:text-base md:text-xl max-w-xl mx-auto mt-3 text-gray-600 dark:text-gray-300">
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
                            <Link href={`/service/${service.href}`}>
                                <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border hover:border-primary h-full flex flex-col mb-10 min-h-[300px] md:min-h-[280px]">
                                    <div className="relative w-full h-[280px] shrink-0">
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
                                        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{service.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
