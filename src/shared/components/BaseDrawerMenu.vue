<template>
  <ul class="menu text-base-content min-h-full w-80 p-4 bg-base-100">
    <template v-for="item in menu" :key="item.path">
      <li>
        <!-- <h2 class="menu-title">Estado</h2> -->
        <a>{{ item.name }}</a>
        <ul v-if="item.children">
          <li v-for="child in item.children" :key="child.path">
            <a>{{ child.name }}</a>
          </li>
        </ul>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { menu } from '../data'
</script>

<style scoped></style>
