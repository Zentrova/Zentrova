"use client";

import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
    const pathname = usePathname();
    const [currentYear, setCurrentYear] = useState(2025);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);


    const socialIcons = [
        { icon: <Instagram className="h-5 w-5" />, href: "#" },
        { icon: <Facebook className="h-5 w-5" />, href: "#" },
        { icon: <Twitter className="h-5 w-5" />, href: "#" },
        { icon: <Youtube className="h-5 w-5" />, href: "#" },
    ];

    return (
        <footer className="bg-black text-white w-full">
            {/* Top Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="block mb-4">
                            <p className="text-3xl font-bold tracking-widest">Zentrova</p>
                        </Link>

                        <p className="text-base mb-6 leading-relaxed">Tag Line</p>
                        <div className="flex flex-wrap gap-4">
                            {socialIcons.map(({ icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="transition-transform hover:scale-110"
                                >
                                    <span className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                                        {icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-2 gap-x-6">
                            <ul className="space-y-3">
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "Portfolio", href: "/portfolio" },
                                ].map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="hover:text-primary transition-colors flex items-center"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {[
                                    { label: "Projects", href: "/projects" },
                                    { label: "Blog", href: "/blog" },
                                ].map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="hover:text-primary transition-colors flex items-center"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                                    <Mail className="h-5 w-5" />
                                </span>
                                <a
                                    href="mailto:zentrova.info@gmail.com"
                                    className="hover:text-primary transition-colors"
                                >
                                    zentrova.info@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                                    <Phone className="h-5 w-5" />
                                </span>
                                <a
                                    href="tel:+1234567890"
                                    className="hover:text-primary transition-colors"
                                >
                                    +123 456 7890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-900 py-6 border-t border-gray-700 text-center text-sm">
                <p>&copy; {currentYear} Zentrova. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
