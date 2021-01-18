import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logo from '../views/Logo.vue'
import About from '../views/About.vue'
import Rules from '../views/Rules.vue'
import Contact from '../views/Contact.vue'
import Games from '../views/Games.vue'
import ChatRoom from '../views/ChatRoom.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const router = new VueRouter({
  mode : 'history',
  routes: [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'Logo',
    component: Logo
  },
  {
    path: '/About',
    name: 'Sobre Nosotros',
    component: About,
    meta: {
      autentication: true
  }
  },
  {
    path: '/ChatRoom',
    name: 'Chat Room',
    component: ChatRoom,
    meta: {
      autentication: true
  }
  },
  {
    path: '/Home',
    name: 'Inicio',
    component: Home,
    meta: {
      autentication: true
  }
  },
  {
    path: '/Rules',
    name: 'Reglas y Políticas',
    component: Rules,
    meta: {
      autentication: true
  }
  },
  {
    path: '/Contact',
    name: 'Contacto',
    component: Contact,
    meta: {
      autentication: true
  }
  },
  {
    path: '/Info',
    name: 'Información de Juegos',
    component: Games,
    meta: {
      autentication: true
  }
  }
]
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let autentication = to.matched.some(record => record.meta.autentication);
  if (autentication){
    if(!user){
      next('/');
    }
    else{
      next();
    }
  }else{next();}
})

export default router
