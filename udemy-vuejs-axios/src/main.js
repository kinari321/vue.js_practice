import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
// import { config } from 'vue/types/umd';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/vuejs-http-d7b52/databases/(default)/documents';

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);
axios.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error),
);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
