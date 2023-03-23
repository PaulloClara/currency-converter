<script lang="ts" setup>
import { ref, watch } from "vue";
import { CoinT } from "@/services/awesomeapi";

import CurrencyInput from "@/components/CurrencyInput.vue";

const emits = defineEmits(["update:coin"]);
const props = defineProps<{ coin: CoinT; primaryValue: number }>();
const coinName = props.coin.name.split("/")?.[0] || props.coin.name;

const coinCardValue = ref(1 / props.coin.high);

function handleInput(event: any) {
  const value = event.target.value;
  const handledValue = value.replace(/[^0-9,]/g, "").replace(",", ".");
  const numberValue = parseFloat(handledValue);

  emits("update:coin", numberValue);
}

watch(
  () => props.primaryValue,
  (value) => (coinCardValue.value = value / props.coin.high)
);
watch([() => props.coin], () => {
  console.debug("oi");
});
</script>

<template>
  <section class="coin-card">
    <h3 class="coin-card-title">{{ coinName }}</h3>
    <div class="coin-card-value">
      <currency-input
        v-model="coinCardValue"
        :options="{ currency: coin.code }"
        @input="handleInput"
      />
      <span class="coin-card-value-code">{{ coin.code }}</span>
    </div>
  </section>
</template>

<style lang="scss">
.coin-card {
  padding: 1em 1.5em;
  border-radius: 8px;
  background-color: var(--primary-background-color);

  .coin-card-title {
    font-size: 1.2em;
    margin-bottom: 1em;
  }

  .coin-card-value {
    display: flex;
    align-items: center;
    color: var(--primary-text-color);
    font-size: 1em;
    font-weight: 600;
    cursor: default;
  }
}
</style>
