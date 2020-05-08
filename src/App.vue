<template lang="html">
  <div id="app">
    <header class="header">
      <c-field v-model="$data.brl">Real BRL</c-field>
      <c-field v-model="$data.usd">Dolar USD</c-field>
      <c-field v-model="$data.eur">Euro EUR</c-field>
    </header>

    <main class="content">
      <c-card
        v-for="(coin, index) of coins"
        :key="index"
        :coin="coin"
        :brl="brl"
      ></c-card>
    </main>

    <footer class="footer"></footer>
  </div>
</template>

<script>
import Api from "@/services/api";

import Card from "@/components/Card";
import Field from "@/components/Field";

export default {
  name: "App",
  components: {
    "c-card": Card,
    "c-field": Field
  },
  data() {
    return {
      brl: 0,
      usd: 0,
      eur: 0,
      coins: [],
      masterCoins: {}
    };
  },
  watch: {
    usd(value) {
      this.$data.brl = value * this.$data.masterCoins.USD.medium;
    },
    eur(value) {
      this.$data.brl = value * this.$data.masterCoins.EUR.medium;
    }
  },
  methods: {
    async getCoinsInfos() {
      const { coins, masterCoins } = await Api.getAll();

      this.$data.coins = coins;
      this.$data.masterCoins = masterCoins;
    }
  },
  mounted() {
    this.getCoinsInfos();
  }
};
</script>

<style lang="css" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: var(--gold);
}

.header {
  display: flex;
  justify-content: space-around;

  margin: 0 0 24px;
  padding: 12px;

  box-shadow: inset 2px -1px 4px #0004;
  background-color: var(--bitcoin);
}

.c-field {
  width: 32%;
  max-width: 280px;
}

.content {
  display: grid;

  grid-gap: 12px;
  grid-template-columns: repeat(8, 1fr);

  padding: 0 80px;
}

@media only screen and (max-width: 2580px) {
  .content {
    grid-template-columns: repeat(7, 1fr);
  }
}

@media only screen and (max-width: 2180px) {
  .content {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media only screen and (max-width: 1920px) {
  .content {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media only screen and (max-width: 1620px) {
  .content {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media only screen and (max-width: 1366px) {
  .content {
    padding: 0 24px;
  }
}

@media only screen and (max-width: 1280px) {
  .content {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 940px) {
  .content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 640px) {
  .content {
    padding: 0 12px;
  }
}

@media only screen and (max-width: 600px) {
  .content {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 480px) {
  .header {
    flex-direction: column;
  }

  .c-field {
    width: 100%;
    max-width: unset;
  }
}
</style>
