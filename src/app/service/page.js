"use client";
import CustomHeroSection from "@/components/CommonHeroSection";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/homepage/howItWorks";
import Image from "next/image";
import React from "react";
import {
  Zap,
  HardDrive,
  Smartphone,
  RefreshCw,
  Settings,
  Scale,
} from "lucide-react";

import cloudGraphic from '../../../public/cloud-3.jpg'; // Replace with actual path
import azureTeam from '../../../public/cloud-1.jpg';

const stats = [
  { label: "Clients", value: 250 },
  { label: "Projects", value: 120 },
  { label: "Years Experience", value: 5 },
  { label: "Team Members", value: 10 },
];

const awards = [
  "/logos/clutch.png",
  "/logos/manifest.png",
  "/logos/aws.png",
  "/logos/gcp.png",
  "/logos/iso.png",
];

const features = [
  {
    icon: <Zap className="w-8 h-8 text-cyan-500" />,
    title: "Extended Support",
    description: "Benefit from the tools and tricks that ecosystems provide",
  },
  {
    icon: <HardDrive className="w-8 h-8 text-cyan-500" />,
    title: "Hardware Management",
    description:
      "Manage your apps features and available hardware resources to the optimal level",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
    title: "Improved UX",
    description:
      "Integrate the UX with the OS for a unified presentation with the device",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-cyan-500" />,
    title: "Easier Compatibility",
    description:
      "Native apps are compatible by birth which allows for easier integration and error management",
  },
  {
    icon: <Settings className="w-8 h-8 text-cyan-500" />,
    title: "Expert Resources",
    description:
      "Skills developers for one platform make the process seem like a piece of cake",
  },
  {
    icon: <Scale className="w-8 h-8 text-cyan-500" />,
    title: "Enhanced Stability",
    description:
      "A native app by nature has less chances to crash, it's like a lion in its den",
  },
];

