/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        SF: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      colors: {
        "ebid-orange": "#FF8E18",
        "ebid-purple": "#423B5E",
      },
      width: {
        mobile: "26.875rem",
      },
      height: {
        mobile: "58.25rem",
      },
    },
  },
  plugins: [],
};
