<template>
  <template v-for="feature in features" :key="feature.title">
    <BaseFeatureShowcase :title="feature.title" :description="feature.description">
      <template #example>
        <BaseFeatureExample title="Ejemplo interactivo: Actualizar un contador">
          <component :is="feature.exampleComponent" />
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
import features from '../data/index'
import BaseFeatureFileItem from './BaseFeatureFileItem.vue'
console.log({ features })
</script>

<style scoped></style>
