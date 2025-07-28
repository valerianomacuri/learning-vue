interface Menu {
  children?: Menu[]
  name?: string
  path?: string
  title?: string
}

export const menu: Menu[] = [
  {
    name: 'Fudamentos',
    path: 'fundamentals',
    children: [
      {
        name: 'Instalación',
        children: [
          {
            name: 'create-vue',
          },
        ],
      },
      {
        name: 'Sintaxis',
        path: 'syntax',
        children: [
          {
            name: 'Vue templates',
            path: '#vue-templates',
          },
        ],
      },
      {
        name: 'Estilos',
        path: '',
        children: [
          {
            name: '<style scoped>',
            path: '#style-scoped',
          },
        ],
      },
    ],
  },
  {
    name: 'Declaración de componentes',
    path: 'declaration',
    children: [
      {
        name: 'Moderna',
        path: 'modern',
        children: [
          {
            name: '<script setup>',
            path: '#script-setup',
          },
        ],
      },
    ],
  },
  {
    name: 'Manejo del estado local',
    path: 'local-state',
    children: [
      {
        name: 'Estado',
        children: [
          {
            name: 'ref',
            path: '#ref',
          },
          {
            name: 'reactive',
            path: '#reactive',
          },
        ],
      },
    ],
  },
  {
    name: 'Visualización de datos',
    path: 'data-display',
    children: [
      {
        name: 'Condicionales',
        children: [
          {
            name: 'v-if',
            path: '#v-if',
          },
          {
            name: 'v-else-if',
            path: '#v-else-if',
          },
          {
            name: 'v-show',
            path: '#v-show',
          },
        ],
      },
      {
        name: 'Listas',
        children: [
          {
            name: 'v-for',
            path: '#v-for',
          },
        ],
      },
    ],
  },
  {
    name: 'Comunicación entre componentes',
    path: 'communication',
    children: [
      {
        name: 'Padre → hijo',
        children: [
          {
            name: 'defineProps()',
            path: '#define-props',
          },
        ],
      },
      {
        name: 'Hijo → padre',
        children: [
          {
            name: 'emit($event)',
            path: '#emit',
          },
        ],
      },
      {
        name: 'Entre hermanos',
        children: [
          {
            name: 'provide/inject',
            path: '#provide-inject',
          },
        ],
      },
      {
        name: 'Slots / Children',
        path: 'slots-children',
        children: [
          {
            name: '<slot>',
          },
        ],
      },
    ],
  },
  {
    name: 'Ciclo de vida del componente',
    path: 'lifecycle',
    children: [
      {
        name: 'Montaje',
        path: 'mounting',
        children: [
          {
            name: 'onBeforeMount()',
            path: 'on-before-mount',
          },
          {
            name: 'onMount()',
            path: 'on-mount',
          },
        ],
      },
      {
        name: 'Actualización',
      },
      {
        name: 'Desmontaje',
      },
    ],
  },
  {
    name: 'Enrutamiento',
    path: 'routing',
    children: [
      {
        name: 'Configuración',
        path: 'configuration',
      },
      {
        name: 'Rutas anidadas',
        path: 'nested-routes',
      },
      {
        name: 'Navegación',
        path: 'navigation',
      },
      {
        name: 'Navegación programática',
        path: 'programmatic-navigation',
      },
    ],
  },
  {
    name: 'Manejo del estado global',
    path: 'global-state',
    children: [
      {
        name: 'Pinia',
        path: 'pinia',
      },
    ],
  },
  {
    name: 'Performance y Optimización',
    path: 'performance',
    children: [
      {
        name: 'Lazy Loading',
        children: [
          {
            name: 'defineAsyncComponent()',
          },
        ],
      },
      {
        name: 'Memoización',
        children: [
          {
            name: 'computed()',
          },
          {
            name: 'watch()',
          },
          {
            name: 'cache()',
          },
        ],
      },
    ],
  },
]
