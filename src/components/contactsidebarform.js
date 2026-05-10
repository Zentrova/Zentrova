'use client';

import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'sonner';
import { httpRequest } from "@/utils/httpRequest";
import { showAlert } from '@/utils/sweetAlert';
import useTheme from '@/hooks/useTheme';
export default function ContactSidebarForm() {
    const { theme } = useTheme();
    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        message: Yup.string().required("Message is required"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(
                /^[+]?[\d]{10,15}$/,
                "Enter a valid phone number with country code"
            ),
    })

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            message: "",
            phone: "",
            path: "project"
        },
        validationSchema,
         onSubmit: async (values, { resetForm, setSubmitting }) => {
              try {    
                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                  formData.append(key, value);
                });
                const [emailRes, dbRes] = await Promise.allSettled([
                  fetch("/api/contact", {
                    method: "POST",
                    body: formData,
                  }),
                  httpRequest({
                    url: "contact",
                    method: "POST",
                    data: values,
                    headers: { "Content-Type": "multipart/form-data" },
                  }),
                ]);
                // const emailOk =
                //   emailRes.status === "fulfilled" && emailRes.value.ok;
        
                const dbOk =
                  dbRes.status === "fulfilled" && dbRes.value.data.success;
        
                if (dbOk) {
                  // toast.success(
                  //   "Thank you for contacting us! Our team will respond within 24 hours."
                  // );
                  await showAlert({
                    type: "success",
                    theme,
                    title: "Message Sent 🚀",
                    message:
                      `Thank you for contacting Xentrova!<br>
              Our team will get back to you within 24 hours.`,
                  });
                  resetForm();
                } else {
                  toast.error(
                    "Your request was received but some services failed. Our team will review it."
                  );
                }
              } catch (err) {
                toast.error("Something went wrong. Please try again.");
              } finally {
                setSubmitting(false);
              }
            }
    });

    return (
        <div className="w-full max-w-sm p-8 backdrop-blur-xl rounded-3xl border border-header shadow-2xl">
            <h2 className="text-xl font-bold mb-4 leading-tight">
                Ready To Take The <br /> Next Step?
            </h2>

            <hr className="border-header mb-6" />

            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-5">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                        {...formik.getFieldProps("fullName")}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                        <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.fullName}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Email *
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Your Mail"
                        className="w-full px-4 p-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.email}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Phone Number *</label>
                    <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        maxLength={15}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9+]/g, "");
                        }}
                        {...formik.getFieldProps("phone")}
                        className="w-full px-4 py-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.phone}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Message *
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Your project, idea, or question..."
                        className="w-full px-4 py-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                        {...formik.getFieldProps("message")}
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-red-500 text-sm mt-1 break-words">{formik.errors.message}</p>
                    )}
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="primaryBtn w-full"
                    disabled={formik.isSubmitting}
                >
                {formik.isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
