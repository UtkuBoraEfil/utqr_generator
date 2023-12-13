/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors:{
        dark: "#437a74",
        background: "#36384d",
      },
      fontFamily: {
        "font-family": ["Roboto Slab", "serif"],
      }
    },
  },
  plugins: [],
};
