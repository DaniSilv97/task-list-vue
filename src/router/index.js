import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Colors from '../views/Colors.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/colors',
    name: 'Colors',
    component: Colors
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
