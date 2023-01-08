/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.32)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
    fontFamily: {
      'header': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}