<script setup>
import sourceData from '@/assets/data.json'

const destinations = sourceData.destinations
</script>

<template>
  <div class="container">
    <main class="home">
      <h1>destination</h1>
      <div class="destinations">
        <div v-for="destination in destinations" :key="destination.id">
          <h2>
            {{ destination.name }}
          </h2>
          <img :src="`/images/${destination.image}`" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
