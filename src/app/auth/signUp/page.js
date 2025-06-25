'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import CtcBtn from '@/components/homepage/ctcBtn';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = () => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log({ email, password });
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left: Signup Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-8 relative">
                {/* Logo */}
                <div className="absolute top-6 left-6">
                    <Image src="/Xentrova-logo.svg" alt="Xentrova Logo" width={140} height={40} />
                </div>

                <div className="w-full max-w-md bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-200 mt-12">
                    <h1 className="text-3xl font-extrabold text-center mb-4">
                        Create your <span className="text-primary">Xentrova</span> account
                    </h1>
                    <p className="text-center text-sm text-gray-600 mb-6">
                        Let’s get started on something amazing.
                    </p>

                    <form onSubmit={handleSignup} className="space-y-5">
                        <div>
                            <label className="block text-sm mb-1 text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@Xentrova.dev"
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
                                placeholder="Create Password"
                                className="w-full px-4 py-2 rounded-xl bg-white text-black placeholder:text-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary pr-12"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm mb-1 text-gray-700">Confirm Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
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

                        <button type="submit" className="primaryBtn w-full">
                            Sign Up
                        </button>

                        <p className="text-center text-sm text-gray-700">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="text-primary hover:underline">Login</Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right: Welcome Content */}
            <div className="w-full md:w-1/2 bg-[#0f172a] text-white flex items-center justify-center relative overflow-hidden">
                {/* Gradient Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-900 to-slate-900 opacity-80"></div>
                <div className="absolute -top-16 -left-16 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 z-0"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-30 z-0"></div>

                <div className="relative z-10 px-10 text-center max-w-lg space-y-6">
                    <Image
                        src="/Xentrova-logo-white.svg"
                        alt="Xentrova White Logo"
                        width={160}
                        height={40}
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-4xl font-bold leading-tight">
                        Join the <span className="text-primary">Next-Gen Team</span>
                    </h2>
                    <p className="text-white/80">
                        Join a growing network of innovators, designers, and engineers. Welcome to Xentrova.
                    </p>
                    <div className='flex justify-center items-center'>
                        <Link href="/auth/login">
                            <CtcBtn text='Already Registered?' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
