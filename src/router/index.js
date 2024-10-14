import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Brazil from '../views/Brazil.vue'
import Panama from '../views/Panama.vue'
import Panier from '../views/Panier.vue'

const routes = [
  {
    // chemin de l'url pour accéder à la route
    path: '/',
    // on peut donner un nom à la route
    name: 'home',
    // charge le component quand navigue sur la route ou url /
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    beforeEnter: (to, from) => {
      // pour proteger une route avec un accès

      return true
    }
  },
  {
    path: '/panier',
    name: 'panier',
    component: Panier
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: Brazil
  },
  {
    path: '/panama',
    name: 'panama',
    component: Panama
  },
  {
    path: '/destinations/:id/:slug',
    name: 'destinations',
    component: () => import('../views/Destination.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
