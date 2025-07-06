"use client";

import useTheme from "@/hooks/useTheme";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, MenuIcon, Moon, Sun, SunIcon, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useEffect(() => {
  //     document.body.classList.toggle('dark', isDarkMode);
  // }, [isDarkMode]);

  <Link href="/">
    <Image src='/XentrovaLogo.svg' alt="Header Logo" className="w-auto h-12" height={100} width={100} />
  </Link>;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    {
      label: "Services",
      children: [
        { label: "Logo Design" },
        { label: "Poster Design" },
        { label: "Social Media" },
        { label: "Photo Editing" },
      ],
    },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Our Team" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300  ${scrolled && pathname === "/" ? "fixed top-6" : ""
        }`}
    >
      <div
        className={`mx-auto flex justify-between items-center px-6 py-4 transition-all duration-300 ${scrolled && pathname === "/"
          ? "backdrop-blur bg-header shadow-lg w-11/12 rounded-xl md:px-10"
          : "bg-background shadow-sm w-full md:px-20 "
          }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src='/XentrovaLogo.svg'
            alt="Header Logo"
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
                        className={`flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-0 transition-colors duration-300 ${pathname.startsWith("/service")
                          ? "text-primary"
                          : "hover:text-primary"
                          }`}
                      >
                        {link.label}
                        <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                    </MenuHandler>

                    <MenuList className="absolute top-full mt-3 w-44 bg-white dark:bg-neutral-900 rounded-lg shadow-2xl z-50 py-1 border border-gray-100 dark:border-neutral-800">
                      {link.children.map((child, index) => (
                        <MenuItem
                          key={index}
                          className=" text-left group px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-md transition-all duration-200"
                        >
                          <Link
                            href="/service"
                            className="block w-full transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary focus:outline-none focus:ring-0"
                          >
                            {child.label}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </div>
              );
            }

            return (
              <Link key={idx} href={link.href}>
                <span
                  className={`relative group cursor-pointer transition-colors duration-300 ${isActive ? "text-primary" : "hover:text-primary"
                    }`}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Dark Mode Toggle (Preserved as Requested) */}
        <div className="hidden md:block">
          <div className="container">
            <label htmlFor="switch" className="toggle">
              {/* <input type="checkbox" className="input" id="switch" /> */}
              <input
                type="checkbox"
                className="input"
                id="switch"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              {theme === "light" ?
                <div className="icon icon--moon">
                  <Moon className="h-5 w-5" />
                </div>
                :
                <div className="icon icon--sun">
                  <SunIcon className="h-5 w-5" />
                </div>
              }
            </label>
          </div>
        </div>

        <button
          className="md:hidden block text-gray-700 dark:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>

      </div>



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
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-white dark:bg-neutral-900 p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <Image src="/XentrovaLogo.svg" alt="Logo" width={100} height={100} className="w-[100px]" />
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 mt-4">
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
                          className={`flex justify-between items-center px-3 py-2 rounded-md font-medium text-sm transition-colors ${pathname.startsWith("/service")
                            ? "bg-primary/10 text-primary"
                            : "text-gray-800 dark:text-white hover:text-primary"
                            }`}
                        >
                          {link.label}
                          <ChevronDownIcon
                            className={`w-4 h-4 ml-2 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                              }`}
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
                                  href="/service"
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
                      className={`px-3 py-2 rounded-md font-medium text-sm transition-colors ${isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-800 dark:text-white hover:text-primary"
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* Theme Toggle (Fixed) */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md transition"
                >
                  <span className="text-sm font-medium ">Theme</span>

                  <div
                    className={`relative w-14 h-7 rounded-full transition-colors duration-500
      ${theme === "dark" ? "bg-gradient-to-r from-blue-500 to-indigo-600" : "bg-gradient-to-r from-yellow-300 to-orange-400"}`}
                  >
                    <div
                      className={`absolute top-[2px] left-[2px] w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-500
        ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`}
                    >
                      {theme === "dark" ? (
                        <Moon className="h-[16px] w-[16px] text-indigo-600" />
                      ) : (
                        <Sun className="h-[16px] w-[16px] text-yellow-400" />
                      )}
                    </div>
                  </div>
                </button>



              </nav>



            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
