/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btl: {
          primary: "#F15A29",
          dark: "#0a0a0a",
          card: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
