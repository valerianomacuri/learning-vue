<template>
  <div class="card card-border bg-base-100 w-full mb-8">
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

const { title = '' } = defineProps<Props>()
</script>

<style scoped></style>
