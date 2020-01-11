<template>
  <div class="container is-fluid" id="app">
    <div id="cardInputReal" class="card">
      <div class="card-header">
        <h1 class="card-header-title is-centered">Real Brasileiro</h1>
      </div>
      <div class="card-content">
        <money v-model="real" class="input is-primary is-rounded" />
      </div>
    </div>
    <div class="columns is-vcentered is-multiline">
      <div v-for="coin of coins" :key="coin.name" class="column">
        <Card :coin="coin" :real="real" />
      </div>
    </div>
  </div>
</template>

<script>
import Api from "./services/api";
import Card from "./components/Card";

export default {
  name: "App",
  components: {
    Card
  },
  data() {
    return {
      coins: [],
      real: "",
      show: false
    };
  },
  methods: {
    async getCoins() {
      const res = (await Api.getAll()).data;
      for (const coinCode in res) {
        const coin = res[coinCode];
        if (coin.code === "BTC") {
          coin.high = coin.high.replace(/\./g, "");
          coin.low = coin.low.replace(/\./g, "");
        }
        coin.high = parseFloat(coin.high.replace(",", "."));
        coin.low = parseFloat(coin.low.replace(",", "."));
        this.coins.push(coin);
      }
    }
  },
  mounted() {
    this.getCoins();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-right: 20px;
  margin-left: 20px;
  padding-top: 20px;
}
#cardInputReal {
  margin-bottom: 20px;
}
body {
  background-color: #9c9c9c;
}
</style>
