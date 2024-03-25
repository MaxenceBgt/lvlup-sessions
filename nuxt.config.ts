// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "LvlUp - ESEO | Réservation de sessions VR",

      htmlAttrs: {
        lang: 'fr'
      },

      meta: [
        {name: 'description', content: 'Réservation de sessions VR pour les élèves l\'ESEO d\'Angers'}
      ],

      link: [
        {rel: 'icon', type: 'image/png', href: '/Logo.png' },
        { rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v4.0.8/css/line.css'}
      ],

      script: []
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'dayjs-nuxt',
    '@nuxtjs/supabase',
    'nuxt-swiper',
    '@nuxtjs/device'
  ],

  googleFonts: {
    families: {
      'Rajdhani': {
        wght: [400, 500, 600, 700]
      },

      Fredoka: {
        wght: [600]
      },
    },
    display: 'swap'
  },

  dayjs: {
    locales: ['fr'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'fr',
    defaultTimezone: 'Europa/Paris',
  },

  supabase: {
    redirect: false
  },

  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['free-mode']
  }
})
