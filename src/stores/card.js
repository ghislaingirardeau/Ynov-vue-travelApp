import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCardStore = defineStore('card', () => {
  const card = ref([])

  const totalCardPrice = computed(() => {
    let cumulTotal = 0
    for (const item of card.value) {
      cumulTotal += item.quantity * item.price
    }
    return cumulTotal
  })

  function addToCardStore(destinationPanier) {
    console.log(destinationPanier)
    card.value.push(destinationPanier)
  }

  return { card, addToCardStore, totalCardPrice }
})
