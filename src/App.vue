<template>
    <div id="app">
        <the-nav />
        <router-view />
    </div>
</template>

<script>
import TheNav from '@/views/layouts/TheNav.vue'
import { mapState } from 'vuex'

export default {
    name: 'App',
    metaInfo: {
        title: 'Github',
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
    },

    computed: {
        ...mapState(['requesting', 'presenting', 'user_exist']),

        ...mapState(
            { username: state => state.user.username },
            { page: state => state.user.page },
        ),
    },

    mounted() {
        // // show key pressed by user
        // window.addEventListener('keypress', e => {
        //     console.log(String.fromCharCode(e.keyCode))
        // })

        if (localStorage.username) {
            this.$store.commit('UPDATE_USERNAME', localStorage.username)
        }
    },

    watch: {
        username(newName) {
            localStorage.username = newName
        },

        page(newPage) {
            localStorage.page = newPage
        },
    },
}
</script>

<style scoped></style>
