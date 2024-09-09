<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const route = useRoute()
</script>

<template>
  <h1 text-center text-lg font-bold mb-5>
    {{ route.meta.title }}
  </h1>
</template>
