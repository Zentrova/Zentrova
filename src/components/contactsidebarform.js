'use client';

import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'sonner';
import { httpRequest } from "@/utils/httpRequest";

export default function ContactSidebarForm() {
    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        message: Yup.string().required("Message is required"),
    })

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            message: "",
            path: "default"
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const { success, error } = await httpRequest({
                    url: "contact",
                    method: "POST",
                    data: values,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                if (success) {
                    toast.success("Thank you for contacting us! Our team will contact you within 24 hours");
                    resetForm();
                } else {
                    toast.error("Submission failed: " + error);
                }
            } catch (err) {
                console.error("Form submission error:", err);
                toast.error("An error occurred. Please try again.");
            }
        },
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
                    SUBMIT
                </button>
            </form>
        </div>
    );
}
