/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: []
    },
    extend: {
      colors: {
        transparent: 'transparent'
        //   primary: {
        //     50: '#f4f8fa',
        //     100: '#d2e3eb',
        //     200: '#abcad9',
        //     300: '#7badc3',
        //     400: '#619cb7',
        //     500: '#3c85a6',
        //     600: '#1b7197',
        //     700: '#115a7c',
        //     800: '#0e4c69',
        //     900: '#0a374c',
        //   },
      }
    }
  },
  plugins: []
}
