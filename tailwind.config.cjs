/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        move: {
          '100%': {
            transform: 'translateX(0px)',
            opacity: '1'
          }
        }
      },
      animation: {
        move: 'move 0.8s ease-in-out forwards'
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: []
}
