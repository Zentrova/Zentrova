'use client';

export default function ThemeButton({text = "button"}) {
  return (
    <>
      <button className="relative flex items-center justify-center gap-2.5 px-5 py-2 rounded-full bg-primary text-white font-bold text-base border-3 border-white/30 shadow-[0_10px_20px_rgba(0,0,0,0.2)] outline-none overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:border-white/60 cursor-pointer">
       {text}
        <svg
          className="w-6 h-6 transition-transform duration-300 ease-in-out hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
          />
        </svg>
      </button>

      <style jsx>{`
        button::before {
          content: "";
          position: absolute;
          width: 100px;
          height: 100%;
          background-image: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0) 70%
          );
          top: 0;
          left: -100px;
          opacity: 0.6;
          pointer-events: none;
          transition: none;
        }
        button:hover::before {
          animation: shine 1.5s ease-out infinite;
        }
        @keyframes shine {
          0% {
            left: -100px;
          }
          60% {
            left: 100%;
          }
          to {
            left: 100%;
          }
        }
      `}</style>
    </>
  );
}
