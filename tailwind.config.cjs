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
        'color-trans' : 'color-trans 10s forwards linear'
      },
      keyframes: {
        pass: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-150%)' }
        },
        'color-trans': {
          '0%': { borderColor: '#202020' },
          '100%': { borderColor: '#22c55e' }
        }
      }
    },
  },
  daisyui: {
    themes: ["luxury", "lemonade", "night", "business"],
  },
  plugins: [daisyui],
}
