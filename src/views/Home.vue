<template>
  <main class="home">
    <h1>Destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.id">
        <RouterLink
          :to="{ name: 'destinations', params: { id: destination.id, slug: destination.slug } }"
        >
          <h2>{{ destination.name }}</h2>
          <img :src="'/images/' + destination.image" alt="" />
        </RouterLink>
        <span>Prix: {{ destination.price }}€</span>
        <CardInput :destination="destination" />
      </div>
    </div>
  </main>
</template>

<script setup>
// import { useRouter } from 'vue-router'
import CardInput from '@/components/cardInput.vue'
import sourceData from '../assets/data.json'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const destinations = sourceData.destinations

// const router = useRouter()
</script>
