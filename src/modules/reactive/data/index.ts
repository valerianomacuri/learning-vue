import { marked } from 'marked'

export default {
  title: '# reactive',
  description: await marked(
    'Este componente utiliza `reactive()` de Vue 3 para gestionar el estado de dos contadores dentro de un solo objeto. Gracias a `reactive`, es posible agrupar múltiples propiedades (`first` y `second`) en un mismo estado reactivo y acceder directamente a ellas desde el template sin necesidad de usar `.value`. A diferencia de `ref()`, que se usa para valores primitivos y requiere acceder con `.value`, `reactive()` es más adecuado cuando se necesita trabajar con objetos completos de forma clara y directa.',
  ),
}
