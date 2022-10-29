/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "#696969",
        bg: "#F9F9F9",
        main: "#6344F7"

      },
      fontFamily: {
        'sussie-regular': ['Sussie Intl Regular'],
        'sussie-medium': ['Sussie Intl Medium'],
        'sussie-book': ['Sussie Intl Book'],
        'sussie-semibold': ['Sussie Intl SemiBold'],
      }
    },
  },
  plugins: [],
}
