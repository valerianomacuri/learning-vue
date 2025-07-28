import { marked } from 'marked'

export default {
  title: '# ref',
  description: await marked(
    'Este componente demuestra cómo **gestionar el estado local** en Vue 3 utilizando la Composition API. La variable `counter` se declara con `ref(0)`, lo que la convierte en un valor **reactivo** dentro del componente. Esto significa que cuando `counter.value` cambia (al hacer clic en los botones), Vue actualiza automáticamente la interfaz de usuario. Como el estado vive dentro del componente, es **local**: no se comparte con otros componentes a menos que se extraiga a un composable o store.',
  ),
}
