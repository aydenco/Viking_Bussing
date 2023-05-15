/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#023047',
        'teal': '#219EBC',
        'sky' : '#8ECAE6',
        'gold': '#FFB703',
        'orange': '#FB8500'
      }
    },
  },
  plugins: [],
}

