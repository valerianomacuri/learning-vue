<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-6xl">
      <BaseDrawer>
        <BaseNavbar />
        <main class="p-4 flex flex-col gap-4">
          <BaseIntroduction />
          <BaseFeatureShowcaseList />
        </main>
      </BaseDrawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseFeatureShowcaseList, BaseNavbar, BaseIntroduction, BaseDrawer } from '.'
</script>

<style scoped></style>
