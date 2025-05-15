import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SerotonineProject from '../components/SerotonineProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/proyecto/serotonine',
    name: 'serotonine',
    component: SerotonineProject
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 