import webpack from 'webpack'

// Common options
export const options = {
  name: 'Feel4U',
  shortDescription: 'Connecting lives.',
  description:
    'Feel4U connects people, and inspires community working together',
  keywords: 'feel4u, anxiety, stress, management ,relief',
  loading: {
    color: 'var(--color-accent)',
    background: 'var(--color-primary)',
  },
  app: {
    color: '#718096',
    background: '#ffffff',
    accent: '#67d9fb',
  },
  social: {
    twitter: '@HackbyteTpc',
  },
}

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      {
        name: 'keywords',
        content: options.keywords,
      },
      {
        itemprop: 'name',
        content: `${options.name} - ${options.shortDescription}`,
      },
      {
        itemprop: 'description',
        content: options.description,
      },
      {
        itemprop: 'image',
        content: `${process.env.BASE_URL}/banner.png`,
      },
      // Add to homescreen for Chrome on Android. Fallback for PWA (handled by nuxt)
      {
        name: 'application-name',
        content: options.name,
      },
      // Windows phone tile icon
      {
        name: 'msapplication-TileImage',
        content: '/icon.png',
      },
      {
        name: 'msapplication-TileColor',
        content: options.app.background,
      },
      {
        name: 'msapplication-tap-highlight',
        content: 'no',
      },
    ],
  },

  // Customize the progress-bar color (https://nuxtjs.org/api/configuration-loading/#customizing-the-progress-bar)
  loading: { color: options.loading.color, continuous: true },

  // Customize the loading indicator (https://nuxtjs.org/api/configuration-loading-indicator)
  loadingIndicator: {
    name: 'pulse',
    color: options.loading.color,
    background: options.loading.background,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/themes.scss',
    '~/assets/scss/styles.scss',
    '~/assets/scss/fonts.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/v-tooltip', '~/plugins/v-modal', '~/plugins/v-swiper'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/eslint-module
    // Doc: https://github.com/nuxt-community/stylelint-module
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Doc: https://axios.nuxtjs.org
    '@nuxtjs/axios',
    // Doc: https://firebase.nuxtjs.org
    '@nuxtjs/firebase',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast',
    // Doc: https://i18n.nuxtjs.org
    'nuxt-i18n',

  ],

  // PWA module configuration (https://pwa.nuxtjs.org/setup)
  pwa: {
    meta: {
      name: `${options.name} - ${options.shortDescription}`,
      description: options.description,
      ogHost: process.env.BASE_URL,
      ogImage: `${process.env.BASE_URL}/banner.png`,
      twitterCard: 'summary_large_image',
      twitterSite: options.social.twitter,
      twitterCreator: options.social.twitter,
      theme_color: options.app.background,
    },
    manifest: {
      name: options.name,
      short_name: options.name,
      description: options.shortDescription,
      start_url: '/',
      background_color: options.app.background,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // You can extend webpack config here
    extend(config, ctx) {
      // Sets webpack's mode to development if `isDev` is true.
      if (ctx.isDev) {
        config.mode = 'development'
      }
    },
    plugins: [new webpack.IgnorePlugin(/\.\/locale$/)],
    // parallel: true,
    // cache: true,
    // hardSource: true,
  },

  // Generate configuration (https://nuxtjs.org/api/configuration-generate)
  generate: {
    fallback: true,
  },

  // Toast module configuration (https://github.com/nuxt-community/modules/tree/master/packages/toast)
  toast: {
    position: 'bottom-center',
    duration: 3000,
    keepOnHover: true,
  },

  // Firebase module configuration (https://github.com/nuxt-community/firebase-module)
  firebase: {
    config: {
        apiKey: "AIzaSyBvQ8F5NGpKoM7Xvp6DN-x_VLlDoE9O0Q4",
        authDomain: "hackthisfall-9a521.firebaseapp.com",
        databaseURL: "https://hackthisfall-9a521.firebaseio.com",
        projectId: "hackthisfall-9a521",
        storageBucket: "hackthisfall-9a521.appspot.com",
        messagingSenderId: "361826127441",
        appId: "1:361826127441:web:d955deef042963fb113270",
        measurementId: "G-P5R753XBL7"
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
      },
      firestore: true,
    },
  },

  // Color Mode module configuration (https://github.com/nuxt-community/color-mode-module)
  colorMode: { preference: 'light' },

  // i18n module configuration (https://github.com/nuxt-community/i18n-module)
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.json',
      },
      {
        code: 'in-HI',
        name: 'हिन्दी',
        iso: 'en-HI',
        file: 'en-HI.json',
      },
      process.env
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'locales/',
  },

  // Public runtime configuration (https://nuxtjs.org/guide/runtime-config)
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || '/',
  },

  // Private runtime configuration (https://nuxtjs.org/guide/runtime-config)
  privateRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  },

  // Router configuration (https://nuxtjs.org/api/configuration-router)
  router: {
    linkActiveClass: 'text-accent hover:text-accent',
    linkExactActiveClass: 'text-accent hover:text-accent',
  },
}
