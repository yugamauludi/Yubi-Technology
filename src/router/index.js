import { createRouter, createWebHistory } from 'vue-router'
import MoviesList from '../views/MoviesList.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Favorite from '../views/Favorite.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'movies',
      component: MoviesList 
    },
    {
      path: '/movies/:id',
      name: 'movieDetail',
      component: MovieDetail
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    }
  ]
})

export default router