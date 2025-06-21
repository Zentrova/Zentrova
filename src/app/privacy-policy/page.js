// src/app/privacy/page.tsx

'use client';
import CustomHeroSection from '@/components/CommonHeroSection';
import Image from 'next/image';
import React from 'react';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Zentrova respects your privacy. This Privacy Policy explains how we handle your data and what choices you have.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We may collect personal information like your name, email address, browser type, and usage data to improve our platform.",
    },
    {
      title: "3. How We Use Information",
      content:
        "Your data may be used for website optimization, customer support, marketing (with consent), and analytics purposes.",
    },
    {
      title: "4. Data Storage & Security",
      content:
        "We store data securely and take appropriate measures to prevent unauthorized access, though no system is ever 100% secure.",
    },
    {
      title: "5. Sharing of Data",
      content:
        "We do not sell your data. We may share it only with trusted partners who adhere to strict confidentiality agreements.",
    },
    {
      title: "6. Cookies and Tracking",
      content:
        "Our site uses cookies to personalize content and analyze traffic. You can manage cookie preferences in your browser settings.",
    },
    {
      title: "7. Your Rights",
      content:
        "You have the right to request access to, correct, or delete your personal data at any time. Just email us to make a request.",
    },
    {
      title: "8. Changes to This Policy",
      content:
        "Zentrova may update this policy occasionally. We encourage you to review this page regularly for any changes.",
    },
  ];


  return (
    <div className="">
      <div className='mb-10'>
        <CustomHeroSection
          title="Privacy Policy"
          desc="  Your privacy matters. Learn how Zentrova handles your data."
        />
      </div>

      {/* Privacy Content */}
      <div className="mx-auto w-11/12 md:w-5/6 lg:w-3/4 mb-20  space-y-10 text-justify">
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
