import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/main.css";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    deviceType() {
      const ua = navigator.userAgent;

      if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        return "mobile";
      } else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      } else return "desktop";
    },
  },

  created() {
    return this.deviceType;
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
