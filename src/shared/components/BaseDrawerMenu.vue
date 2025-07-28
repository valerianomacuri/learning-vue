<template>
  <ul class="menu text-base-content min-h-full w-80 p-4 bg-base-100">
    <template v-for="item in menu" :key="item.path">
      <li>
        <details open>
          <summary>{{ item.name }}</summary>
          <ul v-if="item.children">
            <li v-for="subItem in item.children" :key="subItem.path">
              <a class="menu-title">{{ subItem.name }}</a>
              <ul v-if="subItem.children">
                <li v-for="lastItem in subItem.children" :key="lastItem.path">
                  <a>{{ lastItem.name }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </details>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { menu } from '../data'
</script>

<style scoped></style>
