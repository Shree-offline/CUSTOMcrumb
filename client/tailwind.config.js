/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Tell Tailwind where to look for classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      // 2. Add your custom "Cake" colors here
      colors: {
        'cake-pink': '#fdf2f8',
        'cake-purple': '#9333ea',
      },
    },
  },
  plugins: [],
}
