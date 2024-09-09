import { useTitle } from '@vueuse/core'

/**
 * Locale composable for vue-i18n.
 */
export function useLocale() {
  const { locale, messages, t } = useI18n()

  function toggleLocale(_locale?: string) {
    if (!_locale) {
      const locales = Object.keys(messages.value)
      _locale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    }
    locale.value = _locale as string
  }

  const title = useTitle()

  const setLocaleTitle = (locale?: string, isKey: boolean = true) => {
    const _t = isKey ? t(locale || 'app.title') : locale
    title.value = _t === t('app.title') ? _t : `${_t} | ${t('app.title')}`
  }

  return {
    toggleLocale,
    setLocaleTitle,
  }
}
