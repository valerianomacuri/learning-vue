<template>
  <BaseFeatureShowcase :title="title" :description="description">
    <template #example>
      <BaseFeatureExample title="Ejemplo interactivo: Manejar varios contadores">
        <ReactiveExample />
      </BaseFeatureExample>
    </template>
    <template #code>
      <BaseFeatureFileContainer>
        <BaseFeatureFile name="ReactiveExample.vue" :default-is-open="true">
          <BaseFeatureCode :code="reactiveExampleRaw" />
        </BaseFeatureFile>
      </BaseFeatureFileContainer>
    </template>
  </BaseFeatureShowcase>
</template>

<script setup lang="ts">
import {
  BaseFeatureCode,
  BaseFeatureExample,
  BaseFeatureFile,
  BaseFeatureFileContainer,
  BaseFeatureShowcase,
} from '@/shared/components'
import { ReactiveExample } from '.'
import reactiveExampleRaw from './ReactiveExample.vue?raw'

import data from '../data'

const { title, description } = data
</script>

<style scoped></style>
