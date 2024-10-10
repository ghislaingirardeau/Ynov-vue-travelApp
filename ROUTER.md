# Vue JS - Router

REPO: https://github.com/ghislaingirardeau/Ynov-vue-travelApp

Création d'un site e-commerce d'agence de voyage

Les données sont fournies via un fichier JSON => data.json
Les images sont également fournies et seront placées dans le dossier /public

Objectif: pouvoir naviguer entre différentes pages d'un site web

## Installation

Si projet existe déjà, ajoute la dépendance: **npm install vue-router@4**

Sinon install vue et dans la config, cocher 'router'

Dans `main.ts`, on va ajouter la dépendance `router` :

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
```

Vue router nous donne alors accès à 2 components: router-link et router-view

### Router Link

Au lieu d'utiliser des balises <a> ordinaires, nous utilisons le composant personnalisé RouterLink pour créer des liens. Cela permet à Vue Router de modifier l'URL sans recharger la page, de gérer la génération d'URL.

### Router View

Le composant RouterView indique à Vue Router où rendre le composant de route actuel. C'est le composant qui correspond au chemin de l'URL courante. Il n'a pas besoin d'être dans App.vue, vous pouvez le mettre n'importe où pour l'adapter à votre disposition, mais il doit être inclus quelque part, sinon Vue Router ne rendra rien.

## Mise en place - /router

**Exo: show destinations**

### Création de la page Home, dans app.vue

Import le component et spécifie sur quel route il faudra charger ce component

```js
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
```

Ici, on dit 'quand tu seras sur la route 'http://localhost:5173/' charge dans router-view le component HomeView

#### Dans app.vue

Import le component de la dépendance vue-router

```js
import { RouterLink, RouterView } from 'vue-router'
```

Utilise le component dans le app.vue

```html
<RouterView />
```

Comme nous sommes sur la route `/` RouterView va renvoyer le component `HomeView`

### Exo - creation des pages Brazil et Panama

1- Dans `/views` créer un component pour chaque pays que l'on va appeler `BrazilView`..., ce composant affichera juste le nom du pays dans le titre pour le moment
2- Dans `/router/index.js`, ajouter pour chaque pays une route `/brazil` et panama, importer le component de chaque pays et le renvoyer

Quand on est bon, taper dans l'url http://localhost:5173/brazil , vous devriez voir apparaitre le nom de la destination

Dans chaque component, on peut avoir accès aux informations de la route grace à vue-router

```js
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
```

useRouter() => va nous permettre de naviguer grace à des méthodes de cet objet
useRoute() => va nous permettre d'avoir des infos sur la route

### Création des liens

Pour naviguer au clique plutot de taper l'url, on va ajouter des liens de navigation

```html
<RouterLink to="/brazil">
  <h2>Brazil</h2>
  <img :src="`/images/brazil`" />
</RouterLink>
```

On peut aussi utiliser le nom de la route !

```html
<RouterLink :to="{ name: 'brazil'}">
  <h2>Brazil</h2>
  <img :src="`/images/brazil`" />
</RouterLink>
```

#### Exo - faire la meme chose avec la route Panama

#### Exo - appliquer RouterLink via la boucle v-for (code commenté)

## Routes dynamiques

Tout fonctionne mais si on a 1000 destinations, il faut tous les saisir !!

Dans une route, on va pouvoir lui passer des parametres (des informations) qui vont changer
=> suivant le parametre donné, on va afficher un component spécifique

dans /router/index.js

```js
{
    path: '/destination/:id', // ":" est le caractère CLE pour définir un parametre dynamique
    // :id, va prendre toutes la valeur qui seront saisie après http://localhost:5173/destination/
    name: 'destination.view',
    component: () => import('../views/DestinationView.vue')
  }
```

De plus on importe ce component de manière dynamique

Dans le component, le lien pour appeler une route dynamique sera donc

```js
<RouterLink
    :to="{ name: 'destination.view', params: { id: destination.id } }"
></RouterLink>
```

Quelque soit la valeur de id, c'est le component `DestinationView` qui sera affiché

Dans `DestinationView`, on peut récupérer l'id saisie et affiché la destination en fonction de celui-ci, grace à `useRoute()`

```js
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.id)
```

### EXO

On peut maintenant utiliser cet id,
CHERCHER dans le fichier data.json la destination correspondante que l'on va mettre dans une variable
Afficher la destination correspondante

Si pas de destination correspondante, affichera `not found`

### Multiple params

On peut mettre plusieurs params dans une route, par exemple on peut ajouter le nom de la destination après l'id

**Une idée de comment faire ?**

**réponse**

```js
{
    path: '/destination/:id/:slug', // ":" est le caractère CLE pour définir un parametre dynamique
    // http://localhost:5173/destination/1/brazil
    name: 'destination.view',
    component: () => import('../views/DestinationView.vue')
  }
```

## Programmatic Navigation

La navigation avec RouterLink fonctionne très bien mais si on veut envoyer l'utilisateur vers une route sans que celui-ci est cliqué sur un lien (après la soumission d'un formulaire par exemple)

C'est là que l'on va pouvoir utiliser `useRouter()`

```js
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router)
// router.push({ name: 'home' }) => va vers une autre page
// router.go(-1) => navigation en arrière
```

Dans router, nous avons accès à beaucoup de méthode dont `push` ou encore `go`

### EXO - Mettre en place un bouton de retour sur les pages de destinations

## Navigation Guards

Pour protéger certaines routes que je ne veux rendre accessible quà certain utilisateur (ex: admin du site)

Je peux venir mettre une logique qui va bloquer ou non l'accès à une route

```js
{
    path: '/test',
    name: 'test',
    component: testView,
    beforeEnter: (to, from) => {
      console.log(to)
      return true // si return true la navigation se fera sinon elle sera bloqué
    }
}
```

## EXO final

### Mettre en place une route pour voir le panier /CardView

Card view, va juste afficher un titre `Votre panier`

### Mettre en place un component /TheNavigation

Faire un barre de navigation avec les différents liens vers chaque pays !

## Récupération de données

Pour utiliser les données d'une API

```js
const loading = ref(false)
let destination = ref({})

onBeforeMount(() => {
  fetchData()
})

async function fetchData() {
  loading.value = true
  try {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}`)
    destination.value = await response.json()
  } catch (err) {
    console.log(err)
  }
  loading.value = false
}
```
