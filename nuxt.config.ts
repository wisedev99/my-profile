export default defineNuxtConfig({
   devtools: { enabled: false },
  app: {
    head: {
      title: 'Profile site for visit resume',
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },

  components: {
    global: true,
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      }
    ],
  },
  css: ['@/assets/css/main.css'],

  modules: [],
  plugins: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE,
    },
  },

  imports: {
    dirs: ['./middleware'],
  },
});
