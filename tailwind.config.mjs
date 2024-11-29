/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
