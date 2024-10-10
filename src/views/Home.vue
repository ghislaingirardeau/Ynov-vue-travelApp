<template>
  <main class="home">
    <h1>Destinations</h1>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destinations', params: { id: destination.id } }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="'/images/' + destination.image" alt="" />
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
// import { useRouter } from 'vue-router'
import sourceData from '../assets/data.json'
const destinations = sourceData.destinations
console.log(destinations)

// const router = useRouter()
</script>
