<template>
  <article class="prose prose-sm md:prose-base mb-8 max-w-none">
    <h1>Estado</h1>
  </article>
  <template v-for="feature in features" :key="feature.title">
    <BaseFeatureShowcase
      :title="feature.title"
      :description="feature.description"
      :anchor="feature.anchor"
    >
      <template #example>
        <BaseFeatureExample>
          <component :is="feature.component" />
        </BaseFeatureExample>
      </template>
      <template #file-list>
        <BaseFeatureFileList>
          <template v-for="file in feature.files" :key="file.name">
            <BaseFeatureFileItem
              :code="file.code"
              :default-is-open="file.defaultIsOpen"
              :file-name="file.name"
              :name="feature.title"
            />
          </template>
        </BaseFeatureFileList>
      </template>
    </BaseFeatureShowcase>
  </template>
</template>

<script setup lang="ts">
import { BaseFeatureExample, BaseFeatureFileList, BaseFeatureShowcase } from '.'
import { features } from '../data'
import BaseFeatureFileItem from './BaseFeatureFileItem.vue'
</script>

<style scoped></style>
