<template>
  <label class="tab">
    <input type="radio" :name="name" :checked="defaultIsOpen" />
    {{ fileName }}
  </label>
  <div
    class="tab-content bg-base-100 border-base-300 p-6 overflow-x-auto"
    v-html="prettyVueCode"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, defineProps, ref } from 'vue'
import { vueCodeToHtml } from '../utils'

const {
  code = '',
  defaultIsOpen = false,
  fileName = '',
  name = '',
} = defineProps<{
  code?: string
  defaultIsOpen?: boolean
  fileName?: string
  name: string
}>()

const prettyVueCode = ref('')

onMounted(() => {
  if (!code) return
  vueCodeToHtml(code).then((html) => {
    prettyVueCode.value = html
  })
})
</script>

<style scoped></style>
