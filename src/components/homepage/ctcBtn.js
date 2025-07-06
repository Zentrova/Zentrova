'use client';

export default function CtcBtn({ text = "button" }) {
  return (
    <button
      className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium bg-primary text-white rounded-full hover:bg-primaryDark transition-all duration-300"
    >
      {text}
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
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
  );
}
