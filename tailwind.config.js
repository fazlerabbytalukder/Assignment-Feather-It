/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#1b1e2c',
        'secondary':'#00d7bd',
      }
    },
  },
  plugins: [],
}
