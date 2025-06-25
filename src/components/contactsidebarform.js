'use client';

import { useState } from 'react';

export default function ContactSidebarForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form Submitted:', formData);

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="w-full max-w-sm p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl">
            <h2 className="text-xl font-bold text-zinc-900 mb-4 leading-tight">
                Ready To Take The <br /> Next Step?
            </h2>

            <hr className="border-gray-300 mb-6" />

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="col-span-1">
                    <label className="block text-sm font-medium mb-1">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>

                 <div className="col-span-1">
                    <label className="block text-sm font-medium mb-1">
                        Email *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>

                {/* Message */}
              <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Your project, idea, or question..."
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

                {/* Button */}
                <button
                    type="submit"
                    className="primaryBtn w-full"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
}
