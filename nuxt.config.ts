export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 1977
  },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@vueuse/nuxt', '@unocss/nuxt', 'nuxt-lodash'],
  imports: {
    dirs: ['stores', 'apis', 'constants']
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    vueI18n: './i18n.config.ts'
  }
})
