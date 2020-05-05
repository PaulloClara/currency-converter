import Vue from "vue";
import Money from "v-money";

import App from "@/App";
import "../node_modules/bulma/css/bulma.min.css";

Vue.use(Money, { precision: 2 });
Vue.config.productionTip = false;

new Vue({
  render(h) {
    return h(App);
  }
}).$mount("#app");
