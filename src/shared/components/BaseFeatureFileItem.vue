<template>
  <label class="tab">
    <input type="radio" :name="name" :checked="defaultIsOpen" />
    {{ fileName }}
  </label>
  <div
    class="tab-content bg-base-100 border-base-300 overflow-x-auto prose prose-sm md:prose-base max-w-none"
  >
    <div style="display: grid" v-html="prettyVueCode"></div>
  </div>
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

<style scoped>
.tab,
.tab-content {
  background-color: var(--color-neutral);
}
</style>
