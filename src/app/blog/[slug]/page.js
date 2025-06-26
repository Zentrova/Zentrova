'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContentLayout from '@/components/contentLayout';
import { useParams } from 'next/navigation';

const sections = [
  {
    id: 'poc',
    title: 'What Is a Proof of Concept (POC)?',
    desc: 'A Proof of Concept (POC) is the earliest validation of an idea. It’s not about design or user interface. It’s about technical feasibility. Think of it as: “Will this idea even work before we invest more time and money?” Example: A healthtech startup wants to know if AI can detect early-stage lung cancer from CT scans. They build a proof of concept (POC) with anonymized data to test accuracy before developing the full product.'
  },
  {
    id: 'prototype',
    title: 'What Is a Prototype?',
    img: 'https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg?semt=ais_hybrid&w=740',
    desc: 'A Prototype is an interactive sample of your product, used to validate design and flow. It’s like a demo version to test with users before building the real thing. Example: A fintech app creates a clickable Figma prototype to test user onboarding and transaction flows with potential users.',
  },
  {
    id: 'mvp',
    title: 'What Is an MVP?',
    desc: 'A Minimum Viable Product (MVP) is the most basic version of your product that solves the core problem. It\'s used to test market response with the least effort and features possible. Example: Dropbox launched with a simple explainer video to test demand before building the full syncing product.'
  },
  {
    id: 'beta',
    title: 'What Is a Beta Version?',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpOVm0xBWbWub9-KJXgfKUm-vbUoTRdroDA&s",
    desc: 'A Beta version is a pre-release product made available to a limited audience to test for bugs and gather feedback. It’s more complete than an MVP, but not yet final. Example: Google often releases features in Beta to gather early user feedback and improve stability before official release.'
  },
  {
    id: 'product-market-fit',
    title: 'What Is Product-Market Fit?',
    desc: 'Product-Market Fit means your product satisfies a strong market demand. It’s when users actively use and recommend your product, and growth becomes organic. Example: Slack found product-market fit when teams began using it daily and switching from traditional email.'
  },
  {
    id: 'scaling',
    title: 'What Is Scaling?',
    desc: 'Scaling refers to growing your product to support more users, markets, or features while maintaining performance and quality. It comes after you validate demand and need infrastructure to support it. Example: Airbnb had to scale its infrastructure to handle millions of bookings globally.'
  },
  {
    id: 'pivot',
    title: 'What Is a Pivot?',
    desc: 'A Pivot is a significant change in product direction based on user feedback or market reality. It helps teams correct course if the original idea isn’t working. Example: Instagram started as a location check-in app called Burbn before pivoting to focus solely on photo sharing.'
  },
  {
    id: 'launchs',
    title: 'What Is a Product Launch?s',
    desc: 'A Product Launch is the official release of your product to the public or a specific audience. It’s usually supported by marketing efforts, onboarding, and customer support. Example: Apple’s iPhone launch events set the standard for product introductions with demos and excitement.'
  },
  {
    id: 'pivots',
    title: 'What Is a Pivot?s',
    desc: 'A Pivot is a significant change in product direction based on user feedback or market reality. It helps teams correct course if the original idea isn’t working. Example: Instagram started as a location check-in app called Burbn before pivoting to focus solely on photo sharing.'
  },
  {
    id: 'launch',
    title: 'What Is a Product Launch?',
    desc: 'A Product Launch is the official release of your product to the public or a specific audience. It’s usually supported by marketing efforts, onboarding, and customer support. Example: Apple’s iPhone launch events set the standard for product introductions with demos and excitement.'
  }
];



export default function BlogPreview() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [blogDetail,setBlogDetail]=useState({})
  const sectionRefs = useRef({});
  const params = useParams();
  const slug=params.slug;
  const blog = async (slug) => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_BASE}/posts/slug:${slug}`
      );
      if (!result.ok) {
        throw new Error("Blog not found");
      }
      
    const data = await result.json();
    console.log("dataa",data)
    setBlogDetail(data)
    } catch (error) {
      console.error("Error fetching blog:", error.message);
       return null;
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach(section => {
      const ref = sectionRefs.current[section.id];
      if (ref) observer.observe(ref);
    });
    if(slug){
      blog(slug)
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="blogWrap mb-10">
      {/* <section className="relative heroSection py-24 text-white overflow-hidden mb-10">
        <div className="absolute inset-0 z-0">
          <Image
            src={blogDetail?.featured_image || "https://c0.wallpaperflare.com/preview/639/306/330/aerial-background-blog-cafe-thumbnail.jpg"}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
            {blogDetail?.title}
          </h1>
          <div className="mt-6 h-1 w-24 mx-auto bg-primary rounded-full" />
        </div>
      </section> */}

  


      <div className='px-24'>
        <ContentLayout sections={sections} activeId={activeId} sectionRefs={sectionRefs} blog={blogDetail} />
      </div>


    </div>
  );
}
