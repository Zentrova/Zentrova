'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What services does Xentrova provide?",
    answer:
      "We offer full-stack IT solutions: custom web application development, mobile app (iOS & Android) development, Shopify store setup and customization, UI/UX design, software integration, maintenance & support, and SEO / digital marketing services.",
  },
  {
    question: "How much does it cost to build a website, app or Shopify store?",
    answer:
      "The cost depends on the project scope (features, design complexity), platform (web / mobile / Shopify), and the timeline. After discussing your requirements, we provide a detailed quote so you know exactly what to expect.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes — we provide maintenance & support packages, including bug fixing, performance improvements, updates, and security patches. This ensures your website, app or Shopify store remains secure, up-to-date and performing well.",
  },
  {
    question: "Can you help optimize my web/app/Shopify store for SEO?",
    answer:
      "Absolutely. Our services include on-page SEO, technical SEO (site speed, mobile responsiveness, schema), keyword research, content optimization, and more to help your site or store rank higher in search engines and attract relevant traffic.",
  },
  {
    question: "What makes Xentrova different from other IT / web development agencies?",
    answer: "We combine affordability without compromising on quality. You benefit from a full-stack team, scalable design & code, reliable APIs, transparent communication, and proven results. Our goal is to deliver impactful digital solutions on time and within budget.",
  },
];

const FAQ = ({ bgColor = 'background2' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our products, shipping, and services.
            Still need help? Reach out to our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`bg-${bgColor} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left transition-colors duration-300 hover:bg-white/5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="text-base sm:text-lg font-medium text-foreground">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-primary transition-transform duration-300 transform rotate-180" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground transition-transform duration-300" />
                  )}
                </button>

                <div
                  id={`faq-content-${index}`}
                  className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="border-t border-primary/50 px-6 py-4">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
