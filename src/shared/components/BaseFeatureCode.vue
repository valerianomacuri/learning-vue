<template>
  <div v-html="prettyVueCode"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { vueCodeToHtml } from '../utils'

const { code } = defineProps<{ code?: string }>()
const prettyVueCode = ref('')

onMounted(() => {
  if (!code) return
  vueCodeToHtml(code).then((html) => {
    prettyVueCode.value = html
  })
})
</script>

<style scoped></style>
