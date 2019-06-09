<template>
  <div class="column is-one-quarter">
    <div class="card">
      <div class="card-header">
        <h1 class="card-header-title is-centered">{{ coin.name }}</h1>
      </div>
      <div class="card-content">
        <label>{{ coin.code }} {{ calcBRCoin() }}</label>
        <input class="input is-rounded" type="number" placeholder="BRL" v-model="inputBRL">
        <br><br><br>
        <label>BRL {{ calcCoinBR() }}</label>
        <input class="input is-rounded" type="number" :placeholder="coin.code" v-model="inputCoin">
      </div>
      <div class="card-footer">
        <label class="card-footer-item">{{ coin.date }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    coin: {},
  },
  data() {
    return{
      inputCoin: '',
      inputBRL: '',
    };
  },
  methods: {
    calcBRCoin() {
      return (this.inputBRL / this.coin.value).toFixed(2);
    },
    calcCoinBR() {
      return (this.inputCoin * this.coin.value).toFixed(2);
    },
  },
  mounted() {
    this.coin.value = this.coin.value.replace(',', '.');
  }
};
</script>
