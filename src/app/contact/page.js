'use client';
import CustomHeroSection from "@/components/CommonHeroSection";
import { UploadCloud, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { httpRequest } from "@/utils/httpRequest";
import { Toaster, toast } from "sonner";

export default function ContactUs() {
  const [selectedFile, setSelectedFile] = useState(null);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    termsAndPolicy: Yup.boolean().oneOf([true], "You must accept the terms"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      termsAndPolicy: false,
      path: "contact",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
        try {
            const formData = new FormData();
            Object.keys(values).forEach(key => {
                formData.append(key, values[key]);
            });
            if (selectedFile) {
                formData.append("attachment", selectedFile);
            }
            const res = await fetch("/api/contact", {
              method: "POST",
              body: formData,
            });

            const { success, error } = await httpRequest({
                url: "contact",
                method: "POST",
                data: formData,
            });

            if (success) {
                toast.success("Thank you for contacting us! Our team will respond within 24 hours.");
                resetForm();
                setSelectedFile(null);
            } else {
                toast.error("Submission failed: " + error);
            }
        } catch (err) {
                        toast.error("An error occurred. Please try again.");
        }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedExtensions = ["pdf", "doc", "docx", "ppt", "pptx"];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (allowedExtensions.includes(fileExtension)) {
        setSelectedFile(file);
      } else {
        toast.error("Invalid file type. Allowed formats: PDF, DOC, DOCX, PPT, PPTX.");
        e.target.value = null;
        setSelectedFile(null);
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <CustomHeroSection
        title="Let's Collaborate"
        desc="Have an idea or project in mind? Fill in the form and let’s build something amazing together."
      />

      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Form */}
        <div className="md:col-span-2 w-full bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-white/10">
          <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input
                type="text"
                placeholder="John Doe"
                {...formik.getFieldProps("fullName")}
                className="w-full px-4 py-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input
                type="email"
                placeholder="you@example.com"
                {...formik.getFieldProps("email")}
                className="w-full px-4 py-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number *</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                {...formik.getFieldProps("phone")}
                className="w-full px-4 py-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.phone}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-1">Subject *</label>
              <input
                type="text"
                placeholder="What is your message about?"
                {...formik.getFieldProps("subject")}
                className="w-full px-4 py-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.subject}</p>
              )}
            </div>

            {/* File Upload */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-2">Attach File (Optional)</label>
              <label className="flex items-center gap-3 px-4 py-2 border border-header rounded-xl bg-background hover:border-primary cursor-pointer transition">
                <UploadCloud className="text-primary" />
                <span className="text-sm">
                  {selectedFile ? "Change file" : "Choose a file"}
                </span>
                <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.ppt,.pptx"/>
              </label>
              {selectedFile && (
                <div className="flex items-center justify-between mt-3 bg-header px-4 py-2 rounded-lg">
                  <span className="text-sm truncate max-w-[90%]">{selectedFile.name}</span>
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

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project, idea, or question..."
                {...formik.getFieldProps("message")}
                className="w-full px-4 py-3 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.message}</p>
              )}
            </div>

            {/* Terms */}
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        className="h-4 w-4 accent-primary mt-1"
                        id="acceptTnC"
                        {...formik.getFieldProps("termsAndPolicy")}
                    />
                    <label htmlFor="acceptTnC" className="text-sm font-medium">
                        By submitting this form, I consent that Xentrova can process my data for the purpose of making me an offer for their services. Read our{" "}
                        <Link href="/terms-conditions" className="text-primary">Terms and Conditions</Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" className="text-primary">Privacy Policy</Link>.
                    </label>
                </div>
                {formik.touched.termsAndPolicy && formik.errors.termsAndPolicy && (
                    <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.termsAndPolicy}</p>
                )}
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button type="submit" className="w-full primaryBtn" disabled={formik.isSubmitting}>
                Submit Form
              </button>
            </div>
          </form>
        </div>

        {/* Right: Sidebar */}
        <div className="w-full">
          <div className="sticky top-36">
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-md text-gray-900 dark:text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-1">Prefer sending emails over filling forms?</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">Go ahead</p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">Projects</h3>
                  <p className="text-sm mb-1">Got an idea? Tell us all about it!</p>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-primary hover:underline">
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </a>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">Questions</h3>
                  <p className="text-sm mb-1">Need more info on how we work, what we do or pretty much anything else?</p>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-primary hover:underline">
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster position="top-right" />
    </div>
  );
}
