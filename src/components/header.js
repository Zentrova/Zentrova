'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import headerLogo from '../../public/headerLogo.png';

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 2);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header
            className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'pt-6'
                : ''
                }`}
        >
            <div className=
                {` mx-auto flex justify-between items-center px-10 py-5 transition-all duration-300 ${scrolled
                    ? 'backdrop-blur bg-header sm shadow-md w-11/12 rounded-lg'
                    : 'shadow-md w-full'
                    }`}>
                <Link href="/">
                    {/* <p className="text-2xl font-bold tracking-wider">MyLogo</p> */}
                    {/* <Image src="/headerLogo.png" width={100} height={10}/> */}
                    <Image src={headerLogo} className='headerLogoClass' alt='headerImage' />
                </Link>

                <nav className="hidden sm:block">
                    <ul className="flex space-x-10 font-medium text-lg">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link href={link.href} key={link.href}>
                                    <li className="group relative">
                                        <span
                                            className={`transition-colors ${isActive ? 'text-primary ' : 'group-hover:text-primary'
                                                }`}
                                        >
                                            {link.label}
                                        </span>
                                        <span
                                            className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary transition-transform duration-300 ease-out origin-left ${isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                                                }`}
                                        />
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
                <div>
                    <label className="switch-container">
                        <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

        </header>
    );
}
