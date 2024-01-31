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
        'white': '#EDEDED',
        'primary': '#E15100',
        'accentuary': '#E15100',
        'secondary': '#79BAF6'
      },
      fontFamily: {
        'Satoshi': ['Satoshi', 'Courier New', 'Arial', 'Helvetica']
      },
      fontSize: {
        sm: '9px',
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

