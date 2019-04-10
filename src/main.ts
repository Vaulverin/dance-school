import Vue from 'vue';
import './plugins/vuetify';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import App from '@/App.vue';

Vue.config.productionTip = false;

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
