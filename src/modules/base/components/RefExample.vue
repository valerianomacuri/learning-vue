<template>
  <div class="flex flex-col items-center gap-2">
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Valor actual</div>
        <div class="stat-value">{{ counter }}</div>
        <div class="stat-desc">Muy bien!</div>
      </div>
    </div>
    <div class="flex gap-2">
      <button class="btn" @click="decrement">-1</button>
      <button class="btn" @click="increment">+1</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)

const increment = () => {
  counter.value++
}

const decrement = () => {
  counter.value--
}
</script>

<style scoped></style>
