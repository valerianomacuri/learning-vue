<template>
  <BaseNavbar />
  <main class="flex justify-center">
    <div class="max-w-4xl p-4 flex flex-col gap-4">
      <RefShowcase />
      <ReactiveShowcase />
    </div>
  </main>
</template>

<script setup lang="ts">
import { BaseNavbar } from '.'
import { ReactiveShowcase } from '@/modules/reactive/components'
import { RefShowcase } from '@/modules/ref/components'
</script>

<style scoped></style>
