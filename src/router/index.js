import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logo from '../views/Logo.vue'
import About from '../views/About.vue'
import Rules from '../views/Rules.vue'
import Contact from '../views/Contact.vue'
import Games from '../views/Games.vue'
import Details from '../views/Details.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Logo',
    component: Logo
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Rules',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Info',
    name: 'Games',
    component: Games
  },
  {
    path: '/Details',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
