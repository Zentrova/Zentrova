'use client';

import useTheme from "@/hooks/useTheme";
import {
    Menu,
    MenuHandler,
    MenuList,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, MenuIcon,Phone,Mail, Moon, Sun, SunIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        {
            label: "Services",
            children: [
                { label: "Web Development", href: "web-development" },
                { label: "UI/UX Development", href: "ui-ux-development" },
                { label: "App Development", href: "app-development" },
                { label: "Shopify Development", href: "shopify-development" },
                { label: "Maintenance & Support", href: "maintenance-support" },
                { label: "Digital Marketing & SEO", href: "digital-marketing-seo" }
            ],
        },
        { href: "/projects", label: "Projects" },
        // { href: "/team", label: "Our Team" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header
            className={`sticky top-0 w-full z-50 transition-all duration-300  
      ${scrolled && pathname === "/" ? "fixed top-6" : ""}`}
        >
            {/* Informational Bar */}
            <div
                className={`bg-primary text-white overflow-hidden transition-all duration-300 ease-in-out ${scrolled ? 'max-h-0 py-0' : 'max-h-12 py-2'
                    } px-4 md:px-20`}
            >
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
                    </a>
                    <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`} className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        <span>{process.env.NEXT_PUBLIC_CONTACT_NUMBER}</span>
                    </a>
                </div>
            </div>
            <div
                className={`mx-auto flex justify-between items-center px-6 py-4 transition-all duration-300 
        ${scrolled && pathname === "/"
                        ? "backdrop-blur bg-header shadow-lg w-11/12 rounded-xl md:px-10"
                        : "bg-background shadow-sm w-full md:px-20"}`
                }
            >
                {/* Logo */}
                <Link href="/">
                    <Image
                        src='/XentrovaLogo.svg'
                        alt="Xentrova Logo"
                        height={100}
                        width={100}
                        className="w-[120px] h-auto"
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8 font-medium text-base relative">
                    {navLinks.map((link, idx) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href || "");

                        if (link.children) {
                            return (
                                <div key={idx} className="relative group">
                                    <Menu allowHover>
                                        <MenuHandler>
                                            <button
                                                className={`flex items-center gap-1 cursor-pointer focus:outline-none transition-colors duration-300 
                        ${pathname.startsWith("/service")
                                                        ? "text-primary"
                                                        : "hover:text-primary"}`}
                                            >
                                                {link.label}
                                                <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                            </button>
                                        </MenuHandler>

                                        {/* Mega Menu */}
                                        <MenuList className="absolute left-0 top-0 mt-3 w-screen max-w-2xl bg-background rounded-lg shadow-2xl z-50 p-6 border border-gray-100 dark:border-neutral-800">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                                                {link.children.map((child, index) => (
                                                    <div key={index}>
                                                        <Link
                                                            href={`/service/${child.href}`}
                                                            className="relative group flex flex-col gap-2 p-2 transition-colors duration-300 hover:text-primary w-fit"
                                                            title={child.label}
                                                        >
                                                            <h4 className="text-sm font-semibold">
                                                                {child.label}
                                                            </h4>
                                                            {child.description && (
                                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                    {child.description}
                                                                </p>
                                                            )}
                                                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
                                                        </Link>

                                                    </div>
                                                ))}
                                            </div>
                                        </MenuList>
                                    </Menu>
                                </div>
                            );
                        }

                        return (
                            <Link key={idx} href={link.href}>
                                <span
                                    className={`relative group cursor-pointer transition-colors duration-300 
                  ${isActive ? "text-primary" : "hover:text-primary"}`}
                                >
                                    {link.label}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Dark Mode Toggle */}
                <div className="hidden md:block">
                    <label htmlFor="switch" className="toggle">
                        <input
                            type="checkbox"
                            className="input"
                            id="switch"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            aria-label="Toggle dark mode"
                        />
                        {theme === "light" ? (
                            <div className="icon icon--moon">
                                <Moon className="h-5 w-5" />
                            </div>
                        ) : (
                            <div className="icon icon--sun">
                                <SunIcon className="h-5 w-5" />
                            </div>
                        )}
                    </label>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden block text-gray-700 dark:text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open mobile menu"
                >
                    <MenuIcon className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 w-72 h-full bg-white dark:bg-neutral-900 p-6 shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <Image src="/XentrovaLogo.svg" alt="Xentrova Logo" width={100} height={100} className="w-[100px]" />
                                <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-white" aria-label="Close mobile menu">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Mobile Nav */}
                            <nav className="flex flex-col gap-2 mt-4 flex-grow">
                                {navLinks.map((link, idx) => {
                                    const isActive =
                                        link.href === "/"
                                            ? pathname === "/"
                                            : pathname.startsWith(link.href || "");

                                    if (link.children) {
                                        return (
                                            <div key={idx} className="flex flex-col">
                                                <button
                                                    onClick={() => setServicesOpen(!servicesOpen)}
                                                    className={`flex justify-between items-center px-3 py-2 rounded-md font-medium text-sm transition-colors 
                          ${pathname.startsWith("/service")
                                                            ? "bg-primary/10 text-primary"
                                                            : "text-gray-800 dark:text-white hover:text-primary"}`}
                                                >
                                                    {link.label}
                                                    <ChevronDownIcon
                                                        className={`w-4 h-4 ml-2 transition-transform duration-300 
                            ${servicesOpen ? "rotate-180" : ""}`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {servicesOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="ml-4 mt-2 flex flex-col gap-2"
                                                        >
                                                            {link.children.map((child, cidx) => (
                                                                <Link
                                                                    key={cidx}
                                                                    href={`/service/${child.href}`}
                                                                    onClick={() => setIsMenuOpen(false)}
                                                                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary"
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={idx}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`px-3 py-2 rounded-md font-medium text-sm transition-colors 
                      ${isActive
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-gray-800 dark:text-white hover:text-primary"}`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* Dark Mode Toggle */}
                            <div className="mt-auto">
                                <label htmlFor="switch-mobile" className="toggle">
                                    <input
                                        type="checkbox"
                                        className="input"
                                        id="switch-mobile"
                                        checked={theme === "dark"}
                                        onChange={toggleTheme}
                                        aria-label="Toggle dark mode"
                                    />
                                    {theme === "light" ? (
                                        <div className="icon icon--moon">
                                            <Moon className="h-5 w-5" />
                                        </div>
                                    ) : (
                                        <div className="icon icon--sun">
                                            <SunIcon className="h-5 w-5" />
                                        </div>
                                    )}
                                </label>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
