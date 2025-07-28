<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <slot></slot>
    </div>
    <aside class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="p-4 bg-base-100 hidden lg:flex gap-1 w-full">
        <div class="size-9">
          <BaseVueIcon />
        </div>
        <a class="text-2xl font-bold">Aprender Vue</a>
      </div>
      <BaseDrawerMenu />
    </aside>
  </div>
</template>

<script setup lang="ts">
import { BaseDrawerMenu, BaseVueIcon } from '.'
</script>

<style scoped></style>
