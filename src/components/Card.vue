<template>
<div class="card">
  <div class="card-header">
    <h1 class="card-header-title is-centered">{{ coin.name }}</h1>
  </div>
  <div class="card-content">
    <p>{{ coin.code }} {{ (inputBRL / coin.value).toFixed(2) }}</p>
    <input class="input is-rounded" type="number" placeholder="BRL" v-model="inputBRL">
    <br><br><br>
    <p>BRL {{ (coin.value * inputCoin).toFixed(2) }}</p>
    <input class="input is-rounded" type="number" :placeholder="coin.code" v-model="inputCoin">
  </div>
  <div class="card-footer">
    <p class="card-footer-item">{{ coin.date }}</p>
  </div>
</div>
</template>


<script>
export default {
  name: 'Card',
  props: {
    coin: {}
  },
  data(){
    return{
      inputCoin: '',
      inputBRL: '',
    }
  },
}
</script>
