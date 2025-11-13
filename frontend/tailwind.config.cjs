/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // sky-500
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
