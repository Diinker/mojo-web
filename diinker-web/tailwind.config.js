/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nature: ['Nature-Regular', 'sans-serif'],
        'nature-light': ['Nature-Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}