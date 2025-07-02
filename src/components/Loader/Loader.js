'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setIsLoading(false), 300); // optional delay for smoother transition
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed top-0 left-0 bg-background w-screen h-screen flex items-center justify-center px-10 transition-opacity duration-500 z-[99999] ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >      <Image
                src="/icon.svg"
                alt="loader"
                width={224}
                height={224}
                className="w-auto h-20 md:h-36 animate-bounce"
            />
        </div>
    );
}
