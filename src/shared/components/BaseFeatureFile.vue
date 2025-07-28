<template>
  <BaseTabItem :name="name" :file-name="fileName" :default-checked="defaultIsOpen">
    <slot></slot>
  </BaseTabItem>
</template>

<script setup lang="ts">
import BaseTabItem from './BaseTabItem.vue'
const { defaultIsOpen = false, name = '' } = defineProps<{
  defaultIsOpen?: boolean
  fileName?: string
  name: string
}>()
</script>

<style scoped></style>
