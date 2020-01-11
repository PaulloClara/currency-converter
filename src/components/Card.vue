<template>
  <div class="card minWidth">
    <div class="card-header">
      <h3 class="card-header-title is-centered">{{ coin.name }}</h3>
    </div>

    <div class="card-content">
      <label class="label">Valor em {{ coin.code }}</label>

      <money v-model="amountOfCoins" class="input is-rounded is-primary" />

      <div class="marginTop">
        <p>Alta: {{ coinHigh }} BRL</p>
        <p>Baixa: {{ coinLow }} BRL</p>
        <p>Variaçao: {{ coinDiff }} BRL</p>
      </div>
    </div>

    <div class="card-footer">
      <label class="card-footer-item">{{ coin.create_date }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["coin", "brl"],
  data() {
    return {
      amountOfCoins: ""
    };
  },
  computed: {
    coinHigh() {
      return (this.amountOfCoins * this.coin.high).toFixed(2);
    },
    coinLow() {
      return (this.amountOfCoins * this.coin.low).toFixed(2);
    },
    coinDiff() {
      return (this.amountOfCoins * (this.coin.high - this.coin.low)).toFixed(2);
    }
  },
  watch: {
    brl(value) {
      const average = (this.coin.high + this.coin.low) / 2;
      this.amountOfCoins = (value / average).toFixed(2);
    }
  }
};
</script>

<style>
.minWidth {
  min-width: 200px;
}
.marginTop {
  margin-top: 20px;
}
</style>
