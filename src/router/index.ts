import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import SeriesView from '../views/SeriesView.vue'
import DetailView from '../views/DetailView.vue'
import FavListView from '../views/FavListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { path: '/home/1' },
      children: [
        {
          path: '/home/:page',
          name: 'home',
          component: HomeView
        }
      ],
      meta: {
        reload: true
      }
    },
    {
      path: '/movies/:page',
      name: 'movies',
      component: MoviesView,
      
    },
    {
      path: '/series/:page',
      name: 'series',
      component: SeriesView
    },
    {
      path: '/detail/:type/:id',
      name: 'Detail',
      component: DetailView,
      props: true,
    },
    {
      path: '/my-list',
      name: 'My List',
      component: FavListView,
    }
  ]
})

export default router
