import React from 'react';

export default function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: "Initial Discovery",
            description:
                "We begin with understanding your business goals, target audience, and project requirements through a discovery call or meeting.",
        },
        {
            number: 2,
            title: "Proposal & Planning",
            description:
                "Based on our discussion, we craft a tailored proposal outlining the scope, timeline, tools, and estimated cost for the project.",
        },
        {
            number: 3,
            title: "Design & Prototyping",
            description:
                "Our UI/UX team designs wireframes and interactive prototypes using tools like Figma to visualize the product before development begins.",
        },
        {
            number: 4,
            title: "Development & Integration",
            description:
                "Our frontend and backend teams build the product using scalable and modern technologies, ensuring performance, responsiveness, and functionality.",
        },
        {
            number: 5,
            title: "Testing & Feedback",
            description:
                "We rigorously test the platform for bugs, responsiveness, and usability. Client feedback is gathered and refinements are made accordingly.",
        },
        {
            number: 6,
            title: "Launch & Delivery",
            description:
                "Once approved, we launch the final product, assist with deployment, and provide documentation and post-launch support if needed.",
        },
    ];


    return (
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14 px-4">
                    <div
                        className="text-4xl md:text-4xl font-extrabold text-primary text-center"
                    >
                        How it works
                    </div>

                    <div
                        className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-center"
                    >
                        A seamless process tailored to deliver exceptional outcomes.
                    </div>
                </div>

                <div className="relative">
                    {/* Desktop layout */}
                    <div className="hidden lg:block">
                        <div className="flex justify-between items-start relative gap-4">
                            {/* Connecting line */}
                            <div className="absolute top-6 left-0 right-0 h-0.5 bg-primaryLight z-0"></div>

                            {steps.map((step, index) => (
                                <div key={step.number} className="flex flex-col items-center relative z-10 w-1/5">
                                    {/* Step circle */}
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                                        {step.number}
                                    </div>

                                    {/* Step card */}
                                    <div className="bg-background2 rounded-lg shadow-md p-4 max-w-xs hover:shadow-lg transition-shadow">
                                        <h3 className="text-base font-semibold text-primary mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="lg:hidden space-y-6">
                        {steps.map((step, index) => (
                            <div key={step.number} className="bg-background2 rounded-lg shadow-md p-4 flex items-start space-x-4 hover:shadow-lg transition-shadow">
                                {/* Step circle */}
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                                    {step.number}
                                </div>

                                {/* Step content */}
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold text-primary mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}