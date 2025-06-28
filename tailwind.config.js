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
        secondary: "var(--secondary)",
        primaryLight: "var(--lightPrimary)",
        background: "var(--background)",
        foreground : "var(--foreground",
        background2: "var(--background2)",
        marquee: "#666666",
        primaryGreen: "#05b572",
        lightGreen: "#a8e6cf",
      },
      height: {
        mainSection: "calc(100vh - 160px)",
        hero: "calc(100vh - 260px)"
      },
      fontFamily: {
        sniglet: ['Comic Neue', 'cursive']
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

