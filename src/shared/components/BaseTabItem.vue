<template>
  <label class="tab">
    <input type="radio" :name="name" :checked="defaultChecked" />
    {{ name }}
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { name = '', defaultChecked = false } = defineProps<{
  name?: string
  defaultChecked?: boolean
}>()
</script>

<style scoped></style>
