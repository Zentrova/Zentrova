'use client';

import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23999999' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-20h20zM40 20c0 11.046-8.954 20-20 20v-20h20zM0 40c11.046 0 20-8.954 20-20H0v20zM40 40c-11.046 0-20-8.954-20-20h20v20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Creative Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* DNA Helix Shape */}
        <div className="absolute left-1/6 top-1/5 animate-float-slow opacity-20">
          <div className="relative w-20 h-40">
            <div className="absolute w-4 h-4 bg-neutral-700 dark:bg-neutral-300 rounded-full top-0 left-0 animate-pulse"></div>
            <div className="absolute w-3 h-3 bg-neutral-600 dark:bg-neutral-400 rounded-full top-8 right-0"></div>
            <div className="absolute w-4 h-4 bg-neutral-700 dark:bg-neutral-300 rounded-full top-16 left-2"></div>
            <div className="absolute w-3 h-3 bg-neutral-600 dark:bg-neutral-400 rounded-full top-24 right-2"></div>
            <div className="absolute w-4 h-4 bg-neutral-700 dark:bg-neutral-300 rounded-full top-32 left-0"></div>
            <div className="absolute w-1 h-32 bg-gradient-to-b from-neutral-700 to-transparent dark:from-neutral-300 left-2 top-4 transform rotate-12"></div>
            <div className="absolute w-1 h-32 bg-gradient-to-b from-neutral-600 to-transparent dark:from-neutral-400 right-2 top-4 transform -rotate-12"></div>
          </div>
        </div>

        {/* Origami Bird */}
        <div className="absolute right-1/4 top-1/4 animate-float-slow opacity-25">
          <div
            className="w-24 h-16 border border-neutral-600 dark:border-neutral-400"
            style={{
              clipPath: 'polygon(0% 50%, 25% 0%, 50% 25%, 75% 0%, 100% 50%, 75% 100%, 50% 75%, 25% 100%)',
              transform: 'perspective(100px) rotateX(15deg)'
            }}
          />
          <div
            className="absolute w-12 h-8 border border-neutral-700 dark:border-neutral-300 -top-2 left-6"
            style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }}
          />
        </div>

        {/* Molecular Structure */}
        <div className="absolute left-3/4 bottom-1/3 animate-float-slow opacity-30">
          <div className="relative w-32 h-32">
            <div className="absolute w-6 h-6 border-2 border-neutral-700 dark:border-neutral-300 rounded-full top-0 left-12"></div>
            <div className="absolute w-4 h-4 border-2 border-neutral-600 dark:border-neutral-400 rounded-full top-8 left-4"></div>
            <div className="absolute w-5 h-5 border-2 border-neutral-700 dark:border-neutral-300 rounded-full top-6 right-4"></div>
            <div className="absolute w-4 h-4 border-2 border-neutral-600 dark:border-neutral-400 rounded-full bottom-4 left-8"></div>
            <div className="absolute w-6 h-6 border-2 border-neutral-700 dark:border-neutral-300 rounded-full bottom-0 right-8"></div>
            {/* Connection lines */}
            <div className="absolute w-12 h-px bg-neutral-600 dark:bg-neutral-400 top-6 left-8 transform rotate-45"></div>
            <div className="absolute w-10 h-px bg-neutral-600 dark:bg-neutral-400 top-12 left-12 transform -rotate-12"></div>
            <div className="absolute w-8 h-px bg-neutral-600 dark:bg-neutral-400 top-16 left-16 transform rotate-65"></div>
            <div className="absolute w-14 h-px bg-neutral-600 dark:bg-neutral-400 top-20 left-6 transform -rotate-25"></div>
          </div>
        </div>

        {/* Geometric Constellation */}
        <div className="absolute right-1/6 bottom-1/4 animate-float-slow opacity-25">
          <div className="relative w-28 h-28">
            <div className="absolute w-3 h-3 bg-neutral-700 dark:bg-neutral-300 rounded-full top-0 left-6"></div>
            <div className="absolute w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full top-4 right-2"></div>
            <div className="absolute w-3 h-3 bg-neutral-700 dark:bg-neutral-300 rounded-full top-12 left-0"></div>
            <div className="absolute w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full bottom-8 right-4"></div>
            <div className="absolute w-3 h-3 bg-neutral-700 dark:bg-neutral-300 rounded-full bottom-0 left-12"></div>
            <div className="absolute w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full top-8 left-16"></div>
            {/* Constellation lines */}
            <div className="absolute w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent dark:from-neutral-400 top-3 left-7"></div>
            <div className="absolute w-12 h-px bg-gradient-to-r from-neutral-600 to-transparent dark:from-neutral-400 top-8 left-8 transform rotate-12"></div>
            <div className="absolute w-10 h-px bg-gradient-to-r from-neutral-600 to-transparent dark:from-neutral-400 top-16 left-2 transform -rotate-45"></div>
            <div className="absolute w-8 h-px bg-gradient-to-r from-neutral-600 to-transparent dark:from-neutral-400 bottom-4 left-16 transform rotate-75"></div>
          </div>
        </div>

        {/* Abstract Wave Pattern */}
        <div className="absolute left-1/12 bottom-1/5 animate-float-slow opacity-20">
          <div className="relative w-36 h-20">
            <div
              className="absolute w-full h-2 border border-neutral-700 dark:border-neutral-300"
              style={{
                clipPath: 'polygon(0% 50%, 10% 0%, 20% 100%, 30% 0%, 40% 100%, 50% 0%, 60% 100%, 70% 0%, 80% 100%, 90% 0%, 100% 50%)'
              }}
            />
            <div
              className="absolute w-full h-2 border border-neutral-600 dark:border-neutral-400 top-6"
              style={{
                clipPath: 'polygon(0% 50%, 15% 100%, 25% 0%, 35% 100%, 45% 0%, 55% 100%, 65% 0%, 75% 100%, 85% 0%, 95% 100%, 100% 50%)'
              }}
            />
            <div
              className="absolute w-full h-2 border border-neutral-700 dark:border-neutral-300 top-12"
              style={{
                clipPath: 'polygon(0% 50%, 12% 0%, 24% 100%, 36% 0%, 48% 100%, 60% 0%, 72% 100%, 84% 0%, 96% 100%, 100% 50%)'
              }}
            />
          </div>
        </div>

        {/* Spiraling Elements */}
        <div className="absolute right-1/12 top-1/3 animate-float-slow opacity-25">
          <div className="relative w-20 h-20">
            <div className="absolute w-2 h-2 bg-neutral-700 dark:bg-neutral-300 rounded-full top-0 left-9 transform rotate-0"></div>
            <div className="absolute w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full top-2 left-12 transform rotate-45"></div>
            <div className="absolute w-2 h-2 bg-neutral-700 dark:bg-neutral-300 rounded-full top-6 left-14 transform rotate-90"></div>
            <div className="absolute w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full top-10 left-12 transform rotate-135"></div>
            <div className="absolute w-2 h-2 bg-neutral-700 dark:bg-neutral-300 rounded-full top-12 left-8 transform rotate-180"></div>
            <div className="absolute w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full top-10 left-4 transform rotate-225"></div>
            <div className="absolute w-2 h-2 bg-neutral-700 dark:bg-neutral-300 rounded-full top-6 left-2 transform rotate-270"></div>
            <div className="absolute w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full top-2 left-4 transform rotate-315"></div>
            {/* Spiral curve */}
            <div
              className="absolute inset-0 border border-neutral-600 dark:border-neutral-400 rounded-full opacity-50"
              style={{ borderStyle: 'dashed', borderWidth: '1px' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-light mb-8 text-neutral-900 dark:text-neutral-100 relative animate-fade-in">
          404
          <span className="absolute inset-0 text-neutral-300 dark:text-neutral-700 -z-10 transform translate-x-1 translate-y-1">
            404
          </span>
        </h1>

        {/* Divider */}
        <div className="flex justify-center mb-12">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-neutral-400 dark:via-neutral-600 to-transparent opacity-60" />
        </div>

        {/* Message */}
        <div className="space-y-6 mb-16 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-800 dark:text-neutral-100">
            Page Not Found
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            The page you are trying to reach doesn't exist, was removed, or is
            currently unavailable.
          </p>
        </div>

        {/* Back to Home */}
        <div className="flex justify-center animate-fade-in-up-delay">
          <Link href="/" className="group">
            <button className="primaryBtn">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-medium">Go to Homepage</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(-5px) rotate(0deg);
          }
          75% {
            transform: translateY(-8px) rotate(-5deg);
          }
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
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s forwards;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.6s forwards;
        }
      `}</style>
    </div>
  );
}