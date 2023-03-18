<script lang="ts" setup>
import { ref } from "vue";

import CoinCard from "@/components/CoinCard.vue";
import awesomeapi, { CoinListT } from "@/services/awesomeapi";

const coinList = ref<CoinListT>({});

async function getCoins() {
  const { coins } = await awesomeapi.getAll();
  coinList.value = coins || {};
}

getCoins();
</script>

<template>
  <div class="app-page">
    <header class="app-header"></header>
    <main class="app-content">
      <div class="app-coin-cards">
        <template v-for="coin of coinList" :key="coin.code">
          <coin-card :coin="coin" />
        </template>
      </div>
    </main>
    <footer class="app-footer"></footer>
  </div>
</template>

<style lang="scss">
.app-page {
  min-height: 100vh;
}
</style>
