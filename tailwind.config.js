/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #f97316, #10b981, #4338ca)',
      },
      colors: {
        footer: "var(--footer)",
        header: "var(--header)",
        primary: "var(--primary)",
        background: "var(--background)",
        background2: "var(--background2)",
        marquee: "#666666",
        
      },
      height: {
        mainSection: "calc(100vh - 170px)"
      },
      fontFamily: {
        sniglet: ['Comic Neue', 'cursive']
      }
    },
  },
  plugins: [],
}

