import Vue from 'vue';
import App from './App.vue';
import router from './router';
//----- Importes de Bootstrap-Vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//----- Importe de estilos CSS propios del proyecto
import './assets/css/main.css'; 

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
