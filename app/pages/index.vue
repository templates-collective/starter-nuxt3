<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const route = useRoute()

const { t } = useI18n()

const todoList = ref<any[]>([])

const emptyText = ref('')

const loading = ref(false)

function fetchData() {
  if (loading.value)
    return
  loading.value = true
  const { data } = useLazyFetch('/api/todo')
  // eslint-disable-next-line no-console
  console.log(data.value)
}
</script>

<template>
  <h1 text-center text-lg font-bold mb-5>
    {{ route.meta.title }}
  </h1>
  <div flex justify-center items-center my-5>
    <TheButton lh-4 @click="fetchData">
      <img v-show="loading" mr-2 src="@/assets/loading.svg">
      {{ t('page.index.get-todo-list') }}
    </TheButton>
  </div>
  <ul v-if="todoList && todoList.length > 0" my-5 h-50 overflow-y-auto>
    <li v-for="item in todoList" :key="item.id" text-base lh-normal>
      <input type="checkbox" accent-primary>
      {{ item.title }}
    </li>
  </ul>
  <p v-if="todoList.length === 0" my-5 text-center op-75>
    {{ emptyText || t('empty') }}
  </p>
</template>
