/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '5rem'
        }
      },
      filter: {
        'grayscale': 'grayscale(100%)'
      },
      animation: {
        'pass': 'pass 10s infinite linear',
        'in-out': 'in-out .5s infinite alternate-reverse'
      },
      keyframes: {
        'pass': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-150%)' }
        },
        
      },
      
    },
  },
  daisyui: {
    themes: ["luxury", "lemonade", "night", "business"],
  },
  plugins: [daisyui],
}
