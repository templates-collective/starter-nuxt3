<script lang="ts" setup>
definePageMeta({
  name: 'About',
  layout: 'page',
})

const route = useRoute()

const { t } = useI18n()

useHead({
  title: t('page.about.title'),
})

const { headerLogo } = storeToRefs(useLayoutStore())

const { toggleLogo } = useLayoutStore()
</script>

<template>
  <h1 text-center text-lg font-bold mb-5>
    {{ route.meta.title }}
  </h1>
  <div flex justify-center items-center my-5>
    <TheButton lh-4 @click="toggleLogo">
      {{ headerLogo ? t('page.about.hide-logo') : t('page.about.show-logo') }}
    </TheButton>
  </div>
</template>
