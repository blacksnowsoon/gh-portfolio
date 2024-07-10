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
        'pull-up' : 'pull-up 15s forwards linear',
        'in-out': 'in-out .5s infinite alternate-reverse'
      },
      keyframes: {
        'pass': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-150%)' }
        },
        'pull-up': {
          "0%": {
            'transform-origin': 'top right',
            'transform': 'rotate(0deg)',
            '-webkit-animation-timing-function': 'ease-out',
            'animation-timing-function': 'ease-out',
          },
          "100%": {
            'transform-origin': 'top right',
            'transform': 'rotate(-180deg)',
            '-webkit-animation-timing-function': 'ease-in-out',
            'animation-timing-function': 'ease-in-out',
          }
        },
        'in-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' }
        }
      },
      bgGradientDeg: {
        'background-image': `conic-gradient(from 0.25turn at var(--increase)% var(--decrease)%, var(--tw-gradient-to), 180deg, var(--tw-gradient-to), 180deg, var(--tw-gradient-from))`
      },
    },
  },
  daisyui: {
    themes: ["luxury", "lemonade", "night", "business"],
  },
  plugins: [daisyui],
}
