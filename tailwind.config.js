/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-color': '#191919',
        'black-light-color': '#2b2b2b',
        'white-color': '#f0f0f0',
        'white-alpha-color': '#f0f0f09a',
        'blue-color': '#0a3563',
        'blue-light-color': '#3074bd',
        'blue-transparent': '#1b376186',
        'gray-color': '#1f1f1f',
      },
      borderRadius: {
        'border-radius': '10px',
      },
    },
  },
  plugins: [],
};
