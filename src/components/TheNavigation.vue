<template>
  <nav id="nav">
    <RouterLink id="logo" :to="{ name: 'home' }"> Home </RouterLink>
    <RouterLink :to="{ name: 'panier' }"> Panier </RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destinations', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
  </nav>
</template>

<script setup>
import sourceData from '../assets/data.json'
const destinations = sourceData.destinations
</script>

<style scoped></style>
