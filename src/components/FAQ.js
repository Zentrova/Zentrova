'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3–5 business days within the continental US.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with a tracking number.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, including Visa and MasterCard.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our customer support team at support@example.com.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer: "Orders can be modified or canceled within 2 hours of placement.",
  },
  {
    question: "Do you offer wholesale pricing?",
    answer:
      "Yes, we offer wholesale pricing for bulk orders and business customers.",
  },
];

const FAQ = ({ bgColor = 'background2' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
                className={`bg-${bgColor} rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="text-base sm:text-lg font-medium text-foreground">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                <div
                  id={`faq-content-${index}`}
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="border-t border-primary px-4 sm:px-6 py-4">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
