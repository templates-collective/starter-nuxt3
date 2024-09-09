import { defineVitestConfig } from '@nuxt/test-utils/config'

// Vitest config.
// https://github.com/vitest-dev/vitest
export default defineVitestConfig({
  test: {
    include: ['tests/**/*'],
    environment: 'jsdom',
  },
})
