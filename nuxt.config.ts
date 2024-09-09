export default defineNuxtConfig({
  compatibilityDate: '2024-09-09',
  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    enabled: true,
  },
  devServer: {
    port: 9865,
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-lodash',
    '@nuxt/test-utils/module',
  ],
  imports: {
    dirs: [
      'constants',
      'stores',
    ],
  },
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
