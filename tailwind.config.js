/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out',
      },
      spacing: {
        'skills-gutter': '10%',
      },
      colors: {
        'black-opacity': 'rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'lg': '10px',
      },
    },
  },
  plugins: [],
}
