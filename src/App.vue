<template>
  <div class="container" id="app">
    <div class="columns is-multiline is-centered">
      <Card v-for="coinInfo in listCoinInfos" :key="coinInfo.name" :coin="coinInfo" />
    </div>
    <div>
      <br/>
      <button class="button" @click="show=!show">Mostrar Os Dados</button>
    </div>
    <div class="footer">
      <p v-show="show">{{ listCoinInfos }}</p>
    </div>
  </div>
</template>

<script>
import api from './services/api'
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card,
  },
  data(){
    return {
      listCoinInfos: {},
      show: false,
    };
  },
  methods: {
    refine(res) {
      const coins = [];
      for (const coin in res) {
        const { code, name, low: value, create_date: date } = res[coin];
        coins.push({ code, name, value, date });
      }
      return coins;
    }
  },
  async mounted() {
    const res = (await api()).data;
    this.listCoinInfos = this.refine(res)

  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
}
</style>
