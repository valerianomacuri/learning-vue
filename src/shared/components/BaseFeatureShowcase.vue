<template>
  <section :id="anchor" class="pt-4">
    <article class="prose prose-sm md:prose-base mb-8 max-w-none">
      <h3>
        <a class="no-underline" :href="'#' + anchor"> # {{ title }} </a>
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
  anchor?: string
}

const { title = '', description = '', anchor = '' } = defineProps<Props>()
</script>
