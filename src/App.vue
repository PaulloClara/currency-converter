<template>
<div class="container" id="app">
  <div class="columns is-multiline is-vcentered">
    <Card v-for="coinInfo in listCoinInfos" :key="coinInfo.name" :coin="coinInfo" />
  </div>
</div>
</template>

<script>
import api from './services/api'
import Card from './components/Card.vue'

export default {
  name: 'app',
  data(){
    return {
      listCoinInfos: {},
    }
  },
  components: {
    Card
  },
  mounted(){
    api().then(response => {this.listCoinInfos = response })
  },
}
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
