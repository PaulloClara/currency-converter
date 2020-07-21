<template lang="html">
  <div id="app">
    <header class="appbar" :data-appbar-animation="$data.appbar.animation">
      <c-field
        v-model="$data.brl"
        :autofocus="true"
        @blur="updateAppbarAnimation({ status: false })"
        @focus="updateAppbarAnimation({ status: true })"
      >
        <template #prefix>R$</template>
        Real BRL
      </c-field>
      <c-field
        v-model="$data.usd"
        @blur="updateAppbarAnimation({ status: false })"
        @focus="updateAppbarAnimation({ status: true })"
      >
        <template #prefix>$</template>
        Dolar USD
      </c-field>
      <c-field
        v-model="$data.eur"
        @blur="updateAppbarAnimation({ status: false })"
        @focus="updateAppbarAnimation({ status: true })"
      >
        <template #prefix>€</template>
        Euro EUR
      </c-field>
    </header>

    <main class="content">
      <c-card
        v-for="(coin, index) of $data.coins"
        :key="index"
        :coin="coin"
        :brl="brl"
      ></c-card>
    </main>
  </div>
</template>

<script>
import awesomeApi from "@/services/awesomeapi";

import Card from "@/components/Card";
import Field from "@/components/Field";

export default {
  name: "App",
  components: {
    "c-card": Card,
    "c-field": Field,
  },
  data: () => ({
    brl: 0,
    usd: 0,
    eur: 0,
    coins: {},
    appbar: {
      animation: false,
    },
  }),
  watch: {
    usd(value) {
      this.$data.brl = value * this.$data.coins.usd.medium;
    },
    eur(value) {
      this.$data.brl = value * this.$data.coins.eur.medium;
    },
  },
  methods: {
    updateAppbarAnimation({ status }) {
      this.$data.appbar.animation = status;
    },
    async getCoins() {
      this.$data.coins = await awesomeApi.all();
    },
  },
  mounted() {
    this.getCoins();
  },
};
</script>

<style lang="css">
#app {
  font-size: 16px;
  font-family: "Poppins", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app > .appbar {
  display: flex;
  justify-content: space-around;

  width: 100%;
  padding: 12px;

  z-index: 12;
  position: fixed;

  background-color: var(--bg-secondary);
}

#app > .appbar::before {
  content: "";
  position: absolute;

  width: 100%;
  height: 2px;

  bottom: 0;
  filter: blur(1px);
  animation: appbar-animation 16s linear infinite paused;

  background-image: linear-gradient(45deg, #89ff00, var(--bg-primary), #00bcd4);
}

#app > .appbar[data-appbar-animation="true"]::before {
  animation-play-state: running;
}

#app > .appbar .c-field {
  max-width: 280px;
}

#app > .appbar .c-field + .c-field {
  margin-left: 12px;
}

#app > .content {
  display: flex;

  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  padding: 120px 48px 48px;
}

#app > .content .c-card {
  margin: 12px;
}

@keyframes appbar-animation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

@media only screen and (max-width: 800px) {
  #app > .content {
    padding-left: 12px;
    padding-right: 12px;
  }
}

@media only screen and (max-width: 480px) {
  #app > .appbar {
    flex-wrap: wrap;
  }

  #app > .appbar .c-field {
    width: 160px;
  }

  #app > .appbar .c-field + .c-field {
    margin: 6px 0 0;
  }

  #app > .content {
    padding: 172px 8px;
  }

  #app > .content .c-card {
    width: 100%;
  }
}

@media only screen and (max-width: 360px) {
  #app > .content {
    padding-left: 0;
    padding-right: 0;
  }

  #app > .appbar .c-field {
    width: 100%;
  }
}
</style>
