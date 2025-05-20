/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        footer: "var(--footer)",
        header: "var(--header)",
        primary: "var(--primary)"
      },
      height:{
        mainSection: "calc(100vh - 12vh)"
      }
    },
  },
  plugins: [],
}

