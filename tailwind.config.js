module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'system-ui'],
      serif: ['Merriweather', 'ui-serif'],
    },
    extend: {
      boxShadow: {
        massive: '0px 20px 40px rgba(0, 0, 0, 0.12)',
        massiveHover: '0px 30px 60px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        full: '1080px',
      },
      colors: {
        primary: '#72DEC2',
        secondary: '#FFB545',
        'grey-darkest': '#0A0A0A',
        'grey-dark': '#111111',
        'grey-medium': '#4A4A4A',
        'grey-light': '#A1A1A1',
        'grey-lightest': '#C1C1C1',
        'grey-faint': '#EEEEEE',
      },
      gridTemplateColumns: {
        nav: '1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
