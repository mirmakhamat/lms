import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/courses',
    component: () => import('../views/CoursesView.vue')
  },
  {
    path: '/blogs',
    component: () => import('../views/BlogsView.vue')
  },
  {
    path: '/blog/:id',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/faq',
    component: () => import('../views/FaqView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
