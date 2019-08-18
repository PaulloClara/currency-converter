<template>
  <div class="card minWidth">
    <div class="card-header">
      <h3 class="card-header-title is-centered">{{ coin.name }}</h3>
    </div>
    <div class="card-content">
      <label class="label">Valor em {{ coin.code }}</label>
      <money v-model="coinInput" class="input is-rounded is-primary" />
      <div class="marginTop">
        <p>Alta: {{ calcCoinBRL(coin.high) }} BRL</p>
        <p>Baixa: {{ calcCoinBRL(coin.low) }} BRL</p>
        <p>Variaçao: {{ calcCoinBRL(coin.high - coin.low) }} BRL</p>
      </div>
    </div>
    <div class="card-footer">
      <label class="card-footer-item">{{ coin.create_date }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    coin: Object,
    real: Number,
  },
  data() {
    return {
      coinInput: '',
    };
  },
  watch: {
    real(value) {
      this.coinInput = this.calcBRLCoin(value);
    },
  },
  methods: {
    calcBRLCoin(value) {
      return (value / ((this.coin.high + this.coin.low) / 2)).toFixed(2);
    },
    calcCoinBRL(value) {
      return (this.coinInput * value).toFixed(2);
    },
  },
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
