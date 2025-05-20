'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 2);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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
                    ? 'pt-3'
                    : ''
                }`}
        >
            <div className=
                {` mx-auto flex justify-between items-center px-10 py-5 transition-all duration-300 ${scrolled
                        ? 'backdrop-blur-sm bg-header sm shadow-md w-11/12 rounded-lg'
                        : 'shadow-md w-full'
                    }`}>
                {/* Logo */}
                <Link href="/">
                    <p className="text-2xl font-bold tracking-wider">MyLogo</p>
                </Link>

                {/* Nav Links - Only visible on sm and above */}
                <nav className="hidden sm:block">
                    <ul className="flex space-x-8 font-medium text-lg">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href} className="group relative pb-1">
                                    <Link href={link.href}>
                                        <span
                                            className={`transition-colors ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                                                }`}
                                        >
                                            {link.label}
                                        </span>
                                        <span
                                            className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary transition-transform duration-300 ease-out origin-left ${isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                                                }`}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
