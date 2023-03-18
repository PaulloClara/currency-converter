<script lang="ts" setup>
import { CoinT } from "@/services/awesomeapi";

defineProps<{ coin: CoinT }>();
</script>

<template>
  <section class="coin-card">
    {{ coin }}
  </section>
</template>

<script lang="scss"></script>
