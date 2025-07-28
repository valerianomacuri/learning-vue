<template>
  <section>
    <article class="prose prose-sm md:prose-base mb-8 max-w-none">
      <h3>
        {{ title }}
      </h3>
      <p class="text-justify" v-html="description"></p>
    </article>
    <slot name="example"></slot>
    <slot name="file-list"></slot>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
}

const { title = '', description = '' } = defineProps<Props>()
</script>