const AboutUs = () => (
  <div className="min-h-screen">
    <div className="">
      <CustomHeroSection
        title="What fits better than a tailor-made suit? We can do the same for your app"
        desc="Zentrova is a team of passionate creators delivering tailored web and mobile solutions that combine strategy, design, and technology."
      />
    </div>

    {/* Stats */}
    <div className="bg-background2 flex justify-center">
      <div className="max-w-10xl flex flex-col lg:flex-row items-center justify-between gap-20 px-6 lg:px-24 py-16 space-y-10 lg:space-y-0">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-4xl font-extrabold text-primary leading-tight">
            <span className="">Native</span>{" "}
            <span className="text-gray-900">And Best</span>
          </h2>
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            A specialist is always better than a general physician and so is the
            case with mobile apps. The smartphone world revolves around two
            virtual universes i.e., iOS and Android, each with its own set of
            tools, upsides and drawbacks. But as a company, you want to cater
            audience from both sides. Native apps are developed for one
            ecosystem keeping in mind the opportunities specific to that
            ecosystem and end up performing better than a hybrid one.
          </p>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Utilizing the facilities provided by ecosystems, seasoned developers
            at Promatics will make sure that your app reaches the pinnacle of
            optimization and delivers a seamless user experience.
          </p>
        </div>

        <div className="flex space-x-6 justify-center">
          <Image
            src="/native.jpg"
            alt="Mobile UI"
            className="h-[570px] w-[612px] rounded-2xl shadow-lg"
            height={100}
            width={100}
            unoptimized
          />
        </div>
      </div>
    </div>

    <section className="bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white py-16 px-4 relative h-96 mb-56">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Native App Technologies
        </h2>
        <p className="text-sm md:text-base max-w-2xl mx-auto">
          Android by Google and iOS by Apple are the two empires of smartphone
          software and your app needs to be the best of both worlds for your
          company to make skyrocketing profits.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100">
          Here’s how we can assist you on the journey:
        </p>
      </div>

      <div className="mt-12 w-full max-w-[60%] mx-auto flex gap-8 px-2 absolute -bottom-30 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-lg shadow-md p-8 text-gray-800 w-full">
          <div className="flex items-center space-x-4 mb-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="iOS"
              className="w-12 h-12"
              height={100}
              width={100}
            />
            <h3 className="text-5xl font-bold">iOS</h3>
          </div>
          <p className="text-sm mb-6 leading-6">
            Our engineers yield the maximum out of Xcode, SwiftUI and UIKit and
            combine it with years of experience to make your product do wonders.
          </p>
          <a
            href="#"
            className="inline-block bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition"
          >
            READ MORE →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 w-full">
          <div className="flex items-center space-x-4 mb-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
              alt="Android"
              className="w-12 h-12"
              height={100}
              width={100}
            />
            <h3 className="text-5xl font-bold">android</h3>
          </div>
          <p className="text-sm mb-6 leading-6">
            Android is no less than iOS and our Google certified engineers take
            great pride in creating digital masterpieces that are a tribute to
            the freedom this ecosystem offers.
          </p>
          <a
            href="#"
            className="inline-block bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition"
          >
            READ MORE →
          </a>
        </div>
      </div>
    </section>

    <section className="text-center px-6 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        The Native <span className="text-primary">Advantage</span>
      </h2>
      <p className="max-w-4xl mx-auto text-gray-600 text-sm md:text-base">
        Since each operating system has its own ups and downs, native apps for
        either of iOS and Android standout from the competition because they are
        keenly carved to optimally utilize the operating system and guarantee
        the experience your user needs.
      </p>

      <div className="mt-12 flex flex-wrap justify-center items-end gap-4 md:gap-8">
        <Image
          src="/multi_mobl.png"
          alt="Mobile Mockups"
          className="w-full max-w-7xl"
          height={100}
          width={100}
          unoptimized
        />
      </div>
    </section>

    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Native App <span className="text-primary">Features</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="min-h-screen bg-gradient-to-br from-lightGreen to-primaryGreen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Pink Background Shape */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-300 rounded-full opacity-50 blur-3xl"></div>

            {/* Phone Container */}
            <div className="relative z-10 flex items-center space-x-6">
              {/* Main Phone (Left) */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-black rounded-[40px] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-white px-6 py-2 flex justify-between items-center text-xs">
                      <span className="font-medium">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-4 py-3 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">WOMEN</h3>
                        <div className="flex space-x-3">
                          <div className="w-6 h-6 bg-gray-200 rounded"></div>
                          <div className="w-6 h-6 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="px-4 py-2 flex space-x-4 text-sm">
                      <span className="text-orange-500 font-medium">Grid</span>
                      <span className="text-gray-500">List</span>
                    </div>

                    {/* Banner */}
                    <div className="mx-4 mb-4 bg-yellow-100 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          <div className="w-8 h-12 bg-yellow-300 rounded"></div>
                          <div className="w-8 h-12 bg-red-300 rounded"></div>
                          <div className="w-8 h-12 bg-blue-300 rounded"></div>
                        </div>
                        <div>
                          <p className="text-xs font-medium">Top Wear</p>
                          <p className="text-xs text-gray-600">
                            Summer Collection
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Categories List */}
                    <div className="px-4 space-y-3">
                      <div className="text-sm font-medium text-gray-700">
                        T-Shirts
                      </div>
                      <div className="text-sm text-gray-600">Casual Shirts</div>
                      <div className="text-sm text-gray-600">
                        Partywear Shirts
                      </div>
                      <div className="text-sm text-gray-600">Formal Shirts</div>
                      <div className="text-sm text-gray-600">Kurtas</div>
                      <div className="text-sm text-gray-600">Shrugs</div>
                      <div className="text-sm text-gray-600">Blazers</div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-pink-400 rounded-lg p-3 flex items-center space-x-3">
                        <div className="flex space-x-1">
                          <div className="w-6 h-8 bg-pink-300 rounded"></div>
                          <div className="w-6 h-8 bg-white rounded"></div>
                          <div className="w-6 h-8 bg-pink-300 rounded"></div>
                        </div>
                        <div>
                          <p className="text-xs text-white font-medium">
                            Fashion & Lifestyle
                          </p>
                          <p className="text-xs text-pink-100">
                            New 2023 Summer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Phones (Right) */}
              <div className="flex flex-col space-y-4">
                {/* Top Phone */}
                <div className="w-48 h-64 bg-gray-800 rounded-[24px] p-1.5 shadow-xl">
                  <div className="w-full h-full bg-white rounded-[18px] overflow-hidden">
                    <div className="p-3">
                      <div className="text-xs font-bold mb-2">WISHLIST</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 rounded-lg p-2 text-center">
                          <div className="w-full h-16 bg-red-200 rounded mb-1"></div>
                          <p className="text-xs">Red T-shirt</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-2 text-center">
                          <div className="w-full h-16 bg-blue-200 rounded mb-1"></div>
                          <p className="text-xs">Blue Shirt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Phone */}
                <div className="w-48 h-64 bg-gray-800 rounded-[24px] p-1.5 shadow-xl">
                  <div className="w-full h-full bg-white rounded-[18px] overflow-hidden">
                    <div className="p-3">
                      <div className="text-center mb-2">
                        <div className="w-full h-24 bg-blue-200 rounded-lg mb-2"></div>
                        <div className="flex justify-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        </div>
                        <p className="text-xs font-medium">Blue T-shirt</p>
                        <p className="text-xs text-gray-500">₹499</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-left lg:text-left space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                V2Kart
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-black mb-8">
                eCommerce Fashion App
              </h2>
            </div>

            <div className="text-gray-600 leading-relaxed text-lg max-w-2xl">
              <p>
                V2 Retail, a New Delhi based fast fashion company collaborated
                with Promatics technologies to develop a distinctive eCommerce
                mobile app that is targeted at Gen Z buyers familiar with Zara,
                Uniqlo and H&M apps. This app has been singularly designed to
                furnish an extraordinary shopping experience through an array of
                avant-garde features and functionalities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="space-y-24 py-16 bg-white">
      {/* In the Clouds Section */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left - Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl max-w-xl font-bold text-gray-900 leading-tight mb-5">
            <span className="text-primary">In the Clouds</span> – Remote
            working through cloud computing solutions
          </h2>
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src={cloudGraphic}
              alt="Cloud Computing Illustration"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-xl h-80"
              unoptimized
            />
            
          </div>
        </div>

        {/* Right - Image and Paragraph */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-700 text-md leading-relaxed">
            Flexible work hours and work from home are the new norms of the
            business world and we can help you benefit from this norm by
            developing top-of-the-line cloud-based applications that can take
            your cubicles virtual.
          </p>
          <p className="text-gray-700 text-md leading-relaxed">
            Cloud-based web applications offer the privilege of controlling your
            operations from anywhere in the world. At Promatics, we combine our
            masterplan coding with state-of-the-art technological supports
            offered by giants like Amazon, Google and Microsoft to make sure
            your company runs buttery smooth, free from any hiccups.
          </p>
          <p className="text-gray-700 text-md leading-relaxed">
            Cloud computing has been around for quite a while, though it is just
            recently that organizations have realized the immense quantity of
            savings that flexible work hours can generate and redirect resources
            to more needful areas of their operations. Not only can you develop
            a cloud application for your company, if you have an idea good
            enough, we can accompany you on the journey to turning that idea
            into a million-dollar business.
          </p>
        </div>
      </div>

      {/* Microsoft Azure Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h3 className="text-4xl max-w-xl font-bold text-primary mb-4">
              Microsoft Azure
            </h3>
            <p className="text-gray-700 text-md leading-relaxed">
              Industry’s top preference for secure and reliable cloud computing,
              Microsoft Azure offers one of the best cloud storage and
              processing services out there. With years of rich experience and
              expertise baked into the immense network of servers, Azure
              supports all languages and frameworks, making it a favorite for
              both developers and companies. Microsoft is one of the strongest
              advocates for data security and privacy which translates into
              their policies with Azure so you can be sure that your information
              is in safe hands.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <Image
              src={azureTeam}
              alt="Microsoft Azure Team"
              width={500}
              height={350}
              className="rounded-lg shadow-lg w-full max-w-xl"
              unoptimized
            />
          </div>
        </div>
      </div>

    </section>

   
  </div>
);

export default AboutUs;
