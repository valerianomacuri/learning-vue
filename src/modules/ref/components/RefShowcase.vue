<template>
  <BaseFeatureShowcase :title="title" :description="description">
    <template #example>
      <BaseFeatureExample title="Ejemplo interactivo: Actualizar un contador">
        <RefExample />
      </BaseFeatureExample>
    </template>
    <template #file-list>
      <BaseFeatureFileList>
        <BaseFeatureFileItem
          :code="refExampleRaw"
          :default-is-open="true"
          :file-name="fileName"
          :name="fileName"
        />
      </BaseFeatureFileList>
    </template>
  </BaseFeatureShowcase>
</template>

<script setup lang="ts">
import {
  BaseFeatureExample,
  BaseFeatureFileItem,
  BaseFeatureFileList,
  BaseFeatureShowcase,
} from '@/shared/components'
import { RefExample } from '.'
import refExampleRaw from './RefExample.vue?raw'

import data from '../data'

const { title, description } = data
const fileName = 'RefExample.vue'
</script>

<style scoped></style>
