import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthenticateView from '../views/authenticateView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'authenticateView',
    component: AuthenticateView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
