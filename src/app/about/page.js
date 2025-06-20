import FAQ from '@/components/FAQ';
import HowItWorks from '@/components/homepage/howItWorks';
import Image from 'next/image';
import React from 'react';

const stats = [
  { value: '14+', label: 'Years of Growth' },
  { value: '120+', label: 'Product Experts' },
  { value: '1000+', label: 'Projects Delivered' },
  { value: '50+', label: 'Countries Served' },
];

const awards = [
  '/logos/clutch.png',
  '/logos/manifest.png',
  '/logos/aws.png',
  '/logos/gcp.png',
  '/logos/iso.png',
];

const AboutUs = () => (
  <div className="min-h-screen">
    {/* Hero */}

    <section className="relative heroSection h-hero text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex justify-center items-center flex-col text-center h-hero">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Driven by Design. Built for Impact.        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Zentrova is a team of passionate creators delivering tailored web and mobile solutions that combine strategy, design, and technology.
        </p>
        <div className="mt-6 h-1 w-24 mx-auto bg-primary rounded-full" />
      </div>
    </section>


    {/* Stats */}
    <div className='bg-background2'>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center  p-8 rounded-xl mx-auto w-3/4">
        {stats.map((s) => (
          <div key={s.label}>
            <span className="block text-3xl font-bold">{s.value}</span>
            <span className="text-primary">{s.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className='flex '>
      <div className='flex-1'>
        <div className="relative z-10 max-w-6xl mx-auto flex justify-center items-center flex-col px-10 h-full text-center">
          <h1 className="text-4xl font-extrabold leading-tight">
            Who are we</h1>
          <p className="mt-4 text-base">
            Zentrova is a multidisciplinary digital solutions team specializing in UI/UX design, frontend development, and scalable web and mobile platforms. We collaborate with startups, agencies, and enterprises to turn bold ideas into polished, high-performing products.
            <br /><br />
            At Zentrova, we follow a quality-first approach—ensuring each solution we deliver is tailored, future-ready, and aligned with the client’s business goals. With a deep understanding of design, code, and user experience, we bridge creativity and technology to craft digital excellence.
          </p>
          <div className="mt-6 h-1 w-24 mx-auto bg-primary rounded-full" />
        </div>
      </div>
      <div className='flex-1'>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIK_dzjnmoFopN-Tti8pDSgDA3R8NvHYnAg&s"
          height={100}
          width={100}
          alt='abc'
          unoptimized
          className='h-full w-full object-cover'
        />
      </div>
    </div>


    <div className='bg-background2 h-hero'>
      Services Cards
    </div>
    {/* Work Flow */}
    <div className=''>
      <HowItWorks />
    </div>

    <div className='bg-background2'>
      <FAQ />
    </div>

    {/* CTA */}
    {/* <div className="text-center py-10  rounded-xl mx-auto w-3/4 my-10">
      <h3 className="text-2xl font-semibold mb-5">
        Let’s enhance your digital journey — with design that truly converts.
      </h3>
      <button className="primaryBtn mx-auto">
        Let’s Talk About It
      </button>
    </div> */}
  </div>
);

export default AboutUs;
