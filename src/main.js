import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.css'
import './assets/fonts/Helvetica/Helvetica.css'
import detectDeviceMixin from './mixins/detectDeviceMixin'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.mixin(detectDeviceMixin)
Vue.use(VueMeta)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
