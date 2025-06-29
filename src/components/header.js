"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon, Moon, Sun } from "lucide-react";
import headerLogo from "../../public/headerLogo.png";
import useTheme from "@/hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
        <nav className="hidden sm:flex items-center space-x-8 font-medium text-base relative">
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
        <div>
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
              {theme==="light" ? 
              <div className="icon icon--moon">
                <Moon className="h-5 w-5" />
              </div>
              :
              <div className="icon icon--sun">
                <Sun className="h-5 w-5" />
              </div>
              }
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
