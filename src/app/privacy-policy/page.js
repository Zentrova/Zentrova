// src/app/privacy/page.tsx

'use client';

import CustomHeroSection from '@/components/CommonHeroSection';
import React from 'react';

export default function PrivacyPolicy() {

  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to Xentrova. Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our services.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We may collect personal information such as your name, email address, phone number, company details, project requirements, browser type, IP address, and website usage data when you interact with our website, forms, emails, or services.",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "The information we collect may be used to respond to inquiries, provide IT and software services, improve user experience, enhance website performance, communicate project updates, provide customer support, conduct analytics, and send marketing communications with your consent.",
    },
    {
      title: "4. Data Storage & Security",
      content:
        "We implement reasonable security measures to protect your data from unauthorized access, misuse, or disclosure. However, no online platform, server, or transmission method is completely secure, and we cannot guarantee absolute security.",
    },
    {
      title: "5. Sharing of Information",
      content:
        "Xentrova does not sell, trade, or rent your personal information to third parties. Information may only be shared with trusted service providers, partners, or tools required for project delivery, hosting, analytics, communication, or payment processing under confidentiality obligations.",
    },
    {
      title: "6. Cookies & Tracking Technologies",
      content:
        "Our website may use cookies, analytics tools, and tracking technologies to improve functionality, personalize content, and analyze website traffic. Users can manage or disable cookies through browser settings.",
    },
    {
      title: "7. Third-Party Services",
      content:
        "Our website or projects may involve third-party tools, APIs, plugins, payment gateways, hosting providers, or external platforms. We are not responsible for the privacy practices, policies, or operations of those third-party services.",
    },
    {
      title: "8. Data Retention",
      content:
        "We may retain submitted information, communication records, project details, and related data for operational, legal, security, and business purposes unless deletion is requested where applicable.",
    },
    {
      title: "9. Your Rights",
      content:
        "You may request access to, correction of, or deletion of your personal data by contacting us. We will make reasonable efforts to respond to valid requests within an appropriate timeframe.",
    },
    {
      title: "10. Children's Privacy",
      content:
        "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.",
    },
    {
      title: "11. External Links",
      content:
        "Our website may contain links to external websites or platforms. Xentrova is not responsible for the content, privacy practices, or policies of third-party websites.",
    },
    {
      title: "12. Policy Updates",
      content:
        "We may update or modify this Privacy Policy at any time without prior notice. Updated versions will be posted on this page, and continued use of our website implies acceptance of the revised policy.",
    },
    {
      title: "13. Contact Us",
      content:
        "If you have any questions, concerns, or requests regarding this Privacy Policy or your data, you may contact us through our official website or support email.",
    },
  ];

  return (
    <div>
      <div className="mb-10">
        <CustomHeroSection
          title="Privacy Policy"
          desc="Your privacy matters to us. Learn how Xentrova collects, uses, and protects your information."
        />
      </div>

      {/* Privacy Content */}
      <div className="mx-auto w-11/12 md:w-5/6 lg:w-3/4 mb-20 space-y-10 text-justify">

        {/* Last Updated */}
        <div className="border-b pb-5">
          <p className="text-sm md:text-base opacity-80">
            Last Updated: May 10, 2026
          </p>
        </div>

        {sections.map((sec, index) => (
          <section key={index}>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              {sec.title}
            </h2>

            <p className="text-base md:text-lg leading-relaxed opacity-90">
              {sec.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}