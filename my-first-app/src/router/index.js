import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import CanvasPage from '../views/canvasPage.vue'
import SvgPage from '../views/svgPage.vue'
import CssPage from '../views/cssPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/canvasPage',
    name: 'Canvas Page',
    component: CanvasPage
  },
  {
    path: '/svgPage',
    name: 'SVG Page',
    component: SvgPage
  },
  {
    path: '/cssPage',
    name: 'CSS Page',
    component: CssPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
