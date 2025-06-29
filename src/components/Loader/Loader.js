'use client';

import Lottie from 'lottie-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import loaderAnimation from '@/../public/loaderAnimation.json'; // ✅ Adjust if needed

export default function Loader() {
    const [showImage, setShowImage] = useState(true);
    const [playAnimation, setPlayAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false);
            setPlayAnimation(true);
        }, 5000); // 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed top-0 right-0 bg-background w-screen h-screen flex items-center justify-center px-10" style={{zIndex: '99999'}}>
            {showImage ? (
                <Image
                    src="/icon.svg"
                    alt="loader"
                    width={224}
                    height={224}
                    className="w-auto h-20 md:h-36 animate-bounce"
                />
            ) : playAnimation ? (
                <div className="w-auto h-20 md:h-36">
                    <Lottie
                        animationData={loaderAnimation}
                        loop={false}
                        autoplay
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            ) : null}
        </div>
    );
}
