// src/app/terms/page.tsx

'use client';

import CustomHeroSection from '@/components/CommonHeroSection';
import React from 'react';

export default function TermsCondition() {

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the Xentrova website or services, you acknowledge that you have read, understood, and agreed to comply with these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue use of our website and services immediately.",
    },
    {
      title: "2. Services",
      content:
        "Xentrova provides IT and digital services including but not limited to website development, software development, UI/UX design, mobile application development, SEO, maintenance, consulting, and related technical services. Service details, timelines, pricing, and deliverables may vary depending on the project agreement with each client.",
    },
    {
      title: "3. Project Scope & Requirements",
      content:
        "Clients are responsible for providing accurate project requirements, content, credentials, assets, approvals, and necessary information required for development. Any additional features, modifications, or changes requested after project confirmation may affect timelines, pricing, and delivery schedules.",
    },
    {
      title: "4. Communication & Project Inactivity",
      content:
        "Clients are expected to maintain reasonable communication during the project process. If a client becomes unresponsive or fails to provide required feedback, approvals, content, or communication for more than 30 consecutive days, the project may be considered inactive or temporarily discontinued. In such cases, development work may be paused until communication resumes. Xentrova shall not be responsible for delays, missed deadlines, or business losses caused by delayed client responses or inactivity. Re-activating inactive projects may require updated timelines, revised pricing, or additional charges depending on workload and pending tasks.",
    },
    {
      title: "5. Payments & Refunds",
      content:
        "Clients agree to complete payments according to agreed invoices, milestones, or payment schedules. Advance payments, booking amounts, consultation fees, and completed milestone payments are generally non-refundable unless otherwise agreed in writing. Failure to complete payments may result in suspension or termination of services.",
    },
    {
      title: "6. Revisions & Additional Requests",
      content:
        "Reasonable revisions may be provided based on the agreed project scope. Major changes, repeated modifications, or requests beyond the original scope may require additional charges and revised timelines. Delayed feedback or approvals from the client side may also impact project delivery schedules.",
    },
    {
      title: "7. Intellectual Property",
      content:
        "Unless otherwise agreed in writing, the final approved project files and deliverables become the property of the client only after full payment has been completed. Xentrova reserves the right to showcase completed work, designs, or project screenshots in portfolios, social media, case studies, or marketing materials unless a prior written confidentiality agreement exists.",
    },
    {
      title: "8. Third-Party Services & Integrations",
      content:
        "Projects may involve third-party services, APIs, hosting providers, plugins, themes, payment gateways, analytics tools, or external platforms. Xentrova is not responsible for issues, outages, pricing changes, policy changes, security vulnerabilities, account suspensions, or failures caused by third-party providers.",
    },
    {
      title: "9. Hosting, Maintenance & Support",
      content:
        "Unless explicitly included in a separate maintenance agreement, ongoing support, updates, monitoring, backups, security patches, server management, bug fixes, or maintenance services after project delivery are not guaranteed. Clients are responsible for renewing domains, hosting, subscriptions, licenses, and external services associated with their projects.",
    },
    {
      title: "10. Limitation of Liability",
      content:
        "Xentrova shall not be held liable for any direct, indirect, incidental, consequential, financial, or business damages arising from the use of our services, websites, software, delays, third-party failures, data loss, downtime, cyberattacks, missed opportunities, or technical issues. All services are provided on a reasonable-effort basis without guarantees of uninterrupted operation or specific business outcomes.",
    },
    {
      title: "11. Client Responsibilities",
      content:
        "Clients are responsible for reviewing work, testing deliverables, maintaining backups, securing credentials, and verifying final outputs before deployment or launch. Xentrova shall not be responsible for issues caused by incorrect information, expired services, unauthorized access, or client-side modifications after project delivery.",
    },
    {
      title: "12. Prohibited Activities",
      content:
        "Users and clients agree not to misuse our services for illegal, fraudulent, harmful, abusive, malicious, defamatory, or unethical purposes including hacking, phishing, malware distribution, copyright infringement, or activities violating applicable laws.",
    },
    {
      title: "13. Termination of Services",
      content:
        "Xentrova reserves the right to suspend, refuse, or terminate services without prior notice in cases involving non-payment, abusive behavior, illegal activities, repeated policy violations, security risks, or misuse of our services.",
    },
    {
      title: "14. No Guarantees",
      content:
        "While we strive to provide high-quality services, Xentrova does not guarantee specific rankings, traffic, revenue, business growth, uninterrupted uptime, or exact performance results unless explicitly agreed in writing.",
    },
    {
      title: "15. Policy & Terms Updates",
      content:
        "Xentrova may update or modify these Terms and Conditions at any time without prior notice. Continued use of our website or services after updates implies acceptance of the revised terms.",
    },
    {
      title: "16. Governing Law",
      content:
        "These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws of India. Any disputes arising in relation to these terms shall be subject to the jurisdiction of the appropriate courts in India.",
    },
    {
      title: "17. Contact Information",
      content:
        "For any questions regarding these Terms and Conditions, you may contact Xentrova through our official website or support email.",
    },
  ];

  return (
    <div>

      {/* Hero Section */}
      <div className="mb-10">
        <CustomHeroSection
          title="Terms and Conditions"
          desc="Please review these terms carefully before using our website or services."
        />
      </div>

      {/* Terms Content */}
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