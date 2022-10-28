/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sussie-regular': ['Sussie Intl Regular'],
        'sussie-medium': ['Sussie Intl Medium'],
        'sussie-book': ['Sussie Intl Book'],
      }
    },
  },
  plugins: [],
}
