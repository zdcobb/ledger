import { createRouter, createWebHistory } from 'vue-router';

import home from './views/Home';
import login from './views/Login';
import page from './views/Page';

export default new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', component: home },
        { path: '/login', component: login },
        { path: '/page', component: page }
    ]
});
