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
          PRIMARY: '#F15A29', // your BTL accent orange
          DARK: '#121212',    // app background
          CARD: '#FFFFFF',    // card background
        },
      },
    },
  },
  plugins: [],
};
