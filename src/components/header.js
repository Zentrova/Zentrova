'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <p>MyLogo</p>
                    </Link>
                </div>
                <nav className='hidden sm:block'>
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    <p className={`hover:text-yellow-400 transition ${pathname === link.href ? 'text-yellow-400 font-semibold' : ''
                                        }`}>
                                        {link.label}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
