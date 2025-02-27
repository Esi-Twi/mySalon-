/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'petite': '490px',
        'mini': '400px', 
        'micro': '350px'
      }
    },
  },
  plugins: [],
}
