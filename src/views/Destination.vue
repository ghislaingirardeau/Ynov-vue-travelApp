<template>
  <div>
    <h1>Destination : {{ route.params.id }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import sourceData from '../assets/data.json'
const destinations = sourceData.destinations

const route = useRoute()

const findDestination = destinations.find((objet) => route.params.id == objet.id)

console.log(findDestination)
</script>

<style lang="scss" scoped></style>
