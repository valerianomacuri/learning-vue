<template>
  <aside
    id="sidebar"
    class="fixed left-0 top-20 bottom-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-40 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out"
  >
    <nav class="p-6">
      <ul class="space-y-2">
        <li>
          <a
            href="#introduccion"
            onclick="closeMobileMenu()"
            class="nav-link flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span class="mr-3">📚</span>
            Introducción
          </a>
        </li>
        <li>
          <a
            href="#ciclo-vida"
            onclick="closeMobileMenu()"
            class="nav-link flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span class="mr-3">🔄</span>
            Ciclo de Vida
          </a>
        </li>
        <li>
          <a
            href="#eventos"
            onclick="closeMobileMenu()"
            class="nav-link flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span class="mr-3">🎯</span>
            Manejo de Eventos
          </a>
        </li>
        <li>
          <a
            href="#estado-local"
            onclick="closeMobileMenu()"
            class="nav-link flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span class="mr-3">🧠</span>
            Estado Local
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
