import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
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
  return { count, increase, decrease }
})
