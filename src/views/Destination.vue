<template>
  <section v-if="findDestination" class="destinations">
    <h1>{{ findDestination.name }}</h1>
    <div class="destination-details">
      <img :src="'/images/' + findDestination.image" alt="" />
      <p>
        {{ findDestination.description }}
      </p>
      <button @click="goReturn" type="button">Retour</button>
      <button @click="goContact" type="button">Contact</button>
    </div>
  </section>
  <section v-else>
    <h2>destination introuvable</h2>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import sourceData from '../assets/data.json'
const destinations = sourceData.destinations

const route = useRoute()
const router = useRouter()

const findDestination = destinations.find((objet) => route.params.id == objet.id)

function goContact() {
  router.push({ name: 'contact' })
}

function goReturn() {
  router.go(-1)
}
</script>

<style lang="scss" scoped></style>
