/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(1.5)', opacity: 0 },
        },
      },
      animation: {
        ripple: 'ripple 1s infinite',
      },
    },
  },
  plugins: [],
}
