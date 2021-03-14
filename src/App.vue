<template>
    <div id="app">
        <the-nav />
        <router-view />
        <!-- v-if="
                matchCheck(false, false, false) || matchCheck(false, true, true)
            " -->
    </div>
</template>

<script>
import TheNav from '@/views/layouts/TheNav.vue'
import { mapState } from 'vuex'

export default {
    name: 'App',
    metaInfo: {
        title: 'Default App Title',
        titleTemplate: '%s | vue-meta Example App',
    },
    components: {
        TheNav,
    },

    methods: {
        matchCheck(r, p, ue) {
            return (
                this.requesting === r &&
                this.presenting === p &&
                this.user_exist === ue
            )
        },

        // someMethod(event) {
        //     // do something to let the user decide
        //     // then redirect if necessary
        //     this.$router.push('/')
        // },
    },

    computed: {
        ...mapState(['requesting', 'presenting', 'user_exist']),

        ...mapState({ username: state => state.user.username }),
    },

    // mounted() {
    //     this.username = JSON.parse(localStorage.getItem('username')) || ''
    // },

    // watch: {
    //     username(newValue, oldValue) {
    //         // if (isLocalStorage()) {
    //         localStorage.setItem('username', JSON.stringify(newValue))
    //         // }
    //     },
    // },

    //     // register, i.e. in a `mounted` hook
    // window.addEventListener('unload', this.someMethod)

    // // register, i.e. in a `beforeDestroy` hook
    // window.removeEventListener('unload', this.someMethod),

    // created() {
    //     return [this.$store.dispatch('fetchUsers')]
    // },
}
</script>

<style scoped></style>
