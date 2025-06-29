'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Initial Discovery",
      description:
        "We begin by understanding your business goals, target audience, and project requirements through a discovery call or meeting.",
    },
    {
      number: 2,
      title: "Planning & Prototyping",
      description:
        "Based on our discussion, we craft a tailored proposal and design interactive wireframes using tools like Figma to visualize the final product.",
    },
    {
      number: 3,
      title: "Development & Integration",
      description:
        "Our frontend and backend teams build the product using scalable, modern technologies while ensuring responsiveness and functionality.",
    },
    {
      number: 4,
      title: "Testing & Feedback",
      description:
        "We conduct thorough testing for bugs, usability, and responsiveness. Client feedback is gathered and necessary refinements are made.",
    },
    {
      number: 5,
      title: "Launch & Delivery",
      description:
        "Once approved, we launch the product, assist with deployment, and provide documentation along with post-launch support if needed.",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="text-3xl md:text-4xl font-extrabold text-primary text-center">
            How it works
          </div>
          <div className="text-base md:text-xl max-w-3xl mx-auto mt-4 text-center">
            A seamless process tailored to deliver exceptional outcomes.
          </div>
        </motion.div>

        <div className="relative">
          {/* Desktop layout */}
          <div className="hidden lg:block">
            <motion.div
              className="flex justify-between items-start relative gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              {/* Connecting line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-primaryLight z-0"></div>

              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  className="flex flex-col items-center relative z-10 w-1/5"
                  variants={fadeUp}
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>

                  <div className="bg-background2 rounded-lg shadow-md p-4 max-w-xs hover:shadow-lg transition-shadow">
                    <h3 className="text-base font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile layout */}
          <motion.div
            className="lg:hidden space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="bg-background2 rounded-lg shadow-md p-4 flex items-start space-x-4 hover:shadow-lg transition-shadow"
                variants={fadeUp}
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {step.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
