"use client";

import CustomHeroSection from "@/components/CommonHeroSection";
import { UploadCloud, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactUs() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="mb-0">
        <CustomHeroSection
          title="Let's Collaborate"
          desc="Have an idea or project in mind? Fill in the form and let’s build something amazing together."
        />
      </div>


      <section className="max-w-7xl mx-auto px-4 py-12 flex gap-10">
        <div className="w-full bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-white/10 ">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-white">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>


            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-white">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>


            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-white">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>


            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-white">
                Subject *
              </label>
              <input
                type="text"
                required
                placeholder="What is your message about?"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* File Upload */}
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-white">
                Attach File (Optional)
              </label>

              <label className="flex items-center gap-3 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-black/30 hover:bg-gray-100 dark:hover:bg-black/20 cursor-pointer transition">
                <UploadCloud className="text-primary" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {selectedFile ? "Change file" : "Choose a file"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              {selectedFile && (
                <div className="flex items-center justify-between mt-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-800 dark:text-gray-200 truncate max-w-[90%]">
                    {selectedFile.name}
                  </span>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Remove file"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-white">
                Message *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your project, idea, or question..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="col-span-2 flex items-start gap-2">
              <input type="checkbox" className="h-4 w-4 accent-primary mt-1" id="acceptTnC" />
              <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-white" htmlFor="acceptTnC">
                By submitting this form, I consent that Zentrova can process my data for the purpose of making me an offer for their services. Read our <Link href='/terms-conditions' className="text-primary">Terms and Condition</Link> and <Link href='/privacy-policy' className="text-primary">Privacy Policy</Link>.
              </label>
            </div>

            {/* Submit */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full primaryBtn"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <div className="sticky top-36 ">

            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-md text-gray-900 dark:text-white">
              <h2 className="text-2xl font-bold mb-1">Prefer sending emails over filling forms?</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">Go ahead</p>

              <div className="space-y-8">
                {/* Projects */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">Projects</h3>
                  <p className="text-sm mb-1">Got an idea? Tell us all about it!</p>
                  <a href="mailto:zentrova.info@gmail.com" className="text-primary hover:underline">
                    zentrova.info@gmail.com
                  </a>
                </div>

                {/* Careers */}
                {/* <div>
                  <h3 className="text-xl font-semibold mb-1">Careers</h3>
                  <p className="text-sm mb-1">
                    Do you have the skills & talent to join us? Send us some info about yourself.
                  </p>
                  <a href="mailto:join@zentrova.com" className="text-blue-600 hover:underline">
                    join@zentrova.com
                  </a>
                </div> */}

                {/* Questions */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">Questions</h3>
                  <p className="text-sm mb-1">
                    Need more info on how we work, what we do or pretty much anything else?
                  </p>
                  <a href="mailto:zentrova.info@gmail.com" className="text-primary hover:underline">
                   zentrova.info@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
