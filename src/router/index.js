import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'listView',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/detail',
      name: 'detailView',
      component: () => import('../views/DetailView.vue')
    }
  ]
})

export default router
