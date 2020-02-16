import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.config.keyCodes = {
  number: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
