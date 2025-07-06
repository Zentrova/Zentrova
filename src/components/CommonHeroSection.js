'use client';

import React from 'react';
import Image from 'next/image';

export default function CustomHeroSection({
  title = '',
  desc = '',
  img = '/bg.jpg',
}) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt="Background"
          fill
          className="object-cover opacity-70"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-200">
          {desc}
        </p>
        <div className="mt-6 h-1 w-24 mx-auto bg-primary rounded-full" />
      </div>
    </section>
  );
}
