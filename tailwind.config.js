/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        samarkan: ["Samarkan", "sans-serif"], // custom font with a fallback
      },
    },
  },
  plugins: [],
};
