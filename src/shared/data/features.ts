import { ComponentExample, ReactiveExample, RefExample } from '@/modules/base/components'
import { marked } from 'marked'

import componentExampleRaw from '../../modules/base/components/ComponentExample.vue?raw'
import refExampleRaw from '../../modules/base/components/RefExample.vue?raw'
import reactiveExampleRaw from '../../modules/base/components/ReactiveExample.vue?raw'

export const features = [
  {
    title: '<script setup>',
    description: '',
    anchor: 'script-setup',
    exampleTitle: 'Componente Vue: Hello World',
    exampleComponent: ComponentExample,
    files: [
      {
        name: 'ComponentExample.vue',
        code: componentExampleRaw,
        defaultIsOpen: true,
      },
    ],
  },
  {
    title: 'ref',
    description: await marked(
      'Este componente demuestra cómo **gestionar el estado local** en Vue 3 utilizando la Composition API. La variable `counter` se declara con `ref(0)`, lo que la convierte en un valor **reactivo** dentro del componente. Esto significa que cuando `counter.value` cambia (al hacer clic en los botones), Vue actualiza automáticamente la interfaz de usuario. Como el estado vive dentro del componente, es **local**: no se comparte con otros componentes a menos que se extraiga a un composable o store.',
    ),
    anchor: 'ref',
    exampleTitle: 'Actualizar un contador',
    exampleComponent: RefExample,
    files: [
      {
        name: 'RefExample.vue',
        code: refExampleRaw,
        defaultIsOpen: true,
      },
    ],
  },
  {
    title: 'reactive',
    anchor: 'reactive',
    description: await marked(
      'Este componente utiliza `reactive()` de Vue 3 para gestionar el estado de dos contadores dentro de un solo objeto. Gracias a `reactive`, es posible agrupar múltiples propiedades (`first` y `second`) en un mismo estado reactivo y acceder directamente a ellas desde el template sin necesidad de usar `.value`. A diferencia de `ref()`, que se usa para valores primitivos y requiere acceder con `.value`, `reactive()` es más adecuado cuando se necesita trabajar con objetos completos de forma clara y directa.',
    ),
    exampleTitle: 'Manejar varios contadores',
    exampleComponent: ReactiveExample,
    files: [
      {
        name: 'ReactiveExample.vue',
        code: reactiveExampleRaw,
        defaultIsOpen: true,
      },
    ],
  },
]
