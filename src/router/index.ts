import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import isAuthenticatedGuard from './guards/isAuthenticatedGuard';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'auth',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/login.vue'),
      },
    ],
  },
  {
    path: '/',
    beforeEnter: [isAuthenticatedGuard],
    redirect: { name: 'homeView' },
    children: [
      {
        path: 'raffles',
        name: 'homeView',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'raffle/:raffleId/detail',
        name: 'detailView',
        component: () => import('../views/DetailView.vue'),
      },
      {
        path: 'raffle/:raffleId/draw',
        name: 'chooseView',
        component: () => import('../views/ChooseView.vue'),
      },
      {
        path: 'raffle/create',
        name: 'CreateView',
        component: () => import('../views/CreateView.vue'),
      },
    ],
  },
  {
    path: '/registerView',
    name: 'registerView',
    component: () => import('../views/RegisterView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
