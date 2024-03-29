/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#111816',
        'white': '#ffffffff',//#EDEDED
        primary: '#009688',
        accentuary: '#E15100',
        secondary: '#79BAF6',
        background: '#ffe8dbff'
      },
      fontFamily: {
        'Satoshi': ['Satoshi', 'Courier New', 'Arial', 'Helvetica'],
        'Satoshi-bold': ['Satoshi-bold','Arial', 'Helvetica'],
        'Satoshi-light': ['Satoshi-light', 'Courier New', 'Arial', 'Helvetica'],
      },
      fontSize: {
        sm: '10px',
        base: '14px',
        large: '18px',
        xl: '20px',
        '2xl': '25px',
        '3xl': '52px', 
        '4xl': '84px'
      }
    },
  },
  plugins: [],
}

