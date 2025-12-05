/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./page.tsx",
  ],
  theme: {
    extend: {
      colors: {
        btl: {
          PRIMARY: "#F15A29",
          DARK: "#050505",
          CARD: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
