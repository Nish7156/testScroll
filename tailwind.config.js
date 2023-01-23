/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './elements/**/*.{js,ts,jsx,tsx}',
    './Layout/**/*.{js.ts,jsx,tsx}',
    './section/**/*.{js.ts,jsx,tsx}',
    './Layout/*.{js.ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        medium: '18px',
        md: '20px', 
        lg: '1.3rem', // 24px
        xl: ['2.5rem', '4rem'], //40
        xxl: '1.625rem', // 26px
        '3xl': '2.125rem', // 34px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': ['4.4rem', '78px'], //82px
      },

      colors: {
        primary: {
          DEFAULT: '#00b4d8',
        },
        secondary: {
          DEFAULT: '#222020',
        },
        black: {
          DEFAULT: '#000000',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        gray: {
          DEFAULT: '#E6E6E6',
        },
      },
    },
  },

  plugins: [],
}