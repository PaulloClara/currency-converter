<template lang="html">
  <div id="app" class="container is-fluid">
    <div id="fields" class="columns">
      <Field class="column" label="Real BRL" @input="changeValue" />
      <Field class="column" label="Dolar USD" @input="changeValue" />
      <Field class="column" label="Euro EUR" @input="changeValue" />
    </div>

    <div class="columns is-vcentered is-multiline">
      <div v-for="_coin of coinList" :key="_coin.name" class="column">
        <Card :coin="_coin" :brl="coin.value" />
      </div>
    </div>
  </div>
</template>

<script>
import Api from "./services/api";
import Card from "./components/Card";
import Field from "./components/Field";

export default {
  name: "App",
  components: {
    Card,
    Field
  },
  data() {
    return {
      coin: {
        brl: {
          value: "1",
          amount: ""
        },
        usd: {
          value: "",
          amount: ""
        },
        eur: {
          value: "",
          amount: ""
        },
        value: ""
      },
      coinList: []
    };
  },
  methods: {
    async getCoins() {
      const coins = (await Api.getAll()).data;

      Object.keys(coins).forEach(coinCode => {
        const coin = coins[coinCode];

        if (["USD", "EUR"].find(code => code === coinCode)) {
          const average = (parseFloat(coin.high) + parseFloat(coin.low)) / 2;
          this.coin[coinCode.toLowerCase()].value = average;
        }

        coin.low = parseFloat(coin.low.replace(",", "."));
        coin.high = parseFloat(coin.high.replace(",", "."));

        this.coinList.push(coin);
      });
    },
    changeValue({ value, code }) {
      this.coin[code].amount = value;

      this.coin.value = this.coin[code].amount * this.coin[code].value;
    }
  },
  created() {
    this.getCoins();
  }
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 12px;
}

#fields {
  margin: 0px 0px 30px 0px;

  border-radius: 6px;
  box-shadow: 0px 0px 6px 2px;
}
</style>
