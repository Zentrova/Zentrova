'use client';

import Image from "next/image";
import Link from "next/link";
import CtcBtn from "./ctcBtn";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-mainSection flex flex-col items-center md:items-start justify-center px-4 sm:px-6 md:px-20 text-white text-center md:text-left">
      {/* Background Image */}
      <Image
        src="/heroBg.png"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full -z-10"
        unoptimized
        alt="Background"
        priority
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 dark:bg-black/60 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          From <span className="text-primary">Vision</span> to{" "}
          <span className="text-primary">Launch</span>
          <br />
          Digital Products That Deliver Impact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-base sm:text-lg md:text-xl"
        >
        At <span className="font-semibold">Xentrova</span>, we design and build powerful web applications, Android/iOS apps, Shopify stores, and SEO strategies — all at affordable prices, tailored to help your business scale.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <Link href="/contact">
            <CtcBtn text="Hire Us" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}