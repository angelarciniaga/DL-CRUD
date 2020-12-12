import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import firebase from 'firebase';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { firebaseConfig } from "./config/firebaseConfig";

firebase.initializeApp(firebaseConfig);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//inicialización de Firebase 
export const db = firebase.firestore();
export const colecion = db.collection('usuarios')

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
