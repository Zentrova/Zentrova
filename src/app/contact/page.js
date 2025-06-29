"use client";
import CustomHeroSection from "@/components/CommonHeroSection";
import { UploadCloud, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { httpRequest } from "@/utils/httpRequest";
import { Toaster, toast } from 'sonner';

export default function ContactUs() {
  const [selectedFile, setSelectedFile] = useState(null);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    termsAndPolicy: Yup.boolean().oneOf([true], "You must accept the terms"),
  })

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      termsAndPolicy: false,
      path:"contact"
    },
    validationSchema,
    onSubmit: (values) => {
      // You can also append file to FormData here if needed
      console.log("Form submitted with values:", values);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form fields
  const errors = await formik.validateForm();
  formik.setTouched({
    fullName: true,
    email: true,
    phone: true,
    subject: true,
    message: true,
    termsAndPolicy: true,
  });

  if (Object.keys(errors).length > 0) return; // If validation fails

  try {
    const formData = new FormData();
    formData.append("fullName", formik.values.fullName);
    formData.append("email", formik.values.email);
    formData.append("phone", formik.values.phone);
    formData.append("subject", formik.values.subject);
    formData.append("message", formik.values.message);
    formData.append("termsAndPolicy", formik.values.termsAndPolicy);

    if (selectedFile) {
      formData.append("attachment", selectedFile);
    }
    console.log("selected file",selectedFile)
    const { success, data, error } = await httpRequest({
      url: "contact", // or full path if backend is separate
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("spisss",success)
    if (success) {
      toast.success("Thank you for contacting us ! Our team will contact you with in 24 hours");
      formik.resetForm();
      setSelectedFile(null);
    } else {
      toast.error("Submission failed: " + error);
    }
  } catch (err) {
    console.error("Form submission error:", err);
    toast.error("An error occurred. Please try again.");
  }
};



  return (
    <div className="min-h-screen transition-colors duration-300">
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
              <label className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                {...formik.getFieldProps("fullName")}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
              )}
            </div>


            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-xl borderborder-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>


            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2 rounded-xl borderborder-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>


            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1">
                Subject *
              </label>
              <input
                type="text"
                required
                placeholder="What is your message about?"
                className="w-full px-4 py-2 rounded-xl borderborder-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
              )}
            </div>

            {/* File Upload */}
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">
                Attach File (Optional)
              </label>

              <label className="flex items-center gap-3 px-4 py-2 border border-header rounded-xl bg-background hover:border-primary cursor-pointer transition">
                <UploadCloud className="text-primary" />
                <span className="text-sm">
                  {selectedFile ? "Change file" : "Choose a file"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              {selectedFile && (
                <div className="flex items-center justify-between mt-3 bg-header px-4 py-2 rounded-lg">
                  <span className="text-sm truncate max-w-[90%]">
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
              <label className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your project, idea, or question..."
                className="w-full px-4 py-3 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                {...formik.getFieldProps("message")}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
              )}
            </div>
            <div className="col-span-2 flex items-start gap-2">
              <input type="checkbox" className="h-4 w-4 accent-primary mt-1" id="acceptTnC"
                {...formik.getFieldProps("termsAndPolicy")}
              />
              <label className="block text-sm font-medium mb-2" htmlFor="acceptTnC">
                By submitting this form, I consent that Xentrova can process my data for the purpose of making me an offer for their services. Read our <Link href='/terms-conditions' className="text-primary">Terms and Condition</Link> and <Link href='/privacy-policy' className="text-primary">Privacy Policy</Link>.
              </label>
            </div>
            {formik.touched.termsAndPolicy && formik.errors.termsAndPolicy && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.termsAndPolicy}</p>
              )}

            {/* Submit */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full primaryBtn"
                onClick={handleSubmit}
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
                  <a href="mailto:Xentrova.info@gmail.com" className="text-primary hover:underline">
                    Xentrova.info@gmail.com
                  </a>
                </div>

                {/* Careers */}
                {/* <div>
                  <h3 className="text-xl font-semibold mb-1">Careers</h3>
                  <p className="text-sm mb-1">
                    Do you have the skills & talent to join us? Send us some info about yourself.
                  </p>
                  <a href="mailto:join@Xentrova.com" className="text-blue-600 hover:underline">
                    join@Xentrova.com
                  </a>
                </div> */}

                {/* Questions */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">Questions</h3>
                  <p className="text-sm mb-1">
                    Need more info on how we work, what we do or pretty much anything else?
                  </p>
                  <a href="mailto:Xentrova.info@gmail.com" className="text-primary hover:underline">
                    Xentrova.info@gmail.com
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
