<template>
  <label class="tab">
    <input type="radio" :name="name" :checked="defaultChecked" />
    {{ fileName }}
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const {
  name = '',
  defaultChecked = false,
  fileName = '',
} = defineProps<{
  name: string
  defaultChecked?: boolean
  fileName?: string
}>()
</script>

<style scoped></style>
