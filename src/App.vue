<template>
    <div id="app">
        <the-nav
            v-if="
                matchCheck(false, false, false) || matchCheck(false, true, true)
            "
        />
        <router-view />
    </div>
</template>

<script>
import TheNav from '@/views/layouts/TheNav.vue'
import { mapState } from 'vuex'

export default {
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
    },

    //     // register, i.e. in a `mounted` hook
    // window.addEventListener('unload', this.someMethod)

    // // register, i.e. in a `beforeDestroy` hook
    // window.removeEventListener('unload', this.someMethod)
}
</script>

<style scoped></style>
