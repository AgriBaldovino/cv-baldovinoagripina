import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SerotonineProject from '../components/SerotonineProject.vue'
import BakingInBlissProject from '../components/BakingInBlissProject.vue'
import AgribNailsProject from '../components/AgribNailsProject.vue'

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
  },
  {
    path: '/proyecto/baking-in-bliss',
    name: 'baking-in-bliss',
    component: BakingInBlissProject
  },
  {
    path: '/proyecto/agrib-nails',
    name: 'agrib-nails',
    component: AgribNailsProject
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 