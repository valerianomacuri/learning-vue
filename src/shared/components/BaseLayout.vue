<template>
  <BaseNavbar />
  <main class="flex justify-center">
    <div class="max-w-4xl p-4 flex flex-col gap-4">
      <BaseFeatureShowcaseList />
    </div>
  </main>
</template>

<script setup lang="ts">
import { BaseFeatureShowcaseList, BaseNavbar } from '.'
</script>

<style scoped></style>
