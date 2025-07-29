<template>
  <div class="flex justify-center gap-2">
    <div class="flex flex-col items-center gap-2">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Contador 1</div>
          <div class="stat-value">{{ counter.first }}</div>
          <div class="stat-desc">Muy bien!</div>
        </div>
      </div>
      <div class="flex gap-2">
        <button class="btn" @click="decrementFirstCounter">-1</button>
        <button class="btn" @click="incrementFirstCounter">+1</button>
      </div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Contador 2</div>
          <div class="stat-value">{{ counter.second }}</div>
          <div class="stat-desc">Muy bien!</div>
        </div>
      </div>
      <div class="flex gap-2">
        <button class="btn" @click="decrementSecondCounter">-1</button>
        <button class="btn" @click="incrementSecondCounter">+1</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const counter = reactive({
  first: 0,
  second: 0,
})

const incrementFirstCounter = () => {
  counter.first++
}

const decrementFirstCounter = () => {
  counter.first--
}

const incrementSecondCounter = () => {
  counter.second++
}

const decrementSecondCounter = () => {
  counter.second--
}
</script>

<style scoped></style>
