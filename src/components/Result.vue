<template lang="html">
  <figure class="c-result">
    <img class="icon" :src="getImage()" @load="SVGInject($event.target)" />
    <span class="text">
      {{
        Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format($props.value)
      }}
    </span>
  </figure>
</template>

<script>
import SVGInject from "@iconfu/svg-inject";

export default {
  name: "Result",
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    SVGInject,
    getImage() {
      return require(`@/assets/${this.$props.icon}.svg`);
    }
  }
};
</script>

<style lang="css" scoped>
.text {
  margin-left: 6px;
}
</style>
