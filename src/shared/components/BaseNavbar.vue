<template>
  <nav class="navbar bg-base-100">
    <div class="flex-none">
      <label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
    <div class="flex flex-1 ms-2 gap-1 lg:hidden">
      <div class="size-9">
        <BaseVueIcon />
      </div>
      <a class="text-2xl font-bold">Aprender Vue</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { BaseVueIcon } from '.'
</script>

<style scoped></style>
