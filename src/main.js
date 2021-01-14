import Vue from 'vue';
import App from './App.vue';
import router from './router';
//------ Importar firebase
import firebase from 'firebase'
//----- Importes de Bootstrap-Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//------ Importe de Store
import store from './store'
//----- Importe de estilos CSS propios del proyecto
import './assets/css/main.css';
//------ Importe de efectos de JS para menu hamburguesa

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

var firebaseConfig = {
  apiKey: "AIzaSyBAOa9CNWCZ1CH-AfPHt5EBi7eHbb88n1w",
  authDomain: "nysl-bootstrap-vue.firebaseapp.com",
  projectId: "nysl-bootstrap-vue",
  storageBucket: "nysl-bootstrap-vue.appspot.com",
  messagingSenderId: "76570529386",
  appId: "1:76570529386:web:f522f887de633521088413",
  measurementId: "G-VVXHCBZ7PD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function () {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});