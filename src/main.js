import Vue from 'vue';
import money from 'v-money';
import App from './App.vue';
import '../node_modules/bulma/css/bulma.min.css';

Vue.use(money, {precision: 2});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
