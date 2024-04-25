import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue') // Make sure the path here is correct
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')// Make sure ContactView is imported correctly
  },

 
]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
