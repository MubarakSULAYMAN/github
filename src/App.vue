<template>
    <div id="app">
        <the-nav v-if="requesting === false && presenting === true" />
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

    computed: {
        ...mapState(['requesting', 'presenting']),
    },
}
</script>

<style scoped></style>
