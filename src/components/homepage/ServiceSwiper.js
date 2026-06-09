'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Web Development",
        description: "Creating fast, responsive, and modern websites.",
        image: '/services/website-swiper.jpg',
        href: "web-development"
    },
    {
        title: "UI/UX Development",
        description: "Designing intuitive user interfaces and experiences.",
        image: "/services/ui-ux.jpg",
        href: "ui-ux-development"
    },
    {
        title: "App Development",
        description: "Building cross-platform mobile applications.",
        image: "/services/app-development.jpg",
        href: "app-development"
    },
    {
        title: "Shopify Development",
        description: "Custom Shopify stores tailored for your brand.",
        image: "/services/shopify.png",
        href: "shopify-development"
    },
    {
        title: "Maintenance & Support",
        description: "Ensuring reliability and performance post-launch.",
        image: "/services/maintenance-service.jpg",
        href: "maintenance-support"

    },
    {
        title: "Digital Marketing & SEO",
        description: "Creating targeted campaigns that convert and improve SEO.",
        image: "/services/digital-seo.jpg",
        href: "digital-marketing-seo"
    },

];

export default function ServiceSwiper() {
    return (
        <section className="py-12 md:py-20">
            <div className="text-center mb-12 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
                    What We Offer at <span className="text-primary">Xentrova</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
                    Explore the full range of services we provide to elevate your digital presence.
                </p>
            </div>
            <div className="px-4 sm:px-6 md:px-8">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={1500}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                        1280: { slidesPerView: 4, spaceBetween: 50 },
                    }}
                    className="pb-12"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <Link href={`/service/${service.href}`} passHref>
                                <article className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary h-full flex flex-col min-h-[320px] md:min-h-[350px]">
                                    <div className="relative w-full h-[200px] sm:h-[220px] shrink-0">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                            priority={index < 4} // Prioritize loading for first few slides
                                        />
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <h2 className="text-lg font-bold text-foreground">{service.title}</h2>
                                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                                    </div>
                                </article>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
