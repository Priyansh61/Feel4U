export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'spa',
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyBvQ8F5NGpKoM7Xvp6DN-x_VLlDoE9O0Q4",
          authDomain: "hackthisfall-9a521.firebaseapp.com",
          projectId: "hackthisfall-9a521",
          storageBucket: "hackthisfall-9a521.appspot.com",
          messagingSenderId: "361826127441",
          appId: "1:361826127441:web:d955deef042963fb113270",
          measurementId: "G-P5R753XBL7"
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
            },
          },
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
