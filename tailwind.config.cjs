/** @type {import('tailwindcss').Config} */

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
      dropShadow: {
        custom: '0 0 16px rgba(255, 165, 0, 0.5)'
      },
      filter: {
        'grayscale': 'grayscale(100%)'
      },
      animation: {
        'pass': 'pass 10s infinite linear'
      },
      keyframes: {
        pass: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      }
    },
  },
  plugins: [],
}
