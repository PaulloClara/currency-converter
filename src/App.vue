<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import CoinCard from "@/components/CoinCard.vue";
import SwitchTheme from "@/components/SwitchTheme.vue";
import CurrencyInput from "@/components/CurrencyInput.vue";

import awesomeapi, { CoinListT, CoinT } from "@/services/awesomeapi";

const SUPPORTED_COIN_CODES = [
  ...["BRL", "USD", "EUR", "ARS", "CNY"],
  ...["JPY", "CHF", "BTC", "ETH"],
];
const SUPPORTED_ROOT_COIN_CODES = ["BRL", "USD", "EUR"];

const selectedCode = ref("BRL");
const coinCodes = computed(() =>
  SUPPORTED_COIN_CODES.filter((code) => code !== selectedCode.value)
);
const formattedCodes = computed(() =>
  coinCodes.value.map((code) => `${code}-${selectedCode.value}`)
);
const primaryValue = ref(1);

const coinList = ref<CoinListT>({});
const isDarkTheme = ref(localStorage.getItem("THEME") === "dark");

const socialLinks = [
  {
    link: "https://github.com/PaulloClara",
    icon: "fa-brands fa-github",
  },
  {
    link: "https://www.linkedin.com/in/paulloclara/",
    icon: "fa-brands fa-linkedin",
  },
  {
    link: "https://t.me/paulloclara",
    icon: "fa-brands fa-telegram",
  },
  {
    link: "https://wa.me/5586988000821",
    icon: "fa-brands fa-whatsapp",
  },
];

function handleSelectCoinCode(event: any) {
  selectedCode.value = event.target.value;
}

function handleCoinUpdate(value: number, coin: CoinT) {
  primaryValue.value = value * coin.high;
}

async function getCoins() {
  const { coins } = await awesomeapi.getAll({ codes: formattedCodes.value });
  coinList.value = coins || {};
}

function setThemeInBody() {
  if (isDarkTheme.value)
    document.querySelector("body")?.classList.add("is-dark");
  else document.querySelector("body")?.classList.remove("is-dark");
}

watch(selectedCode, getCoins);
watch(isDarkTheme, setThemeInBody);

setThemeInBody();
getCoins();
</script>

<template>
  <div class="app-page">
    <header class="app-header">
      <div class="app-header-general-input">
        <currency-input v-model="primaryValue" autofocus />
        <select class="app-header-select" @change="handleSelectCoinCode">
          <option
            v-for="code of SUPPORTED_ROOT_COIN_CODES"
            :key="code"
            :value="code"
          >
            {{ code }}
          </option>
        </select>
      </div>
    </header>
    <main class="app-content">
      <div class="app-coin-cards">
        <coin-card
          v-for="coin of coinList"
          :key="coin.code"
          :coin="coin"
          :primary-value="primaryValue || 0"
          @update:coin="(value) => handleCoinUpdate(value, coin)"
        />
      </div>
    </main>
    <footer class="app-footer">
      <ul class="app-footer-social-links">
        <li v-for="(socialLink, index) of socialLinks" :key="index">
          <a
            class="app-footer-social-link"
            :href="socialLink.link"
            target="_blank"
          >
            <i :class="socialLink.icon"></i>
          </a>
        </li>
      </ul>
    </footer>
    <switch-theme
      :is-dark-theme="isDarkTheme"
      @switch-theme="(value) => (isDarkTheme = value)"
    />
  </div>
</template>

<style lang="scss">
.app-page {
  gap: 2em;
  padding: 2em;

  .app-header {
    width: 100%;
    max-width: 520px;
    margin-bottom: 2em;
    padding: 1em 1.5em;
    border-radius: 8px;
    background-color: var(--primary-background-color);

    .app-header-general-input {
      display: flex;
      overflow: hidden;
      border-radius: 8px;

      .app-header-select {
        border: none;
        outline: none;
        background-color: transparent;
        color: var(--primary-text-color);
        font-size: 1em;
        font-weight: 600;

        option {
          color: var(--primary-text-color);
          background-color: var(--primary-background-color);
        }
      }
    }
  }

  .app-content {
    width: 100%;
    max-width: 520px;

    .app-coin-cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1em;
    }
  }

  .app-footer {
    margin-top: 2em;

    .app-footer-social-links {
      display: flex;
      justify-content: center;
      gap: 20px;

      li {
        list-style: none;
      }

      .app-footer-social-link {
        color: var(--primary-text-color);
        font-size: 1.75em;
        text-decoration: none;
        transition: all 0.2s;

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  &.is-dark {
    .app-switch-theme {
      background-color: #fff3;
    }
  }
}
</style>
