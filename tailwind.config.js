/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3E7D9', 
        secondary: '#663535',
      },
      fontFamily: {
        primary: ['Poiret One', 'sans-serif'], 
        secondary: ['Poppins', 'sans-serif'],  
      },
      screens: {
        'sm': '375px',
        '2sm': '600px',
        'md': '768px',
        'lg': '1024px', 
        '2lg': '1280px', 
        'xl': '1440px', 
        '2xl': '1920px', 
      },
    },
  },
  plugins: [],
}
