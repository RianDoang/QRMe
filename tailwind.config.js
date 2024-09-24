/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./public/html/*.html", "./public/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
