export default defineNuxtConfig({
  // Specify a compatibility date for your app.
  compatibilityDate: '2024-09-09',

  // Enable early access to Nuxt v4 features or flags.
  // https://nuxt.com/docs/api/nuxt-config#compatibilityversion
  future: {
    compatibilityVersion: 4,
  },

  // Open devtools by default.
  devtools: {
    enabled: true,
  },

  // Server config.
  devServer: {
    port: 9865,
  },

  // Register nuxt modules.
  // https://nuxt.com/modules
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-lodash',
    '@nuxt/test-utils/module',
  ],

  // Additional auto-import config.
  // https://nuxt.com/docs/api/nuxt-config#imports
  imports: {
    dirs: [
      'constants',
      'stores',
    ],
  },

  // CSS config.
  // https://unocss.dev/
  css: [
    '@unocss/reset/tailwind.css',
  ],

  // I18n config.
  // https://i18n.nuxtjs.org/
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'zh', file: 'zh.json', name: '中文' },
    ],
  },

  // Vite config.
  // https://vitejs.dev/config/
  vite: {
  },
})
