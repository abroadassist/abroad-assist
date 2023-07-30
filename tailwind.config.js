/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aa: {
          outer: "#141a46",
          inner: "#253275",
          blue: { 1: "#386fa5" },
        },
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        subheading: ["Noto Serif Lao", "serif"],
        body: ["Noto Sans", "sans-serif"],
        jumbo_heading: ["Lora", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
