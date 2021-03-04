<template>
    <div id="app">
        <the-nav />
        <router-view />
    </div>
</template>

<script>
import TheNav from '@/views/layouts/TheNav.vue'

export default {
    components: {
        TheNav,
    },
}
</script>

<style scoped></style>
