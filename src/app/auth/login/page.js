'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left: Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-8 relative">
                {/* Logo */}
                <div className="absolute top-6 left-6">
                    <Image src="/zentrova-logo.svg" alt="Zentrova Logo" width={140} height={40} />
                </div>

                <div className="w-full max-w-md bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-200 mt-12">
                    <h1 className="text-3xl font-extrabold text-center mb-4">
                        Login to <span className="text-primary">Zentrova</span>
                    </h1>
                    <p className="text-center text-sm text-gray-600 mb-6">
                        Let’s start building something amazing.
                    </p>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm mb-1 text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@zentrova.dev"
                                className="w-full px-4 py-2 rounded-xl bg-white text-black placeholder:text-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm mb-1 text-gray-700">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                className="w-full px-4 py-2 rounded-xl bg-white text-black placeholder:text-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-9 text-zinc-600 hover:text-black"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 transition-all text-white font-semibold py-2 rounded-xl"
                        >
                            Login
                        </button>

                        <p className="text-center text-sm text-gray-700">
                            Forgot password?{' '}
                            <a href="#" className="text-primary hover:underline">Reset</a>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right: Hero Section */}
            <div className="w-full md:w-1/2 bg-[#0f172a] text-white flex items-center justify-center relative overflow-hidden">
                {/* Gradient or Visual Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-900 to-slate-900 opacity-80"></div>
                <div className="absolute -top-16 -left-16 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 z-0"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-30 z-0"></div>

                {/* Content */}
                <div className="relative z-10 px-10 text-center max-w-lg space-y-6">
                    <Image
                        src="/zentrova-logo-white.svg"
                        alt="Zentrova White Logo"
                        width={160}
                        height={40}
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-4xl font-bold leading-tight">
                        Welcome to the <span className="text-primary">Future of Web</span>
                    </h2>
                    <p className="text-white/80">
                        Collaborate. Design. Develop. Launch. Join Zentrova and take your digital creativity to the next level.
                    </p>
                    <Link href="/signup">
                        <button className="mt-4 px-6 py-2 bg-white text-primary hover:bg-white/90 rounded-xl transition font-semibold shadow-lg">
                            Get Started →
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
