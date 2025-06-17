'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PageNotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden -mt-10">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-20h20zM40 20c0 11.046-8.954 20-20 20v-20h20zM0 40c11.046 0 20-8.954 20-20H0v20zM40 40c-11.046 0-20-8.954-20-20h20v20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 border border-slate-200 rounded-full animate-float-slow left-1/4 top-1/4 opacity-30" />
        <div className="absolute w-24 h-24 border border-slate-300 animate-float-slow right-1/4 top-1/3 opacity-20"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        <div className="absolute w-28 h-28 border border-slate-200 animate-float-slow left-3/4 bottom-1/3 opacity-25"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-light mb-8 text-slate-800 animate-fade-in">
          <span className="relative">
            404
            <div className="absolute inset-0 text-slate-300 -z-10 transform translate-x-1 translate-y-1">404</div>
          </span>
        </h1>

        {/* Divider Line */}
        <div className="flex justify-center mb-12">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-60" />
        </div>

        {/* Error Message */}
        <div className="space-y-6 mb-16 animate-fade-in-up">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
            Page Not Found
          </h2>
          <p className=" text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay">
          <Link href="/" className="group relative">
            <div className="relative px-8 py-4 bg-primary hover:bg-primaryLight text-white hover:text-primary rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-medium">Go Home</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Additional Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-5deg); }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-out 0.9s both;
        }
      `}</style>
    </div>
  );
}