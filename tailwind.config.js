/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Sparky Stones", sans-serif', 'Chonburi, sans-serif'],
        body: ['Lora, sans-serif', '"IBM Plex Sans", sans-serif']
      },
      colors: {
        transparent: 'transparent',
        primary: {
          100: '#0E1823',
          200: '#274464',
          300: '#45658A',
          400: '#5F83AD'
        },
        primary_yellow: {
          100: '#EBD176',
          200: '#F5DD8B',
          300: '#F7E49F'
        },
        secondary_blue: {
          100: '#9EDFFA',
          200: '#BAECFF',
          300: '#D1F2FF'
        },
        bg: {
          100: '#FFF9F3',
          200: '#0E2A3F',
          300: '#065973',
          400: '#088AB2'
        },
        text_color: {
          100: '#FDEDDC',
          200: '#274464',
          300: '#6089B5',
          400: '#FFF9F3'
        }
      }
    },
    // Add list style to edit modal content
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      alpha: 'lower-alpha',
      roman: 'upper-roman'
    }
  },
  plugins: [],
  important: true
}
