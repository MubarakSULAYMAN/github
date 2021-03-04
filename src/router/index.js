import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/home',
        redirect: '/',
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/in-view',
        name: 'Inview',
        component: () => import('../components/InView.vue'),
    },
    {
        // path: '/:username(/^/MubarakSULAYMAN$/)',
        path: '/MubarakSULAYMAN',
        name: 'Users',
        component: () => import('../views/pages/Users.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: () => import('../views/pages/PageNotFound.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.resolve({
    name: 'PageNotFound',
    params: { pathMatch: ['(/)MubarakSULAYMAN?tab=repositories(/)', ''] },
}).href

export default router
