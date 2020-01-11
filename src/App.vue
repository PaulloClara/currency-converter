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
          amount: "",
          value: "1"
        },
        usd: {
          amount: "",
          value: ""
        },
        eur: {
          amount: "",
          value: ""
        },
        value: ""
      },
      coinList: [],
      show: false
    };
  },
  methods: {
    async getCoins() {
      const res = (await Api.getAll()).data;

      for (const coinCode in res) {
        const coin = res[coinCode];

        if (["USD", "EUR"].find(code => code === coinCode)) {
          const average = (parseFloat(coin.high) + parseFloat(coin.low)) / 2;
          this.coin[coinCode.toLowerCase()].value = average;
        }

        if (coin.code === "BTC") {
          coin.low = coin.low.replace(/\./g, "");
          coin.high = coin.high.replace(/\./g, "");
        }

        coin.low = parseFloat(coin.low.replace(",", "."));
        coin.high = parseFloat(coin.high.replace(",", "."));

        this.coinList.push(coin);
      }
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
#cardInputReal {
  margin: 20px;
}

#fields {
  margin: 20px;
}
</style>
