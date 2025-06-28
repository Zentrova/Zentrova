'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Toaster, toast } from 'sonner';
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
        onSubmit: (values) => {
            // You can also append file to FormData here if needed
            console.log("Form submitted with values:", values);
        },
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        const errors = await formik.validateForm();
        formik.setTouched({
            fullName: true,
            email: true,
            message: true,
        });
       console.log("fomrdataeee",errors,formik.values)

        if (Object.keys(errors).length > 0) return; // If validation fails

        try {
            const { success, data, error } = await httpRequest({
                url: "contact", // or full path if backend is separate
                method: "POST",
                data: formik.values,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (success) {
                toast.success("Thank you for contacting us ! Our team will contact you with in 24 hours");
                formik.resetForm();
            } else {
                toast.error("Submission failed: " + error);
            }
        } catch (err) {
            console.error("Form submission error:", err);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="w-full max-w-sm p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl">
            <h2 className="text-xl font-bold text-zinc-900 mb-4 leading-tight">
                Ready To Take The <br /> Next Step?
            </h2>

            <hr className="border-gray-300 mb-6" />

            <form  className="space-y-5">
                <div className="col-span-1">
                    <label className="block text-sm font-medium mb-1">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none"
                        {...formik.getFieldProps("fullName")}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
                    )}
                </div>

                <div className="col-span-1">
                    <label className="block text-sm font-medium mb-1">
                        Email *
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none"
                       {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                    )}
                </div>

                {/* Message */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">
                        Message *
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Your project, idea, or question..."
                        className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none"
                        {...formik.getFieldProps("message")}
                    />
                    {console.log("formikk",formik.values)}
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                    )}
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="primaryBtn w-full"
                    onClick={handleSubmit}
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
}
