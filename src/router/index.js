import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import StudentDashboard from '../views/StudentDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/contents',
    name: 'contents',
    component: StudentDashboard
  },
  {
    path: '/Admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
