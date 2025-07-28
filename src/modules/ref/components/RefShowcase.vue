<template>
  <BaseFeatureShowcase :title="title" :description="description">
    <template #example>
      <BaseFeatureExample title="Ejemplo interactivo: Actualizar un contador">
        <RefExample />
      </BaseFeatureExample>
    </template>
    <template #code>
      <BaseFeatureFileContainer>
        <BaseFeatureFile :name="fileName" :file-name="fileName" :default-is-open="true">
          <BaseFeatureCode :code="refExampleRaw" />
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
import { RefExample } from '.'
import refExampleRaw from './RefExample.vue?raw'

import data from '../data'

const { title, description } = data
const fileName = 'RefExample.vue'
</script>

<style scoped></style>
