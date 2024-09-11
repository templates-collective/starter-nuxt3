<script lang="ts" setup>
import '@/styles/main.css'

const { t } = useI18n()

useHead({
  titleTemplate: (s) => {
    return s && s !== t('app.title') ? `${s} - ${t('app.title')}` : t('app.title')
  },
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
