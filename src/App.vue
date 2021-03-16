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
        title: 'Github',
        // titleTemplate: `%s | ${this.username}`,
    },

    components: {
        TheNav,
    },

    methods: {
        //     doCommand(e) {
        // 	// let cmd = String.fromCharCode(e.keyCode).toLowerCase();
        // 	// do stuff
        //     if (e.key === 's') {
        //             e.preventDefault()
        //             // this.$nextTick(() => this.$refs.search.$el.focus())
        //             // this.$nextTick(() => this.$refs.search.focus())
        //             this.$refs.searchInput.focus()
        //             // this.$refs.search.$el.focus()
        //         }
        // },

        // _focusNavSearch(e) {
        //     // if (e.key === 's ' && (e.ctrlKey || e.metaKey)) {
        //     if (e.key === 's') {
        //         e.preventDefault()
        //         this.$nextTick(() => this.$refs.search.$el.focus())
        //         // this.$nextTick(() => this.$refs.search.focus())
        //         // this.$refs.search.focus()
        //         // this.$refs.search.$el.focus()
        //     }
        // },

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

        ...mapState(
            { username: state => state.user.username },
            { page: state => state.user.page },
        ),
    },

    mounted() {
        // window.addEventListener('keypress', this._focusNavSearch())
        window.addEventListener('keypress', e => {
            console.log(String.fromCharCode(e.keyCode))
        })

        if (localStorage.username) {
            this.$store.commit('UPDATE_USERNAME', localStorage.username)
        }
    },

    // created() {
    //     window.addEventListener('keypress', this.doCommand)
    // },
    // destroyed() {
    //     window.removeEventListener('keypress', this.doCommand)
    // },

    watch: {
        username(newName) {
            localStorage.username = newName
        },

        page(newPage) {
            localStorage.page = newPage
        },
    },

    beforeDestroy() {
        // window.removeEventListener('keypress', this._focusNavSearch())
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
