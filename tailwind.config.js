/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
       backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #f97316, #10b981, #4338ca)', 
        // corresponds roughly to: from-blue-500 via-purple-500 via-orange-500 via-green-500 to-indigo-500
      },
      colors: {
        footer: "var(--footer)",
        header: "var(--header)",
        primary: "var(--primary)",
        background : "var(--background)",
        secondary: "var(--secondary)"
      },
      height:{
        mainSection: "calc(100vh - 20vh)"
      }
    },
  },
  plugins: [],
}

