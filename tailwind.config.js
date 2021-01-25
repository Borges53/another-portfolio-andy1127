module.exports = {
  purge: [
    './components//*.{js,ts,jsx,tsx}',
    './components/*//*.{js,ts,jsx,tsx}',
    './shared//*.{js,ts,jsx,tsx}',
    './shared/components//*.{js,ts,jsx,tsx}',
    './pages//*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      transitionDuration: {
        0: '0ms',
        2000: '7000ms'
      },
      fontSize: {
        '1xl': '4.4rem',
        '2xl': '3.3rem',
        '3xl': '2.5rem',
        '4xl': '1.9rem',
        '5xl': '1.5rem',
        '6xl': '1.4rem',
        '7xl': '1.0rem',
        sm: '0.7rem'
      },
      spacing: {
        '25p': '25%',
        '35p': '35%',
        '50p': '50%',
        '75p': '75%',
        '84.5vh': '84.5vh',
        '80vh': '80vh',
        '90vh': '90vh'
      },
      colors: {
        blue: '#232946',
        pink: '#EEBBC3',
        violet: '#B8C1EC',
        white: '#FFFFFE'
      },
      animation: {
        changewidth: 'width 2s ease-in-out infinite',
        spin: 'spin 8s ease-in-out infinite'
      },
      keyframes: {
        width: {
          '0%, 100%': { width: '20px' },
          '50%': { width: '40%' }
        },
        spin: {
          '0%,100%': {
            transform: 'rotateY(`0deg`)'
          },
          '50%': {
            transform: 'rotateY(`180deg`)'
          },
          '100%': {
            transform: 'rotateY(`360deg`)'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
