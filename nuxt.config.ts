export default defineNuxtConfig({
  compatibilityDate: '2024-09-09',
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
  ],
  imports: {
    dirs: [
      'stores',
      'apis',
      'constants',
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'zh',
    ],
    vueI18n: './vue-i18n.config.ts',
  },

  // Vite config.
  // https://vitejs.dev/config/
  vite: {
    // Vitest config.
    // https://github.com/vitest-dev/vitest
    test: {
      include: ['tests/**/*'],
      environment: 'jsdom',
    },
  },
})
