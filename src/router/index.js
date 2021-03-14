import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/pages/Users.vue'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

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
        path: '/not-available',
        name: 'NotAvailable',
        component: () => import('../components/NotAvailable.vue'),
    },

    {
        // path: '/:username(/^/MubarakSULAYMAN$/)',
        path: '/:username',
        name: 'Users',
        component: Users,
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
    // params: { pathMatch: ['(/)MubarakSULAYMAN?tab=repositories(/)', ''] },
}).href

export default router
