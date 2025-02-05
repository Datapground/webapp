/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
      colors: {},
      backgroundImage: {
        btn: 'linear-gradient(90deg, #2EE1E2 -3.75%, #49CDFE 27.32%, #6A59C1 73.65%, #9541A3 109.25%)',
        login:
          'linear-gradient(90deg, rgba(46, 225, 226, 0.4) -3.75%, rgba(73, 205, 254, 0.4) 27.32%, rgba(106, 89, 193, 0.4) 73.65%, rgba(149, 65, 163, 0.4) 109.25%)',
        shade:
          'linear-gradient(90deg, #2EE1E2 -3.75%, #49CDFE 27.32%, #6A59C1 73.65%, #9541A3 109.25%)',
      },
    },
  },
  plugins: [],
};
