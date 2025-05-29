// import React from 'react'

// export default function Contact() {
//   return (
//      <div>
//         <p className='text-xl font-bold w-fit mx-auto'>
//             This is Contact Page
//         </p>
//     </div>
//   )
// }



"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Menu, X } from 'lucide-react';

export default function ContactUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      {/* <section className="relative  text-white py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 600\"><rect fill=\"%23374151\" width=\"1000\" height=\"600\"/><g fill=\"%23059669\" opacity=\"0.1\"><rect x=\"100\" y=\"200\" width=\"80\" height=\"120\" rx=\"4\"/><rect x=\"200\" y=\"180\" width=\"80\" height=\"140\" rx=\"4\"/><rect x=\"300\" y=\"220\" width=\"80\" height=\"100\" rx=\"4\"/><rect x=\"400\" y=\"160\" width=\"80\" height=\"160\" rx=\"4\"/><rect x=\"500\" y=\"190\" width=\"80\" height=\"130\" rx=\"4\"/><rect x=\"600\" y=\"170\" width=\"80\" height=\"150\" rx=\"4\"/><rect x=\"700\" y=\"200\" width=\"80\" height=\"120\" rx=\"4\"/></g></svg>')"
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lorem sit amet cursus sit amet dictum sit amet justo
          </p>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div className="space-y-8 p-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold  mb-6">
                  Get Your Instant Free Quote Now
                </h2>
                <p className="mb-4">
                  Quis placerat elit, sed do eiusmod tempor.
                </p>
                <p className=" ">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>

              {/* Contact Info */}
              <div className=" p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold ">Phone</div>
                    <div className="text-lg font-bold text-primary">0 800 555 44 33</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-lg text-primary">example@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-lg text-primary">123 Green Street, Eco City</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold  mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold  mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="How can we help you? Feel free to get in touch!"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Interactive Map Component</p>
              <p className="text-sm">Replace this with your preferred map integration</p>
            </div>
          </div>
        </div>
      </section> */}

      
    </div>
  );
}