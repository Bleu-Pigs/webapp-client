import Vue from 'vue';
import VueRouter from 'vue-router';

import AuthenticateView from '@/views/authenticate/AuthenticateView.vue';
import AuthenticateViewHome from '@/views/authenticate/routes/AuthenticateViewHome.vue';
import AuthenticateViewPluginDownload from '@/views/authenticate/routes/AuthenticateViewPluginDownload.vue';
import AuthenticateViewDiscord from "@/views/authenticate/routes/AuthenticateViewDiscord.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: AuthenticateView,
    children: [
      {
        path: '',
        component: AuthenticateViewHome,
        name: "AuthenticateViewHome"
      },
      {
        path: '1',
        component: AuthenticateViewDiscord,
        name: "AuthenticateViewDiscord"
      },
      {
        path: '2',
        component: AuthenticateViewPluginDownload,
        name: "AuthenticateViewPluginDownload"
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
