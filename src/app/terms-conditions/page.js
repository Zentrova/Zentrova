// src/app/terms/page.tsx

'use client';
import CustomHeroSection from '@/components/CommonHeroSection';
import Image from 'next/image';
import React from 'react';

export default function TermsCondition() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        "By using the Xentrova website, you confirm that you agree to abide by these Terms and Conditions. If you do not accept any part of these terms, please discontinue use immediately.",
    },
    {
      title: "2. Ownership and Copyright",
      content:
        "All materials on this site, including text, images, and logos, are the intellectual property of Xentrova and its partners, and may not be reused without permission.",
    },
    {
      title: "3. User Conduct",
      content:
        "You agree not to misuse our services, spam, hack, or attempt to exploit vulnerabilities in our platform. Violations may result in restricted access or legal action.",
    },
    {
      title: "4. Account Security",
      content:
        "If account features are introduced, users are responsible for maintaining the confidentiality of their login credentials and for all activities under their account.",
    },
    {
      title: "5. Third-Party Integrations",
      content:
        "Xentrova may integrate third-party tools or links. We are not responsible for the privacy or security practices of those external services.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "Xentrova shall not be liable for any direct or indirect damages resulting from the use or inability to use the website or services.",
    },
    {
      title: "7. Termination Rights",
      content:
        "We reserve the right to terminate or suspend your access to our services at our sole discretion, without prior notice.",
    },
    {
      title: "8. Governing Law",
      content:
        "These terms are governed by the laws of the fictional region of Codevania, and any disputes will be resolved in its courts.",
    },
  ];


  return (
    <div className="">
      {/* Hero Section */}
      <div className='mb-10'>
        <CustomHeroSection
          title='Terms and Conditions'
          desc='Please read these terms carefully before using our site.'
        />
      </div>

      {/* Terms Content */}
      <div className="mx-auto w-11/12 md:w-5/6 lg:w-3/4 mb-20 space-y-10">
        {sections.map((sec, index) => (
          <section key={index}>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{sec.title}</h2>
            <p className="text-base md:text-lg leading-relaxed">{sec.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
