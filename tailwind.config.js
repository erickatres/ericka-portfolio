/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8EDF5',
          100: '#D0D8E8',
          200: '#B4C0D4',
          300: '#8A9BB8',
          400: '#6B7FA3',
          500: '#4A5F86',
          600: '#3A4D73',
          700: '#243352',
          800: '#151D30',
          900: '#0C1220',
          950: '#070A14',
        },
      },
    },
  },
  plugins: [],
}
