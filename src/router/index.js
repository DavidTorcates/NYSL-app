import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logo from '../views/Logo.vue'
import About from '../views/About.vue'
import Rules from '../views/Rules.vue'
import Contact from '../views/Contact.vue'
import Games from '../views/Games.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Welcome',
    name: 'Logo',
    component: Logo
  },
  {
    path: '/About',
    name: 'Sobre Nosotros',
    component: About
  },
  {
    path: '/Home',
    name: 'Inicio',
    component: Home
  },
  {
    path: '/Rules',
    name: 'Reglas y Políticas',
    component: Rules
  },
  {
    path: '/Contact',
    name: 'Contacto',
    component: Contact
  },
  {
    path: '/Info',
    name: 'Información de Juegos',
    component: Games
  },
  {
    path: '/',
    name: 'Logo',
    component: Logo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
