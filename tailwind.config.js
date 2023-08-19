/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00b956',
        secondary: '#731982',
        link: '#34aaf2',
      },
    },

    container: {
      center: true,

      screens: {
        lg: '1220px',
      },
    },

    fontFamily: {
      GTWalsheimPro: "'GTWalsheimPro",
    },



  },
  plugins: [require('@tailwindcss/typography')],
};
