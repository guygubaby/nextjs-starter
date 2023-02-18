/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'color-black': 'var(--color-black)',
        'color-white': 'var(--color-white)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
