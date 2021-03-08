import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            auth: false,
            title: 'GitHub',
        },
    },
    {
        path: '/home',
        redirect: '/',
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            auth: false,
            title: 'About GitHub',
        },
    },
    {
        path: '/in-view',
        name: 'Inview',
        component: () => import('../components/InView.vue'),
        meta: {
            auth: false,
            title: 'Under construction',
        },
    },
    {
        path: '/not-available',
        name: 'NotAvailable',
        component: () => import('../components/NotAvailable.vue'),
        meta: {
            auth: false,
            title: 'Not available',
        },
    },
    {
        // path: '/:username(/^/MubarakSULAYMAN$/)',
        path: '/:username',
        name: 'Users',
        component: () => import('../views/pages/Users.vue'),
        // meta: {
        //     auth: false,
        //     title: ''
        // }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: () => import('../views/pages/PageNotFound.vue'),
    },
]

const router = new VueRouter({
    beforeEach(to, from, next) {
        if (to.meta.title) {
            window.document.title =
                to.meta && to.meta.title ? to.meta.title : 'GitHub Clone'

            next()
        }
    },

    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.resolve({
    name: 'PageNotFound',
    // params: { pathMatch: ['(/)MubarakSULAYMAN?tab=repositories(/)', ''] },
}).href

export default router
