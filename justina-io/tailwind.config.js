import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#792ba6',
          50: '#faf5ff',
          75: '#f3e9fb',
          100: '#f0defa',
          200: '#daaef2',
          300: '#b471da',
          400: '#9a41ce',
          500: '#792ba6',
          600: '#612386',
          700: '#4a1a65',
          800: '#321245',
          900: '#1b0924',
        },
      },
      backgroundImage: {
        // eslint-disable-next-line quotes
        pattern: "url('/img/pattern.webp')",
      },
    },
  },
  plugins: [daisyui],
  darkMode: 'class',
  daisyui: {
    themes: ['light'],
  },
};
