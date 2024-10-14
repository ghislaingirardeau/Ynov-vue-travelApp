<template>
  <div>
    <h2>Le panier</h2>
    <div v-if="store.card.length === 0">Le panier est vide</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Quantité</th>
            <th scope="col">Prix unitaire</th>
            <th scope="col">Prix Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in store.card" :key="item.id">
            <th scope="row">
              {{ item.name }}
            </th>
            <th scope="row" class="col_quantity">
              {{ item.quantity }}
            </th>
            <th scope="row">
              {{ item.price }}
            </th>

            <th scope="row" class="col_total">
              {{ item.quantity * item.price }}
            </th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>
              {{ store.totalCardPrice }}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useCardStore } from '@/stores/card'
const store = useCardStore()
</script>

<style scoped>
.col_quantity {
  width: 100px;
}
.col_total {
  width: 100px;
}
</style>
