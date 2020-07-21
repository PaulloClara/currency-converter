<template lang="html">
  <figure class="c-icon">
    <img class="img" :src="getImage()" @load="SVGInject($event.target)" />

    <figcaption v-if="$props.text" class="text">
      <slot name="default"></slot>
    </figcaption>
  </figure>
</template>

<script>
import SVGInject from "@iconfu/svg-inject";

export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    SVGInject,
    getImage() {
      return require(`@/assets/${this.$props.name}.svg`);
    },
  },
};
</script>

<style lang="css">
.c-icon {
  display: flex;
}

.c-icon .img {
  height: 1.2rem;
}

.c-icon .text {
  color: #fff;
  margin-left: 6px;
}
</style>
