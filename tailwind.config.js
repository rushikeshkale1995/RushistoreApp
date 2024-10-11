/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "selector",
    
  theme: {
    extend: {
      colors: {
        'regal-blue': '#000000',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}