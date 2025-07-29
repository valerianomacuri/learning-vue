interface Menu {
  children?: Menu[]
  name?: string
  path?: string
  title?: string
}

export const menu: Menu[] = [
  {
    name: 'Fundamentos', // Sección principal: Conceptos básicos de Vue.js
    path: 'fundamentals',
    children: [
      {
        name: 'Instalación', // Cómo configurar un proyecto Vue.
        children: [
          {
            name: 'create-vue', // Herramienta oficial para iniciar nuevos proyectos Vue.
          },
        ],
      },
      {
        name: 'Declaración de componentes', // Formas de definir componentes Vue.
        path: 'declaration',
        children: [
          {
            name: '<script setup>', // Azúcar sintáctica para usar Composition API de forma concisa.
            path: '#script-setup',
          },
        ],
      },
      {
        name: 'Textos e Interpolación', // Mostrar texto y datos reactivos.
        children: [
          {
            name: '{{ }} (Interpolación de texto)', // Insertar valores reactivos en el template.
            path: '#interpolation',
          },
          {
            name: 'v-html', // Renderizar HTML sin sanitizar (¡usar con precaución!).
            path: '#v-html',
          },
          {
            name: 'v-text', // Similar a interpolación, pero establece el textContent del elemento.
            path: '#v-text',
          },
        ],
      },
      {
        name: 'Estilos', // Cómo aplicar estilos a los componentes.
        path: 'styles', // Añadido 'styles' para la ruta de esta sección.
        children: [
          {
            name: '<style scoped>', // Estilos que se aplican solo al componente actual.
            path: '#style-scoped',
          },
          {
            name: '<style module>', // Estilos con módulos CSS para evitar conflictos.
            path: '#style-module',
          },
          {
            name: 'Clases dinámicas', // Cómo aplicar clases CSS condicionalmente.
            path: '#dynamic-classes',
          },
          {
            name: 'Estilos en línea', // Cómo aplicar estilos CSS directamente en el HTML.
            path: '#inline-styles',
          },
        ],
      },
    ],
  },
  {
    name: 'Manejo del estado local', // Gestión del estado dentro de un componente.
    path: 'local-state',
    children: [
      {
        name: 'Estado', // Introducción al estado reactivo.
        children: [
          {
            name: 'ref', // Una forma de hacer variables reactivas.
            path: '#ref',
          },
          {
            name: 'reactive', // Una forma de hacer objetos reactivos.
            path: '#reactive',
          },
          {
            name: 'watch', // Observar y reaccionar a cambios específicos en el estado.
            path: '#watch',
          },
          {
            name: 'watchEffect', // Observar y ejecutar efectos secundarios basados en dependencias reactivas.
            path: '#watch-effect',
          },
        ],
      },
    ],
  },
  {
    name: 'Visualización de datos', // Cómo mostrar datos en la interfaz.
    path: 'data-display',
    children: [
      {
        name: 'Condicionales', // Mostrar u ocultar elementos basados en condiciones.
        children: [
          {
            name: 'v-if', // Renderizado condicional de elementos (alterna el DOM).
            path: '#v-if',
          },
          {
            name: 'v-else-if', // Condición adicional para `v-if`.
            path: '#v-else-if',
          },
          {
            name: 'v-else', // Caso alternativo para `v-if` o `v-else-if`.
            path: '#v-else',
          },
          {
            name: 'v-show', // Muestra u oculta elementos con CSS (siempre en el DOM).
            path: '#v-show',
          },
          {
            name: 'template con v-if', // Usar `<template>` para agrupar elementos condicionales sin un wrapper.
            path: '#template-v-if',
          },
        ],
      },
      {
        name: 'Listas', // Renderizar colecciones de datos.
        children: [
          {
            name: 'v-for', // Directiva para renderizar una lista de elementos.
            path: '#v-for',
          },
          {
            name: 'Key', // Atributo necesario para el seguimiento eficiente de listas.
            path: '#key',
          },
        ],
      },
    ],
  },
  {
    name: 'Comunicación entre componentes', // Formas en que los componentes interactúan.
    path: 'communication',
    children: [
      {
        name: 'Padre → hijo', // Pasar datos del componente padre al hijo.
        children: [
          {
            name: 'defineProps()', // Declarar las propiedades esperadas de un componente.
            path: '#define-props',
          },
        ],
      },
      {
        name: 'Hijo → padre', // Enviar eventos y datos del componente hijo al padre.
        children: [
          {
            name: 'emit($event)', // Emitir eventos personalizados desde el hijo.
            path: '#emit',
          },
          {
            name: 'defineEmits()', // Declarar los eventos que un componente puede emitir.
            path: '#define-emits',
          },
        ],
      },
      {
        name: 'Entre hermanos', // Compartir estado o comunicación entre componentes del mismo nivel.
        children: [
          {
            name: 'provide/inject', // Un par para pasar datos profundamente en el árbol de componentes.
            path: '#provide-inject',
          },
        ],
      },
      {
        name: 'Slots / Children', // Cómo los componentes pueden aceptar y renderizar contenido pasado desde el padre.
        path: 'slots-children',
        children: [
          {
            name: '<slot>', // Punto de inserción de contenido para el componente.
            path: '#slot',
          },
          {
            name: 'Named Slots', // Slots con nombre para insertar contenido en ubicaciones específicas.
            path: '#named-slots',
          },
          {
            name: 'Scoped Slots', // Slots que exponen datos del hijo al padre.
            path: '#scoped-slots',
          },
        ],
      },
    ],
  },
  {
    name: 'Ciclo de vida del componente', // Ganchos (hooks) que se ejecutan en diferentes fases de un componente.
    path: 'lifecycle',
    children: [
      {
        name: 'Montaje', // Ganchos antes y después de que el componente sea añadido al DOM.
        path: 'mounting',
        children: [
          {
            name: 'onBeforeMount()', // Se ejecuta justo antes de que el componente sea montado.
            path: 'on-before-mount',
          },
          {
            name: 'onMounted()', // Se ejecuta después de que el componente sea montado en el DOM.
            path: 'on-mounted', // Corrección del nombre del gancho.
          },
        ],
      },
      {
        name: 'Actualización', // Ganchos antes y después de que el componente se actualice.
        path: 'updating', // Añadido 'updating' para la ruta.
        children: [
          {
            name: 'onBeforeUpdate()', // Se ejecuta antes de que el DOM del componente se actualice.
            path: 'on-before-update',
          },
          {
            name: 'onUpdated()', // Se ejecuta después de que el DOM del componente se actualice.
            path: 'on-updated',
          },
        ],
      },
      {
        name: 'Desmontaje', // Ganchos antes y después de que el componente sea removido del DOM.
        path: 'unmounting', // Añadido 'unmounting' para la ruta.
        children: [
          {
            name: 'onBeforeUnmount()', // Se ejecuta justo antes de que el componente sea desmontado.
            path: 'on-before-unmount',
          },
          {
            name: 'onUnmounted()', // Se ejecuta después de que el componente sea desmontado del DOM.
            path: 'on-unmounted',
          },
        ],
      },
      {
        name: 'Depuración y Error Handling', // Ganchos para depurar o manejar errores.
        path: 'debugging-errors',
        children: [
          {
            name: 'onErrorCaptured()', // Captura errores propagados desde componentes descendientes.
            path: 'on-error-captured',
          },
          {
            name: 'onRenderTracked()', // Para depuración de reactividad: rastrea cuándo una propiedad reactiva es leída.
            path: 'on-render-tracked',
          },
          {
            name: 'onRenderTriggered()', // Para depuración de reactividad: rastrea cuándo una propiedad reactiva causa una re-renderización.
            path: 'on-render-triggered',
          },
        ],
      },
    ],
  },
  {
    name: 'Enrutamiento', // Navegación dentro de la aplicación con Vue Router.
    path: 'routing',
    children: [
      {
        name: 'Configuración', // Cómo configurar Vue Router en tu aplicación.
        path: 'configuration',
      },
      {
        name: 'Rutas anidadas', // Definir rutas que son hijos de otras rutas.
        path: 'nested-routes',
      },
      {
        name: 'Navegación declarativa', // Usar el componente `<router-link>` para la navegación.
        path: 'declarative-navigation', // Nombre más específico.
      },
      {
        name: 'Navegación programática', // Usar métodos de router (ej., `router.push()`) para navegar.
        path: 'programmatic-navigation',
      },
      {
        name: 'Parámetros de ruta', // Capturar valores de la URL como parámetros.
        path: 'route-params',
      },
      {
        name: 'Guards de navegación', // Proteger rutas con lógica de autorización o redirección.
        path: 'navigation-guards',
      },
    ],
  },
  {
    name: 'Manejo del estado global', // Gestión del estado compartido entre múltiples componentes.
    path: 'global-state',
    children: [
      {
        name: 'Pinia', // El store de estado recomendado para Vue.js.
        path: 'pinia',
      },
    ],
  },
  {
    name: 'Performance y Optimización', // Técnicas para mejorar el rendimiento de la aplicación.
    path: 'performance',
    children: [
      {
        name: 'Lazy Loading', // Carga de componentes o rutas solo cuando son necesarios.
        path: 'lazy-loading',
        children: [
          {
            name: 'defineAsyncComponent()', // Cargar componentes de forma asíncrona.
            path: '#define-async-component',
          },
          {
            name: 'Lazy Loading de Rutas', // Cargar módulos de ruta de forma asíncrona con Vue Router.
            path: '#lazy-loading-routes',
          },
        ],
      },
      {
        name: 'Memoización', // Caché de valores computados para evitar recálculos innecesarios.
        path: 'memoization',
        children: [
          {
            name: 'computed()', // Propiedades computadas que son inherentemente memoizadas.
            path: '#computed-memoization', // Nombre más descriptivo.
          },
          {
            name: 'watch()', // Uso de `watch` para optimizaciones específicas.
            path: '#watch-optimization',
          },
          {
            name: 'v-once', // Renderiza un elemento o componente solo una vez.
            path: '#v-once',
          },
        ],
      },
    ],
  },
]
