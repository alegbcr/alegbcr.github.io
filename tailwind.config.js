const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black-color': '#1A1A1A',
        'black-light-color': '#2b2b2b',
        'white-color': '#FFFFFF',
        'white-alpha-color': '#f0f0f09a',
        'blue-color': '#3D5A80',
        'blue-light-color': '#98C1D9',
        'blue-transparent': '#1b376186',
        'gray-color': '#1f1f1f',
        'orange-color': '#EE6C4D',
      },
      fontWeight: {
        'font-slim': 300,
        'font-regular': 400,
        'font-medium': 500,
        'font-semibold': 600,
        'font-bold': 700,
      },
      gridTemplateRows: {
        'mobile': 'repeat(10, minmax(10px, 9.4vh))',
        'view': 'repeat(10, minmax(20px, 10vh))',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        'full': '-1',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
