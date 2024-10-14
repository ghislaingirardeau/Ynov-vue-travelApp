<template>
  <div>
    <button @click="decrease" type="button">-</button>
    {{ count }}
    <button @click="increase" type="button">+</button>
    <div>
      <button @click="addToCard" type="button">Add</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCardStore } from '@/stores/card'

const store = useCardStore()

const props = defineProps({
  destination: Object
})

const count = ref(0)
function increase() {
  count.value++
}
function decrease() {
  if (count.value === 0) {
    return
  }
  count.value--
}

function addToCard() {
  store.addToCardStore({
    id: props.destination.id,
    name: props.destination.name,
    price: props.destination.price,
    quantity: count.value
  })
  count.value = 0
}
</script>

<style lang="scss" scoped></style>
