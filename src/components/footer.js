'use client';

import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const socialLinks = [
        { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
        { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
        { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
        { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    ];

    const serviceLinks = [
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "App Development", href: "/services/app-development" },
        { label: "Shopify Development", href: "/services/shopify-development" },
        { label: "Digital Marketing & SEO", href: "/services/digital-marketing-seo" },
        { label: "Maintenance & Support", href: "/services/maintenance-support" },
    ];

    const quickLinks = [
        { label: "About Us", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Blogs", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
    ];

    const legalLinks = [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ];

    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5" />,
            text: "Xentrova@gmail.com",
            href: "mailto:Xentrova@gmail.com",
            ariaLabel: "Email us at Xentrova@gmail.com",
        },
        {
            icon: <Phone className="h-5 w-5" />,
            text: "+91 94179 09883",
            href: "tel:+919417909883",
            ariaLabel: "Call us at +91 94179 09883",
        },
    ];

    const FooterLink = ({ href, children, ariaLabel }) => (
        <li>
            <Link href={href} aria-label={ariaLabel || children} className="hover:text-primary transition-colors flex items-center text-gray-400">
                <ChevronRight className="h-4 w-4 mr-2 text-primary shrink-0" />
                {children}
            </Link>
        </li>
    );

    const AccordionSection = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="border-b border-gray-800 md:border-none">
                <h3 className="text-lg font-semibold text-white mb-4 hidden md:block">{title}</h3>
                <button
                    className="w-full flex justify-between items-center py-4 text-lg font-semibold text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span>{title}</span>
                    <ChevronRight className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                </button>
                <div className={`${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out md:max-h-full`}>
                    <div className="pb-4 md:pb-0">
                        {children}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <footer className="relative bg-gray-900 text-gray-300 w-full overflow-hidden">
            <Image
                src="/heroBg.png"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full -z-10 opacity-5"
                unoptimized
                alt="Footer background"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 dark:bg-black/60 -z-10" />

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                            <Link href="/" aria-label="Back to homepage">
                                <Image
                                    src='/XentrovaLogo.svg'
                                    alt="Xentrova Logo"
                                    height={100}
                                    width={120}
                                    className="w-[120px] h-auto mx-auto md:mx-0"
                                />
                            </Link>
                            <p className="text-gray-400 my-4 max-w-sm mx-auto md:mx-0">
                                Xentrova is a premier digital agency specializing in UI/UX design, app development, and SEO-driven digital marketing to elevate your brand.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                {socialLinks.map(({ icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="transition-transform hover:scale-110"
                                        aria-label={`Visit our ${label} page`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                                            {icon}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        {/* Mobile Accordion */}
                        <div className="md:hidden col-span-1">
                            <AccordionSection title="Our Services">
                                <ul className="space-y-3">{serviceLinks.map(({ label, href }) => <FooterLink key={label} href={href}>{label}</FooterLink>)}</ul>
                            </AccordionSection>
                            <AccordionSection title="Quick Links">
                                <ul className="space-y-3">{quickLinks.map(({ label, href }) => <FooterLink key={label} href={href}>{label}</FooterLink>)}</ul>
                            </AccordionSection>
                            <AccordionSection title="Legal">
                                <ul className="space-y-3">{legalLinks.map(({ label, href }) => <FooterLink key={label} href={href}>{label}</FooterLink>)}</ul>
                            </AccordionSection>
                            <AccordionSection title="Contact Us">
                                <ul className="space-y-4 pt-2">
                                    {contactInfo.map(({ icon, text, href, ariaLabel }) => (
                                        <li key={text} className="flex items-start">
                                            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0">{icon}</span>
                                            <a href={href} aria-label={ariaLabel} className="hover:text-primary transition-colors text-gray-400 break-all">{text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionSection>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:col-span-3 md:grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                                <ul className="space-y-3">{serviceLinks.map(({ label, href }) => <FooterLink key={label} href={href}>{label}</FooterLink>)}</ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                                <ul className="space-y-3">{quickLinks.map(({ label, href }) => <FooterLink key={label} href={href}>{label}</FooterLink>)}</ul>
                                <h3 className="text-lg font-semibold text-white mb-4 mt-8">Legal</h3>
                                <ul className="space-y-3">{legalLinks.map(({ label, href }) => <FooterLink key={label} href={href}>{label}</FooterLink>)}</ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                                <ul className="space-y-4">
                                    {contactInfo.map(({ icon, text, href, ariaLabel }) => (
                                        <li key={text} className="flex items-start">
                                            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0">{icon}</span>
                                            <a href={href} aria-label={ariaLabel} className="hover:text-primary transition-colors text-gray-400 break-all">{text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black/30 mt-8 py-4 border-t border-gray-800">
                    <p className="text-center text-gray-500 text-sm">
                        &copy; {currentYear} Xentrova. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
