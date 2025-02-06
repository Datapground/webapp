/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0rem',
          lg: '0rem',
        },
        screens: {
          sm: '100%',
          md: '1200px',
          lg: '1340px',
          '2xl': '1400px',
        },
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
      colors: {
        generator: '#C32782',
        generatorLight: '#C3278233',
        exiler: '#A077A8',
        exilerLight: '#A077A866',
        gold: '#1E647F',
        goldLight: '#1E647F66',
        oracle: ' #59B1FE',
        oracleLight: ' #59B1FE33',
        predictor: '#E55057',
        predictorLight: '#E5505733',
        predictorBackground: '#E6555D0D',
        extender: '#4CB448',
        extenderLight: '#4CB44833',
        extenderBackground: '#C3278208',
        default: '#5183F0',
        defaultLight: '#5183F033',
      },
      boxShadow: {
        'side-navigation': '4px 4px 32px 0px #5183F014',
      },
      backgroundImage: {
        btn: 'linear-gradient(90deg, #2EE1E2 -3.75%, #49CDFE 27.32%, #6A59C1 73.65%, #9541A3 109.25%)',
        login:
          'linear-gradient(90deg, rgba(46, 225, 226, 0.4) -3.75%, rgba(73, 205, 254, 0.4) 27.32%, rgba(106, 89, 193, 0.4) 73.65%, rgba(149, 65, 163, 0.4) 109.25%)',
        shade:
          'linear-gradient(90deg, #2EE1E2 -3.75%, #49CDFE 27.32%, #6A59C1 73.65%, #9541A3 109.25%)',
        'side-navigation':
          'linear-gradient(176.74deg, #FFFFFF 5.33%, #E3ECFF 28.43%)',
      },
    },
  },
  plugins: [],
};
