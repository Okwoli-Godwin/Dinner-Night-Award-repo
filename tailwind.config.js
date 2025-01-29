/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "320px", // Small extra screens
        sm: "376px",
        md: "501px",
        lg: "769px",
        xl: "1024px",
        "2xl": "1536px", // Extra-large screens
      },
    },
  },
  plugins: [],
}