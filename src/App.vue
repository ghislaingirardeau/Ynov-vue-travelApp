<script setup>
import { useRoute } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
const route = useRoute()
</script>

<template>
  <TheNavigation />
  <div class="container">
    <RouterView v-slot="{ Component }">
      <component :is="Component" :key="route.path" />
    </RouterView>
  </div>
</template>

<style scoped></style>
