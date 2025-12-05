/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout.tsx",
    "./page.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btl: {
          primary: "#F15A29",
          dark: "#050505",
          card: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
