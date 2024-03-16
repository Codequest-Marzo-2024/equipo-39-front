import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import login from '../views/login.vue';
import homeView from '../views/HomeView.vue';
import chooseView from '../views/ChooseView.vue';
import registerView from '../views/RegisterView.vue';

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
    {
        path: '/chooseView',
        name: 'chooseView',
        component: chooseView
    },
    {
        path: '/registerView',
        name: 'registerView',
        component: registerView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;