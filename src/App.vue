<template>
  <div id="app">
    <main-nav />
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/views/layouts/MainNav.vue"

export default {
  components: {
    MainNav
  }
}
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
