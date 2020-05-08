<template>
  <section class="c-card">
    <header class="header">
      <h3 class="title">{{ coin.name }}</h3>
      <hr class="divider" />
    </header>

    <main class="content">
      <c-field v-model="value" :newValue="newValue">
        Valor em {{ coin.code }}
      </c-field>

      <aside class="details">
        <figure class="line">
          <img
            class="icon"
            src="@/assets/up.svg"
            @load="SVGInject($event.target)"
          />
          <span class="result">
            {{
              Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(coinHigh)
            }}
          </span>
        </figure>

        <figure class="line">
          <img
            class="icon"
            src="@/assets/down.svg"
            @load="SVGInject($event.target)"
          />
          <span class="result">
            {{
              Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(coinLow)
            }}
          </span>
        </figure>

        <figure class="line">
          <img
            class="icon"
            src="@/assets/variation.svg"
            @load="SVGInject($event.target)"
          />
          <span class="result">
            {{
              Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(coinDiff)
            }}
          </span>
        </figure>
      </aside>
    </main>

    <footer class="footer">
      <hr class="divider" />

      <p class="date">{{ coin.create_date }}</p>
    </footer>
  </section>
</template>

<script>
import Field from "@/components/Field";
import SVGInject from "@iconfu/svg-inject";

export default {
  name: "Card",
  components: {
    "c-field": Field
  },
  props: {
    coin: {
      type: Object,
      required: true
    },
    brl: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      value: "",
      newValue: ""
    };
  },
  computed: {
    coinHigh() {
      return (this.value * this.coin.high).toFixed(2);
    },
    coinLow() {
      return (this.value * this.coin.low).toFixed(2);
    },
    coinDiff() {
      return (this.value * (this.coin.high - this.coin.low)).toFixed(2);
    }
  },
  watch: {
    brl(value) {
      this.value = (value / this.coin.medium).toFixed(2);
      this.newValue = this.value;
    }
  },
  methods: {
    SVGInject
  }
};
</script>

<style lang="css" scoped>
.c-card {
  color: #fff;

  width: 100%;
  min-width: 280px;

  border-radius: 4px;

  transition: box-shadow 0.4s;

  box-shadow: inset 0 0 6px 1px #0004;
  background-color: var(--bitcoin);
}

.c-card:hover {
  box-shadow: inset 0 0 12px 2px #0004;
}

.title {
  padding: 12px;

  text-align: center;
  text-shadow: 0 0 4px #000;

  color: #fff;
  font: bold 20px caption;
}

.divider {
  height: 1px;
  background-color: #0004;

  border-radius: 50%;
}

.content {
  padding: 24px;

  font: normal 18px small-caption;
  text-shadow: 0 0 2px #000;
}

.details {
  margin-top: 22px;
}

.result {
  margin-left: 12px;
}

.footer {
  text-align: center;
}

.date {
  padding: 12px 0;
}
</style>
