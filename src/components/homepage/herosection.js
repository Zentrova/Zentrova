'use client';

import Image from "next/image";
import Link from "next/link";
import CtcBtn from "./ctcBtn";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-mainSection flex flex-col md:flex-row items-center justify-between px-6 md:px-20 md:py-20 md:bg-white/10 dark:bg-black/50 bg-black/20 text-white">
      <Image
        src="/heroBg.png"
        height={100}
        width={100}
        className="h-screen w-screen object-fill top-0 fixed right-0 -z-10"
        unoptimized
        alt="bg"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl space-y-6 text-center md:text-left flex flex-col justify-center h-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
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
          className="text-base sm:text-lg md:text-xl"
        >
          We’re <span className="font-semibold">Xentrova</span> — a full-stack
          team crafting seamless web solutions with powerful design, scalable
          code, and reliable APIs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <Link href="/contact">
            <CtcBtn text="Hire Us" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
