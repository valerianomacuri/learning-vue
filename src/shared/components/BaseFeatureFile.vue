<template>
  <BaseTabItem name="LocalStateExample.vue" :default-checked="defaultIsOpen"
    ><slot></slot
  ></BaseTabItem>
</template>

<script setup lang="ts">
import BaseTabItem from './BaseTabItem.vue'
const { defaultIsOpen = false } = defineProps<{
  defaultIsOpen?: boolean
}>()
</script>

<style scoped></style>
