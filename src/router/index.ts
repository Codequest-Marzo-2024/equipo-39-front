import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import login from '../views/login.vue';
import homeView from '../views/HomeView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/homeView',
        name: 'homeView',
        component: homeView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;