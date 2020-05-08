import Vue from "vue";

import App from "@/App";
import "@/global.css";

Vue.config.productionTip = false;

new Vue({
  render(h) {
    return h(App);
  }
}).$mount("#app");
