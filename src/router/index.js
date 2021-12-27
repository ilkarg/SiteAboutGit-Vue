import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Instruction from '../views/Instruction.vue'
import Links from '../views/Links.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/instruction',
    name: 'Instruction',
    component: Instruction
  },
  {
    path: '/links',
    name: 'Links',
    component: Links
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
