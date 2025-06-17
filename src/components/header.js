'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from '@material-tailwind/react';
import { ChevronDownIcon } from 'lucide-react';
import headerLogo from '../../public/headerLogo.png';

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 2);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        {
            label: 'Services',
            children: [
                { label: 'Logo Design' },
                { label: 'Poster Design' },
                { label: 'Social Media' },
                { label: 'Photo Editing' },
            ],
        },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'pt-6' : ''}`}>
            <div className={`mx-auto flex justify-between items-center px-10 py-5 transition-all duration-300 ${scrolled
                ? 'backdrop-blur bg-header shadow-md w-11/12 rounded-lg'
                : 'shadow-md w-full'}`}>

                {/* Logo */}
                <Link href="/">
                    <Image src={headerLogo} alt="Header Logo" className="w-[120px] h-auto" />
                </Link>

                {/* Navigation */}
                <nav className="hidden sm:flex items-center space-x-10 font-medium text-lg relative">
                    {navLinks.map((link, idx) => {
                        const isActive =
                            link.href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(link.href || '');

                        if (link.children) {
                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setOpenMenu(true)}
                                    onMouseLeave={() => setOpenMenu(false)}
                                    className="relative"
                                >
                                    <Menu open={openMenu} allowHover>
                                        <MenuHandler>
                                            <button className={`flex items-center gap-1 cursor-pointer focus:outline-none ${pathname.startsWith('/service') ? 'text-primary' : ''}`}>
                                                {link.label}
                                                <ChevronDownIcon className="w-4 h-4 transition-transform duration-200" />
                                            </button>
                                        </MenuHandler>
                                        <MenuList className="absolute top-full mt-2 min-w-[200px] bg-white dark:bg-black rounded-lg shadow-lg py-2 px-1 z-50">
                                            {link.children.map((child, index) => (
                                                <MenuItem
                                                    key={index}
                                                    className="rounded-md px-4 py-2 text-sm hover:bg-primaryLight dark:hover:bg-primary transition"
                                                >
                                                    <Link href='/service' className="block w-full">
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
                                <span className={`cursor-pointer transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>
                                    {link.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Dark Mode Switch */}
                <div>
                    <label className="switch-container">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={() => setIsDarkMode(!isDarkMode)}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </header>
    );
}
