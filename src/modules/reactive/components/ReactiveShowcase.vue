<template>
  <BaseFeatureShowcase :title="title" :description="description">
    <template #example>
      <BaseFeatureExample title="Ejemplo interactivo: Manejar varios contadores">
        <ReactiveExample />
      </BaseFeatureExample>
    </template>
    <template #file-list>
      <BaseFeatureFileList>
        <BaseFeatureFileItem
          :code="reactiveExampleRaw"
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
import { ReactiveExample } from '.'
import reactiveExampleRaw from './ReactiveExample.vue?raw'

import data from '../data'

const { title, description } = data
const fileName = 'ReactiveExample.vue'
</script>

<style scoped></style>
