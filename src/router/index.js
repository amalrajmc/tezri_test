import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Parser from '../views/Parser.vue'
import Reverse from '../views/Reverse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Parser',
    name: 'Parser',
    component: Parser
  },
  {
    path: '/Reverse',
    name: 'Reverse',
    component: Reverse
  },
  {
    path: '/matrix',
    name: 'matrix',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/matrix.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
